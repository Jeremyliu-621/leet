import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-two-numbers',
  title: 'Maximum XOR of Two Numbers in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **maximum result** of \`nums[i] XOR nums[j]\`, where \`0 <= i <= j < n\`.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '0 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [3,10,5,25,2,8]',
      output: '28',
      explanation: 'The maximum result is 5 XOR 25 = 28.',
    },
    {
      input: 'nums = [14,70,53,83,49,91,36,80,92,51,66,70]',
      output: '127',
    },
  ],
  hints: [
    'A brute-force O(n^2) approach checks every pair — this works for small inputs but is too slow for large ones.',
    'Think bit by bit from the highest bit downward. Can you set the current bit in the answer?',
    'Maintain a set of all prefixes (top bits) seen so far. For each candidate answer with the current bit set, check if any two prefixes XOR to that value.',
  ],
  functionName: 'findMaximumXOR',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaximumXOR(nums) {

}`,
    python: `def findMaximumXOR(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 10, 5, 25, 2, 8]], expected: 28 },
    { args: [[14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]], expected: 127 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[0, 1]], expected: 1 },
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 2, 3, 4]], expected: 7 },
    { args: [[3, 10, 5, 25, 2, 8]], expected: 28 },
  ],
};
