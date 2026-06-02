import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-beautiful-subarrays',
  title: 'Count the Number of Beautiful Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'binary-indexed-tree'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation, you can:
- Choose two **different** indices \`i\` and \`j\` such that \`0 <= i, j < nums.length\`.
- Choose a non-negative integer \`k\` such that the \`k\`th bit (**0-indexed**) in the binary representation of \`nums[i]\` and \`nums[j]\` is \`1\`.
- Subtract \`2^k\` from \`nums[i]\` and \`nums[j]\`.

A subarray is **beautiful** if it is possible to make all of its elements equal to \`0\` after applying the above operation any number of times.

Return *the number of beautiful subarrays* in the array \`nums\`.

A subarray is a contiguous **non-empty** sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [4,3,1,2,4]',
      output: '2',
      explanation: 'Beautiful subarrays: [4,3,1,2,4] as a whole (XOR=0? Actually: [3,1,2] XOR = 0. nums = [4,3,1,2,4]. prefix XOR: 0,4,7,6,4,0. Pairs with same prefix XOR: (0,4) gives full array, (4-indexed→) these count.',
    },
    {
      input: 'nums = [1,10,4]',
      output: '0',
    },
  ],
  hints: [
    'A subarray is beautiful if and only if the XOR of all its elements is 0.',
    'Use a prefix XOR array. A subarray nums[i..j] has XOR = 0 iff prefixXOR[i] == prefixXOR[j+1].',
    'Count pairs of equal prefix XOR values using a hash map.',
  ],
  functionName: 'beautifulSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function beautifulSubarrays(nums) {
  const freq = new Map([[0, 1]]);
  let xor = 0, count = 0;
  for (const n of nums) {
    xor ^= n;
    count += freq.get(xor) || 0;
    freq.set(xor, (freq.get(xor) || 0) + 1);
  }
  return count;
}`,
    typescript: `function beautifulSubarrays(nums: number[]): number {
  const freq = new Map<number, number>([[0, 1]]);
  let xor = 0, count = 0;
  for (const n of nums) {
    xor ^= n;
    count += freq.get(xor) ?? 0;
    freq.set(xor, (freq.get(xor) ?? 0) + 1);
  }
  return count;
}`,
    python: `def beautifulSubarrays(nums):
    freq = {0: 1}
    xor = count = 0
    for n in nums:
        xor ^= n
        count += freq.get(xor, 0)
        freq[xor] = freq.get(xor, 0) + 1
    return count`,
  },
  visibleTests: [
    { args: [[4, 3, 1, 2, 4]], expected: 2 },
    { args: [[1, 10, 4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[0, 0, 0]], expected: 6 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[3, 3, 3]], expected: 2 },
  ],
};
