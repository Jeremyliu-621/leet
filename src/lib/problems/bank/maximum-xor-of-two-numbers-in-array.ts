import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-of-two-numbers-in-array',
  title: 'Maximum XOR of Two Numbers in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation', 'trie'],
  description: `Given an integer array \`nums\`, return the maximum result of \`nums[i] XOR nums[j]\`, where \`0 <= i <= j < n\`.`,
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
    'Build a binary trie from all numbers (bit 31 down to bit 0). For each number, greedily walk the trie choosing the opposite bit at each level.',
    'Insert each number bit by bit into a trie of [0,1] children. Then for each num, traverse the trie preferring the bit that differs from num\'s current bit.',
    'Alternatively, use a bit-by-bit prefix approach: for each bit from high to low, assume we can achieve it, check if any prefix pair XORs to the target using a HashSet.',
  ],
  functionName: 'findMaximumXOR',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaximumXOR(nums) {
  // Build a binary trie, then greedily pick the opposite bit for each number
  const trie = {};
  for (const num of nums) {
    let node = trie;
    for (let bit = 31; bit >= 0; bit--) {
      const b = (num >> bit) & 1;
      if (!node[b]) node[b] = {};
      node = node[b];
    }
  }
  let max = 0;
  for (const num of nums) {
    let node = trie, xor = 0;
    for (let bit = 31; bit >= 0; bit--) {
      const b = (num >> bit) & 1;
      const want = 1 - b;
      if (node[want]) { xor |= (1 << bit); node = node[want]; }
      else node = node[b];
    }
    max = Math.max(max, xor);
  }
  return max;
}`,
    typescript: `function findMaximumXOR(nums: number[]): number {
  const trie: Record<number, unknown> = {};
  for (const num of nums) {
    let node: Record<number, unknown> = trie;
    for (let bit = 31; bit >= 0; bit--) {
      const b = (num >> bit) & 1;
      if (!node[b]) node[b] = {};
      node = node[b] as Record<number, unknown>;
    }
  }
  let max = 0;
  for (const num of nums) {
    let node: Record<number, unknown> = trie;
    let xor = 0;
    for (let bit = 31; bit >= 0; bit--) {
      const b = (num >> bit) & 1;
      const want = 1 - b;
      if (node[want]) { xor |= (1 << bit); node = node[want] as Record<number, unknown>; }
      else node = node[b] as Record<number, unknown>;
    }
    max = Math.max(max, xor);
  }
  return max;
}`,
    python: `def findMaximumXOR(nums):
    trie = {}
    for num in nums:
        node = trie
        for bit in range(31, -1, -1):
            b = (num >> bit) & 1
            if b not in node:
                node[b] = {}
            node = node[b]
    max_xor = 0
    for num in nums:
        node = trie
        xor = 0
        for bit in range(31, -1, -1):
            b = (num >> bit) & 1
            want = 1 - b
            if want in node:
                xor |= (1 << bit)
                node = node[want]
            else:
                node = node[b]
        max_xor = max(max_xor, xor)
    return max_xor`,
  },
  visibleTests: [
    { args: [[3, 10, 5, 25, 2, 8]], expected: 28 },
    { args: [[14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]], expected: 127 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[0, 1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[8, 10, 2]], expected: 10 },
  ],
};
