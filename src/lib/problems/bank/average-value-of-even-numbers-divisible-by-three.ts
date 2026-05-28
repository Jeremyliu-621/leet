import type { Problem } from '../types';

export const problem: Problem = {
  id: 'average-value-of-even-numbers-divisible-by-three',
  title: 'Average Value of Even Numbers That Are Divisible by Three',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` of **positive** integers, return the average value of all **even** integers that are divisible by \`3\`.

Note that the **average** of \`n\` elements is the **sum** of the \`n\` elements divided by \`n\` and **rounded down** to the nearest integer.

Return \`0\` if there are no such integers.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,3,6,10,12,15]',
      output: '9',
      explanation: 'Even and divisible by 3: 6, 12. Average = (6+12)/2 = 9.',
    },
    {
      input: 'nums = [1,2,4,7,10]',
      output: '0',
      explanation: 'No element is both even and divisible by 3 (no multiples of 6).',
    },
  ],
  hints: [
    'An even number divisible by 3 is a multiple of 6 (LCM of 2 and 3).',
    'Filter nums for n % 6 === 0. If empty, return 0.',
    'Return Math.floor(sum / count).',
  ],
  functionName: 'averageValue',
  params: ['nums'],
  starterCode: {
    javascript: `function averageValue(nums) {

}`,
    python: `def averageValue(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 6, 10, 12, 15]], expected: 9 },
    { args: [[1, 2, 4, 7, 10]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[6]], expected: 6 },
    { args: [[6, 12, 18]], expected: 12 },
    { args: [[3, 6, 9, 12]], expected: 9 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
};
