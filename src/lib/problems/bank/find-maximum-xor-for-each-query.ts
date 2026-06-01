import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-maximum-xor-for-each-query',
  title: 'Maximum XOR for Each Query',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given a sorted array \`nums\` of non-negative integers and an integer \`maximumBit\`.

Answer \`n\` queries in order. For the **i-th query** (0-indexed), find a non-negative integer \`k < 2^maximumBit\` such that:

\`nums[0] XOR nums[1] XOR ... XOR nums[n-1-i] XOR k\`

is **maximized**. Return all answers in an array where the first element is the answer to query 0 (using all \`n\` elements).`,
  constraints: [
    'nums.length == n',
    '1 <= n <= 10^5',
    '1 <= maximumBit <= 20',
    '0 <= nums[i] < 2^maximumBit',
    'nums is sorted in ascending order',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,2,5,7], maximumBit = 3',
      output: '[4,3,6,4,6,7]',
      explanation: 'mask = 7. XOR of all 6 elements is 3, so k=3^7=4. Remove last element (7): XOR=4, k=4^7=3. And so on.',
    },
    {
      input: 'nums = [0,1,1,3], maximumBit = 2',
      output: '[0,3,2,3]',
      explanation: 'mask = 3. Prefix XORs: 0,1,0,3. Queries use prefix XOR of [4,3,2,1] elements XOR mask.',
    },
  ],
  hints: [
    'Level 1: For a given prefix XOR value, flipping all maximumBit bits gives the maximum XOR. The optimal k = prefixXOR XOR mask where mask = 2^maximumBit - 1.',
    'Level 2: Compute the total XOR of all elements. For each query, output (totalXor ^ mask), then remove the last element by XOR-ing it out (since a ^ a = 0).',
    'Level 3: Iterate i from n-1 down to 0. At each step push (xorAll ^ mask) to results, then do xorAll ^= nums[i]. This peels off elements from the right one by one.',
  ],
  functionName: 'getMaximumXor',
  params: ['nums', 'maximumBit'],
  starterCode: {
    javascript: `function getMaximumXor(nums, maximumBit) {
  const n = nums.length;
  const mask = (1 << maximumBit) - 1;
  let xorAll = 0;
  for (const x of nums) xorAll ^= x;
  const result = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(xorAll ^ mask);
    xorAll ^= nums[i];
  }
  return result;
}`,
    typescript: `function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const n = nums.length;
  const mask = (1 << maximumBit) - 1;
  let xorAll = 0;
  for (const x of nums) xorAll ^= x;
  const result: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(xorAll ^ mask);
    xorAll ^= nums[i];
  }
  return result;
}`,
    python: `def getMaximumXor(nums, maximumBit):
    mask = (1 << maximumBit) - 1
    xor_all = 0
    for x in nums:
        xor_all ^= x
    result = []
    for i in range(len(nums) - 1, -1, -1):
        result.append(xor_all ^ mask)
        xor_all ^= nums[i]
    return result`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 2, 5, 7], 3], expected: [4, 3, 6, 4, 6, 7] },
    { args: [[2, 3, 4, 7], 3], expected: [5, 2, 6, 5] },
    { args: [[0, 1, 1, 3], 2], expected: [0, 3, 2, 3] },
  ],
  hiddenTests: [
    { args: [[0], 1], expected: [1] },
    { args: [[1], 1], expected: [0] },
    { args: [[5], 3], expected: [2] },
    { args: [[0, 1], 1], expected: [0, 1] },
  ],
};
