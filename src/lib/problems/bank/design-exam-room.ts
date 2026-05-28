import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-exam-room',
  title: 'Exam Room',
  difficulty: 'medium',
  tags: ['simulation', 'arrays', 'binary-search'],
  description: `There is an exam room with \`n\` seats in a single row, numbered \`0\` to \`n - 1\`.

When a student enters the room, they sit in the seat that **maximizes the distance to the closest person already sitting**. If there are multiple such seats, they sit in the **seat with the lowest number**. If the room is empty, the student sits at seat \`0\`.

Implement \`examRoom(operations, args)\` where:
- \`"ExamRoom"\` — initializes the room with \`n\` seats. Returns \`null\`.
- \`"seat"\` — a student enters and sits at the optimal seat. Returns the seat number.
- \`"leave"\` — the student at seat \`p\` leaves. Returns \`null\`.

The first operation is always \`"ExamRoom"\`.`,
  constraints: [
    '1 <= n <= 10^9',
    'At most 10^4 calls to seat and leave.',
    "Each call to leave(p) is guaranteed: student at p is seated.",
    "operations[0] is always \"ExamRoom\".",
  ],
  examples: [
    {
      input: 'operations = ["ExamRoom","seat","seat","seat","seat","leave","seat"], args = [[10],[],[],[],[],[4],[]]',
      output: '[null,0,9,4,2,null,5]',
      explanation: 'Seat 0 (empty room). Seat 9 (max dist=9 from 0). Seat 4 (midpoint of [0,9], dist=4). Seat 2 (midpoint of [0,4], dist=2; midpoint of [4,9] would give seat 6 with dist=2 — tie, lower seat wins). After leaving 4: seat 5 (midpoint of [2,9], dist=3).',
    },
    {
      input: 'operations = ["ExamRoom","seat","seat","seat","seat","seat"], args = [[6],[],[],[],[],[]]',
      output: '[null,0,5,2,1,3]',
      explanation: 'Seat 0, then 5 (end), then 2 (midpoint of [0,5], dist=2), then 1 (midpoint of [0,2] dist=1 = midpoint of [2,5] dist=1, lower seat wins), then 3.',
    },
  ],
  hints: [
    'Maintain a sorted list of occupied seats. To find the best seat: check the distance from seat 0 to the first occupied seat, the distance at each midpoint between consecutive occupied seats, and the distance from the last occupied seat to seat n-1.',
    'The midpoint between seats `a` and `b` has distance `floor((b-a)/2)`. The seat at the left edge (seat 0) has distance equal to the first occupied seat\'s index. The seat at the right edge (seat n-1) has distance `n-1 - last_occupied`.',
    'When multiple seats give the same maximum distance, pick the lowest-numbered one (left-edge and midpoints are already candidates in left-to-right order, so compare left-edge first).',
  ],
  functionName: 'examRoom',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function examRoom(operations, args) {
  const results = [];
  let n;
  const seats = []; // sorted list of occupied seats

  function insert(p) {
    let lo = 0, hi = seats.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (seats[mid] < p) lo = mid + 1; else hi = mid;
    }
    seats.splice(lo, 0, p);
  }

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i], arg = args[i];
    if (op === 'ExamRoom') {
      n = arg[0];
      seats.length = 0;
      results.push(null);
    } else if (op === 'seat') {
      if (seats.length === 0) { insert(0); results.push(0); continue; }
      let bestDist = seats[0], bestSeat = 0; // distance from left edge
      for (let j = 1; j < seats.length; j++) {
        const d = Math.floor((seats[j] - seats[j-1]) / 2);
        if (d > bestDist) { bestDist = d; bestSeat = seats[j-1] + d; }
      }
      if (n - 1 - seats[seats.length - 1] > bestDist) bestSeat = n - 1;
      insert(bestSeat);
      results.push(bestSeat);
    } else { // leave
      seats.splice(seats.indexOf(arg[0]), 1);
      results.push(null);
    }
  }
  return results;
}`,
    python: `def examRoom(operations, args):
    import bisect
    results = []
    seats = []
    n = 0

    for op, arg in zip(operations, args):
        if op == 'ExamRoom':
            n = arg[0]
            seats.clear()
            results.append(None)
        elif op == 'seat':
            if not seats:
                bisect.insort(seats, 0)
                results.append(0)
                continue
            best_dist, best_seat = seats[0], 0
            for j in range(1, len(seats)):
                d = (seats[j] - seats[j-1]) // 2
                if d > best_dist:
                    best_dist, best_seat = d, seats[j-1] + d
            if n - 1 - seats[-1] > best_dist:
                best_seat = n - 1
            bisect.insort(seats, best_seat)
            results.append(best_seat)
        else:  # leave
            seats.remove(arg[0])
            results.append(None)
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['ExamRoom', 'seat', 'seat', 'seat', 'seat', 'leave', 'seat'],
        [[10], [], [], [], [], [4], []],
      ],
      expected: [null, 0, 9, 4, 2, null, 5],
    },
    {
      args: [
        ['ExamRoom', 'seat', 'seat', 'seat', 'seat', 'seat'],
        [[6], [], [], [], [], []],
      ],
      expected: [null, 0, 5, 2, 1, 3],
    },
    {
      args: [
        ['ExamRoom', 'seat', 'seat', 'leave', 'seat', 'seat'],
        [[5], [], [], [0], [], []],
      ],
      expected: [null, 0, 4, null, 0, 2],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['ExamRoom', 'seat', 'seat', 'seat', 'leave', 'seat'],
        [[2], [], [], [], [1], []],
      ],
      expected: [null, 0, 1, 0, null, 1],
    },
    {
      args: [
        ['ExamRoom', 'seat'],
        [[1000000000], []],
      ],
      expected: [null, 0],
    },
    {
      args: [
        ['ExamRoom', 'seat', 'leave', 'seat'],
        [[4], [], [0], []],
      ],
      expected: [null, 0, null, 0],
    },
    {
      args: [
        ['ExamRoom', 'seat', 'seat', 'seat', 'leave', 'leave', 'seat'],
        [[10], [], [], [], [0], [9], []],
      ],
      expected: [null, 0, 9, 4, null, null, 9],
    },
    {
      args: [
        ['ExamRoom', 'seat', 'seat', 'seat', 'seat', 'seat', 'leave', 'seat'],
        [[100], [], [], [], [], [], [49], []],
      ],
      expected: [null, 0, 99, 49, 74, 24, null, 49],
    },
  ],
};
