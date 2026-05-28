import type { Problem } from '../types';

export const problem: Problem = {
  id: 'put-marbles-in-bags',
  title: 'Put Marbles in Bags',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `You have \`k\` bags. You are given a **0-indexed** integer array \`weights\` where \`weights[i]\` is the weight of the \`i\`-th marble. You are also given the integer \`k\`.

Divide the marbles into the \`k\` bags according to the following rules:

- No bag is empty.
- If the \`i\`-th marble and \`j\`-th marble are in a bag, then all marbles with an index between the \`i\`-th and \`j\`-th indices should also be in that bag.
- If a bag consists of all the marbles with an index from \`i\` to \`j\` inclusively, then the cost of the bag is \`weights[i] + weights[j]\`.

The **score** after distributing the marbles is the sum of the costs of all the \`k\` bags.

Return the **difference** between the **maximum** and **minimum** scores among marble distributions.

**Example 1:**
\`\`\`
Input: weights = [1,3,5,1], k = 2
Output: 4
\`\`\`

**Example 2:**
\`\`\`
Input: weights = [1,3], k = 2
Output: 0
\`\`\`

**Constraints:**
- \`1 <= k <= weights.length <= 10^5\`
- \`1 <= weights[i] <= 10^9\``,
  constraints: [
    '1 <= k <= weights.length <= 10^5',
    '1 <= weights[i] <= 10^9',
  ],
  examples: [
    { input: 'weights = [1,3,5,1], k = 2', output: '4' },
    { input: 'weights = [1,3], k = 2', output: '0' },
  ],
  hints: [
    'The total score = weights[0] + weights[n-1] + (sum of pair sums at each split boundary).',
    'There are k-1 split boundaries. Build all n-1 adjacent pair sums: weights[i] + weights[i+1].',
    'Sort them. To maximize, take the k-1 largest pair sums; to minimize, take the k-1 smallest. Return max_total - min_total.',
  ],
  functionName: 'putMarbles',
  params: ['weights', 'k'],
  starterCode: {
    javascript: 'function putMarbles(weights, k) {\n  // your code here\n}\n',
    typescript: "function putMarbles(weights: number[], k: number): number {\n  // your code here\n}",

    python: 'def putMarbles(weights, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,5,1], 2], expected: 4 },
    { args: [[1,3], 2], expected: 0 },
    { args: [[1,4,2,5,3], 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1,2,3], 2], expected: 2 },
    { args: [[1,2,3,4,5], 3], expected: 8 },
    { args: [[1,1,1,1], 2], expected: 0 },
  ],
};
