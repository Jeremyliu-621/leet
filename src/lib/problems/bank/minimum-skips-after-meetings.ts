import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-skips-after-meetings',
  title: 'Minimum Skips to Arrive at Meeting On Time',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`dist\` where \`dist[i]\` is the length of the \`i\`th road, and an integer \`speed\` at which you travel. You can choose to **rest** at the end of each road (except the last) which forces you to wait until the next integer hour. Or you can **skip** the rest and continue immediately.

Return the **minimum number of skips** required to arrive at your destination in **at most** \`hoursBefore\` hours. If it is impossible, return \`-1\`.`,
  constraints: [
    '`n == dist.length`',
    '`1 <= n <= 1000`',
    '`1 <= dist[i] <= 10^5`',
    '`1 <= speed <= 10^6`',
    '`1 <= hoursBefore <= 10^7`',
  ],
  examples: [
    {
      input: 'dist = [1,3,2], speed = 4, hoursBefore = 2',
      output: '1',
      explanation: 'Skip the rest after road 0: times are 0.25 + 1 + 0.5 = 1.75 ≤ 2.',
    },
    {
      input: 'dist = [7,3,5,5], speed = 2, hoursBefore = 10',
      output: '2',
      explanation: 'Skip rests after roads 0 and 2: 3.5 + ceil(1.5) + 2.5 + 2.5 = 10 ≤ 10.',
    },
  ],
  hints: [
    'Define dp[i][j] as the minimum total distance (scaled by speed) to travel first i roads with j skips. Avoid floating-point errors by scaling.',
    'Not skipping road i: round up to next multiple of speed. Skipping: add raw dist[i].',
    'For the last road never round up. Answer: min j where dp[n][j] ≤ speed × hoursBefore.',
  ],
  functionName: 'minSkips',
  params: ['dist', 'speed', 'hoursBefore'],
  starterCode: {
    javascript: `function minSkips(dist, speed, hoursBefore) {

}`,
    typescript: `function minSkips(dist: number[], speed: number, hoursBefore: number): number {

}`,
    python: `def minSkips(dist, speed, hoursBefore):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 2], 4, 2], expected: 1 },
    { args: [[7, 3, 5, 5], 2, 10], expected: 2 },
  ],
  hiddenTests: [
    { args: [[7, 3, 5, 5], 2, 11], expected: 1 },
    { args: [[1, 1, 1, 1], 2, 2], expected: 2 },
    { args: [[1, 3, 2], 4, 3], expected: 0 },
    { args: [[1, 1, 1, 1], 2, 3], expected: 1 },
    { args: [[1], 1, 2], expected: 0 },
  ],
};
