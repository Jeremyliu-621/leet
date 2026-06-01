import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-xor-of-all-subarrays',
  title: 'Find the XOR of All Subarrays',
  difficulty: 'easy',
  tags: ['arrays', 'math', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

Return the **XOR** of all elements of every **subarray** of \`nums\`.

A subarray is a contiguous, non-empty sequence of elements within an array.

> The XOR of all subarray elements means: for every possible subarray, compute its XOR, then XOR all those results together.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 3]',
      output: '2',
      explanation:
        'Subarrays: [1]→1, [1,2]→3, [1,2,3]→0, [2]→2, [2,3]→1, [3]→3. XOR of all = 1^3^0^2^1^3 = 2.',
    },
    {
      input: 'nums = [1, 2]',
      output: '0',
      explanation: 'Subarrays: [1]→1, [1,2]→3, [2]→2. XOR of all = 1^3^2 = 0.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'The only subarray is [1], whose XOR is 1.',
    },
  ],
  hints: [
    'Level 1: Instead of generating every subarray, think about how many subarrays each element nums[i] appears in.',
    'Level 2: Element nums[i] appears in exactly (i+1)*(n-i) subarrays. If that count is even, XOR-ing nums[i] an even number of times cancels out (contributes 0). Only elements that appear an odd number of times affect the answer.',
    'Level 3: (i+1)*(n-i) is odd if and only if both (i+1) and (n-i) are odd — meaning i is even AND n is odd. So: if n is even, return 0. If n is odd, return the XOR of nums[0], nums[2], nums[4], …',
  ],
  functionName: 'xorAllSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function xorAllSubarrays(nums) {

}`,
    typescript: `function xorAllSubarrays(nums: number[]): number {

}`,
    python: `def xorAllSubarrays(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[5, 3, 1, 2, 4]], expected: 0 },
    { args: [[1, 3, 5]], expected: 4 },
    { args: [[0, 1, 2, 3]], expected: 0 },
    { args: [[7, 7, 7]], expected: 0 },
    { args: [[4, 2]], expected: 0 },
    { args: [[1, 0, 1, 0, 1]], expected: 1 },
    { args: [[3, 5, 7, 9, 11]], expected: 15 },
  ],
};
