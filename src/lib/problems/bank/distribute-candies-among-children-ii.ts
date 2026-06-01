import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-candies-among-children-ii',
  title: 'Distribute Candies Among Children II',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given two positive integers \`n\` and \`limit\`.

Return the **total number** of ways to distribute \`n\` candies among \`3\` children such that no child gets more than \`limit\` candies.`,
  constraints: [
    '1 <= n <= 10^6',
    '1 <= limit <= 10^6',
  ],
  examples: [
    {
      input: 'n = 3, limit = 3',
      output: '10',
      explanation: 'Total distributions (a,b,c) with a+b+c=3, 0<=a,b,c<=3: (0,0,3),(0,3,0),(3,0,0),(0,1,2),(0,2,1),(1,0,2),(2,0,1),(1,2,0),(2,1,0),(1,1,1) — 10 ways.',
    },
    {
      input: 'n = 1, limit = 1',
      output: '3',
      explanation: 'Distributions: (1,0,0),(0,1,0),(0,0,1) — 3 ways.',
    },
  ],
  hints: [
    'Use inclusion-exclusion. The total without any constraint (stars and bars) is C(n+2, 2).',
    'Let A_i = event that child i gets more than limit. Use |A_1 ∪ A_2 ∪ A_3| = 3|A_1| - 3|A_1 ∩ A_2| + |A_1 ∩ A_2 ∩ A_3|.',
    'If child gets > limit, substitute a = a\' + limit+1: then a\'+b+c = n-(limit+1). |A_i| = C(n-limit+1, 2) if n-limit-1 >= 0 else 0. Apply the inclusion-exclusion formula and return the answer.',
  ],
  functionName: 'distributeCandies',
  params: ['n', 'limit'],
  starterCode: {
    javascript: 'function distributeCandies(n, limit) {\n  \n}\n',
    typescript: 'function distributeCandies(n: number, limit: number): number {\n  \n}',
    python: 'def distributeCandies(n, limit):\n    pass\n',
  },
  visibleTests: [
    { args: [3, 3], expected: 10 },
    { args: [1, 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [2, 1], expected: 3 },
    { args: [5, 5], expected: 21 },
    { args: [3, 1], expected: 1 },
    { args: [6, 3], expected: 10 },
    { args: [4, 2], expected: 6 },
  ],
};
