import type { Problem } from '../types';

export const problem: Problem = {
  id: 'magnetic-force-between-two-balls',
  title: 'Magnetic Force Between Two Balls',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his **basket**. Rick has \`n\` empty baskets, the \`i\`-th basket is at position \`position[i]\`. Morty wants to distribute \`m\` balls into the baskets such that the **minimum magnetic force** between any two balls is **maximized**.

The magnetic force between two balls at positions \`x\` and \`y\` is \`|x - y|\`.

Given the integer array \`position\` and the integer \`m\`, return the **maximum** possible minimum magnetic force.`,
  constraints: [
    '2 <= n == position.length <= 10^5',
    '1 <= position[i] <= 10^9',
    'All integers in position are distinct.',
    '2 <= m <= position.length',
  ],
  examples: [
    {
      input: 'position = [1,2,3,4,7], m = 3',
      output: '3',
      explanation: 'Distributing the 3 balls into baskets 1, 4, 7 gives a minimum force of 3. No arrangement achieves a larger minimum.',
    },
    {
      input: 'position = [5,4,3,2,1,1000000000], m = 2',
      output: '999999999',
      explanation: 'Use baskets at position 1 and 1000000000. Force = |1 - 1000000000| = 999999999.',
    },
    {
      input: 'position = [0,3,9], m = 3',
      output: '3',
      explanation: 'Place one ball in each basket. Minimum force = min(3-0, 9-3) = 3.',
    },
  ],
  hints: [
    'Binary search on the answer: the minimum magnetic force (distance). The search range is [1, max(position) - min(position)].',
    'For a candidate minimum distance `d`, greedily check if it is possible to place all `m` balls: sort the positions, place the first ball at position[0], then each subsequent ball at the next position at least `d` away from the last placed ball.',
    'If the greedy count of balls placed is ≥ m, then `d` is achievable — try larger. Otherwise, try smaller. Use an upper-biased binary search (`lo = mid`) when searching for the maximum.',
  ],
  functionName: 'maxDistance',
  params: ['position', 'm'],
  starterCode: {
    javascript: `function maxDistance(position, m) {
  position.sort((a, b) => a - b);
  let lo = 1, hi = position[position.length - 1] - position[0];
  // Binary search: find the largest minimum distance that still allows placing m balls
}`,
    typescript: "function maxDistance(position: number[], m: number): number {\n  position.sort((a, b) => a - b);\n  let lo = 1, hi = position[position.length - 1] - position[0];\n  // Binary search: find the largest minimum distance that still allows placing m balls\n}",

    python: `def maxDistance(position, m):
    position.sort()
    lo, hi = 1, position[-1] - position[0]
    # Binary search: find the largest minimum distance that allows placing m balls
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 7], 3], expected: 3 },
    { args: [[5, 4, 3, 2, 1, 1000000000], 2], expected: 999999999 },
    { args: [[0, 3, 9], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2], expected: 2 },
    { args: [[1, 3, 5, 7], 2], expected: 6 },
    { args: [[2, 7, 4, 6, 1, 3, 8], 3], expected: 3 },
    { args: [[1, 5, 9, 15], 3], expected: 6 },
    { args: [[1, 5, 9, 15], 2], expected: 14 },
  ],
};
