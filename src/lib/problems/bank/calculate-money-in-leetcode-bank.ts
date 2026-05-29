import type { Problem } from '../types';

export const problem: Problem = {
  id: 'calculate-money-in-leetcode-bank',
  title: 'Calculate Money in Leetcode Bank',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `Hercy wants to save money for his first car. He puts money in the Leetcode bank **every day**.

He starts by putting in \`$1\` on Monday. **Every day from Tuesday to Sunday**, he will put in \`$1\` more than the day before. On every subsequent Monday, he will put in \`$1\` more than the **previous Monday**.

Given \`n\`, return the **total amount of money** he will have in the Leetcode bank at the end of the \`n\`th day.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 4',
      output: '10',
      explanation: 'Mon: $1, Tue: $2, Wed: $3, Thu: $4. Total = $10.',
    },
    {
      input: 'n = 10',
      output: '37',
      explanation: 'Week 1: 1+2+3+4+5+6+7=28. Week 2 (first 3 days): 2+3+4=9. Total = 37.',
    },
    {
      input: 'n = 20',
      output: '96',
      explanation: 'Week 1: 28, Week 2: 35, partial week 3 (6 days): 3+4+5+6+7+8=33. Total = 96.',
    },
  ],
  hints: [
    'Simulate day by day: track which week (0-indexed) and which day of the week (0-indexed).',
    'The deposit on day d is weekIndex + dayOfWeekIndex + 1.',
    'Alternatively, compute complete weeks using the arithmetic sum formula, then add remaining days.',
  ],
  functionName: 'totalMoney',
  params: ['n'],
  starterCode: {
    javascript: 'function totalMoney(n) {\n  \n}',
    typescript: 'function totalMoney(n: number): number {\n  \n}',
    python: 'def totalMoney(n):\n    ',
  },
  visibleTests: [
    { args: [4], expected: 10 },
    { args: [10], expected: 37 },
    { args: [20], expected: 96 },
  ],
  hiddenTests: [
    { args: [4], expected: 10 },
    { args: [10], expected: 37 },
    { args: [20], expected: 96 },
    { args: [1], expected: 1 },
    { args: [7], expected: 28 },
    { args: [14], expected: 63 },
    { args: [21], expected: 105 },
    { args: [50], expected: 351 },
  ],
};
