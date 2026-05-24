import type { Problem } from '../types';

export const problem: Problem = {
  id: 'can-place-flowers',
  title: 'Can Place Flowers',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You have a long flowerbed in which some plots are planted and some are not. Plots are represented by a binary array where \`1\` means planted and \`0\` means empty.

Flowers cannot be planted in **adjacent** plots.

Given a \`flowerbed\` array and an integer \`n\`, return \`true\` if \`n\` new flowers can be planted without violating the no-adjacent-flowers rule, and \`false\` otherwise.`,
  constraints: [
    '`1 <= flowerbed.length <= 2 * 10^4`',
    '`flowerbed[i]` is `0` or `1`.',
    'There are no two adjacent flowers in the flowerbed.',
    '`0 <= n <= flowerbed.length`',
  ],
  examples: [
    {
      input: 'flowerbed = [1,0,0,0,1], n = 1',
      output: 'true',
      explanation: 'Plant at index 2. Result: [1,0,1,0,1].',
    },
    {
      input: 'flowerbed = [1,0,0,0,1], n = 2',
      output: 'false',
      explanation: 'There is no valid position for a second flower.',
    },
  ],
  hints: [
    'Scan left to right. A plot at index i can be planted if flowerbed[i] === 0, the left neighbor (if it exists) is 0, and the right neighbor (if it exists) is 0.',
    'Greedily plant as soon as a valid spot is found and update the flowerbed.',
  ],
  functionName: 'canPlaceFlowers',
  params: ['flowerbed', 'n'],
  starterCode: {
    javascript: `function canPlaceFlowers(flowerbed, n) {

}`,
    python: `def canPlaceFlowers(flowerbed, n):
    pass`,
  },
  visibleTests: [
    { args: [[1, 0, 0, 0, 1], 1], expected: true },
    { args: [[1, 0, 0, 0, 1], 2], expected: false },
    { args: [[0, 0, 0, 0, 0], 3], expected: true },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: true },
    { args: [[0], 1], expected: true },
    { args: [[1, 0, 0, 0, 0, 0, 1], 2], expected: true },
    { args: [[0, 0, 1, 0, 0], 1], expected: true },
    { args: [[1, 0, 1, 0, 1, 0, 1], 0], expected: true },
  ],
};
