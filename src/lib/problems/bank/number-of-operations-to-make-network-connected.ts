import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-operations-to-make-network-connected',
  title: 'Number of Operations to Make Network Connected',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`n\` computers numbered from \`0\` to \`n - 1\` connected by ethernet cables \`connections\`, where \`connections[i] = [a_i, b_i]\` represents a connection between computers \`a_i\` and \`b_i\`.

Any computer can reach any other computer directly or indirectly through the network.

Return the **minimum number of cable operations** required to make all the computers connected. If it is not possible, return \`-1\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= connections.length <= min(n*(n-1)/2, 10^5)',
    'connections[i].length == 2',
    '0 <= a_i, b_i < n',
    'a_i != b_i',
    'No repeated connections.',
  ],
  examples: [
    {
      input: 'n = 4, connections = [[0,1],[0,2],[1,2]]',
      output: '1',
      explanation: 'Use the extra cable to connect the isolated computer 3.',
    },
    {
      input: 'n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]',
      output: '2',
    },
  ],
  hints: [
    'If cables < n-1, impossible (return -1).',
    'Use Union-Find to count connected components.',
    'Answer = components - 1 (the number of merges needed).',
  ],
  functionName: 'makeConnected',
  params: ['n', 'connections'],
  starterCode: {
    javascript: 'function makeConnected(n, connections) {\n\n}\n',
    typescript: "function makeConnected(n: number, connections: number[][]): number {\n\n}",

    python: 'def makeConnected(n, connections):\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[0,1],[0,2],[1,2]]], expected: 1 },
    { args: [6, [[0,1],[0,2],[0,3],[1,2],[1,3]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [6, [[0,1],[0,2],[0,3],[1,2]]], expected: -1 },
    { args: [1, []], expected: 0 },
    { args: [5, [[0,1],[1,2],[2,3],[3,4]]], expected: 0 },
    { args: [3, [[0,1]]], expected: -1 },
  ],
};
