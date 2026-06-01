import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-xor-equal-to-k',
  title: 'Minimum Operations to Make Array XOR Equal to k',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

You can apply the following operation on the array any number of times:

- Choose any element of the array and **flip** a bit in its binary representation. Flipping a bit means changing a \`0\` to \`1\` or a \`1\` to \`0\`.

Return the **minimum** number of operations required to make the bitwise XOR of all elements of the final array equal to \`k\`.

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
      explanation: 'XOR of all elements = 2^1^3^4 = 4 = (100)_2. k=1=(001)_2. Difference in bits: (101)_2 = 2 bits. Need 2 flip operations.',
    },
    {
      input: 'nums = [2,0,2,0], k = 0',
      output: '0',
      explanation: 'XOR = 2^0^2^0 = 0 = k. No operations needed.',
    },
  ],
  hints: [
    'The XOR of all elements must equal k after all operations.',
    'Each flip operation changes exactly one bit in the XOR value.',
    'Compute current XOR of all elements, then count the number of bit positions where it differs from k (= popcount(xorAll ^ k)).',
  ],
  functionName: 'minOperationsXor',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minOperationsXor(nums, k) {\n  \n}\n',
    typescript: 'function minOperationsXor(nums: number[], k: number): number {\n  \n}',
    python: 'def minOperationsXor(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3, 4], 1], expected: 2 },
    { args: [[2, 0, 2, 0], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[3, 3], 0], expected: 0 },
    { args: [[1, 2], 3], expected: 0 },
    { args: [[0], 7], expected: 3 },
  ],
};
