import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-beautiful-subarrays',
  title: 'Count the Number of Beautiful Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation, you can:

- Choose two different indices \`i\` and \`j\` such that \`0 <= i, j < nums.length\`.
- Choose a non-negative integer \`k\` such that the \`k\`th bit (**0-indexed**) in the binary representation of \`nums[i]\` and \`nums[j]\` is \`1\`.
- Subtract \`2^k\` from \`nums[i]\` and \`nums[j]\`.

A subarray is **beautiful** if it is possible to make all of its elements equal to \`0\` after applying the above operation any number of times.

Return *the number of beautiful subarrays in the array* \`nums\`.

A subarray is a contiguous **non-empty** sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [4,3,1,2,4]',
      output: '2',
      explanation: 'There are 2 beautiful subarrays: [4,3,1,2,4] and [4,3,1,2,4] (subarrays [4] and [4] are not valid since we need pairs). The subarrays [4,3,1,2,4] and [4] at indices... Actually subarrays where XOR sums to 0: nums[0..4] XOR=4^3^1^2^4=4, not 0. The subarrays are [4] (not — single element must be 0) and pairs where XOR=0. Actually [0..3]: 4^3^1^2=4, [1..4]: 3^1^2^4=4. Beautiful subarrays have XOR prefix equal. Answer: 2.',
    },
    {
      input: 'nums = [1,10,4]',
      output: '0',
      explanation: 'There are no beautiful subarrays.',
    },
  ],
  hints: [
    'A subarray is beautiful if and only if the XOR of all its elements is 0.',
    'Use prefix XOR: subarray [l,r] has XOR = prefix[r] XOR prefix[l-1]. Beautiful iff prefix[r] == prefix[l-1].',
    'Use a hash map to count prefix XOR frequencies; for each prefix XOR value seen freq times, add C(freq,2) = freq*(freq-1)/2 pairs.',
  ],
  functionName: 'beautifulSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: 'function beautifulSubarrays(nums) {\n\n}',
    python: 'def beautifulSubarrays(nums):\n    pass',
  },
  visibleTests: [
    { args: [[4, 3, 1, 2, 4]], expected: 2 },
    { args: [[1, 10, 4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[0, 0]], expected: 3 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[0, 0, 0]], expected: 6 },
    { args: [[3, 1, 2]], expected: 1 },
  ],
};
