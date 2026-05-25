import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-buy-pens-pencils',
  title: 'Number of Ways to Buy Pens and Pencils',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `You are given a budget of \`total\` dollars. There are two types of items you can buy:
- A pen that costs \`cost1\` dollars.
- A pencil that costs \`cost2\` dollars.

Return the **number of distinct pairs** \`(x, y)\` such that you can buy \`x\` pens and \`y\` pencils and **spend at most** \`total\` dollars. Note that \`x\` and \`y\` can be \`0\`.`,
  constraints: [
    '1 <= total, cost1, cost2 <= 10^6',
  ],
  examples: [
    {
      input: 'total = 20, cost1 = 10, cost2 = 5',
      output: '9',
      explanation: 'x=0: y=0..4 (5 ways); x=1: y=0..2 (3 ways); x=2: y=0 (1 way). Total: 9.',
    },
    {
      input: 'total = 5, cost1 = 10, cost2 = 10',
      output: '1',
      explanation: 'Only (0, 0) since cost1 and cost2 both exceed total.',
    },
  ],
  hints: [
    'Level 1: Iterate over the number of pens x from 0 to total//cost1.',
    'Level 2: For each x, the number of valid y values is Math.floor((total - x*cost1) / cost2) + 1.',
    'Level 3: let ans=0;for(let x=0;x*cost1<=total;x++)ans+=Math.floor((total-x*cost1)/cost2)+1;return ans;',
  ],
  functionName: 'waysToBuyPensPencils',
  params: ['total', 'cost1', 'cost2'],
  starterCode: {
    javascript: 'function waysToBuyPensPencils(total, cost1, cost2) {\n  // your code here\n}\n',
    python: 'def waysToBuyPensPencils(total, cost1, cost2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [20, 10, 5], expected: 9 },
    { args: [5, 10, 10], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 3 },
    { args: [10, 5, 5], expected: 6 },
    { args: [100, 100, 100], expected: 3 },
    { args: [6, 3, 2], expected: 7 },
    { args: [1000000, 1, 1], expected: 500001500001 },
  ],
};
