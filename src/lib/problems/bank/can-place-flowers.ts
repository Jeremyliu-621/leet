import type { Problem } from '../types';

export const problem: Problem = {
  id: 'can-place-flowers',
  title: 'Can Place Flowers',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array \`flowerbed\` containing \`0\`s and \`1\`s, where \`0\` means empty and \`1\` means not empty, and an integer \`n\`, return \`true\` if \`n\` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and \`false\` otherwise.`,
  constraints: [
    '1 <= flowerbed.length <= 2 * 10^4',
    'flowerbed[i] is 0 or 1.',
    'There are no two adjacent flowers in flowerbed.',
    '0 <= n <= flowerbed.length',
  ],
  examples: [
    {
      input: 'flowerbed = [1,0,0,0,1], n = 1',
      output: 'true',
      explanation: 'Plant at index 2. No adjacent plots are occupied. 1 >= 1.',
    },
    {
      input: 'flowerbed = [1,0,0,0,1], n = 2',
      output: 'false',
      explanation:
        'Only index 2 is available without violating the adjacency rule, so at most 1 flower can be planted.',
    },
  ],
  hints: [
    'Level 1: Scan left to right. At each empty plot (0), check whether both its left and right neighbors are also 0 (treat out-of-bounds as 0). If so, plant there and skip the next plot.',
    'Level 2: For each index i where flowerbed[i]===0: if (i===0 || flowerbed[i-1]===0) && (i===flowerbed.length-1 || flowerbed[i+1]===0), plant (set flowerbed[i]=1, decrement n). Return n<=0.',
    'Level 3: for(let i=0;i<flowerbed.length;i++){if(flowerbed[i]===0&&(i===0||flowerbed[i-1]===0)&&(i===flowerbed.length-1||flowerbed[i+1]===0)){flowerbed[i]=1;n--;if(n<=0)return true;}}return n<=0;',
  ],
  functionName: 'canPlaceFlowers',
  params: ['flowerbed', 'n'],
  starterCode: {
    javascript:
      'function canPlaceFlowers(flowerbed, n) {\n  // your code here\n}\n',
    python:
      'def canPlaceFlowers(flowerbed, n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0, 0, 0, 1], 1], expected: true },
    { args: [[1, 0, 0, 0, 1], 2], expected: false },
  ],
  hiddenTests: [
    { args: [[0], 1], expected: true },
    { args: [[0], 2], expected: false },
    { args: [[0, 0, 0], 2], expected: true },
    { args: [[0, 0, 0, 0, 0], 3], expected: true },
    { args: [[1, 0, 1, 0, 1], 0], expected: true },
  ],
};
