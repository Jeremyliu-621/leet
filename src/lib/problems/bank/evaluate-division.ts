import type { Problem } from '../types';

export const problem: Problem = {
  id: 'evaluate-division',
  title: 'Evaluate Division',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an array of variable pairs \`equations\` and an array of real numbers \`values\`, where \`equations[i] = [Ai, Bi]\` and \`values[i]\` represent the equation \`Ai / Bi = values[i]\`. Each \`Ai\` or \`Bi\` is a string that represents a single variable.

You are also given some \`queries\`, where \`queries[j] = [Cj, Dj]\` represents the \`j\`th query where you must find the answer for \`Cj / Dj = ?\`.

Return the answers to all queries. If a single answer does not exist, return \`-1.0\`.`,
  constraints: [
    '1 <= equations.length <= 20',
    'equations[i].length == 2',
    '1 <= Ai.length, Bi.length <= 5',
    'values.length == equations.length',
    '0.0 < values[i] <= 20.0',
    '1 <= queries.length <= 20',
    'queries[i].length == 2',
    '1 <= Cj.length, Dj.length <= 5',
    'Ai, Bi, Cj, Dj consist of lowercase English letters and digits.',
  ],
  examples: [
    {
      input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]',
      output: '[6.00000,0.50000,-1.00000,1.00000,-1.00000]',
      explanation: 'a/c = (a/b)*(b/c) = 6. b/a = 1/2 = 0.5. a/e is unknown. a/a = 1. x/x is unknown.',
    },
  ],
  hints: [
    'Build a directed weighted graph: for a/b = k, add edges a→b with weight k and b→a with weight 1/k.',
    'For each query (src, dst), use BFS or DFS to find the product of weights along the path.',
    'If src or dst is not in the graph, or no path exists, return -1.0.',
  ],
  functionName: 'calcEquation',
  params: ['equations', 'values', 'queries'],
  starterCode: {
    javascript: `function calcEquation(equations, values, queries) {

}`,
    typescript: "function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {\n\n}",

    python: `def calcEquation(equations, values, queries):
    pass`,
  },
  visibleTests: [
    {
      args: [
        [['a', 'b'], ['b', 'c']],
        [2.0, 3.0],
        [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']],
      ],
      expected: [6.0, 0.5, -1.0, 1.0, -1.0],
    },
  ],
  hiddenTests: [
    {
      args: [
        [['a', 'b'], ['b', 'c'], ['bc', 'cd']],
        [1.5, 2.5, 5.0],
        [['a', 'c'], ['c', 'b'], ['bc', 'cd'], ['cd', 'bc']],
      ],
      expected: [3.75, 0.4, 5.0, 0.2],
    },
    {
      args: [[['a', 'b']], [0.5], [['a', 'b'], ['b', 'a'], ['a', 'c'], ['x', 'y']]],
      expected: [0.5, 2.0, -1.0, -1.0],
    },
  ],
};
