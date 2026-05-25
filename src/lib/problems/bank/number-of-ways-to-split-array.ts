import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-split-array',
  title: 'Number of Ways to Split Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

\`nums\` contains a **valid split** at index \`i\` if the following are satisfied:

- The sum of the first \`i + 1\` elements is **greater than or equal to** the sum of the last \`n - i - 1\` elements.
- There is **at least one** element to the right of \`i\`. That is, \`0 <= i < n - 1\`.

Return the number of **valid splits** in \`nums\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [10,4,-8,7]',
      output: '2',
      explanation: 'i=0: 10 >= 4+(-8)+7=3 ✓. i=1: 10+4=14 >= -8+7=-1 ✓. i=2: 10+4+(-8)=6 >= 7 ✗. 2 valid splits.',
    },
    {
      input: 'nums = [2,3,1,0]',
      output: '2',
      explanation: 'i=0: 2 >= 4 ✗. i=1: 5 >= 1 ✓. i=2: 6 >= 0 ✓. 2 valid splits.',
    },
  ],
  hints: [
    'Compute the total sum of the array.',
    'Iterate from left to right, maintaining a prefix sum.',
    'At each index i (except last), check if prefix >= total - prefix.',
  ],
  functionName: 'waysToSplitArray',
  params: ['nums'],
  starterCode: {
    javascript: `function waysToSplitArray(nums) {

}`,
    python: `def waysToSplitArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[10, 4, -8, 7]], expected: 2 },
    { args: [[2, 3, 1, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 2 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[-1, -1, -1, -1]], expected: 2 },
    { args: [[5, 1, 1, 1, 1]], expected: 4 },
  ],
};
