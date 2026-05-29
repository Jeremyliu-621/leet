import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-after-operations',
  title: 'Maximum XOR After Operations',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation, select any non-negative integer \`x\` and an index \`i\`, then **update** \`nums[i]\` to be equal to \`nums[i] AND (nums[i] XOR x)\`.

Note that \`AND\` is the bitwise AND operation, and \`XOR\` is the bitwise XOR operation.

Return the **maximum** possible bitwise XOR of all elements of \`nums\` after applying the operation **any number of times**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^8',
  ],
  examples: [
    {
      input: 'nums = [3,2,4,6]',
      output: '7',
      explanation: 'Apply the operation to each element. The maximum XOR is 7.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '3',
    },
    {
      input: 'nums = [0]',
      output: '0',
    },
  ],
  hints: [
    'The operation nums[i] = nums[i] AND (nums[i] XOR x) can only clear bits of nums[i] — it cannot set new bits.',
    'For a given bit position b, if any element originally has bit b set, we can make exactly 1 element have that bit (clear it from all others).',
    'To maximize XOR, we want as many bit positions as possible to appear an odd number of times. The answer is the bitwise OR of all elements.',
  ],
  functionName: 'maximumXOR',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumXOR(nums) {\n\n}\n',
    typescript: "function maximumXOR(nums: number[]): number {\n\n}",

    python: 'def maximumXOR(nums: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[3,2,4,6]], expected: 7 },
    { args: [[1,2,3]], expected: 3 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5,3]], expected: 7 },
    { args: [[0,0,0]], expected: 0 },
    { args: [[15,9,6]], expected: 15 },
  ],
};
