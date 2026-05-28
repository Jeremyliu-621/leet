import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divisible-and-non-divisible-sums-difference',
  title: 'Divisible and Non-divisible Sums Difference',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given positive integers \`n\` and \`m\`.

Define two values:
- \`num1\`: The sum of all integers in the range \`[1, n]\` that are **not divisible** by \`m\`.
- \`num2\`: The sum of all integers in the range \`[1, n]\` that are **divisible** by \`m\`.

Return the integer \`num1 - num2\`.`,
  constraints: [
    '1 <= n, m <= 1000',
  ],
  examples: [
    {
      input: 'n = 10, m = 3',
      output: '19',
      explanation: 'num1 = 1+2+4+5+7+8+10 = 37. num2 = 3+6+9 = 18. num1 - num2 = 37 - 18 = 19.',
    },
    {
      input: 'n = 5, m = 6',
      output: '15',
      explanation: 'num1 = 1+2+3+4+5 = 15 (none divisible by 6). num2 = 0. num1 - num2 = 15.',
    },
  ],
  hints: [
    'Iterate from 1 to n and add each number to num1 or num2 based on divisibility by m.',
    'Return num1 - num2.',
    `\`\`\`js
function differenceOfSums(n, m) {
  let num1 = 0, num2 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) num1 += i; else num2 += i;
  }
  return num1 - num2;
}\`\`\``,
  ],
  functionName: 'differenceOfSums',
  params: ['n', 'm'],
  starterCode: {
    javascript: `function differenceOfSums(n, m) {

}`,
    python: `def differenceOfSums(n, m):
    pass`,
  },
  visibleTests: [
    { args: [10, 3], expected: 19 },
    { args: [5, 6], expected: 15 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: -1 },
    { args: [5, 5], expected: 5 },
    { args: [100, 100], expected: 4850 },
    { args: [6, 2], expected: -3 },
  ],
};
