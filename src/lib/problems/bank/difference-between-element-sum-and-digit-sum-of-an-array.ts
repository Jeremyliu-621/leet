import type { Problem } from '../types';

export const problem: Problem = {
  id: 'difference-between-element-sum-and-digit-sum-of-an-array',
  title: 'Difference Between Element Sum and Digit Sum of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a positive integer array \`nums\`.

- The **element sum** is the sum of all the elements in \`nums\`.
- The **digit sum** is the sum of all the digits (not necessarily distinct) that appear in \`nums\`.

Return the **absolute** difference between the element sum and digit sum of \`nums\`.

**Note:** that the absolute difference between two integers \`a\` and \`b\` is defined as \`|a - b|\`.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '1 <= nums[i] <= 2000',
  ],
  examples: [
    {
      input: 'nums = [1,15,6,3]',
      output: '9',
      explanation: 'Element sum = 25. Digit sum = 1+1+5+6+3 = 16. |25-16| = 9.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'Element sum = 10. Digit sum = 1+2+3+4 = 10. |10-10| = 0.',
    },
  ],
  hints: [
    'For single-digit elements, the element sum and digit sum contribution are equal.',
    'The difference only arises from multi-digit numbers: a number n >= 10 contributes n to element sum but only sum-of-digits to digit sum. Since n >= sum-of-digits for all positive integers, element sum >= digit sum, so the result is always element sum - digit sum.',
    'Iterate over nums: add each value to elementSum and add each of its digits to digitSum.',
  ],
  functionName: 'differenceOfSum',
  params: ['nums'],
  starterCode: {
    javascript: `function differenceOfSum(nums) {
  let elemSum = 0, digitSum = 0;
  for (const n of nums) {
    elemSum += n;
    let v = n;
    while (v > 0) { digitSum += v % 10; v = Math.floor(v / 10); }
  }
  return elemSum - digitSum;
}`,
    typescript: `function differenceOfSum(nums: number[]): number {
  let elemSum = 0, digitSum = 0;
  for (const n of nums) {
    elemSum += n;
    let v = n;
    while (v > 0) { digitSum += v % 10; v = Math.floor(v / 10); }
  }
  return elemSum - digitSum;
}`,
    python: `def differenceOfSum(nums: list[int]) -> int:
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    elem_sum = sum(int(x) for x in nums)
    digit_sum = sum(int(d) for n in nums for d in str(int(n)))
    return elem_sum - digit_sum`,
  },
  visibleTests: [
    { args: [[1, 15, 6, 3]], expected: 9 },
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[10]], expected: 9 },
    { args: [[100]], expected: 99 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[9]], expected: 0 },
    { args: [[11]], expected: 9 },
    { args: [[999]], expected: 972 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[10, 20, 30]], expected: 54 },
    { args: [[2000]], expected: 1998 },
    { args: [[1, 10, 100, 1000]], expected: 1107 },
  ],
};
