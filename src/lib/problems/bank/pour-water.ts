import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pour-water',
  title: 'Pour Water',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `You are given an elevation map \`heights[i]\` representing the height of each column. You then pour \`volume\` units of water (one at a time) at position \`k\`.

Water first tries to flow **left** from the pour position: it falls to the lowest point it can reach moving only left (staying at or below current position). If there's no lower point to the left, it tries to flow **right** similarly. If it can flow neither left nor right to a lower point, it stays at position \`k\`.

After one unit lands, the process repeats for the next unit.

Return the final heights after pouring all water.

**Water movement rules for one unit:**
1. Starting from \`k\`, scan left. If there is a cell strictly lower than the current standing position, the water falls there. Stop at the leftmost such lowest point found scanning leftward.
2. If no lower cell exists scanning left, scan right from \`k\`. If there is a cell strictly lower, fall there.
3. Otherwise, the water remains at position \`k\`.`,
  constraints: [
    '1 <= heights.length <= 100',
    '0 <= heights[i] <= 99',
    '0 <= volume <= 2000',
    '0 <= k < heights.length',
  ],
  examples: [
    {
      input: 'heights = [2,1,1,2,1,2,2], volume = 4, k = 3',
      output: '[2,2,2,3,2,2,2]',
      explanation:
        'Pour 4 units at k=3. Each unit finds the leftmost lowest point. The valley at index 4 gets filled, then spillage fills left valleys.',
    },
    {
      input: 'heights = [1,2,3,4], volume = 2, k = 2',
      output: '[2,3,3,4]',
      explanation: 'Water flows left and fills from the bottom.',
    },
    {
      input: 'heights = [3,1,3], volume = 5, k = 1',
      output: '[4,4,4]',
    },
  ],
  hints: [
    'Simulate pouring one unit at a time. For each unit: scan left from k to find the leftmost minimum; if none is lower than k, scan right from k to find the leftmost minimum; otherwise stay at k.',
    'When scanning left: track the best (lowest) position seen. Water settles at the leftmost occurrence of the lowest height found (but only if it is strictly below the starting position). Mirror logic for right.',
    '```js\nfunction pourWater(heights, volume, k) {\n  const h = [...heights];\n  for (let v = 0; v < volume; v++) {\n    let pos = k;\n    // try left\n    for (let i = k - 1; i >= 0; i--) {\n      if (h[i] < h[pos]) pos = i;\n      else if (h[i] > h[pos]) break;\n    }\n    if (pos === k) {\n      // try right\n      for (let i = k + 1; i < h.length; i++) {\n        if (h[i] < h[pos]) pos = i;\n        else if (h[i] > h[pos]) break;\n      }\n    }\n    h[pos]++;\n  }\n  return h;\n}\n```',
  ],
  functionName: 'pourWater',
  params: ['heights', 'volume', 'k'],
  starterCode: {
    javascript: 'function pourWater(heights, volume, k) {\n  \n}\n',
    python: 'def pourWater(heights, volume, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 1, 2, 1, 2, 2], 4, 3], expected: [2, 2, 2, 3, 2, 2, 2] },
    { args: [[1, 2, 3, 4], 2, 2], expected: [2, 3, 3, 4] },
    { args: [[3, 1, 3], 5, 1], expected: [4, 4, 4] },
  ],
  hiddenTests: [
    { args: [[0], 3, 0], expected: [3] },
    { args: [[1, 1, 1], 0, 1], expected: [1, 1, 1] },
    { args: [[5, 4, 2, 4, 5], 3, 2], expected: [5, 4, 5, 4, 5] },
    { args: [[1, 2, 1], 1, 1], expected: [2, 2, 1] },
    { args: [[1, 1, 3, 1, 1], 3, 2], expected: [2, 3, 3, 1, 1] },
  ],
};
