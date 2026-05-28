import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-of-two-numbers-in-an-array',
  title: 'Maximum XOR of Two Numbers in an Array',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays', 'hash-map'],
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
      explanation: 'The maximum XOR of any two elements in the array is 127.',
    },
  ],
  hints: [
    'Build the answer bit by bit from the most significant bit to the least significant bit. At each step, greedily try to set the current bit to 1.',
    'Use a hash set of all bit-prefixes (the top i bits of each number). To check if the current bit can be 1, test whether any two prefixes XOR to the candidate value.',
    'For each bit position i (from 31 down to 0): let candidate = current answer with bit i set. If there exist two prefixes p1, p2 in the prefix set such that p1 XOR p2 = candidate, then bit i can be 1.',
  ],
  functionName: 'findMaximumXOR',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMaximumXOR(nums) {\n  \n}\n',
    python: 'def findMaximumXOR(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,10,5,25,2,8]], expected: 28 },
    { args: [[14,70,53,83,49,91,36,80,92,51,66,70]], expected: 127 },
  ],
  hiddenTests: [
    // Single element: XOR with itself = 0
    { args: [[1]], expected: 0 },
    // Two equal elements: XOR = 0
    { args: [[0,0]], expected: 0 },
    // Simple small case: [4,6,7] max XOR = 4 XOR 7 = 3
    // 4=100, 6=110, 7=111. 4 XOR 7=011=3, 4 XOR 6=010=2, 6 XOR 7=001=1. Max=3.
    { args: [[4,6,7]], expected: 3 },
    // Two elements: 2 XOR 4 = 110 = 6
    { args: [[2,4]], expected: 6 },
    // All powers of two: XOR of adjacent powers gives largest number
    // [1,2,4,8]: max XOR = 1 XOR 8 = 9, 2 XOR 8 = 10, 4 XOR 8 = 12, 1 XOR 4 = 5, 2 XOR 4 = 6, 1 XOR 2 = 3
    // Max = 12 (4 XOR 8)
    { args: [[1,2,4,8]], expected: 12 },
    // [0,1]: 0 XOR 1 = 1
    { args: [[0,1]], expected: 1 },
  ],
};
