import type { Problem } from '../types';

export const problem: Problem = {
  id: 'assign-cookies',
  title: 'Assign Cookies',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child \`i\` has a greed factor \`g[i]\`, which is the minimum size of a cookie that the child will be content with. Each cookie \`j\` has a size \`s[j]\`. If \`s[j] >= g[i]\`, we can assign the cookie \`j\` to the child \`i\`, and the child \`i\` will be content. Your goal is to maximize the number of your content children and output the maximum number.`,
  constraints: [
    '1 <= g.length <= 3 * 10^4',
    '0 <= s.length <= 3 * 10^4',
    '1 <= g[i], s[j] <= 2^31 - 1',
  ],
  examples: [
    { input: 'g = [1,2,3], s = [1,1]', output: '1', explanation: 'Two cookies of size 1 can only satisfy the child with greed factor 1.' },
    { input: 'g = [1,2], s = [1,2,3]', output: '2', explanation: 'Both children can be satisfied.' },
  ],
  hints: [
    'Sort both arrays. Use a greedy approach: try to satisfy the least greedy child first with the smallest sufficient cookie.',
    'Two-pointer: sort g and s. Use pointer i for children, j for cookies. If s[j] >= g[i], assign the cookie (increment i and j); otherwise skip this cookie (increment j only).',
    'g.sort((a,b)=>a-b);s.sort((a,b)=>a-b);let i=0,j=0;while(i<g.length&&j<s.length){if((s[j]??0)>=(g[i]??0))i++;j++;}return i;',
  ],
  functionName: 'findContentChildren',
  params: ['g', 's'],
  starterCode: {
    javascript: 'function findContentChildren(g, s) {\n  \n}\n',
    typescript: "function findContentChildren(g: number[], s: number[]): number {\n  \n}",

    python: 'def findContentChildren(g, s):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3], [1, 1]], expected: 1 },
    { args: [[1, 2], [1, 2, 3]], expected: 2 },
    { args: [[10, 9, 8, 7], [5, 6, 7, 8]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], []], expected: 0 },
    { args: [[], [1, 2]], expected: 0 },
    { args: [[1, 2, 3], [3]], expected: 1 },
    { args: [[1, 1, 1], [1, 1, 1]], expected: 3 },
    { args: [[5, 4, 3], [1, 2, 3]], expected: 1 },
  ],
};
