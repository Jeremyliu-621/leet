import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-champion-ii',
  title: 'Find Champion II',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`n\` teams numbered from \`0\` to \`n - 1\` in a tournament; each team is also a node in a **DAG**.

You are given the integer \`n\` and a **0-indexed** 2D integer array \`edges\` of length \`m\` representing the DAG, where \`edges[i] = [u, v]\` indicates that there is a directed edge from team \`u\` to team \`v\` in the graph.

A directed edge from \`a\` to \`b\` in the graph means that team \`a\` is **stronger** than team \`b\` and team \`b\` is **weaker** than team \`a\`.

Team \`a\` will be the **champion** of the tournament if there is no team \`b\` that is **stronger** than team \`a\`.

Return the team that will be the **champion** of the tournament if there is a **unique** champion, otherwise, return \`-1\`.`,
  constraints: [
    '`1 <= n <= 100`',
    '`m == edges.length`',
    '`0 <= m <= n * (n - 1) / 2`',
    '`0 <= edges[i][j] <= n - 1`',
    '`edges[i][0] != edges[i][1]`',
    'The input is generated such that if team `a` is stronger than team `b`, team `b` is not stronger than team `a`.',
    'The input is generated such that if team `a` is stronger than team `b` and team `b` is stronger than team `c`, then team `a` is stronger than team `c`.',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[1,2]]',
      output: '0',
      explanation: 'Team 1 is weaker than team 0. Team 2 is weaker than team 1. So the champion is team 0.',
    },
    {
      input: 'n = 4, edges = [[0,2],[1,3],[1,2]]',
      output: '-1',
      explanation: 'Team 2 is weaker than teams 0 and 1. Team 3 is weaker than team 1. Both teams 0 and 1 have zero in-degree, so there is no unique champion.',
    },
  ],
  hints: [
    'The champion must have no other team stronger than it — meaning it has in-degree 0 in the DAG.',
    'Count in-degrees for all teams. If exactly one team has in-degree 0, it is the champion.',
    'If more than one team has in-degree 0, return -1.',
  ],
  functionName: 'findChampion',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function findChampion(n, edges) {

}`,
    python: `def findChampion(n, edges):
    pass`,
  },
  visibleTests: [
    { args: [3, [[0, 1], [1, 2]]], expected: 0 },
    { args: [4, [[0, 2], [1, 3], [1, 2]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 0 },
    { args: [2, [[0, 1]]], expected: 0 },
    { args: [2, []], expected: -1 },
    { args: [3, [[0, 1], [0, 2]]], expected: 0 },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 0 },
  ],
};
