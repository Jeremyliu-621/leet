import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-element-ii',
  title: 'Next Greater Element II',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Given a circular integer array \`nums\` (the next element of \`nums[nums.length - 1]\` is \`nums[0]\`), return the **next greater number** for every element in \`nums\`.

The next greater number of a number \`x\` is the first greater number to its traversal order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return \`-1\` for this number.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,1]',
      output: '[2,-1,2]',
      explanation: 'The first 1\'s next greater number is 2. The number 2 can\'t find a greater number circularly, so -1. The second 1\'s next greater number is also 2.',
    },
    {
      input: 'nums = [1,2,3,4,3]',
      output: '[2,3,4,-1,4]',
    },
  ],
  hints: [
    'Iterate over the array twice (length 2*n) using modular indexing to simulate the circular traversal.',
    'Use a monotonic stack that stores indices. When you find a larger element, pop indices from the stack and record the answer.',
    'Only record answers (pop from stack) on the first pass through the array; the second pass just resolves remaining elements.',
  ],
  functionName: 'nextGreaterElements',
  params: ['nums'],
  starterCode: {
    javascript: 'function nextGreaterElements(nums) {\n  \n}\n',
    python: 'def nextGreaterElements(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1]], expected: [2, -1, 2] },
    { args: [[1, 2, 3, 4, 3]], expected: [2, 3, 4, -1, 4] },
    { args: [[5, 4, 3, 2, 1]], expected: [-1, 5, 5, 5, 5] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [-1] },
    { args: [[3, 8, 4, 1, 2]], expected: [8, -1, 8, 2, 3] },
    { args: [[1, 1, 1]], expected: [-1, -1, -1] },
  ],
};
