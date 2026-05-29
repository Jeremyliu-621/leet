import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-robots-within-budget',
  title: 'Maximum Number of Robots Within Budget',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `You have \`n\` robots. The \`i\`th robot has a \`chargeTimes[i]\` charge time and \`runningCosts[i]\` running cost per unit time. You want to run some consecutive robots. The **total cost** of running \`k\` consecutive robots starting at index \`i\` is \`max(chargeTimes[i..i+k-1]) + k * sum(runningCosts[i..i+k-1])\`. Given a \`budget\`, return the **maximum** number of consecutive robots you can run such that the total cost does not exceed \`budget\`.`,
  constraints: [
    'chargeTimes.length == runningCosts.length == n',
    '1 <= n <= 5 * 10^4',
    '1 <= budget <= 10^15',
    '1 <= chargeTimes[i], runningCosts[i] <= 10^5',
  ],
  examples: [
    {
      input: 'chargeTimes = [3,6,1,3,4], runningCosts = [2,1,3,4,5], budget = 25',
      output: '3',
      explanation: 'Window [0..2]: max(3,6,1)+3*(2+1+3)=6+18=24≤25. Valid! Window of 4 is too costly.',
    },
    {
      input: 'chargeTimes = [11,12,19], runningCosts = [10,8,7], budget = 19',
      output: '0',
      explanation: 'Every single robot exceeds budget: 11+10=21, 12+8=20, 19+7=26.',
    },
  ],
  hints: [
    'Binary search on k. For a fixed k, check all windows of size k in O(n) using monotonic deque for max and prefix sums for sum.',
    'For window [i..i+k-1]: cost = max(chargeTimes[i..i+k-1]) + k * sum(runningCosts[i..i+k-1]).',
    'A monotonic deque (decreasing) tracks max(chargeTimes) in O(1) amortized per window slide.',
  ],
  functionName: 'maximumRobots',
  params: ['chargeTimes', 'runningCosts', 'budget'],
  starterCode: {
    javascript: `function maximumRobots(chargeTimes, runningCosts, budget) {
  // Binary search on k + sliding window with deque for max
}`,
    typescript: `function maximumRobots(chargeTimes: number[], runningCosts: number[], budget: number): number {
  // Binary search on k + sliding window with deque for max
}`,
    python: `def maximumRobots(chargeTimes, runningCosts, budget):
    # Binary search on k + sliding window with deque for max
    pass`,
  },
  visibleTests: [
    { args: [[3,6,1,3,4], [2,1,3,4,5], 25], expected: 3 },
    { args: [[11,12,19], [10,8,7], 19], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], [1], 2], expected: 1 },
    { args: [[1], [1], 1], expected: 0 },
    { args: [[5,5], [1,1], 9], expected: 2 },
    { args: [[10,10], [5,5], 25], expected: 1 },
    { args: [[1,1,1], [1,1,1], 5], expected: 2 },
  ],
};
