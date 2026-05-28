import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ipo',
  title: 'IPO',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'binary-search'],
  description: `Suppose LeetCode will start its **IPO** soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most \`k\` distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most \`k\` distinct projects.

You are given \`n\` projects where the \`i\`th project has a pure profit \`profits[i]\` and a minimum capital of \`capital[i]\` is needed to start it.

Initially, you have \`w\` capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

Pick a list of **at most** \`k\` distinct projects from given projects to **maximize your final capital**, and return the **final maximized capital**.

The answer is guaranteed to fit in a 32-bit signed integer.`,
  constraints: [
    '`1 <= k <= 10^5`',
    '`0 <= w <= 10^9`',
    '`n == profits.length`',
    '`n == capital.length`',
    '`1 <= n <= 10^5`',
    '`0 <= profits[i] <= 10^4`',
    '`0 <= capital[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]',
      output: '4',
      explanation: 'Start with 0. Do project 0 (capital ≤ 0, profit 1) → w=1. Do project 2 (capital ≤ 1, profit 3) → w=4.',
    },
    {
      input: 'k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]',
      output: '6',
    },
  ],
  hints: [
    'Sort projects by capital requirement. Use a max-heap of available profits. For each of k iterations, add all newly affordable projects to the heap, then pick the most profitable.',
    'Greedy: always pick the highest-profit affordable project. This is optimal because profit is additive and we want to maximize capital at each step.',
    'Use a pointer into the capital-sorted array. At each iteration, advance the pointer and push profits while capital[ptr] <= w. Pop the max-heap for the best profit.',
  ],
  functionName: 'findMaximizedCapital',
  params: ['k', 'w', 'profits', 'capital'],
  starterCode: {
    javascript: 'function findMaximizedCapital(k, w, profits, capital) {\n  \n}\n',
    python: 'def findMaximizedCapital(k, w, profits, capital):\n    pass\n',
  },
  visibleTests: [
    { args: [2, 0, [1, 2, 3], [0, 1, 1]], expected: 4 },
    { args: [3, 0, [1, 2, 3], [0, 1, 2]], expected: 6 },
  ],
  hiddenTests: [
    { args: [1, 0, [1], [0]], expected: 1 },
    { args: [1, 0, [0], [1]], expected: 0 },
    { args: [2, 0, [1, 3], [0, 0]], expected: 4 },
    { args: [1, 5, [1, 2, 3], [1, 1, 1]], expected: 8 },
  ],
};
