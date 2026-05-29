import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-finish-trips',
  title: 'Minimum Time to Complete Trips',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an array \`time\` where \`time[i]\` denotes the time taken by the \`i\`th bus to complete **one trip**. Each bus can make multiple trips **successively**; that is, the next trip can start right after completing the current trip.

Also given is an integer \`totalTrips\`, which denotes the number of trips all buses should make **in total**. Return the **minimum time** required for all buses to complete at least \`totalTrips\` trips.`,
  constraints: [
    '1 <= time.length <= 10^5',
    '1 <= time[i] <= 10^6',
    '1 <= totalTrips <= 10^7',
  ],
  examples: [
    {
      input: 'time = [1,2,3], totalTrips = 5',
      output: '3',
      explanation: 'At t=3: bus 0 does 3 trips, bus 1 does 1, bus 2 does 1 — total 5.',
    },
    {
      input: 'time = [2], totalTrips = 1',
      output: '2',
      explanation: 'Only one bus taking 2 minutes per trip.',
    },
    {
      input: 'time = [5,10,10], totalTrips = 9',
      output: '25',
      explanation: 'At t=25: 25÷5=5 + 25÷10=2 + 25÷10=2 = 9 trips.',
    },
  ],
  hints: [
    'Binary search on the answer T: "can all buses complete totalTrips by time T?"',
    'At time T, bus i completes floor(T / time[i]) trips.',
    'Total trips at time T = sum(floor(T / time[i])). Check if this >= totalTrips.',
    'Search range: [1, min(time) × totalTrips].',
  ],
  functionName: 'minimumTime',
  params: ['time', 'totalTrips'],
  starterCode: {
    javascript: `function minimumTime(time, totalTrips) {
  // Binary search on the minimum time T
}`,
    typescript: `function minimumTime(time: number[], totalTrips: number): number {
  // Binary search on the minimum time T
}`,
    python: `def minimumTime(time, totalTrips):
    # Binary search on the minimum time T
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 5], expected: 3 },
    { args: [[2], 1], expected: 2 },
    { args: [[5, 10, 10], 9], expected: 25 },
  ],
  hiddenTests: [
    { args: [[1], 10], expected: 10 },
    { args: [[2, 3], 4], expected: 6 },
    { args: [[1, 2], 10], expected: 7 },
    { args: [[1, 1, 1], 3], expected: 1 },
    { args: [[3, 6, 9], 6], expected: 12 },
    { args: [[10], 1], expected: 10 },
  ],
};
