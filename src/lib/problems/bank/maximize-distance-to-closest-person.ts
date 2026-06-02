import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-distance-to-closest-person',
  title: 'Maximize Distance to Closest Person',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an array representing a row of seats where \`seats[i] = 1\` represents a person sitting in the \`i\`-th seat, and \`seats[i] = 0\` represents that the \`i\`-th seat is empty.

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. Return that maximum distance to the closest person.`,
  constraints: [
    '2 <= seats.length <= 2 * 10^4',
    'seats[i] is 0 or 1',
    'At least one seat is empty',
    'At least one seat is occupied',
  ],
  examples: [
    {
      input: 'seats = [1,0,0,0,1,0,1]',
      output: '2',
      explanation: 'Sitting in seat 2 gives distance 2 to the nearest occupied seats (seats 0 and 4).',
    },
    {
      input: 'seats = [1,0,0,0]',
      output: '3',
      explanation: 'The last seat is farthest — distance 3 from seat 0.',
    },
    {
      input: 'seats = [0,1]',
      output: '1',
    },
  ],
  hints: [
    'Find the gap between consecutive occupied seats. The best middle-of-gap spot gives distance floor(gap/2).',
    'Handle leading zeros (distance = index of first person) and trailing zeros (distance = n-1 - index of last person) as special cases.',
    'Return the max of: leading gap, max inner gap // 2, trailing gap.',
  ],
  functionName: 'maxDistToClosest',
  params: ['seats'],
  starterCode: {
    javascript: `function maxDistToClosest(seats) {
  const n = seats.length;
  let ans = 0, prev = -1;
  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      ans = prev === -1 ? i : Math.max(ans, (i - prev) >> 1);
      prev = i;
    }
  }
  if (prev < n - 1) ans = Math.max(ans, n - 1 - prev);
  return ans;
}`,
    typescript: `function maxDistToClosest(seats: number[]): number {
  const n = seats.length;
  let ans = 0, prev = -1;
  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      ans = prev === -1 ? i : Math.max(ans, (i - prev) >> 1);
      prev = i;
    }
  }
  if (prev < n - 1) ans = Math.max(ans, n - 1 - prev);
  return ans;
}`,
    python: `def maxDistToClosest(seats):
    n = len(seats)
    ans = prev = 0
    prev = -1
    for i in range(n):
        if seats[i] == 1:
            ans = i if prev == -1 else max(ans, (i - prev) // 2)
            prev = i
    if prev < n - 1: ans = max(ans, n - 1 - prev)
    return ans`,
  },
  visibleTests: [
    { args: [[1,0,0,0,1,0,1]], expected: 2 },
    { args: [[1,0,0,0]], expected: 3 },
    { args: [[0,1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1,0]], expected: 1 },
    { args: [[0,0,1]], expected: 2 },
    { args: [[1,0,0,1,0,0,1]], expected: 1 },
    { args: [[0,0,0,1,0,0,0]], expected: 3 },
  ],
};
