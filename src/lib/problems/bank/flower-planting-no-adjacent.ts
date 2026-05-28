import type { Problem } from '../types';

const JS_PREAMBLE = `
function gardenNoAdjRunner(n, paths) {
  const result = gardenNoAdj(n, paths);
  if (!Array.isArray(result) || result.length !== n) return false;
  for (const c of result) {
    if (typeof c !== 'number' || c < 1 || c > 4) return false;
  }
  const adj = [];
  for (let i = 0; i <= n; i++) adj.push([]);
  for (const [u, v] of paths) { adj[u].push(v); adj[v].push(u); }
  for (let i = 1; i <= n; i++) {
    for (const nb of adj[i]) {
      if (result[i - 1] === result[nb - 1]) return false;
    }
  }
  return true;
}
`.trim();

const PY_PREAMBLE = `
def gardenNoAdjRunner(n, paths):
    result = gardenNoAdj(n, list(paths))
    if not isinstance(result, (list, tuple)) or len(result) != n:
        return False
    for c in result:
        if not isinstance(c, int) or c < 1 or c > 4:
            return False
    adj = [[] for _ in range(n + 1)]
    for u, v in paths:
        adj[u].append(v)
        adj[v].append(u)
    for i in range(1, n + 1):
        for nb in adj[i]:
            if result[i - 1] == result[nb - 1]:
                return False
    return True
`.trim();

export const problem: Problem = {
  id: 'flower-planting-no-adjacent',
  title: 'Flower Planting With No Adjacent',
  difficulty: 'medium',
  tags: ['graph', 'hash-map'],
  description: `You have \`n\` gardens, labeled \`1\` to \`n\`, and an array \`paths\` where \`paths[i] = [x_i, y_i]\` describes a bidirectional path between garden \`x_i\` and garden \`y_i\`.

In each garden, you want to plant one of **4 types of flowers** (types 1 through 4). You are guaranteed that no garden has 3 or more paths going into it (i.e., the graph degree is at most 3).

Return **any** valid assignment of flower types such that no two adjacent gardens (connected by a path) have the same flower type.

The runner function validates your answer — your function should return an integer array of length \`n\` where \`answer[i]\` is the flower type in garden \`i + 1\` (1-indexed gardens, 0-indexed answer array).`,
  constraints: [
    '1 <= n <= 10^4',
    '0 <= paths.length <= 2 * 10^4',
    'paths[i].length == 2',
    '1 <= x_i, y_i <= n',
    'x_i != y_i',
    'Every garden has at most 3 paths',
  ],
  examples: [
    {
      input: 'n = 3, paths = [[1,2],[2,3],[3,1]]',
      output: '[1,2,3]',
      explanation:
        'One valid answer: gardens 1, 2, 3 get flower types 1, 2, 3. No two adjacent gardens share a type.',
    },
    {
      input: 'n = 4, paths = [[1,2],[3,4]]',
      output: '[1,2,1,2]',
      explanation:
        'Gardens 1 and 2 are adjacent (different types), gardens 3 and 4 are adjacent (different types). Many valid answers exist.',
    },
  ],
  hints: [
    'Since each garden has at most degree 3 and you have 4 flower types, a greedy approach always works: for each garden, pick any color not used by its already-colored neighbors.',
    'Iterate gardens 1 to n in order. For each garden, collect the flower types of all neighbors (some may be 0/unset). Pick the smallest type from {1,2,3,4} not in the neighbor set.',
    'Because degree ≤ 3, at most 3 neighbors can block at most 3 colors, always leaving at least 1 of the 4 colors available.',
  ],
  functionName: 'gardenNoAdjRunner',
  params: ['n', 'paths'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// gardenNoAdjRunner validates your answer automatically.
function gardenNoAdj(n, paths) {
  // Return an array of length n: answer[i] is the flower type (1-4) for garden i+1
}`,
    typescript: "function gardenNoAdjRunner(n: number, paths: number[][]): boolean {\n  // Return an array of length n: answer[i] is the flower type (1-4) for garden i+1\n}",

    python: `# gardenNoAdjRunner validates your answer automatically.
def gardenNoAdj(n, paths):
    # Return a list of length n: answer[i] is the flower type (1-4) for garden i+1
    pass`,
  },
  visibleTests: [
    { args: [3, [[1, 2], [2, 3], [3, 1]]], expected: true },
    { args: [4, [[1, 2], [3, 4]]], expected: true },
    { args: [1, []], expected: true },
  ],
  hiddenTests: [
    { args: [2, [[1, 2]]], expected: true },
    { args: [4, []], expected: true },
    { args: [4, [[1, 2], [1, 3], [1, 4]]], expected: true },
    { args: [5, [[1, 2], [1, 3], [2, 4], [2, 5]]], expected: true },
    { args: [6, [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1]]], expected: true },
  ],
};
