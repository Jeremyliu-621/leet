import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-eaten-apples',
  title: 'Maximum Number of Eaten Apples',
  difficulty: 'medium',
  tags: ['heap', 'arrays'],
  description: `There is a special kind of apple tree that grows apples every day for \`n\` days.

On the \`i\`th day, the tree grows \`apples[i]\` apples that will rot after \`days[i]\` days, that is on day \`i + days[i]\` the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any apples, which are denoted by \`apples[i] == 0\` and \`days[i] == 0\`.

You decided to eat **at most** one apple a day (on the days you didn't eat any apple, you still increment the day count). Note that you can keep eating after the first n days.

Given two integer arrays \`days\` and \`apples\` of length \`n\`, return the maximum number of apples you can eat.`,
  constraints: [
    'n == apples.length == days.length',
    '1 <= n <= 2 * 10^4',
    '0 <= apples[i], days[i] <= 2 * 10^4',
    'days[i] = 0 if and only if apples[i] = 0',
  ],
  examples: [
    { input: 'apples = [1,2,3,5,2], days = [3,2,1,4,2]', output: '7' },
    { input: 'apples = [3,0,0,0,0,2], days = [3,1,1,1,1,2]', output: '5' },
  ],
  hints: [
    'Use a min-heap (priority queue) sorted by expiry day.',
    'Each day, add the new apple batch to the heap. Remove all expired batches. Then eat from the batch expiring soonest.',
    'After day n-1, continue eating from remaining batches until the heap is empty.',
  ],
  functionName: 'eatenApples',
  params: ['apples', 'days'],
  starterCode: {
    javascript: 'function eatenApples(apples, days) {\n\n}\n',
    typescript: "function eatenApples(apples: number[], days: number[]): number {\n\n}",

    python: 'def eatenApples(apples, days):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 5, 2], [3, 2, 1, 4, 2]], expected: 7 },
    { args: [[3, 0, 0, 0, 0, 2], [3, 1, 1, 1, 1, 2]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[0, 1], [0, 2]], expected: 1 },
    { args: [[2, 1, 10], [2, 10, 1]], expected: 4 },
  ],
};
