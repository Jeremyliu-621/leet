import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-complete-trips',
  title: 'Minimum Time to Complete Trips',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an array \`time\` where \`time[i]\` denotes the time taken by the \`i\`th bus to complete **one trip**.

Each bus can make multiple trips **successively**; that is, the next trip can start **immediately after** completing the current trip. Also, each bus operates **independently**; that is, the trips of one bus do not influence the trips of any other bus.

You are also given an integer \`totalTrips\`, which denotes the number of trips all buses should make **in total**. Return the **minimum time** required for all buses to complete **at least** \`totalTrips\` trips.`,
  constraints: [
    '1 <= time.length <= 10^5',
    '1 <= time[i], totalTrips <= 10^7',
  ],
  examples: [
    {
      input: 'time = [1,2,3], totalTrips = 5',
      output: '3',
      explanation: 'At t=1: bus 0 completes 1 trip. At t=2: bus 0 completes 2, bus 1 completes 1. At t=3: bus 0 completes 3, bus 1 completes 1, bus 2 completes 1. Total = 5.',
    },
    {
      input: 'time = [2], totalTrips = 1',
      output: '2',
      explanation: 'There is only 1 bus; it takes 2 time units for 1 trip.',
    },
  ],
  hints: [
    'Binary search on the answer (time t).',
    'Given time t, the total trips completed is sum(floor(t / time[i])) for all i.',
    'Find the minimum t such that the total trips >= totalTrips.',
  ],
  functionName: 'minimumTime',
  params: ['time', 'totalTrips'],
  starterCode: {
    javascript: `function minimumTime(time, totalTrips) {

}`,
    typescript: "function minimumTime(time: number[], totalTrips: number): number {\n\n}",

    python: `def minimumTime(time, totalTrips):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 5], expected: 3 },
    { args: [[2], 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2], 4], expected: 3 },
    { args: [[5, 10, 10], 9], expected: 25 },
    { args: [[7, 7, 7], 3], expected: 7 },
  ],
};
