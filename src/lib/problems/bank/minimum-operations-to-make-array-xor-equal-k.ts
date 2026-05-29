import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-xor-equal-k',
  title: 'Minimum Number of Operations to Make Array XOR Equal to K',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

You can apply the following operation on the array any number of times:

- Choose **any** element of the array and **flip** a bit in its binary representation. Flipping a bit means changing a \`0\` to \`1\` or vice versa.

Return the **minimum** number of operations required to make the bitwise \`XOR\` of **all** elements of the final array equal to \`k\`.

**Note** that you can flip leading zero bits in the binary representation of elements. For example, for the number \`(101)_2\` you can flip the fourth bit and obtain \`(1101)_2\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
    '0 <= k <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4], k = 1',
      output: '2',
      explanation: 'XOR of all = 2^1^3^4 = 4. We need XOR = 1. diff = 4^1 = 5 = 101₂, which has 2 set bits. Flip 2 bits.',
    },
    {
      input: 'nums = [2,0,2,0], k = 0',
      output: '0',
      explanation: 'XOR of all = 0 = k. No operations needed.',
    },
  ],
  hints: [
    'Compute the current XOR of all elements.',
    'Each single-bit flip changes the overall XOR at exactly that bit position.',
    'The answer is the number of set bits in (currentXOR XOR k).',
  ],
  functionName: 'minOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperations(nums, k) {

}`,
    typescript: "function minOperations(nums: number[], k: number): number {\n\n}",

    python: `def minOperations(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 4], 1], expected: 2 },
    { args: [[2, 0, 2, 0], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0], 0], expected: 0 },
    { args: [[0], 1], expected: 1 },
    { args: [[7], 7], expected: 0 },
    { args: [[1, 2, 4], 7], expected: 0 },
    { args: [[3, 3], 1], expected: 1 },
  ],
};
