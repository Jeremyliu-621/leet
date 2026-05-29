import type { Problem } from '../types';

export const problem: Problem = {
  id: 'taking-maximum-energy-from-the-mystic-dungeon',
  title: 'Taking Maximum Energy From the Mystic Dungeon',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `In a mystic dungeon, \`n\` magicians are standing in a line. You are given a **0-indexed** integer array \`energy\` and a positive integer \`k\`.

Each magician has an attribute that gives you energy. However, only certain combinations of magicians can transfer energy to you. The energy transfer works as follows:

- Choose a starting magician at index \`s\` (where \`0 <= s < k\`).
- Then, move to each \`k\`-th magician: \`s → s+k → s+2k → ...\` until you go out of bounds.
- At each magician you visit (including the starting one), you gain \`energy[i]\` energy (which may be negative).

Return the **maximum** energy you can gain by choosing the best starting index \`s\` in \`[0, k-1]\`.`,
  constraints: [
    '1 <= energy.length <= 10^5',
    '-10^5 <= energy[i] <= 10^5',
    '1 <= k <= energy.length',
  ],
  examples: [
    {
      input: 'energy = [-2,-3,-1], k = 2',
      output: '-3',
      explanation:
        'Start at s=0: -2 + -1 = -3. Start at s=1: -3. Maximum is -3.',
    },
    {
      input: 'energy = [-1,-2,-3], k = 1',
      output: '-6',
      explanation: 'Must start at s=0 and visit all: -1 + -2 + -3 = -6.',
    },
  ],
  hints: [
    'For starting index s, the total energy is energy[s] + energy[s+k] + energy[s+2k] + ...',
    'Compute suffix sums: for each index i from n-k-1 down to 0, add energy[i+k] to energy[i].',
    'The answer is the maximum of the suffix sums over starting indices 0..k-1.',
  ],
  functionName: 'maximumEnergy',
  params: ['energy', 'k'],
  starterCode: {
    javascript: `function maximumEnergy(energy, k) {

}`,
    typescript: `function maximumEnergy(energy: number[], k: number): number {

}`,
    python: `def maximumEnergy(energy, k):
    pass`,
  },
  visibleTests: [
    { args: [[-2, -3, -1], 2], expected: -3 },
    { args: [[-1, -2, -3], 1], expected: -6 },
  ],
  hiddenTests: [
    { args: [[5, 2, -10, 4], 2], expected: 6 },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: 9 },
    { args: [[3, 3, 3], 1], expected: 9 },
    { args: [[10], 1], expected: 10 },
    { args: [[1, -1, 2], 1], expected: 2 },
    { args: [[5, 4], 1], expected: 9 },
    { args: [[0, 0, 0, 0], 2], expected: 0 },
  ],
};
