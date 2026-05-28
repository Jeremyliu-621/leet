import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-cost-to-hire-k-workers',
  title: 'Total Cost to Hire K Workers',
  difficulty: 'medium',
  tags: ['heap', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`costs\` where \`costs[i]\` is the cost of hiring the \`i\`th worker.

You are also given two integers \`k\` and \`candidates\`. We want to hire exactly \`k\` workers following these rules:
- You will run \`k\` sessions and hire exactly one worker in each session.
- In each session, choose the worker with the **lowest** cost from either the first \`candidates\` workers or the last \`candidates\` workers. Break the tie by choosing the smallest index.
- If there are fewer than \`candidates\` workers remaining, choose the worker with the lowest cost among them.

Return *the total cost to hire exactly* \`k\` *workers*.

**Example 1:**
\`\`\`
Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
Output: 11
Explanation: Hire worker 3 (cost=2), worker 5 (cost=2), worker 6 (cost=7). Total = 11.
\`\`\`

**Example 2:**
\`\`\`
Input: costs = [1,2,4,1], k = 3, candidates = 3
Output: 4
\`\`\``,
  examples: [
    { input: '[17,12,10,2,7,2,11,20,8], 3, 4', output: '11' },
    { input: '[1,2,4,1], 3, 3', output: '4' },
  ],
  constraints: [
    '1 <= costs.length <= 10^5',
    '1 <= costs[i] <= 10^5',
    '1 <= k, candidates <= costs.length',
  ],
  hints: [
    'Use two min-heaps (or a single heap with tagged indices): one for the left candidates and one for the right candidates.',
    'Maintain left and right pointers. In each round, pick the minimum from either heap; if tie, pick left.',
    'After picking from one side, expand that side by one from the pointer.',
  ],
  functionName: 'totalCost',
  params: ['costs', 'k', 'candidates'],
  starterCode: {
    javascript: `function totalCost(costs, k, candidates) {

}`,
    python: `def totalCost(costs, k, candidates):
    `,
  },
  visibleTests: [
    { args: [[17,12,10,2,7,2,11,20,8], 3, 4], expected: 11 },
    { args: [[1,2,4,1], 3, 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1,1,1,1], 4, 2], expected: 4 },
    { args: [[31,25,72,79,74,65,84,91,45,94,92], 3, 4], expected: 101 },
    { args: [[10,20,5], 1, 1], expected: 5 },
  ],
};
