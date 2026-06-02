import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-bitwise-or-has-trailing-zeros',
  title: 'Check if Bitwise OR Has Trailing Zeros',
  difficulty: 'easy',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an array of positive integers \`nums\`.

You have to check if it is possible to select **two or more** elements in the array such that the bitwise \`OR\` of the selected elements has **at least** one trailing zero in its binary representation.

For example, the binary representation of \`5\` is \`"101"\`, which does not have any trailing zeros. The binary representation of \`4\` is \`"100"\`, which has two trailing zeros.

Return \`true\` if it is possible to select two or more elements whose bitwise \`OR\` has trailing zeros, otherwise return \`false\`.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: 'true',
      explanation:
        'We can select 2 and 4. Their bitwise OR is 6 (binary: 110), which has one trailing zero.',
    },
    {
      input: 'nums = [2,4,8,16]',
      output: 'true',
      explanation: 'All elements are even. Selecting any two gives an OR with trailing zeros.',
    },
    {
      input: 'nums = [1,3,5,7,9]',
      output: 'false',
      explanation:
        'All elements are odd. Any OR of odd numbers is also odd, which has no trailing zeros.',
    },
  ],
  hints: [
    'A bitwise OR has trailing zeros only if all selected elements have their last bit set to 0 (i.e., all are even).',
    'So the question reduces to: are there at least 2 even numbers in nums?',
    'Count even numbers and return true if count >= 2.',
  ],
  functionName: 'hasTrailingZeros',
  params: ['nums'],
  starterCode: {
    javascript: `function hasTrailingZeros(nums) {
  return nums.filter(n => n % 2 === 0).length >= 2;
}`,
    typescript: `function hasTrailingZeros(nums: number[]): boolean {
  return nums.filter(n => n % 2 === 0).length >= 2;
}`,
    python: `def hasTrailingZeros(nums):
    return sum(1 for n in nums if n % 2 == 0) >= 2`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[2, 4, 8, 16]], expected: true },
    { args: [[1, 3, 5, 7, 9]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: false },
    { args: [[2, 2]], expected: true },
    { args: [[4, 8]], expected: true },
    { args: [[1, 1, 1, 2]], expected: false },
    { args: [[2, 2, 3]], expected: true },
    { args: [[1, 2, 4]], expected: true },
    { args: [[99, 97, 95]], expected: false },
  ],
};
