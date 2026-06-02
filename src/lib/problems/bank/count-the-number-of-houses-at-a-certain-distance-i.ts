import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-houses-at-a-certain-distance-i',
  title: 'Count the Number of Houses at a Certain Distance I',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `You are given three **positive** integers \`n\`, \`x\`, and \`y\`.

In a city, there are \`n\` houses numbered from \`1\` to \`n\` arranged in a line. The houses are connected by **bidirectional** roads:
- A road between house \`i\` and house \`i + 1\` for all \`1 <= i < n\`.
- An additional road between houses \`x\` and \`y\`.

Return a **1-indexed** array \`result\` of length \`n\` where \`result[k]\` represents the **total** number of pairs \`(i, j)\` such that the minimum number of roads between houses \`i\` and \`j\` equals \`k\`.`,
  constraints: [
    '2 <= n <= 100',
    '1 <= x, y <= n',
    'x != y',
  ],
  examples: [
    {
      input: 'n = 3, x = 1, y = 3',
      output: '[6,0,0]',
      explanation: 'The shortcut 1-3 makes all pairs distance 1: (1,2),(2,1),(1,3),(3,1),(2,3),(3,2).',
    },
    {
      input: 'n = 5, x = 2, y = 4',
      output: '[10,8,2,0,0]',
      explanation: 'Shortcut 2-4 reduces several distances.',
    },
    {
      input: 'n = 4, x = 1, y = 3',
      output: '[8,4,0,0]',
      explanation: 'Shortcut 1-3: (1,3) and (3,1) become distance 1; (1,4),(4,1),(2,4),(4,2) have distance 2.',
    },
  ],
  hints: [
    'Level 1: BFS from each house to compute all pairwise distances. Count pairs at each distance.',
    'Level 2: The graph has n nodes and n edges: the chain 1-2-…-n plus the shortcut x-y.',
    'Level 3: For each source, BFS gives O(n) distances. Total O(n²). Then tally result[dist-1]++ for each (source, target) pair.',
  ],
  functionName: 'countOfPairs',
  params: ['n', 'x', 'y'],
  starterCode: {
    javascript: `function countOfPairs(n, x, y) {
  const result = new Array(n).fill(0);
  for (let start = 1; start <= n; start++) {
    const dist = new Array(n + 1).fill(-1);
    dist[start] = 0;
    const queue = [start];
    for (let qi = 0; qi < queue.length; qi++) {
      const u = queue[qi];
      const neighbors = [];
      if (u > 1) neighbors.push(u - 1);
      if (u < n) neighbors.push(u + 1);
      if (u === x) neighbors.push(y);
      if (u === y) neighbors.push(x);
      for (const v of neighbors) {
        if (dist[v] === -1) { dist[v] = dist[u] + 1; queue.push(v); }
      }
    }
    for (let end = 1; end <= n; end++)
      if (end !== start) result[dist[end] - 1]++;
  }
  return result;
}`,
    typescript: `function countOfPairs(n: number, x: number, y: number): number[] {
  const result = new Array<number>(n).fill(0);
  for (let start = 1; start <= n; start++) {
    const dist = new Array<number>(n + 1).fill(-1);
    dist[start] = 0;
    const queue: number[] = [start];
    for (let qi = 0; qi < queue.length; qi++) {
      const u = queue[qi]!;
      const neighbors: number[] = [];
      if (u > 1) neighbors.push(u - 1);
      if (u < n) neighbors.push(u + 1);
      if (u === x) neighbors.push(y);
      if (u === y) neighbors.push(x);
      for (const v of neighbors) {
        if (dist[v] === -1) { dist[v] = dist[u]! + 1; queue.push(v); }
      }
    }
    for (let end = 1; end <= n; end++)
      if (end !== start) result[dist[end]! - 1]!++;
  }
  return result;
}`,
    python: `def countOfPairs(n, x, y):
    n = int(n); x = int(x); y = int(y)
    result = [0] * n
    for start in range(1, n + 1):
        dist = [-1] * (n + 1)
        dist[start] = 0
        queue = [start]
        qi = 0
        while qi < len(queue):
            u = queue[qi]; qi += 1
            neighbors = []
            if u > 1: neighbors.append(u - 1)
            if u < n: neighbors.append(u + 1)
            if u == x: neighbors.append(y)
            if u == y: neighbors.append(x)
            for v in neighbors:
                if dist[v] == -1:
                    dist[v] = dist[u] + 1
                    queue.append(v)
        for end in range(1, n + 1):
            if end != start:
                result[dist[end] - 1] += 1
    return result`,
  },
  visibleTests: [
    { args: [3, 1, 3], expected: [6, 0, 0] },
    { args: [5, 2, 4], expected: [10, 8, 2, 0, 0] },
    { args: [4, 1, 3], expected: [8, 4, 0, 0] },
  ],
  hiddenTests: [
    { args: [2, 1, 2], expected: [2, 0] },
    { args: [4, 2, 4], expected: [8, 4, 0, 0] },
    { args: [6, 3, 4], expected: [10, 8, 6, 4, 2, 0] },
    { args: [3, 2, 3], expected: [4, 2, 0] },
    { args: [5, 1, 5], expected: [10, 10, 0, 0, 0] },
  ],
};
