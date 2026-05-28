import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-rotation-with-highest-score',
  title: 'Smallest Rotation with Highest Score',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given an array \`nums\` (0-indexed). You may rotate it by a non-negative integer \`k\` so that the array becomes \`nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]\`.

The **score** of the rotation is the number of indices \`i\` (0-indexed) such that \`nums[i] <= i\`.

Return the **smallest** \`k\` (0 <= k < n) that gives the maximum score.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`0 <= nums[i] < nums.length`',
  ],
  examples: [
    {
      input: 'nums = [2,3,1,4,0]',
      output: '3',
      explanation: 'Scores for k=0,1,2,3,4 are 2,3,3,4,3. Maximum score 4 is at k=3.',
    },
    {
      input: 'nums = [1,3,0,2,4]',
      output: '0',
      explanation: 'All rotations k=0..4 yield score 3. Return the smallest, k=0.',
    },
  ],
  hints: [
    'For rotation `k`, element `nums[i]` moves to position `(i - k + n) % n`. It scores 1 when `nums[i] <= (i - k + n) % n`.',
    'For each element `i` with value `v`, it does NOT score for exactly `v` rotations: k in `[i−v+1, i]` (mod n). Use a difference array to mark these "bad" k-ranges in O(1) each.',
    'Build the difference array (size n+1), take prefix sums to get bad[k] for each k, then return the k with minimum bad[k] (= maximum score). Break ties by smallest k.',
  ],
  functionName: 'bestRotation',
  params: ['nums'],
  starterCode: {
    javascript: `function bestRotation(nums) {

}`,
    typescript: "function bestRotation(nums: number[]): number {\n\n}",

    python: `def bestRotation(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 4, 0]], expected: 3 },
    { args: [[1, 3, 0, 2, 4]], expected: 0 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: 1 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[2, 0, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 0]], expected: 4 },
    { args: [[0, 1, 2, 3, 4]], expected: 0 },
    { args: [[2, 3, 0, 1]], expected: 2 },
    { args: [[3, 2, 1, 0]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 0 },
  ],
};
