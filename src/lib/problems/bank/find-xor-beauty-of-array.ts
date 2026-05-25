import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-xor-beauty-of-array',
  title: 'Find XOR Beauty of Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Define the **beauty** of the array as the XOR of all \`nums[i] | nums[j]\` for all valid pairs \`(i, j)\` where \`i <= j\`.

Return the **beauty** of the array.

Note that \`|\` denotes the bitwise OR operator.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,4]',
      output: '5',
      explanation: 'Pairs: (0,0)→1|1=1, (0,1)→1|4=5, (1,1)→4|4=4. XOR: 1^5^4=5.',
    },
    {
      input: 'nums = [5,4,6]',
      output: '7',
      explanation: 'All pairs ORed and XORed together equals 7. Key insight: result equals XOR of all elements.',
    },
  ],
  hints: [
    'For i==j, nums[i]|nums[j]=nums[i]. For i<j, both (i,j) and (j,i) are included, so they cancel out via XOR. The answer is simply XOR of all elements.',
  ],
  functionName: 'xorBeauty',
  params: ['nums'],
  starterCode: {
    javascript: `function xorBeauty(nums) {

}`,
    python: `def xorBeauty(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 4]], expected: 5 },
    { args: [[5, 4, 6]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[0]], expected: 0 },
    { args: [[7]], expected: 7 },
    { args: [[1, 1]], expected: 0 },
  ],
};
