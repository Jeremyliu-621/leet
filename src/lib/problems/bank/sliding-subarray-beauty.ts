import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sliding-subarray-beauty',
  title: 'Sliding Subarray Beauty',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `Given an integer array \`nums\` containing \`n\` integers, find the **beauty** of each subarray of size \`k\`.

The **beauty** of a subarray is the \`x\`th **smallest integer** in the subarray if it is **negative**, or **0** if there are fewer than \`x\` negative integers.

Return an integer array containing \`n - k + 1\` integers, which denote the **beauty** of the subarrays **in order** from the first index in the array.

- The subarray \`nums[l..r]\` with \`l <= r\` has beauty equal to the \`x\`th smallest integer in \`nums[l], nums[l+1], ..., nums[r]\`, among negatives only.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '1 <= k <= n',
    '1 <= x <= k',
    '-50 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [-1,-2,-3,-4,-5], k = 2, x = 2',
      output: '[-1,-2,-3,-4]',
      explanation:
        'Window [-1,-2]: 2nd smallest negative = -1. Window [-2,-3]: -2. Window [-3,-4]: -3. Window [-4,-5]: -4.',
    },
    {
      input: 'nums = [-1,5,-2], k = 3, x = 2',
      output: '[-1]',
      explanation: 'Only one window [-1,5,-2] with 2 negatives: sorted [-2,-1]. 2nd smallest = -1.',
    },
    {
      input: 'nums = [4,3,-1], k = 2, x = 2',
      output: '[0,0]',
      explanation: 'Window [4,3]: 0 negatives, beauty=0. Window [3,-1]: only 1 negative, beauty=0.',
    },
  ],
  hints: [
    'Since values are in [-50, 50], maintain a frequency array of just the negative values.',
    'Use a sliding window: add nums[i], remove nums[i-k] each step (only tracking negatives).',
    'To find x-th smallest negative: scan the frequency array from -50 upward, accumulating count until count >= x.',
    'If fewer than x negatives exist in the window, beauty = 0.',
  ],
  functionName: 'getSubarrayBeauty',
  params: ['nums', 'k', 'x'],
  starterCode: {
    javascript: `function getSubarrayBeauty(nums, k, x) {\n  \n}`,
    typescript: `function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {\n  \n}`,
    python: `def getSubarrayBeauty(nums, k, x):\n    `,
  },
  visibleTests: [
    { args: [[-1, -2, -3, -4, -5], 2, 2], expected: [-1, -2, -3, -4] },
    { args: [[-1, 5, -2], 3, 2], expected: [-1] },
    { args: [[4, 3, -1], 2, 2], expected: [0, 0] },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3, -4, -5], 2, 2], expected: [-1, -2, -3, -4] },
    { args: [[-1, 5, -2], 3, 2], expected: [-1] },
    { args: [[4, 3, -1], 2, 2], expected: [0, 0] },
    { args: [[1, -1, -3, -2, 3], 3, 2], expected: [-1, -2, -2] },
    { args: [[-50], 1, 1], expected: [-50] },
    { args: [[0, 0, 0], 2, 1], expected: [0, 0] },
    { args: [[-1, -1, -1], 2, 2], expected: [-1, -1] },
    { args: [[1, 2, 3], 2, 1], expected: [0, 0] },
  ],
};
