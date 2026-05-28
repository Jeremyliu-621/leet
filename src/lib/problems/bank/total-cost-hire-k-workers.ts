import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-cost-hire-k-workers',
  title: 'Total Cost to Hire K Workers',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You are given a 0-indexed integer array \`costs\` where \`costs[i]\` is the cost of hiring the \`i\`th worker. You are also given two integers \`k\` and \`candidates\`.

We want to hire exactly \`k\` workers following these rules:

- You will run exactly \`k\` sessions and hire exactly one worker in each session.
- In each session, choose the worker with the **lowest cost** from either the first \`candidates\` workers or the last \`candidates\` workers (of the remaining pool). Break ties by the **smaller index**.
- If there are fewer than \`candidates\` workers remaining, choose the worker with the lowest cost from all remaining workers.

Return the **total cost** to hire exactly \`k\` workers.`,
  constraints: [
    '1 <= costs.length <= 10^5',
    '1 <= costs[i] <= 10^5',
    '1 <= k <= costs.length',
    '1 <= candidates <= costs.length',
  ],
  examples: [
    {
      input: 'costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4',
      output: '11',
      explanation:
        'Session 1: the first 4 workers have costs [17,12,10,2] and the last 4 have [7,2,11,20]. Pick cost=2 at index 3. Session 2: first 4 are [17,12,10,7], last 4 are [7,2,11,20]. Pick cost=2 at index 5. Session 3: pick cost=7 at index 4. Total = 2+2+7 = 11.',
    },
    {
      input: 'costs = [1,2,4,1], k = 3, candidates = 3',
      output: '4',
    },
  ],
  hints: [
    'Maintain two pools of candidate workers — one from the left end and one from the right end of the array. Use a min-heap to always pick the minimum from these combined pools.',
    'Use two pointers `lo` and `hi` to track which workers have been loaded into the heap. When a worker is hired, add the next available worker from the appropriate side.',
    'Seed the heap with up to `candidates` workers from the left and up to `candidates` workers from the right (careful not to double-count when the pools overlap). After each hire, replenish by advancing the pointer on the side of the hired worker.',
  ],
  functionName: 'totalCost',
  params: ['costs', 'k', 'candidates'],
  starterCode: {
    javascript: `function totalCost(costs, k, candidates) {\n\n}`,
    python: `def totalCost(costs, k, candidates):\n    pass`,
  },
  visibleTests: [
    { args: [[17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4], expected: 11 },
    { args: [[1, 2, 4, 1], 3, 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[10, 1, 11, 10, 10, 10], 3, 2], expected: 21 },
    { args: [[5, 5, 5, 5], 2, 2], expected: 10 },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6], 2, 3], expected: 2 },
  ],
};
