import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-buy-pens-and-pencils',
  title: 'Number of Ways to Buy Pens and Pencils',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given an integer \`total\` indicating how much money you have. You are also given two integers \`cost1\` and \`cost2\` indicating the price of a pen and pencil respectively. You may spend **part or all** of your money.

Return the **number of distinct orders** you can make buying **non-negative** numbers of pens and pencils.`,
  constraints: [
    '1 <= total <= 10^6',
    '1 <= cost1, cost2 <= 10^6',
  ],
  examples: [
    {
      input: 'total = 20, cost1 = 10, cost2 = 5',
      output: '9',
      explanation: '(0 pens, 0-4 pencils)=5 ways; (1 pen, 0-2 pencils)=3 ways; (2 pens, 0 pencils)=1 way. Total=9.',
    },
    {
      input: 'total = 5, cost1 = 10, cost2 = 10',
      output: '1',
      explanation: 'Cannot afford any pen. Only (0 pens, 0 pencils).',
    },
  ],
  hints: [
    'Iterate over all possible numbers of pens (0 to total/cost1).',
    'For each pen count p, the number of pencil options is floor((total - p*cost1) / cost2) + 1.',
  ],
  functionName: 'waysToBuyPensPencils',
  params: ['total', 'cost1', 'cost2'],
  starterCode: {
    javascript: `function waysToBuyPensPencils(total, cost1, cost2) {

}`,
    python: `def waysToBuyPensPencils(total, cost1, cost2):
    pass`,
  },
  visibleTests: [
    { args: [20, 10, 5], expected: 9 },
    { args: [5, 10, 10], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 3 },
    { args: [10, 10, 10], expected: 3 },
    { args: [5, 3, 1], expected: 9 },
    { args: [100, 50, 25], expected: 9 },
  ],
};
