import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-xor-of-numbers-appearing-twice',
  title: 'Find XOR of Numbers Which Appear Twice',
  difficulty: 'easy',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given a 0-indexed integer array \`nums\` where every element appears **exactly once** or **exactly twice**.

Return the **bitwise XOR** of all elements that appear **exactly twice**, or \`0\` if no element appears twice.

**Constraints:**
- \`1 ≤ nums.length ≤ 50\`
- \`1 ≤ nums[i] ≤ 50\``,
  examples: [
    {
      input: 'nums = [1,2,1,3]',
      output: '1',
      explanation: 'Only 1 appears twice. XOR = 1.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No element appears twice. Return 0.',
    },
    {
      input: 'nums = [1,2,1,3,2]',
      output: '3',
      explanation: '1 and 2 each appear twice. XOR = 1 ^ 2 = 3.',
    },
  ],
  constraints: ['Count frequency of each element; XOR those with count 2.'],
  hints: [
    'Use a frequency map or an array of size 51 to count occurrences.',
    'After counting, XOR together every element whose count is exactly 2.',
    'Since XOR(x, x) = 0, elements that appear once cancel out — but here you need to be selective.',
  ],
  params: ['nums'],
  starterCode: {
    javascript: `function duplicateNumbersXOR(nums) {

}`,
    typescript: `function duplicateNumbersXOR(nums: number[]): number {

}`,
    python: `def duplicateNumbersXOR(nums: list[int]) -> int:
    pass`,
  },
  functionName: 'duplicateNumbersXOR',
  visibleTests: [
    { args: [[1, 2, 1, 3]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 2, 1, 3, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[5, 5]], expected: 5 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 0 },
    { args: [[7, 3, 7, 5, 3]], expected: 4 },
    { args: [[10, 20, 30, 10]], expected: 10 },
    { args: [[4, 2, 4, 3, 2]], expected: 6 },
  ],
};
