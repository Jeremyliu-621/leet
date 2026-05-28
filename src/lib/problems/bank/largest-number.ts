import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-number',
  title: 'Largest Number from Array',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `Given a list of non-negative integers \`nums\`, arrange them so that they form the **largest possible number** and return it as a string.

Since the result may be very large, return it as a string rather than an integer.

**Example:** \`nums = [10, 2]\` → \`"210"\` because placing 2 before 10 gives the larger combined value.

**Edge case:** If all numbers are 0, return \`"0"\` (not \`"00"\`).`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [10,2]',
      output: '"210"',
      explanation: '210 > 102, so place 2 before 10.',
    },
    {
      input: 'nums = [3,30,34,5,9]',
      output: '"9534330"',
      explanation: 'Arranging as 9,5,34,3,30 gives the maximum number 9534330.',
    },
    {
      input: 'nums = [0,0]',
      output: '"0"',
      explanation: 'All zeros — return "0" not "00".',
    },
  ],
  hints: [
    'The key insight: to decide whether number A or B should come first, compare the strings AB vs BA. Use a custom sort comparator based on this comparison.',
    'Convert all numbers to strings. Sort them with a custom comparator: for two strings a and b, compare (b+a) vs (a+b). If b+a > a+b, then b should come first. Join the sorted array and handle the all-zeros edge case.',
    '`const strs = nums.map(String);\nstrs.sort((a, b) => (b + a) > (a + b) ? 1 : -1);\nif (strs[0] === "0") return "0";\nreturn strs.join("");`',
  ],
  functionName: 'largestNumber',
  params: ['nums'],
  starterCode: {
    javascript: 'function largestNumber(nums) {\n  // your code here\n}\n',
    python: 'def largestNumber(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 2]], expected: '210' },
    { args: [[3, 30, 34, 5, 9]], expected: '9534330' },
    { args: [[0, 0]], expected: '0' },
  ],
  hiddenTests: [
    { args: [[1]], expected: '1' },
    { args: [[1, 2, 3]], expected: '321' },
    { args: [[0, 0, 0]], expected: '0' },
    { args: [[100, 10, 1]], expected: '110100' },
    { args: [[121, 12]], expected: '12121' },
  ],
};
