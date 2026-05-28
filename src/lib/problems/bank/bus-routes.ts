import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bus-routes',
  title: 'Bus Routes',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an array \`routes\` representing bus routes. \`routes[i]\` is a bus route that the \`i\`-th bus travels forever in a cycle. For example, if \`routes[0] = [1, 5, 7]\`, the bus runs 1 → 5 → 7 → 1 → 5 → 7 → ...

You will start at bus stop \`source\` (not on a bus) and want to reach bus stop \`target\`. You can travel between bus stops by buses only.

Return the **minimum number of buses** you must take to travel from \`source\` to \`target\`. Return \`-1\` if it is not possible.`,
  constraints: [
    '1 <= routes.length <= 500',
    '1 <= routes[i].length <= 10^5',
    'All values of routes[i] are unique',
    '0 <= routes[i][j] <= 10^6',
    '0 <= source, target <= 10^6',
  ],
  examples: [
    {
      input: 'routes = [[1,2,7],[3,6,7]], source = 1, target = 6',
      output: '2',
      explanation:
        'Take bus 0 from stop 1 to stop 7, then take bus 1 from stop 7 to stop 6.',
    },
    {
      input:
        'routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12',
      output: '-1',
      explanation:
        'From stop 15 you can reach buses 1 and 3. Their stops {4,5,15} and {15,19} share no stop with buses 0 or 4 that reach stop 12.',
    },
    {
      input: 'routes = [[1,2,7],[3,6,7]], source = 1, target = 1',
      output: '0',
      explanation: 'Already at the target stop — no buses needed.',
    },
  ],
  hints: [
    'Build a mapping from each stop to the list of buses that serve it.',
    'BFS where each node is a bus route (not a stop). Start with all buses reachable from source.',
    'For each bus in the BFS, explore all stops it serves, then enqueue new buses from those stops.',
  ],
  functionName: 'numBusesToDestination',
  params: ['routes', 'source', 'target'],
  starterCode: {
    javascript: `function numBusesToDestination(routes, source, target) {

}`,
    typescript: "function numBusesToDestination(routes: number[][], source: number, target: number): number {\n\n}",

    python: `def numBusesToDestination(routes: list[list[int]], source: int, target: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 7], [3, 6, 7]], 1, 6], expected: 2 },
    {
      args: [[[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12],
      expected: -1,
    },
    { args: [[[1, 2, 7], [3, 6, 7]], 1, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3]], 1, 3], expected: 1 },
    { args: [[[1, 2], [2, 3], [3, 4]], 1, 4], expected: 3 },
    { args: [[[1, 5], [2, 5], [3, 5]], 1, 3], expected: 2 },
    { args: [[[1, 2, 3], [3, 4, 5]], 1, 5], expected: 2 },
  ],
};
