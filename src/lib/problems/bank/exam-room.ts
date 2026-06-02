import type { Problem } from '../types';

export const problem: Problem = {
  id: 'exam-room',
  title: 'Exam Room',
  difficulty: 'medium',
  tags: ['design', 'arrays', 'binary-search'],
  description: `There is an exam room with \`n\` seats in a single row labeled from \`0\` to \`n - 1\`.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person. If there are multiple such seats, they sit in the seat with the lowest number. If no one is in the room, then the student sits at seat number \`0\`.

Implement the \`ExamRoom\` class:
- \`ExamRoom(int n)\` Initializes the object of the exam room with the number of seats \`n\`.
- \`int seat()\` Returns the label of the seat at which the next student will set.
- \`void leave(int p)\` Indicates that the student sitting at seat \`p\` will leave the room. It is guaranteed that there will be a student sitting at seat \`p\`.

Simulate a sequence of operations as an array of strings where each element is either \`"seat"\` or \`["leave", p]\`. Return an array containing the return value of each \`"seat"\` call.`,
  constraints: [
    '1 <= n <= 10^9',
    'It is guaranteed that there is a student sitting at seat p.',
    'At most 10^4 calls will be made to seat and leave.',
  ],
  examples: [
    {
      input: 'n = 10, ops = [["seat"],["seat"],["seat"],["seat"],["leave",4],["seat"]]',
      output: '[0,9,4,2,5]',
      explanation:
        'seat() → 0 (empty room). seat() → 9 (max dist from 0). seat() → 4 (middle of [0..9]). seat() → 2 (middle of [0..4]). leave(4). seat() → 5 (middle of [2..9]).',
    },
    {
      input: 'n = 4, ops = [["seat"],["seat"],["seat"],["seat"],["leave",1],["seat"]]',
      output: '[0,3,1,2,1]',
      explanation: 'n=4, seats 0-3. seat→0, seat→3, seat→1, seat→2, leave(1), seat→1.',
    },
  ],
  hints: [
    'Maintain a sorted set of occupied seats. When seating a student, consider the gap before the first seat, between consecutive seats, and after the last seat.',
    'For a gap [left, right], the best seat is at (left + right) / 2 with distance (right - left) / 2. Handle the edge gaps: before the first seat (distance = first seat) and after the last seat (distance = n - 1 - last).',
    'Use a sorted array (or BST/SortedList) of occupied seats. seat() scans all gaps in O(k) time where k is current occupancy. leave() removes in O(k) time. Both are O(10^4) total calls, so O(k) per call is fine.',
  ],
  functionName: 'examRoom',
  params: ['n', 'ops'],
  starterCode: {
    javascript: `function examRoom(n, ops) {
  const seated = []; // sorted array of occupied seats
  const result = [];
  for (const op of ops) {
    if (op === 'seat' || op[0] === 'seat') {
      // Find best seat: maximize min-distance to nearest neighbor
      let bestSeat = 0, bestDist = seated.length === 0 ? Infinity : seated[0];
      for (let i = 1; i < seated.length; i++) {
        const dist = Math.floor((seated[i] - seated[i - 1]) / 2);
        if (dist > bestDist) { bestDist = dist; bestSeat = seated[i - 1] + dist; }
      }
      if (seated.length > 0 && n - 1 - seated[seated.length - 1] > bestDist) {
        bestSeat = n - 1;
      }
      // Insert bestSeat in sorted order
      const idx = seated.findIndex(s => s > bestSeat);
      if (idx === -1) seated.push(bestSeat);
      else seated.splice(idx, 0, bestSeat);
      result.push(bestSeat);
    } else {
      // leave
      const p = op[1];
      const idx = seated.indexOf(p);
      if (idx !== -1) seated.splice(idx, 1);
    }
  }
  return result;
}`,
    typescript: `function examRoom(n: number, ops: (string | (string | number)[])[]) {
  const seated: number[] = [];
  const result: number[] = [];
  for (const op of ops) {
    if (op === 'seat' || (Array.isArray(op) && op[0] === 'seat')) {
      let bestSeat = 0;
      let bestDist = seated.length === 0 ? Infinity : seated[0]!;
      for (let i = 1; i < seated.length; i++) {
        const dist = Math.floor((seated[i]! - seated[i - 1]!) / 2);
        if (dist > bestDist) { bestDist = dist; bestSeat = seated[i - 1]! + dist; }
      }
      if (seated.length > 0 && n - 1 - seated[seated.length - 1]! > bestDist) {
        bestSeat = n - 1;
      }
      const idx = seated.findIndex(s => s > bestSeat);
      if (idx === -1) seated.push(bestSeat);
      else seated.splice(idx, 0, bestSeat);
      result.push(bestSeat);
    } else {
      const p = (op as (string | number)[])[1] as number;
      const idx = seated.indexOf(p);
      if (idx !== -1) seated.splice(idx, 1);
    }
  }
  return result;
}`,
    python: `def examRoom(n: int, ops: list) -> list[int]:
    import bisect
    seated: list[int] = []
    result: list[int] = []
    for raw_op in ops:
        op = raw_op.to_py() if hasattr(raw_op, 'to_py') else raw_op
        op_list = list(op) if not isinstance(op, (str, list)) else op
        is_seat = op_list[0] == 'seat' if isinstance(op_list, list) else op_list == 'seat'
        if is_seat:
            best_seat = 0
            best_dist = seated[0] if seated else float('inf')
            for i in range(1, len(seated)):
                dist = (seated[i] - seated[i - 1]) // 2
                if dist > best_dist:
                    best_dist = dist
                    best_seat = seated[i - 1] + dist
            if seated and n - 1 - seated[-1] > best_dist:
                best_seat = n - 1
            bisect.insort(seated, best_seat)
            result.append(best_seat)
        else:
            p = int(op_list[1])
            idx = bisect.bisect_left(seated, p)
            if idx < len(seated) and seated[idx] == p:
                seated.pop(idx)
    return result`,
  },
  visibleTests: [
    {
      args: [10, [['seat'], ['seat'], ['seat'], ['seat'], ['leave', 4], ['seat']]],
      expected: [0, 9, 4, 2, 5],
    },
    {
      args: [4, [['seat'], ['seat'], ['seat'], ['seat'], ['leave', 1], ['seat']]],
      expected: [0, 3, 1, 2, 1],
    },
    {
      args: [2, [['seat'], ['seat'], ['leave', 0], ['seat']]],
      expected: [0, 1, 0],
    },
  ],
  hiddenTests: [
    { args: [1, [['seat']]], expected: [0] },
    { args: [3, [['seat'], ['seat'], ['seat']]], expected: [0, 2, 1] },
    { args: [5, [['seat'], ['seat'], ['seat']]], expected: [0, 4, 2] },
    {
      args: [10, [['seat'], ['seat'], ['leave', 9], ['seat'], ['seat']]],
      expected: [0, 9, 9, 4],
    },
    {
      args: [6, [['seat'], ['seat'], ['seat'], ['leave', 2], ['seat']]],
      expected: [0, 5, 2, 2],
    },
    {
      args: [10, [['seat'], ['seat'], ['seat'], ['leave', 0], ['seat']]],
      expected: [0, 9, 4, 0],
    },
  ],
};
