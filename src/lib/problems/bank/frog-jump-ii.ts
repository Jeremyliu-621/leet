import type { Problem } from '../types';

export const problem: Problem = {
  id: 'frog-jump-ii',
  title: 'Frog Jump II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`stones\` sorted in **strictly increasing order** representing the positions of stones in a river.

A frog, initially on the first stone, wants to travel to the last stone and then return to the first stone. However, it must follow the following rules:

- When traveling from the first stone to the last stone, the frog must jump to each stone **at most once**.
- When traveling from the last stone back to the first stone, the frog must jump to each stone **at most once**.
- All stones (except the first and the last) must be visited **exactly once** during the whole journey (going plus returning).

The **cost** of a journey is defined as the **maximum length** of any single jump made during the entire journey.

Return the **minimum** possible cost of the journey.`,
  constraints: [
    '`2 <= stones.length <= 10^5`',
    '`0 <= stones[0] < stones[1] < ... < stones[stones.length - 1] <= 10^9`',
  ],
  examples: [
    {
      input: 'stones = [0,2,5,6,7]',
      output: '5',
      explanation: 'One path: frog 1 takes [0,2,7], frog 2 takes [0,5,6,7]. Max jump = max(2,5,5,1) = 5.',
    },
    {
      input: 'stones = [0,3,9]',
      output: '9',
      explanation: 'One stone must be visited once. Regardless of assignment, one frog must jump from 0 to 9 directly. Cost = 9.',
    },
  ],
  hints: [
    'Think of this as two frogs simultaneously jumping from stone 0 to stone n-1, each visiting disjoint intermediate stones.',
    'The optimal strategy is to assign alternate stones to each frog — frog 1 takes even-indexed stones, frog 2 takes odd-indexed stones.',
    'With alternating assignment, every jump is of the form stones[i] - stones[i-2]. Return the maximum such value over all i >= 2, initialized with stones[1] - stones[0].',
  ],
  functionName: 'maxJump',
  params: ['stones'],
  starterCode: {
    javascript: `function maxJump(stones) {
  let ans = stones[1] - stones[0];
  for (let i = 2; i < stones.length; i++)
    ans = Math.max(ans, stones[i] - stones[i - 2]);
  return ans;
}`,
    typescript: `function maxJump(stones: number[]): number {
  let ans = stones[1] - stones[0];
  for (let i = 2; i < stones.length; i++)
    ans = Math.max(ans, stones[i] - stones[i - 2]);
  return ans;
}`,
    python: `def maxJump(stones):
    ans = stones[1] - stones[0]
    for i in range(2, len(stones)):
        ans = max(ans, stones[i] - stones[i - 2])
    return ans`,
  },
  visibleTests: [
    { args: [[0, 2, 5, 6, 7]], expected: 5 },
    { args: [[0, 3, 9]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[0, 1]], expected: 1 },
    { args: [[0, 1, 2, 3, 4]], expected: 2 },
    { args: [[0, 5, 15, 30]], expected: 25 },
    { args: [[0, 10, 20, 30, 40, 50]], expected: 20 },
    { args: [[0, 3, 7]], expected: 7 },
    { args: [[0, 1, 4, 11, 22]], expected: 18 },
    { args: [[0, 1000000000]], expected: 1000000000 },
  ],
};
