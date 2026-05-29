import type { Problem } from '../types';

export const problem: Problem = {
  id: 'detonate-the-maximum-bombs',
  title: 'Detonate the Maximum Bombs',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a list of bombs represented by a **0-indexed** 2D integer array \`bombs\` where \`bombs[i] = [xi, yi, ri]\`. \`xi\` and \`yi\` are the coordinates and \`ri\` is the **blast radius** of the \`i\`-th bomb.

You can detonate **at most one** bomb. When bomb \`i\` is detonated, all bombs \`j\` with \`distance(i, j) <= ri\` are also detonated (chain reaction).

Return the **maximum** number of bombs that can be detonated.`,
  constraints: [
    '1 <= bombs.length <= 100',
    'bombs[i].length == 3',
    '1 <= xi, yi, ri <= 10^5',
  ],
  examples: [
    {
      input: 'bombs = [[2,1,3],[6,1,4]]',
      output: '2',
      explanation: 'Detonate bomb 1 at (6,1) with radius 4. Distance to (2,1) is 4, which equals radius, so bomb 0 is also detonated.',
    },
    {
      input: 'bombs = [[1,1,5],[10,10,5]]',
      output: '1',
      explanation: 'The two bombs are too far apart. Detonating either one only detonates itself.',
    },
    {
      input: 'bombs = [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]',
      output: '5',
      explanation: 'Detonating bomb 4 triggers a chain that detonates all bombs.',
    },
  ],
  hints: [
    'Build a directed graph: add edge i→j if the distance from i to j is ≤ ri (bomb i can detonate bomb j).',
    'For each bomb as the starting detonation, BFS/DFS the graph and count reachable nodes.',
    'Return the maximum count over all starting bombs. Use squared distances to avoid floating point.',
  ],
  functionName: 'maximumDetonation',
  params: ['bombs'],
  starterCode: {
    javascript: 'function maximumDetonation(bombs) {\n  \n}\n',
    typescript: 'function maximumDetonation(bombs: number[][]): number {\n  \n}\n',
    python: 'def maximumDetonation(bombs):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 1, 3], [6, 1, 4]]], expected: 2 },
    { args: [[[1, 1, 5], [10, 10, 5]]], expected: 1 },
    { args: [[[1, 2, 3], [2, 3, 1], [3, 4, 2], [4, 5, 3], [5, 6, 4]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1]]], expected: 1 },
    { args: [[[0, 0, 1], [1, 0, 1]]], expected: 2 },
    { args: [[[0, 0, 1], [100, 100, 1]]], expected: 1 },
    { args: [[[1, 1, 100], [2, 2, 100], [3, 3, 100]]], expected: 3 },
    { args: [[[2, 1, 3], [6, 1, 4]]], expected: 2 },
    { args: [[[1, 1, 3], [2, 2, 1]]], expected: 2 },
  ],
};
