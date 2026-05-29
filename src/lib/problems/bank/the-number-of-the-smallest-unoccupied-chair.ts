import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-number-of-the-smallest-unoccupied-chair',
  title: 'The Number of the Smallest Unoccupied Chair',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'simulation'],
  description: `There is a party where \`n\` friends numbered from \`0\` to \`n - 1\` are attending. There is an **infinite** number of chairs in this party that are numbered from \`0\` to \`infinity\`. When a friend arrives at the party, they sit on the **unoccupied** chair with the **smallest number**.

- When a friend leaves the party, their chair becomes unoccupied at the moment they leave.
- If a friend arrives at the same time another leaves, the chair is available for the arriving friend.

You are given a **0-indexed** 2D integer array \`times\` where \`times[i] = [arrival_i, leaving_i]\`, indicating the arrival and leaving times of the \`i\`th friend respectively, and an integer \`targetFriend\`. All arrival times are **distinct**.

Return the **chair number** that the friend numbered \`targetFriend\` will sit on.`,
  constraints: [
    'n == times.length',
    '2 <= n <= 10^4',
    'times[i].length == 2',
    '1 <= arrival_i < leaving_i <= 10^5',
    '0 <= targetFriend <= n - 1',
    'Each arrival_i time is distinct.',
  ],
  examples: [
    {
      input: 'times = [[1,4],[2,3],[4,6]], targetFriend = 1',
      output: '1',
      explanation: 'Friend 0 arrives at t=1, sits in chair 0. Friend 1 arrives at t=2, sits in chair 1. Friend 1 (target) sits on chair 1.',
    },
    {
      input: 'times = [[3,10],[1,5],[2,6]], targetFriend = 0',
      output: '2',
      explanation: 'Friend 1 arrives first (t=1), chair 0. Friend 2 arrives at t=2, chair 1. Friend 0 (target) arrives at t=3, chair 2.',
    },
  ],
  hints: [
    'Sort events by arrival time, but track original indices to find targetFriend.',
    'Use a min-heap for available chairs and another for (leaveTime, chair) pairs to free chairs.',
    'Process arrivals in order: first free all chairs where leaveTime <= arrival, then assign the smallest available chair.',
  ],
  functionName: 'smallestChair',
  params: ['times', 'targetFriend'],
  starterCode: {
    javascript: `function smallestChair(times, targetFriend) {

}`,
    typescript: `function smallestChair(times: number[][], targetFriend: number): number {

}`,
    python: `def smallestChair(times, targetFriend):
    pass`,
  },
  visibleTests: [
    { args: [[[1,4],[2,3],[4,6]], 1], expected: 1 },
    { args: [[[3,10],[1,5],[2,6]], 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1,2],[2,3]], 0], expected: 0 },
    { args: [[[1,2],[2,3]], 1], expected: 0 },
    { args: [[[5,10],[1,2],[3,4]], 0], expected: 0 },
    { args: [[[1,10],[2,3],[4,5],[6,7]], 0], expected: 0 },
    { args: [[[1,10],[2,3],[4,5],[6,7]], 1], expected: 1 },
    { args: [[[1,10],[2,3],[4,5],[6,7]], 3], expected: 1 },
  ],
};
