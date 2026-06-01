import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-on-array-to-maximize-sum-of-squares',
  title: 'Apply Operations on Array to Maximize Sum of Squares',
  difficulty: 'hard',
  tags: ['arrays', 'bit-manipulation', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

You can apply the following operation any number of times:

- Choose two indices \`i\` and \`j\` (\`i != j\`), set \`nums[i] = nums[i] AND nums[j]\`, and set \`nums[j] = nums[i] OR nums[j]\`.

Return *the **maximum** possible sum of the squares of the first* \`k\` *elements of* \`nums\` *after applying the operation any number of times*, **modulo** \`10^9 + 7\`.

**Note:** AND and OR refer to the bitwise AND and OR operations.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,6,5,8], k = 2',
      output: '261',
      explanation: 'Optimal two elements are 15 and 6: 15² + 6² = 225 + 36 = 261.',
    },
    {
      input: 'nums = [4,5,4,7], k = 3',
      output: '90',
      explanation: 'Optimal three elements are 7, 5, 4: 49 + 25 + 16 = 90.',
    },
  ],
  hints: [
    'AND/OR operations preserve the total count of set bits at each bit position across all elements.',
    'To maximize sum of squares, concentrate bits greedily: for each bit, give it to the elements with the most bits already.',
    'Concretely: for bit b with c[b] ones across all elements, assign bit b to the top min(c[b], k) elements. The r-th largest element gets bit b if c[b] >= r.',
  ],
  functionName: 'maxSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSum(nums, k) {\n\n}\n',
    typescript: 'function maxSum(nums: number[], k: number): number {\n\n}\n',
    python: 'def maxSum(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,6,5,8], 2], expected: 261 },
    { args: [[4,5,4,7], 3], expected: 90 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[0,0], 1], expected: 0 },
    { args: [[15], 1], expected: 225 },
    { args: [[1,2,4,8], 4], expected: 225 },
    { args: [[3,3,3,3], 2], expected: 18 },
    { args: [[7,7], 2], expected: 98 },
    { args: [[1,3,5,7], 2], expected: 98 },
  ],
};
