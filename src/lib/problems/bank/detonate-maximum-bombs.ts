import type { Problem } from '../types';

export const problem: Problem = {
  id: 'detonate-maximum-bombs',
  title: 'Detonate the Maximum Bombs',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a list of bombs. The **range** of a bomb is defined as the area within a circle of radius \`r\` (i.e., a bomb at position \`(x, y)\` with radius \`r\` covers the circle \`(xi - x)^2 + (yi - y)^2 <= r^2\`).

You may choose to detonate a **single** bomb. When a bomb is detonated, it will detonate **all bombs** that lie in its range. These bombs will further detonate the bombs in their ranges.

Given the list of bombs, return the **maximum** number of bombs that can be detonated if you are allowed to detonate **only one** bomb.

\`bombs[i] = [xi, yi, ri]\` where \`(xi, yi)\` is the position and \`ri\` is the radius.`,
  constraints: [
    '1 <= bombs.length <= 100',
    'bombs[i].length == 3',
    '1 <= xi, yi, ri <= 10^5',
  ],
  examples: [
    {
      input: 'bombs = [[2,1,3],[6,1,4]]',
      output: '2',
      explanation:
        'Detonating bomb 0 at (2,1) with r=3 covers (6,1) since distance=4 > 3. Detonating bomb 1 at (6,1) with r=4 covers (2,1) since distance=4 <= 4. So detonating bomb 1 triggers bomb 0 → 2 total.',
    },
    {
      input: 'bombs = [[1,1,5],[10,10,5]]',
      output: '1',
    },
    {
      input: 'bombs = [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]',
      output: '5',
    },
  ],
  hints: [
    'Build a directed graph: add edge i→j if bomb i\'s circle covers bomb j\'s center.',
    'For each bomb as starting point, do BFS/DFS to count how many bombs are reachable.',
    'Return the maximum count across all starting bombs.',
  ],
  functionName: 'maximumDetonation',
  params: ['bombs'],
  starterCode: {
    javascript: 'function maximumDetonation(bombs) {\n\n}\n',
    typescript: "function maximumDetonation(bombs: number[][]): number {\n\n}",

    python: 'def maximumDetonation(bombs):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2,1,3],[6,1,4]]], expected: 2 },
    { args: [[[1,1,5],[10,10,5]]], expected: 1 },
    { args: [[[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1,1,1]]], expected: 1 },
    { args: [[[1,1,3],[2,2,3],[3,3,3]]], expected: 3 },
    { args: [[[3,3,5],[5,5,3],[3,5,1]]], expected: 3 },
    { args: [[[1,1,2],[2,1,2],[3,1,2],[4,1,2]]], expected: 4 },
  ],
};
