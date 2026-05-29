import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-minimum-powered-city',
  title: 'Maximize the Minimum Powered City',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`stations\` of length \`n\`, where \`stations[i]\` represents the initial number of power stations at city \`i\`.

Each power station at city \`i\` provides power to every city in the range \`[max(0, i - r), min(n - 1, i + r)]\` (inclusive), where \`r\` is the **radius**.

You are allowed to add at most \`k\` additional power stations (each with the same radius \`r\`, at any city you choose).

Return the **maximum possible minimum power** any city can have after optimally placing the additional stations.`,
  constraints: [
    '1 <= n <= 300',
    '0 <= stations[i] <= 10^4',
    '0 <= r <= 100',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'stations = [1,2,4,5,0], r = 1, k = 2',
      output: '5',
      explanation: 'Adding 2 stations at city 0 (each covers [0,1]) raises city 0\'s power from 3 to 5. Final powers: [5,9,11,9,5]. Minimum is 5.',
    },
    {
      input: 'stations = [4,4,4,4], r = 1, k = 3',
      output: '9',
      explanation: 'Initial powers: [8,12,12,8]. Adding 1 station at city 0 and 1 at city 3 raises each endpoint by 1 (k used = 2; min = 9). One station remains but cannot raise the minimum further.',
    },
  ],
  hints: [
    'Binary search on the answer: check if it\'s possible to achieve a minimum power of m using at most k additional stations.',
    'For feasibility, greedily scan cities left to right. When a city is underpowered, add stations placed r positions to its right (maximizes rightward coverage while still covering the current city).',
    'Track the cumulative effect of added stations with a difference array so each station addition takes O(1) time.',
  ],
  functionName: 'maximizeMinimumPower',
  params: ['stations', 'r', 'k'],
  starterCode: {
    javascript: `function maximizeMinimumPower(stations, r, k) {

}`,
    typescript: 'function maximizeMinimumPower(stations: number[], r: number, k: number): number {\n\n}',
    python: `def maximizeMinimumPower(stations, r, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 5, 0], 1, 2], expected: 5 },
    { args: [[4, 4, 4, 4], 1, 3], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1], 0, 0], expected: 1 },
    { args: [[1, 1, 1], 0, 3], expected: 2 },
    { args: [[1, 1, 1], 1, 1], expected: 3 },
    { args: [[3, 3, 3], 0, 0], expected: 3 },
    { args: [[1, 0, 1], 1, 1], expected: 2 },
    { args: [[5, 0, 5], 1, 1], expected: 6 },
    { args: [[2, 2, 2, 2, 2], 2, 0], expected: 6 },
    { args: [[0, 0, 0], 1, 6], expected: 6 },
  ],
};
