import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-speed-to-arrive-on-time',
  title: 'Minimum Speed to Arrive on Time',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given a floating-point number \`hour\`, representing the amount of time you have to reach the office. To commute to the office, you must take \`n\` trains in order. You can only take the \`i\`th train if you are ready at the \`i\`th station at the **start** of the train's schedule.

You are given an integer array \`dist\`, where \`dist[i]\` is the distance of the \`i\`th train. Each train can only depart at integer hours, so you may need to wait in between each train.

You are also given a floating-point number \`hour\`, representing the amount of time you have to reach the office (including waiting time).

Return the **minimum positive integer speed** (in kilometers per hour) that all the trains must travel at for you to reach the office on time, or \`-1\` if it is impossible to be on time.

**Note:** The last train takes exactly \`dist[n-1] / speed\` time (no waiting, no ceiling).`,
  constraints: [
    'n == dist.length',
    '1 <= n <= 10^5',
    '1 <= dist[i] <= 10^5',
    '1 <= hour <= 10^9',
    'There will be at most two digits after the decimal point in hour',
  ],
  examples: [
    {
      input: 'dist = [1,3,2], hour = 6',
      output: '1',
      explanation: 'At speed 1: trip 1 takes 1h (wait 0), trip 2 takes 3h (wait 0), trip 3 takes 2h. Total = 6h.',
    },
    {
      input: 'dist = [1,3,2], hour = 2.7',
      output: '3',
      explanation: 'At speed 3: trip 1 takes ceil(1/3)=1h, trip 2 takes ceil(3/3)=1h, trip 3 takes 2/3≈0.67h. Total ≈ 2.67h ≤ 2.7h.',
    },
    {
      input: 'dist = [1,3,2], hour = 1.9',
      output: '-1',
      explanation: 'You need at least 2 trains before the last, so at least 2 integer-hour waits. Impossible to finish in 1.9h.',
    },
  ],
  hints: [
    'Binary search on speed. For a given speed, compute the total time as sum of ceil(dist[i]/speed) for i<n-1, plus dist[n-1]/speed.',
    'If n > hour (must wait at least n-1 hours for intermediate trains), return -1.',
    'Upper bound for speed: max(dist) * 10^7 or simplify to 10^7.',
  ],
  functionName: 'minSpeedOnTime',
  params: ['dist', 'hour'],
  starterCode: {
    javascript: `function minSpeedOnTime(dist, hour) {

}`,
    typescript: "function minSpeedOnTime(dist: number[], hour: number): number {\n\n}",

    python: `def minSpeedOnTime(dist, hour):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 2], 6], expected: 1 },
    { args: [[1, 3, 2], 2.7], expected: 3 },
    { args: [[1, 3, 2], 1.9], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 1], 3], expected: 1 },
    { args: [[1, 1, 100000], 2.01], expected: 10000000 },
  ],
};
