import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-of-a-path-with-special-roads',
  title: 'Minimum Cost of a Path With Special Roads',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `You are given an array \`start\` where \`start = [startX, startY]\` and an array \`target\` where \`target = [targetX, targetY]\`.

You are on an infinite 2D grid. Moving from one point to another has cost equal to the **Manhattan distance**.

You are also given a 2D array \`specialRoads\` where \`specialRoads[i] = [x1i, y1i, x2i, y2i, costi]\` indicates a special road that lets you travel from \`(x1i, y1i)\` to \`(x2i, y2i)\` at cost \`costi\` (may be cheaper than the Manhattan distance).

Return the **minimum cost** to travel from \`start\` to \`target\`.`,
  constraints: [
    'start.length == target.length == 2',
    '1 <= startX <= targetX <= 10^5',
    '1 <= startY <= targetY <= 10^5',
    '1 <= specialRoads.length <= 200',
    'specialRoads[i].length == 5',
    '1 <= x1i, y1i, x2i, y2i <= 10^5',
    '1 <= costi <= 10^5',
  ],
  examples: [
    {
      input: 'start = [1,1], target = [4,5], specialRoads = [[1,2,3,3,2],[3,4,4,5,1]]',
      output: '5',
      explanation: 'Walk (1,1)→(1,2): cost 1. Take road 1: (1,2)→(3,3): cost 2. Walk (3,3)→(3,4): cost 1. Take road 2: (3,4)→(4,5): cost 1. Total = 5.',
    },
    {
      input: 'start = [3,2], target = [5,7], specialRoads = [[3,2,3,4,4],[3,3,5,5,5],[3,4,5,6,6]]',
      output: '7',
      explanation: 'Walk directly: |5-3|+|7-2| = 7. No special road improves this.',
    },
  ],
  hints: [
    'The relevant waypoints are: start, target, and both endpoints of each special road.',
    'Run Dijkstra over these waypoints. Edges: Manhattan distance between any two, plus direct special road edges.',
    'From any current point, you can walk to any waypoint (paying Manhattan cost), or if you are at a road\'s start, take the road.',
  ],
  functionName: 'minimumCostSpecialRoads',
  params: ['start', 'target', 'specialRoads'],
  starterCode: {
    javascript: 'function minimumCostSpecialRoads(start, target, specialRoads) {\n  \n}\n',
    typescript: 'function minimumCostSpecialRoads(start: number[], target: number[], specialRoads: number[][]): number {\n  \n}',
    python: 'def minimumCostSpecialRoads(start, target, specialRoads):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1], [4, 5], [[1, 2, 3, 3, 2], [3, 4, 4, 5, 1]]], expected: 5 },
    { args: [[3, 2], [5, 7], [[3, 2, 3, 4, 4], [3, 3, 5, 5, 5], [3, 4, 5, 6, 6]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 1], [10, 10], []], expected: 18 },
    { args: [[1, 1], [5, 5], [[1, 1, 5, 5, 1]]], expected: 1 },
    { args: [[2, 2], [4, 4], [[2, 2, 3, 3, 1], [3, 3, 4, 4, 1]]], expected: 2 },
  ],
};
