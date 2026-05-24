import type { Problem } from '../types';

export const problem: Problem = {
  id: 'can-place-flowers',
  title: 'Can Place Flowers',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You have a long flowerbed in which some plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array \`flowerbed\` containing \`0\`s and \`1\`s, where \`0\` means empty and \`1\` means not empty, and an integer \`n\`, return \`true\` if \`n\` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and \`false\` otherwise.`,
  constraints: [
    '1 <= flowerbed.length <= 2 * 10^4',
    'flowerbed[i] is 0 or 1',
    'There are no two adjacent flowers in flowerbed',
    '0 <= n <= flowerbed.length',
  ],
  examples: [
    { input: 'flowerbed = [1,0,0,0,1], n = 1', output: 'true' },
    { input: 'flowerbed = [1,0,0,0,1], n = 2', output: 'false' },
  ],
  hints: [
    'Greedily plant a flower whenever you find an empty plot with empty neighbors (treat out-of-bounds as empty).',
  ],
  functionName: 'canPlaceFlowers',
  params: ['flowerbed', 'n'],
  starterCode: {
    javascript: 'function canPlaceFlowers(flowerbed, n) {\n  \n}\n',
    python: 'def canPlaceFlowers(flowerbed, n):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0, 0, 0, 1], 1], expected: true },
    { args: [[1, 0, 0, 0, 1], 2], expected: false },
    { args: [[0, 0, 1, 0, 0], 1], expected: true },
  ],
  hiddenTests: [
    { args: [[0], 1], expected: true },
    { args: [[1], 1], expected: false },
    { args: [[0, 0, 0], 2], expected: true },
    { args: [[0, 0, 0, 0, 0], 3], expected: true },
    { args: [[0, 0, 0, 0, 0], 4], expected: false },
    { args: [[1, 0, 0, 0, 0, 1], 2], expected: false },
  ],
};
