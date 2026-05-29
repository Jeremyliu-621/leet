import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-maximum-bitwise-or-subsets',
  title: 'Count Number of Maximum Bitwise-OR Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation', 'backtracking'],
  description: `Given an integer array \`nums\`, find the **maximum** possible **bitwise OR** of a subset of \`nums\` and return the **number of different non-empty subsets** with the maximum bitwise OR.

An array \`a\` is a **subset** of an array \`b\` if \`a\` can be obtained from \`b\` by deleting some (possibly zero) elements of \`b\`. Two subsets are considered **different** if the indices of the elements chosen are different.

The bitwise OR of an array is the OR of all its elements.`,
  constraints: [
    '1 <= nums.length <= 16',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,1]',
      output: '2',
      explanation: 'The maximum bitwise OR is 3. Subsets with OR = 3: {3} and {3,1}. Count = 2.',
    },
    {
      input: 'nums = [2,2,2]',
      output: '7',
      explanation: 'The maximum bitwise OR is 2. All 7 non-empty subsets have OR = 2.',
    },
    {
      input: 'nums = [3,2,1,5]',
      output: '6',
      explanation: 'maxOR = 3|2|1|5 = 7. Must include 5 (only source of bit 2) and at least one of {2,3} (for bit 1). Subsets: {5,3},{5,2},{5,3,2},{5,3,1},{5,2,1},{5,3,2,1}. Count = 6.',
    },
  ],
  hints: [
    'The maximum bitwise OR of any subset equals the OR of the entire array (adding elements can only set more bits).',
    'Since n ≤ 16, you can enumerate all 2^n - 1 non-empty subsets using bit masks.',
    'For each mask, compute the OR of selected elements and check if it equals maxOR.',
  ],
  functionName: 'countMaxOrSubsets',
  params: ['nums'],
  starterCode: {
    javascript: `function countMaxOrSubsets(nums) {

}`,
    typescript: `function countMaxOrSubsets(nums: number[]): number {

}`,
    python: `def countMaxOrSubsets(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[3, 1]], expected: 2 },
    { args: [[2, 2, 2]], expected: 7 },
    { args: [[3, 2, 1, 5]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[7]], expected: 1 },
    { args: [[1, 3]], expected: 2 },
    { args: [[3, 3]], expected: 3 },
    { args: [[1, 2, 4]], expected: 1 },
    { args: [[2, 2]], expected: 3 },
    { args: [[4, 3, 1]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 15 },
  ],
};
