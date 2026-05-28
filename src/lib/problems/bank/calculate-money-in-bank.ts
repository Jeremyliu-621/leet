import type { Problem } from '../types';

export const problem: Problem = {
  id: 'calculate-money-in-bank',
  title: 'Calculate Money in Leetcode Bank',
  difficulty: 'easy',
  tags: ['math'],
  description: `Hercy wants to save money for his first car. He puts money in the Leetcode bank **every day**.

He starts by putting in \`$1\` on Monday, the first day. Every day from Tuesday to Sunday, he will put in \`$1\` more than the day before. On every following Monday, he will put in \`$1\` more than the **previous Monday**.

Given \`n\`, return the total amount of money he will have in the Leetcode bank at the end of the \`n\`th day.`,
  constraints: ['1 <= n <= 1000'],
  examples: [
    {
      input: 'n = 4',
      output: '10',
      explanation: 'Day 1 (Mon): $1, Day 2 (Tue): $2, Day 3 (Wed): $3, Day 4 (Thu): $4. Total = 10.',
    },
    {
      input: 'n = 10',
      output: '37',
      explanation: 'Week 1: 1+2+3+4+5+6+7=28. Week 2 starts Mon: $2, 2+3+4=9. Total = 28+9=37.',
    },
    {
      input: 'n = 20',
      output: '96',
    },
  ],
  hints: [
    'Level 1: Simulate day by day. Track which day of the week it is and how much the Monday amount increases.',
    'Level 2: Each Monday adds 1 more than last Monday. Keep week number and day-of-week to compute daily deposit.',
    'Level 3: let total=0,week=0;for(let d=0;d<n;d++){const dow=d%7;if(dow===0)week++;total+=week+dow;}return total;',
  ],
  functionName: 'totalMoney',
  params: ['n'],
  starterCode: {
    javascript: 'function totalMoney(n) {\n  // your code here\n}\n',
    typescript: "function totalMoney(n: number): number {\n  // your code here\n}",

    python: 'def totalMoney(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [4], expected: 10 },
    { args: [10], expected: 37 },
    { args: [20], expected: 96 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [7], expected: 28 },
    { args: [14], expected: 63 },
    { args: [21], expected: 105 },
    { args: [1000], expected: 74926 },
  ],
};
