import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fair-distribution-of-cookies',
  title: 'Fair Distribution of Cookies',
  difficulty: 'hard',
  tags: ['backtracking', 'arrays'],
  description: `You have \`n\` cookie bags and \`k\` children. \`cookies[i]\` is the number of cookies in bag \`i\`. You must give each bag to exactly one child (no splitting). The **unfairness** is the maximum cookies any one child receives. Return the minimum possible unfairness.

**Backtracking with pruning:** Try assigning each bag to each child. Prune when the current max already exceeds the best answer found. Sort bags descending to prune earlier.`,
  constraints: [
    '2 <= cookies.length <= 8',
    '1 <= cookies[i] <= 10^5',
    '2 <= k <= cookies.length',
  ],
  examples: [
    {
      input: 'cookies = [8,15,10,20,8], k = 2',
      output: '31',
      explanation: 'Assign [15,8,8] and [20,10]: max is max(31,30)=31.',
    },
    {
      input: 'cookies = [6,1,3,2,2,4,1,2], k = 3',
      output: '7',
      explanation: 'One optimal split gives max load = 7.',
    },
  ],
  hints: [
    'Backtrack: for each bag, try assigning to each child. Track current loads.',
    'Prune branches where the current max already >= best answer.',
    'Sort bags in descending order so large bags are placed first (better pruning).',
  ],
  functionName: 'distributeCookies',
  params: ['cookies', 'k'],
  starterCode: {
    javascript: 'function distributeCookies(cookies, k) {\n\n}\n',
    python: 'def distributeCookies(cookies: list, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[8, 15, 10, 20, 8], 2], expected: 31 },
    { args: [[6, 1, 3, 2, 2, 4, 1, 2], 3], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 3], expected: 3 },
    { args: [[10, 1], 1], expected: 11 },
    { args: [[10, 1, 1], 3], expected: 10 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8], 4], expected: 9 },
  ],
};
