import type { Problem } from '../types';

export const problem: Problem = {
  id: 'visit-array-positions-to-maximize-score',
  title: 'Visit Array Positions to Maximize Score',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`x\`.

You are initially at position \`0\` in the array and you **must** visit position \`0\`. Afterwards you can move to any position in the array in increasing order (you must visit positions from left to right, skipping any you don't want).

You earn \`nums[i]\` points each time you visit position \`i\`.

However, **each time you move between two positions whose values have different parities** (one odd, one even), you pay a penalty of \`x\` points.

Return the **maximum total score** you can earn.

**Note:** The score can be negative.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i], x <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [2,3], x = 1',
      output: '4',
      explanation: 'Visiting [0,1]: score = 2+3 - 1 (parity change: even→odd) = 4.',
    },
    {
      input: 'nums = [2,4,6,8], x = 3',
      output: '20',
      explanation: 'Visiting all positions: 2+4+6+8 = 20 with no parity change penalties.',
    },
    {
      input: 'nums = [9,7,5,3], x = 1',
      output: '24',
      explanation: 'Visiting all positions: 9+7+5+3 = 24 with no parity change penalties (all odd).',
    },
  ],
  hints: [
    'Think about dynamic programming. What state do you need to track?',
    'At each position, the key information is: the maximum score achievable with the last visited value being even, vs the maximum score with the last visited value being odd.',
    'Let `dp[0]` = best score ending at an even-valued position, `dp[1]` = best score ending at an odd-valued position. For each position `i`, transitioning without a parity change costs nothing; transitioning with a parity change costs `x`.',
  ],
  functionName: 'visitArrayPositionsToMaximizeScore',
  params: ['nums', 'x'],
  starterCode: {
    javascript: `function visitArrayPositionsToMaximizeScore(nums, x) {

}`,
    typescript: `function visitArrayPositionsToMaximizeScore(nums: number[], x: number): number {

}`,
    python: `def visitArrayPositionsToMaximizeScore(nums, x):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3], 1], expected: 4 },
    { args: [[2, 4, 6, 8], 3], expected: 20 },
    { args: [[9, 7, 5, 3], 1], expected: 24 },
  ],
  hiddenTests: [
    { args: [[2, 3, 6, 1, 9, 2], 5], expected: 13 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2], 100], expected: 1 },
    { args: [[5, 3, 1], 10], expected: 9 },
    { args: [[1, 3, 5, 7], 2], expected: 16 },
    { args: [[2, 4, 1, 3], 3], expected: 7 },
    { args: [[1000000, 1000000], 1], expected: 2000000 },
    { args: [[1, 1000000], 999999], expected: 2 },
  ],
};
