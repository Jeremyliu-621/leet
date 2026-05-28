import type { Problem } from '../types';

export const problem: Problem = {
  id: 'exam-room',
  title: 'Exam Room',
  difficulty: 'medium',
  tags: ['simulation', 'heap', 'binary-search'],
  description: `There is an exam room with \`n\` seats in a single row, numbered \`0\` to \`n - 1\`.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person already sitting. If there are multiple such seats, they sit in the seat with the lowest number. If the room is empty, the student sits at seat \`0\`.

Design a class \`ExamRoom\` that simulates this process. Implement it via an operations array.`,
  constraints: [
    '1 <= n <= 10^9',
    '1 <= calls.length <= 10^4',
    'calls[i] is either "seat" or "leave".',
    'Each call to leave(p) guarantees that a student is sitting at seat p.',
  ],
  examples: [
    {
      input: 'ops = [["ExamRoom",[10]],["seat",[]],["seat",[]],["seat",[]],["seat",[]],["leave",[4]],["seat",[]]]',
      output: '[null,0,9,4,2,null,5]',
      explanation: 'seat()→0 (empty room, pick 0). seat()→9 (max distance 9 from seat 0). seat()→4 (midpoint of [0,9], distance 4). seat()→2 (gap [0,4], midpoint 2, distance 2). leave(4). seat()→5 (gap [2,9], midpoint 5 or 6, distance 3, pick lower).',
    },
  ],
  hints: [
    'Maintain a sorted set (or sorted array) of occupied seat indices. For each "seat" call, evaluate candidate positions: start/end of the row and midpoints of each gap between consecutive occupied seats.',
    'For a gap (a, b), the best seat is floor((a+b)/2), with min distance floor((b-a)/2). For the left end of the row (seat 0), distance = first_occupied_seat. For the right end, distance = n-1-last_occupied_seat.',
    'A sorted set (e.g. balanced BST or sorted array with binary search) gives O(log n) insert and O(n) seat scan. For leave, just remove the seat from the set.',
  ],
  functionName: 'examRoomOps',
  params: ['ops'],
  starterCode: {
    javascript: 'function examRoomOps(ops) {\n  \n}\n',
    typescript: "function examRoomOps(ops: ((string | number[])[] | (string | unknown[])[])[]): (null | number)[] {\n  \n}",

    python: 'def examRoomOps(ops):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[['ExamRoom',[10]],['seat',[]],['seat',[]],['seat',[]],['seat',[]],['leave',[4]],['seat',[]]]],
      expected: [null, 0, 9, 4, 2, null, 5],
    },
  ],
  hiddenTests: [
    // n=4: seat→0, seat→3, seat→1 (midpoint of [0,3] tie→1), seat→2
    {
      args: [[['ExamRoom',[4]],['seat',[]],['seat',[]],['seat',[]],['seat',[]]]],
      expected: [null, 0, 3, 1, 2],
    },
    // n=1: single seat only
    {
      args: [[['ExamRoom',[1]],['seat',[]],['leave',[0]],['seat',[]]]],
      expected: [null, 0, null, 0],
    },
    // n=2: seat→0, seat→1, leave(0), seat→0
    {
      args: [[['ExamRoom',[2]],['seat',[]],['seat',[]],['leave',[0]],['seat',[]]]],
      expected: [null, 0, 1, null, 0],
    },
    // n=6: seat→0, seat→5, seat→2 (gap [0,5] midpoint 2.5→2 dist 2), seat→4 (gap [2,5] midpoint 3.5→3 dist 1; gap [0,2] midpoint 1 dist 1; tie → lowest = 1)
    // Wait: {0,2,5}:
    //   gap [0,2]: seat 1, min(1,1)=1
    //   gap [2,5]: seat 3, min(1,2)=1 or seat 4, min(2,1)=1. Mid=(2+5)/2=3.5→3. Dist=floor((5-2)/2)=1.
    //   Both give dist 1. Candidates: seat 1 (from gap [0,2]) and seat 3 (from gap [2,5]). Pick 1.
    // Actually let me re-verify: n=6, seats {0,5} after step 2.
    //   seat(): gap [0,5]. mid = floor((0+5)/2)=2. Dist = floor((5-0)/2) = 2.
    //   Returns 2. ✓
    // Now seats {0,2,5}:
    //   seat():
    //   - left end: dist to 0 = 0... wait, 0 is occupied. No candidate there.
    //   - gap [0,2]: mid = floor((0+2)/2)=1. dist=floor((2-0)/2)=1. Candidate seat 1, dist 1.
    //   - gap [2,5]: mid=floor((2+5)/2)=3. dist=floor((5-2)/2)=1. Candidate seat 3, dist 1.
    //   - right end: n-1=5 occupied. No candidate.
    //   Tie at dist 1: pick seat 1.
    {
      args: [[['ExamRoom',[6]],['seat',[]],['seat',[]],['seat',[]],['seat',[]]]],
      expected: [null, 0, 5, 2, 1],
    },
  ],
};
