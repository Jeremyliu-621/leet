import type { Problem } from '../types';

export const problem: Problem = {
  id: 'earliest-moment-everyone-became-friends',
  title: 'The Earliest Moment When Everyone Become Friends',
  difficulty: 'medium',
  tags: ['arrays', 'union-find'],
  description: `There are \`n\` people in a social group labeled from \`0\` to \`n - 1\`. You are given an array \`logs\` where \`logs[i] = [timestamp_i, x_i, y_i]\` indicates that \`x_i\` and \`y_i\` became friends at the time \`timestamp_i\`.

Friendship is **symmetric**: if \`x\` is a friend of \`y\`, then \`y\` is a friend of \`x\`. Friendship is also **transitive**: if \`x\` is a friend of \`y\`, and \`y\` is a friend of \`z\`, then \`x\` is a friend of \`z\`.

Return the **earliest** time at which all \`n\` people become friends with each other. If no such time exists, return \`-1\`.`,
  constraints: [
    '2 <= n <= 100',
    '1 <= logs.length <= 10^4',
    'logs[i].length == 3',
    '0 <= timestamp_i <= 10^9',
    '0 <= x_i, y_i <= n - 1',
    'x_i != y_i',
    'All the values timestamp_i are unique.',
  ],
  examples: [
    {
      input: 'logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6',
      output: '20190301',
      explanation: 'Sort logs by time. After 20190101: {0,1},{2},{3},{4},{5}. After 20190104: {0,1},{2},{3,4},{5}. After 20190107: {0,1},{2,3,4},{5}. After 20190211: {0,1,5},{2,3,4}. After 20190224: no change (2 and 4 already connected). After 20190301: 0 (in {0,1,5}) and 3 (in {2,3,4}) merge → {0,1,2,3,4,5}. All connected — return 20190301.',
    },
    {
      input: 'logs = [[0,2,0],[1,0,1],[3,1,2]], n = 3',
      output: '1',
      explanation: 'After t=0: {0,2},{1}. After t=1: merge 0 and 1 → {0,1,2}. All 3 people are connected. Return 1.',
    },
  ],
  hints: [
    'Sort the logs by timestamp.',
    'Use Union-Find (Disjoint Set Union). Initially each person is in their own component (n components total).',
    'Process logs in sorted order. Each union reduces the component count by 1 (if the two people are not already connected). When the component count reaches 1, return the current timestamp.',
    'If you process all logs and the component count never reaches 1, return -1.',
  ],
  functionName: 'earliestAcq',
  params: ['logs', 'n'],
  starterCode: {
    javascript: `function earliestAcq(logs, n) {
  const parent = Array.from({ length: n }, (_, i) => i);
  function find(x) { return parent[x] === x ? x : (parent[x] = find(parent[x])); }
  logs.sort((a, b) => a[0] - b[0]);
  let components = n;
  for (const [t, x, y] of logs) {
    const rx = find(x), ry = find(y);
    if (rx !== ry) { parent[rx] = ry; components--; }
    if (components === 1) return t;
  }
  return -1;
}`,
    typescript: `function earliestAcq(logs: number[][], n: number): number {
  const parent = Array.from({ length: n }, (_, i) => i);
  function find(x: number): number { return parent[x] === x ? x : (parent[x] = find(parent[x]!)); }
  logs.sort((a, b) => a[0]! - b[0]!);
  let components = n;
  for (const log of logs) {
    const [t, x, y] = [log[0]!, log[1]!, log[2]!];
    const rx = find(x), ry = find(y);
    if (rx !== ry) { parent[rx] = ry; components--; }
    if (components === 1) return t;
  }
  return -1;
}`,
    python: `def earliestAcq(logs, n):
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    logs.sort()
    components = n
    for t, x, y in logs:
        rx, ry = find(x), find(y)
        if rx != ry:
            parent[rx] = ry
            components -= 1
        if components == 1:
            return t
    return -1`,
  },
  visibleTests: [
    { args: [[[20190101, 0, 1], [20190104, 3, 4], [20190107, 2, 3], [20190211, 1, 5], [20190224, 2, 4], [20190301, 0, 3], [20190312, 1, 2], [20190322, 4, 5]], 6], expected: 20190301 },
    { args: [[[0, 2, 0], [1, 0, 1], [3, 1, 2]], 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 0, 1]], 2], expected: 1 },
    { args: [[[1, 0, 1]], 3], expected: -1 },
    { args: [[[5, 0, 1], [10, 1, 2], [15, 0, 3]], 5], expected: -1 },
    { args: [[[5, 0, 1], [10, 1, 2], [15, 2, 3], [20, 3, 0]], 4], expected: 15 },
    { args: [[[3, 0, 1], [1, 1, 2], [2, 0, 2]], 3], expected: 2 },
  ],
};
