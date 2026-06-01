import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-arrangement-of-pairs',
  title: 'Valid Arrangement of Pairs',
  difficulty: 'hard',
  tags: ['graph', 'simulation'],
  description: `You are given a **0-indexed** 2D integer array \`pairs\` where \`pairs[i] = [start_i, end_i]\`. An arrangement of pairs is **valid** if for every index \`i\` where \`1 <= i < pairs.length\`, we have \`end_{i-1} == start_i\`.

Return **any** valid arrangement of \`pairs\`.

**Note:** The inputs will be generated such that a valid arrangement always exists.`,
  constraints: [
    '1 <= pairs.length <= 10^5',
    '0 <= start_i, end_i <= 10^9',
    'start_i != end_i',
    'No two pairs are exactly the same.',
    'There exists a valid arrangement of pairs.',
  ],
  examples: [
    {
      input: 'pairs = [[5,1],[4,5],[11,9],[9,4]]',
      output: '[[11,9],[9,4],[4,5],[5,1]]',
      explanation: 'End of each pair equals start of the next: 9→9, 4→4, 5→5.',
    },
    {
      input: 'pairs = [[1,3],[3,2],[2,1]]',
      output: '[[1,3],[3,2],[2,1]]',
      explanation: 'This arrangement is valid: 3→3, 2→2.',
    },
    {
      input: 'pairs = [[1,2],[1,3],[2,1]]',
      output: '[[1,2],[2,1],[1,3]]',
      explanation: '2→2, 1→1. Other valid arrangements exist.',
    },
  ],
  hints: [
    'Level 1: Model as a directed graph: pairs[i][0] → pairs[i][1]. Finding a valid arrangement is exactly finding an Eulerian path.',
    'Level 2: An Eulerian path starts at the node with outDegree − inDegree = 1 (if one exists), otherwise any node. Use Hierholzer\'s algorithm.',
    'Level 3: Hierholzer iteratively: push the current node onto a stack; if it has unvisited edges, follow one; otherwise pop to the result path. Reverse the path and convert consecutive pairs.',
  ],
  functionName: 'validArrangement',
  params: ['pairs'],
  starterCode: {
    javascript: `function validArrangement(pairs) {
  const adj = new Map();
  const inDeg = new Map();
  const outDeg = new Map();
  for (const [u, v] of pairs) {
    if (!adj.has(u)) adj.set(u, []);
    adj.get(u).push(v);
    outDeg.set(u, (outDeg.get(u) ?? 0) + 1);
    inDeg.set(v, (inDeg.get(v) ?? 0) + 1);
  }
  let start = pairs[0][0];
  for (const [node] of adj) {
    if ((outDeg.get(node) ?? 0) - (inDeg.get(node) ?? 0) === 1) {
      start = node;
      break;
    }
  }
  const stack = [start];
  const path = [];
  while (stack.length) {
    const node = stack[stack.length - 1];
    const neighbors = adj.get(node);
    if (neighbors && neighbors.length > 0) {
      stack.push(neighbors.pop());
    } else {
      path.push(stack.pop());
    }
  }
  path.reverse();
  return path.slice(0, -1).map((v, i) => [v, path[i + 1]]);
}`,
    typescript: `function validArrangement(pairs: number[][]): number[][] {
  const adj = new Map<number, number[]>();
  const inDeg = new Map<number, number>();
  const outDeg = new Map<number, number>();
  for (const [u, v] of pairs) {
    if (!adj.has(u!)) adj.set(u!, []);
    adj.get(u!)!.push(v!);
    outDeg.set(u!, (outDeg.get(u!) ?? 0) + 1);
    inDeg.set(v!, (inDeg.get(v!) ?? 0) + 1);
  }
  let start = pairs[0]![0]!;
  for (const [node] of adj) {
    if ((outDeg.get(node) ?? 0) - (inDeg.get(node) ?? 0) === 1) {
      start = node;
      break;
    }
  }
  const stack = [start];
  const path: number[] = [];
  while (stack.length) {
    const node = stack[stack.length - 1]!;
    const neighbors = adj.get(node);
    if (neighbors && neighbors.length > 0) {
      stack.push(neighbors.pop()!);
    } else {
      path.push(stack.pop()!);
    }
  }
  path.reverse();
  return path.slice(0, -1).map((v, i) => [v, path[i + 1]!]);
}`,
    python: `def validArrangement(pairs):
    from collections import defaultdict
    adj = defaultdict(list)
    in_deg = defaultdict(int)
    out_deg = defaultdict(int)
    for u, v in pairs:
        adj[u].append(v)
        out_deg[u] += 1
        in_deg[v] += 1
    start = pairs[0][0]
    for node in adj:
        if out_deg[node] - in_deg[node] == 1:
            start = node
            break
    stack = [start]
    path = []
    while stack:
        node = stack[-1]
        if adj[node]:
            stack.append(adj[node].pop())
        else:
            path.append(stack.pop())
    path.reverse()
    return [[path[i], path[i+1]] for i in range(len(path)-1)]`,
  },
  visibleTests: [
    { args: [[[5, 1], [4, 5], [11, 9], [9, 4]]], expected: [[11, 9], [9, 4], [4, 5], [5, 1]] },
    { args: [[[1, 3], [3, 2], [2, 1]]], expected: [[1, 3], [3, 2], [2, 1]] },
    { args: [[[1, 2], [1, 3], [2, 1]]], expected: [[1, 2], [2, 1], [1, 3]] },
  ],
  hiddenTests: [
    { args: [[[1, 2]]], expected: [[1, 2]] },
    { args: [[[1, 2], [2, 3]]], expected: [[1, 2], [2, 3]] },
    { args: [[[2, 3], [3, 1], [1, 2], [2, 4], [4, 2]]], expected: [[2, 4], [4, 2], [2, 3], [3, 1], [1, 2]] },
  ],
};
