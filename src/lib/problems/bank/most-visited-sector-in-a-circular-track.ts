import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-visited-sector-in-a-circular-track',
  title: 'Most Visited Sector in a Circular Track',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `A circular racetrack has sectors numbered \`1\` through \`n\`. You are given a 2D integer array \`rounds\` where \`rounds[i] = [start_i, finish_i]\` representing the \`i\`th run on the track.

In each run, you travel **clockwise** from sector \`start_i\` to sector \`finish_i\` (both inclusive):
- If \`start_i <= finish_i\`, you visit sectors \`start_i, start_i + 1, ..., finish_i\`.
- If \`start_i > finish_i\`, you wrap around: visiting \`start_i, start_i + 1, ..., n, 1, 2, ..., finish_i\`.

Return the sectors you visit the **most** across all rounds, sorted in **ascending order**.`,
  constraints: [
    '`2 <= n <= 100`',
    '`1 <= rounds.length <= 100`',
    '`rounds[i].length == 2`',
    '`1 <= rounds[i][0], rounds[i][1] <= n`',
  ],
  examples: [
    {
      input: 'n = 3, rounds = [[1,3],[2,3],[1,2]]',
      output: '[2]',
      explanation: 'Sector 1 visited 2×, sector 2 visited 3×, sector 3 visited 2×. Max is 3 → [2].',
    },
    {
      input: 'n = 4, rounds = [[1,3],[3,1],[2,2]]',
      output: '[1,2,3]',
      explanation: '[1,3]: visit 1,2,3. [3,1]: wrap → visit 3,4,1. [2,2]: visit 2. Freq 1→2, 2→2, 3→2, 4→1. Max 2 → [1,2,3].',
    },
    {
      input: 'n = 2, rounds = [[1,2],[2,1]]',
      output: '[1,2]',
      explanation: '[1,2]: visit 1,2. [2,1]: wrap → visit 2,1. Both sectors visited 2×.',
    },
  ],
  hints: [
    'Create a frequency array of size n+1 (1-indexed).',
    'For each round [start, finish]: if start ≤ finish, increment all indices from start to finish. Otherwise, increment start..n and 1..finish.',
    'Find the maximum frequency, then collect all sectors with that frequency in sorted order.',
  ],
  functionName: 'mostVisited',
  params: ['n', 'rounds'],
  starterCode: {
    javascript: `function mostVisited(n, rounds) {

}`,
    typescript: `function mostVisited(n: number, rounds: number[][]): number[] {

}`,
    python: `def mostVisited(n, rounds):
    pass`,
  },
  visibleTests: [
    { args: [3, [[1, 3], [2, 3], [1, 2]]], expected: [2] },
    { args: [4, [[1, 3], [3, 1], [2, 2]]], expected: [1, 2, 3] },
    { args: [2, [[1, 2], [2, 1]]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [1, [[1, 1]]], expected: [1] },
    { args: [4, [[1, 4]]], expected: [1, 2, 3, 4] },
    { args: [5, [[1, 5], [2, 4]]], expected: [2, 3, 4] },
    { args: [6, [[2, 4], [1, 6], [3, 5]]], expected: [3, 4] },
    { args: [3, [[2, 1], [1, 3]]], expected: [1, 2, 3] },
  ],
};
