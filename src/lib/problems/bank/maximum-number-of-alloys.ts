import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-alloys',
  title: 'Maximum Number of Alloys',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are the owner of a company that manufactures alloys using various types of metals. There are \`n\` metal types. You have \`k\` machines, each of which can manufacture alloys. The \`i-th\` machine requires \`composition[i][j]\` units of metal \`j\` to create one alloy.

You have a stock of \`stock[j]\` units of metal \`j\`, and you can buy additional units of metal \`j\` for \`cost[j]\` coins each.

Given a budget of \`budget\` coins, return the **maximum number of alloys** any single machine can produce. Each machine manufactures alloys independently.

**Note:** You can only use one machine at a time to maximize output.`,
  constraints: [
    '1 <= n, k <= 100',
    '0 <= budget <= 10^8',
    'composition.length == k',
    'composition[i].length == n',
    '1 <= composition[i][j] <= 100',
    'stock.length == n',
    '0 <= stock[j] <= 10^8',
    'cost.length == n',
    '1 <= cost[j] <= 100',
  ],
  examples: [
    {
      input: 'n=3, k=2, budget=15, composition=[[1,1,1],[1,1,10]], stock=[0,0,100], cost=[1,2,3]',
      output: '5',
      explanation: 'Machine 0 uses metals 0,1,2. stock[2]=100 so metal 2 is free. Need to buy x of metal 0 (cost 1 each) and x of metal 1 (cost 2 each). Total cost = 3x ≤ 15 → x=5.',
    },
    {
      input: 'n=3, k=2, budget=15, composition=[[1,1,1],[1,1,10]], stock=[0,0,0], cost=[1,2,3]',
      output: '2',
      explanation: 'Machine 0: cost = x*(1+2+3) = 6x ≤ 15 → x=2. Machine 1: 33x ≤ 15 → x=0. Max = 2.',
    },
    {
      input: 'n=2, k=3, budget=10, composition=[[2,1],[1,2],[1,1]], stock=[1,1], cost=[5,5]',
      output: '2',
      explanation: 'Machine 2 (composition=[1,1]): at x=2, need 1 more of each (stock covers 1) → cost = 2*5 = 10 ≤ 10. Max = 2.',
    },
  ],
  hints: [
    'Binary search on the answer: can we produce at least `x` alloys using machine `i`?',
    'For a given machine `i` and target `x`, the cost to buy missing metals is `sum over j of max(0, x * composition[i][j] - stock[j]) * cost[j]`.',
    'Binary search on `x` in range [1, 10^8]. For each candidate `x`, check if any machine can produce `x` alloys within the budget.',
  ],
  functionName: 'maxNumberOfAlloys',
  params: ['n', 'k', 'budget', 'composition', 'stock', 'cost'],
  starterCode: {
    javascript: 'function maxNumberOfAlloys(n, k, budget, composition, stock, cost) {\n  // your code here\n}\n',
    typescript: "function maxNumberOfAlloys(n: number, k: number, budget: number, composition: number[][], stock: number[], cost: number[]): number {\n  // your code here\n}",

    python: 'def maxNumberOfAlloys(n, k, budget, composition, stock, cost):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [3, 2, 15, [[1, 1, 1], [1, 1, 10]], [0, 0, 100], [1, 2, 3]],
      expected: 5,
    },
    {
      args: [3, 2, 15, [[1, 1, 1], [1, 1, 10]], [0, 0, 0], [1, 2, 3]],
      expected: 2,
    },
    {
      args: [2, 3, 10, [[2, 1], [1, 2], [1, 1]], [1, 1], [5, 5]],
      expected: 2,
    },
  ],
  hiddenTests: [
    {
      args: [1, 1, 0, [[1]], [0], [1]],
      expected: 0,
    },
    {
      args: [1, 1, 100, [[1]], [50], [1]],
      expected: 150,
    },
    {
      args: [2, 2, 20, [[1, 2], [2, 1]], [5, 5], [3, 3]],
      expected: 5,
    },
    {
      args: [3, 1, 0, [[1, 1, 1]], [10, 10, 10], [1, 1, 1]],
      expected: 10,
    },
  ],
};
