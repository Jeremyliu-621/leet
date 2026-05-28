import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-xor-equal-to-k',
  title: 'Minimum Number of Operations to Make Array XOR Equal to K',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

You can apply the following operation on the array any number of times:

- Choose any element of the array and **flip** a bit in its binary representation. Flipping a bit means changing a \`0\` to \`1\` or vice versa.

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
      explanation: 'XOR of nums = 2^1^3^4 = 4. 4 XOR 1 = 5 = (101)₂, which has 2 set bits. Minimum 2 operations.',
    },
    {
      input: 'nums = [2,0,2,0], k = 0',
      output: '0',
      explanation: 'XOR of nums = 0 = k. No operations needed.',
    },
  ],
  hints: [
    'The XOR of all elements is what we want to change.',
    'Flipping one bit of any element changes exactly one bit of the total XOR.',
    'Count the number of differing bits between the current XOR and k: that is popcount(xorAll ^ k).',
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
    { args: [[0], 1], expected: 1 },
    { args: [[1, 2, 3], 0], expected: 0 },
    { args: [[1, 1, 1], 1], expected: 0 },
    { args: [[7], 3], expected: 1 },
  ],
};
