import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-robots-within-budget',
  title: 'Maximum Number of Robots Within Budget',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `You have **n** robots. You are given two **0-indexed** integer arrays, **chargeTimes** and **runningCosts**, both of length **n**. The total cost of running **k** consecutive robots **starting at index i** is:

\`\`\`
max(chargeTimes[i], ..., chargeTimes[i+k-1]) + k * sum(runningCosts[i], ..., runningCosts[i+k-1])
\`\`\`

You have a **budget** (possibly very large). Return the **maximum** number of consecutive robots you can run within your budget.

**Function signature:** \`maximumRobots(chargeTimes, runningCosts, budget)\``,
  examples: [
    {
      input: 'chargeTimes = [3,6,1,3,4], runningCosts = [2,1,3,4,5], budget = 25',
      output: '3',
      explanation:
        'The best window of 3 consecutive robots is robots 0–2: max(3,6,1) + 3*(2+1+3) = 6 + 18 = 24 ≤ 25.',
    },
    {
      input: 'chargeTimes = [11,12,19], runningCosts = [10,8,7], budget = 19',
      output: '0',
      explanation:
        'No single robot fits: 11+10=21, 12+8=20, 19+7=26. All exceed budget 19.',
    },
  ],
  constraints: [
    'chargeTimes.length == runningCosts.length == n',
    '1 <= n <= 5 * 10^4',
    '1 <= chargeTimes[i], runningCosts[i] <= 10^5',
    '1 <= budget <= 10^15',
  ],
  hints: [
    'Binary search on k (the answer). For a fixed k, check whether any window of exactly k consecutive robots fits within the budget.',
    'To check a fixed k: slide a window of size k across the array. Use a **monotonic deque** to track the maximum chargeTime in the current window in O(1) amortized. Track the running sum of runningCosts.',
    'The feasibility check is O(n). Binary search adds a log factor → total O(n log n).',
  ],
  functionName: 'maximumRobots',
  params: ['chargeTimes', 'runningCosts', 'budget'],
  starterCode: {
    javascript:
      'function maximumRobots(chargeTimes, runningCosts, budget) {\n  \n}\n',
    typescript: "function maximumRobots(chargeTimes: number[], runningCosts: number[], budget: number): number {\n  \n}",

    python: 'def maximumRobots(chargeTimes, runningCosts, budget):\n    ',
  },
  visibleTests: [
    { args: [[3, 6, 1, 3, 4], [2, 1, 3, 4, 5], 25], expected: 3 },
    { args: [[11, 12, 19], [10, 8, 7], 19], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], [1, 1, 1, 1], 100], expected: 4 },
    // k=4: max(1,1,1,1)+4*4=1+16=17≤100 ✓
    { args: [[10], [5], 14], expected: 0 },
    // k=1: 10+1*5=15>14 → no robots fit
    { args: [[10], [5], 15], expected: 1 },
    // k=1: 10+1*5=15≤15 → 1 robot fits
    { args: [[5, 5], [1, 1], 11], expected: 2 },
    // k=2: max(5,5)+2*(1+1)=5+4=9≤11 ✓ → 2 robots fit
    { args: [[100, 1], [1, 100], 110], expected: 1 },
    // k=1: robot0 costs 100+1*1=101≤110 ✓. k=2: 100+2*(1+100)=302>110 → max is 1
  ],
};
