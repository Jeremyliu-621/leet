import type { Problem } from '../types';

const JS_PREAMBLE = `
class Node {
  constructor(val, neighbors = []) { this.val = val; this.neighbors = neighbors; }
}
function __buildGraph__(adjList) {
  if (!adjList || adjList.length === 0) return null;
  const nodes = adjList.map((_, i) => new Node(i + 1));
  adjList.forEach((nbrs, i) => { nodes[i].neighbors = nbrs.map((n) => nodes[n - 1]); });
  return nodes[0];
}
function __graphToAdj__(node) {
  if (!node) return [];
  const visited = new Map();
  const queue = [node];
  visited.set(node.val, node);
  while (queue.length) {
    const curr = queue.shift();
    for (const nb of curr.neighbors) {
      if (!visited.has(nb.val)) { visited.set(nb.val, nb); queue.push(nb); }
    }
  }
  const n = visited.size;
  const result = [];
  for (let i = 1; i <= n; i++) {
    const nd = visited.get(i);
    result.push(nd ? [...nd.neighbors.map((nb) => nb.val)].sort((a, b) => a - b) : []);
  }
  return result;
}
function cloneGraphRunner(adjList) { return __graphToAdj__(cloneGraph(__buildGraph__(adjList))); }
`.trim();

const PY_PREAMBLE = `
from collections import deque

class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def __build_graph__(adj_list):
    try:
        adj_list = [list(row) for row in adj_list]
    except Exception:
        return None
    if not adj_list:
        return None
    nodes = [Node(i + 1) for i in range(len(adj_list))]
    for i, nbrs in enumerate(adj_list):
        nodes[i].neighbors = [nodes[n - 1] for n in nbrs]
    return nodes[0]

def __graph_to_adj__(node):
    if not node:
        return []
    visited = {}
    queue = deque([node])
    visited[node.val] = node
    while queue:
        curr = queue.popleft()
        for nb in curr.neighbors:
            if nb.val not in visited:
                visited[nb.val] = nb
                queue.append(nb)
    n = len(visited)
    result = []
    for i in range(1, n + 1):
        nd = visited.get(i)
        result.append(sorted([nb.val for nb in nd.neighbors]) if nd else [])
    return result

def cloneGraphRunner(adj_list):
    return __graph_to_adj__(cloneGraph(__build_graph__(adj_list)))
`.trim();

export const problem: Problem = {
  id: 'clone-graph',
  title: 'Clone Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given a reference to a node in a **connected undirected graph**, return a **deep copy** (clone) of the graph.

Each node contains an integer \`val\` and a list of its \`neighbors\`.

The graph is given as an adjacency list: \`adjList[i]\` contains the 1-indexed values of node \`i+1\`'s neighbors. Your function receives the first node of the graph and must return the first node of the cloned graph.

> **Note:** A \`Node\` class and \`cloneGraphRunner\` wrapper are pre-defined. Your function receives a \`Node | null\` and must return a \`Node | null\`.`,
  constraints: [
    'The number of nodes in the graph is in the range [0, 100]',
    '1 <= Node.val <= 100',
    'Node.val is unique for each node',
    'There are no self-loops or repeated edges',
    'The graph is connected (if non-empty)',
  ],
  examples: [
    {
      input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
      output: '[[2,4],[1,3],[2,4],[1,3]]',
      explanation: 'The graph has 4 nodes in a cycle 1→2→3→4→1. The clone is structurally identical.',
    },
    { input: 'adjList = [[]]', output: '[[]]', explanation: 'Single node with no neighbors.' },
    { input: 'adjList = []', output: '[]', explanation: 'Empty graph.' },
  ],
  hints: [
    'Use a hash map from original node → cloned node to avoid re-cloning the same node and to handle cycles.',
    'DFS approach: if the node is already in the map, return the clone. Otherwise, create a new node, add it to the map, then recursively clone each neighbor.',
    'BFS also works: add node 1 to the queue, create its clone, then for each dequeued node clone all neighbors not yet in the map and enqueue them.',
  ],
  functionName: 'cloneGraphRunner',
  params: ['adjList'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// Node class and cloneGraphRunner wrapper are pre-defined.
// Implement the function below:
function cloneGraph(node) {

}
`,
    python: `# Node class and cloneGraphRunner wrapper are pre-defined.
# Implement the function below:
def cloneGraph(node):
    pass
`,
  },
  visibleTests: [
    { args: [[[2, 4], [1, 3], [2, 4], [1, 3]]], expected: [[2, 4], [1, 3], [2, 4], [1, 3]] },
    { args: [[[]]], expected: [[]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[[2], [1]]], expected: [[2], [1]] },
    { args: [[[2, 3], [1, 3], [1, 2]]], expected: [[2, 3], [1, 3], [1, 2]] },
    { args: [[[2, 3, 4], [1, 3, 4], [1, 2, 4], [1, 2, 3]]], expected: [[2, 3, 4], [1, 3, 4], [1, 2, 4], [1, 2, 3]] },
    { args: [[[2], [1, 3], [2, 4], [3]]], expected: [[2], [1, 3], [2, 4], [3]] },
  ],
};
