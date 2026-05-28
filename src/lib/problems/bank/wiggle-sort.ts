import type { Problem } from '../types';

export const problem: Problem = {
  id: 'wiggle-sort',
  title: 'Wiggle Sort',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, reorder it **in-place** such that:

\`nums[0] <= nums[1] >= nums[2] <= nums[3]...\`

Return the reordered array.

**Note:** There may be multiple valid answers. This problem expects the output of a specific greedy one-pass algorithm: for each adjacent pair, swap if the wiggle condition is violated.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '0 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,5,2,1,6,4]',
      output: '[3,5,1,6,2,4]',
      explanation: '[3<=5>=1<=6>=2<=4] is a valid wiggle array.',
    },
    {
      input: 'nums = [6,6,5,6,3,8]',
      output: '[6,6,5,6,3,8]',
      explanation: 'Already satisfies the wiggle condition.',
    },
  ],
  hints: [
    'One-pass greedy: iterate through adjacent pairs. For even index i, if nums[i] > nums[i+1], swap them. For odd index i, if nums[i] < nums[i+1], swap them.',
    'This works because swapping two adjacent elements to satisfy the local condition never breaks previously satisfied conditions.',
    '```js\nfunction wiggleSort(nums) {\n  const arr = [...nums];\n  for (let i = 0; i < arr.length - 1; i++) {\n    if ((i % 2 === 0 && arr[i] > arr[i+1]) ||\n        (i % 2 === 1 && arr[i] < arr[i+1])) {\n      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];\n    }\n  }\n  return arr;\n}\n```',
  ],
  functionName: 'wiggleSort',
  params: ['nums'],
  starterCode: {
    javascript: 'function wiggleSort(nums) {\n  // modify nums in-place and return it\n}\n',
    typescript: "function wiggleSort(nums: number[]): number[] {\n  // modify nums in-place and return it\n}",

    python: 'def wiggleSort(nums):\n    # modify nums in-place and return it\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 5, 2, 1, 6, 4]], expected: [3, 5, 1, 6, 2, 4] },
    { args: [[6, 6, 5, 6, 3, 8]], expected: [6, 6, 5, 6, 3, 8] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[2, 1]], expected: [1, 2] },
    { args: [[1, 1, 1, 1]], expected: [1, 1, 1, 1] },
    { args: [[4, 3, 2, 1]], expected: [3, 4, 1, 2] },
  ],
};
