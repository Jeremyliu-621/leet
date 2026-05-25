import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-for-each-query',
  title: 'Maximum XOR for Each Query',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **sorted** 0-indexed integer array \`nums\` and an integer \`maximumBit\`. You want to apply the following query \`n\` times:
1. Find a non-negative integer \`k < 2^maximumBit\` such that the XOR of all elements in \`nums\` XOR \`k\` is **maximized**. \`k\` is the answer to the ith query.
2. Remove the **last** element from \`nums\`.

Return an array \`answer\` where \`answer[i]\` is the answer to the ith query.`,
  constraints: [
    'nums.length == n',
    '1 <= n <= 10^5',
    '1 <= maximumBit <= 20',
    '0 <= nums[i] < 2^maximumBit',
    'nums is sorted in ascending order.',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,3], maximumBit = 2',
      output: '[0,3,2,3]',
    },
    {
      input: 'nums = [2,3,4,7], maximumBit = 3',
      output: '[5,2,6,5]',
    },
  ],
  hints: [
    'k = (all ones of length maximumBit) XOR (current XOR of remaining nums).',
    'For each query, XOR with the element being removed to update the running XOR.',
  ],
  functionName: 'getMaximumXor',
  params: ['nums', 'maximumBit'],
  starterCode: {
    javascript: 'function getMaximumXor(nums, maximumBit) {\n\n}\n',
    python: 'def getMaximumXor(nums, maximumBit):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,1,1,3], 2], expected: [0,3,2,3] },
    { args: [[2,3,4,7], 3], expected: [5,2,6,5] },
  ],
  hiddenTests: [
    { args: [[0], 1], expected: [1] },
    { args: [[0,1], 1], expected: [0,1] },
    { args: [[1,1,1], 1], expected: [0,1,0] },
    { args: [[0,1,2,3], 2], expected: [3,0,2,3] },
  ],
};
