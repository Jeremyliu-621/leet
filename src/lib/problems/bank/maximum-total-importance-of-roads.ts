import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-importance-of-roads',
  title: 'Maximum Total Importance of Roads',
  difficulty: 'medium',
  tags: ['arrays', 'graph'],
  description: `You are given an integer \`n\` denoting the number of cities in a country. The cities are numbered from \`0\` to \`n - 1\`.

You are also given a 2D integer array \`roads\` where \`roads[i] = [a_i, b_i]\` denotes a bidirectional road connecting cities \`a_i\` and \`b_i\`.

You need to assign each city a value from \`1\` to \`n\` with each value used exactly once. The **importance** of a road is the sum of the values assigned to its two endpoints.

Return the **maximum total importance** of all roads after assigning values optimally.`,
  constraints: [
    '2 <= n <= 5 * 10^4',
    '1 <= roads.length <= 5 * 10^4',
    'roads[i].length == 2',
    '0 <= a_i, b_i <= n - 1',
    'a_i != b_i',
    'There are no duplicate roads.',
  ],
  examples: [
    {
      input: 'n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]',
      output: '43',
      explanation:
        'Sort degrees [1,2,2,3,4] and assign values 1..5. Total = 1·1+2·2+2·3+3·4+4·5 = 43.',
    },
    {
      input: 'n = 5, roads = [[0,3],[2,4],[1,3]]',
      output: '20',
      explanation:
        'Degrees [1,1,1,2,1], sorted [1,1,1,1,2]. Total = 1+2+3+4+10 = 20.',
    },
  ],
  hints: [
    'Total importance = sum over nodes of (node value × node degree).',
    'To maximize this, assign higher values to nodes with higher degree.',
    'Sort nodes by degree and assign values 1, 2, …, n.',
  ],
  functionName: 'maximumImportance',
  params: ['n', 'roads'],
  starterCode: {
    javascript: 'function maximumImportance(n, roads) {\n  \n}\n',
    python: 'def maximumImportance(n, roads):\n    pass\n',
  },
  visibleTests: [
    {
      args: [5, [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]],
      expected: 43,
    },
    { args: [5, [[0, 3], [2, 4], [1, 3]]], expected: 20 },
    { args: [2, [[0, 1]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [3, [[0, 1], [1, 2]]], expected: 9 },
    {
      args: [4, [[0, 1], [0, 2], [0, 3], [1, 2]]],
      expected: 23,
    },
    {
      args: [4, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]],
      expected: 30,
    },
    { args: [3, [[0, 1], [0, 2], [1, 2]]], expected: 12 },
  ],
};
