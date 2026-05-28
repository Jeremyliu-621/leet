import type { Problem } from '../types';

export const problem: Problem = {
  id: 'loud-and-rich',
  title: 'Loud and Rich',
  difficulty: 'medium',
  tags: ['graph', 'hash-map'],
  description: `There is a group of \`n\` people labeled \`0\` to \`n - 1\`. Each person has a **quietness** value given in the array \`quiet\`, where \`quiet[i]\` is the quietness of person \`i\`. A lower value means the person is **louder** (less quiet).

You are given an array \`richer\` where \`richer[i] = [a_i, b_i]\` means person \`a_i\` has more money than person \`b_i\`.

Return an integer array \`answer\` where \`answer[x]\` is the **least quiet** (loudest) person among all people who are **at least as rich as** person \`x\`.

"At least as rich" includes person \`x\` themselves.`,
  constraints: [
    'n == quiet.length',
    '1 <= n <= 500',
    '0 <= quiet[i] < n',
    'All values of quiet are unique',
    '0 <= richer.length <= n * (n - 1) / 2',
    '0 <= richer[i][0], richer[i][1] < n',
    'richer[i][0] != richer[i][1]',
    'All pairs (richer[i][0], richer[i][1]) are unique',
    'The observations in richer are consistent (no cycles)',
  ],
  examples: [
    {
      input:
        'richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]',
      output: '[5,5,2,5,4,5,6,7]',
      explanation:
        'answer[0] = 5: person 5 is the loudest among all people at least as rich as person 0. answer[7] = 7: person 7 is alone at the top of the wealth chain, and they are the quietest among just themselves.',
    },
    {
      input: 'richer = [], quiet = [0]',
      output: '[0]',
      explanation: 'With only one person and no wealth constraints, the answer is the person themselves.',
    },
  ],
  hints: [
    'Build a directed graph: for each (a, b) in richer, add an edge b → a (person a is richer than b, so from b we can reach richer people a).',
    'For each person x, run DFS: visit all people reachable from x (who are at least as rich), and track the one with the minimum quiet value.',
    'Use memoization: once answer[x] is computed, cache and return it. Since the graph is a DAG (no wealth cycles), the recursion always terminates.',
  ],
  functionName: 'loudAndRich',
  params: ['richer', 'quiet'],
  starterCode: {
    javascript: `function loudAndRich(richer, quiet) {
  // Return answer[x] = least quiet person at least as rich as x, for each x
}`,
    python: `def loudAndRich(richer: list[list[int]], quiet: list[int]) -> list[int]:
    # Return answer[x] = least quiet person at least as rich as x, for each x
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], [3, 2, 5, 4, 6, 1, 7, 0]],
      expected: [5, 5, 2, 5, 4, 5, 6, 7],
    },
    { args: [[], [0]], expected: [0] },
    { args: [[[0, 1]], [1, 0]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[[0, 1], [1, 2]], [2, 0, 1]], expected: [0, 1, 1] },
    { args: [[[0, 1], [0, 2]], [2, 1, 0]], expected: [0, 1, 2] },
    { args: [[], [0, 1, 2]], expected: [0, 1, 2] },
    {
      args: [[[0, 1], [1, 2], [2, 3]], [3, 2, 1, 0]],
      expected: [0, 1, 2, 3],
    },
    {
      args: [[[1, 0], [2, 1], [3, 2]], [0, 1, 2, 3]],
      expected: [0, 1, 2, 3],
    },
  ],
};
