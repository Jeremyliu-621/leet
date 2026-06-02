import type { Problem } from '../types';

export const problem: Problem = {
  id: 'difference-between-element-sum-and-digit-sum-of-array',
  title: 'Difference Between Element Sum and Digit Sum of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a positive integer array \`nums\`.

- The **element sum** is the sum of all the elements in \`nums\`.
- The **digit sum** is the sum of all the digits (not necessarily distinct) that appear in \`nums\`.

Return the **absolute** difference between the element sum and digit sum of \`nums\`.

**Note:** The absolute difference between two integers \`x\` and \`y\` is defined as \`|x - y|\`.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '1 <= nums[i] <= 2000',
  ],
  examples: [
    {
      input: 'nums = [1,15,6,3]',
      output: '9',
      explanation: 'Element sum = 1+15+6+3 = 25. Digit sum = 1+1+5+6+3 = 16. |25-16| = 9.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'Element sum = 10. Digit sum = 1+2+3+4 = 10. |10-10| = 0.',
    },
  ],
  hints: [
    'Sum all elements for elementSum. For digitSum, convert each number to a string and sum each digit. Return |elementSum - digitSum|.',
    'For a number like 15: element contribution is 15, digit contribution is 1+5=6. The difference 15-6=9 comes from the positional value of the tens digit.',
    'In fact, elementSum ≥ digitSum is always true (each number ≥ sum of its own digits), so `|x-y|` = `x-y`. But using `Math.abs` is safer.',
  ],
  functionName: 'differenceOfSum',
  params: ['nums'],
  starterCode: {
    javascript: `function differenceOfSum(nums) {
  const elementSum = nums.reduce((a, b) => a + b, 0);
  const digitSum = nums.reduce((a, n) => a + String(n).split('').reduce((s, d) => s + Number(d), 0), 0);
  return Math.abs(elementSum - digitSum);
}`,
    typescript: `function differenceOfSum(nums: number[]): number {
  const elementSum = nums.reduce((a, b) => a + b, 0);
  const digitSum = nums.reduce((a, n) => a + String(n).split('').reduce((s, d) => s + Number(d), 0), 0);
  return Math.abs(elementSum - digitSum);
}`,
    python: `def differenceOfSum(nums):
    element_sum = sum(nums)
    digit_sum = sum(int(d) for n in nums for d in str(n))
    return abs(element_sum - digit_sum)`,
  },
  visibleTests: [
    { args: [[1, 15, 6, 3]], expected: 9 },
    { args: [[1, 2, 3, 4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[10]], expected: 9 },
    { args: [[100]], expected: 99 },
    { args: [[11, 11]], expected: 18 },
    { args: [[1]], expected: 0 },
  ],
};
