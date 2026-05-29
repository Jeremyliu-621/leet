import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-graph-with-shortest-path-calculator',
  title: 'Design Graph With Shortest Path Calculator',
  difficulty: 'hard',
  tags: ['design', 'shortest-path', 'graph'],
  description: `There is a **directed weighted** graph that consists of \`n\` nodes numbered from \`0\` to \`n - 1\`. The edges of the graph are represented by a given 2D integer array \`edges\`, where \`edges[i] = [fromi, toi, edgeCosti]\` denotes that there is an edge from \`fromi\` to \`toi\` with cost \`edgeCosti\`.

Implement the \`Graph\` class:

- \`Graph(n, edges)\` — Initializes the object with \`n\` nodes and the given edges.
- \`addEdge(edge)\` — Adds an edge to the list of edges where \`edge = [from, to, edgeCost]\`. It is guaranteed that there is no edge between the two nodes before adding this one.
- \`shortestPath(node1, node2)\` — Returns the **minimum** cost of a path from \`node1\` to \`node2\`. If no path exists, return \`-1\`.

**For testing purposes**, the function receives:
- \`n\`: number of nodes
- \`edges\`: initial edge list
- \`ops\`: array of operations, each \`["addEdge", [from, to, cost]]\` or \`["shortestPath", [node1, node2]]\`

Return an array with results from only \`shortestPath\` calls (in order). \`addEdge\` calls return \`null\`.`,
  constraints: [
    '1 <= n <= 100',
    '0 <= edges.length <= n * (n - 1)',
    'edges[i].length == edge.length == 3',
    '0 <= fromi, toi, from, to, node1, node2 <= n - 1',
    '1 <= edgeCosti, cost <= 10^6',
    'There are no repeated edges and no self-loops in the graph at any point.',
    'At most 100 calls will be made for addEdge and shortestPath combined.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,2,5],[0,1,2],[1,2,1],[3,0,3]], ops = [["shortestPath",[3,2]],["shortestPath",[0,3]],["addEdge",[1,3,4]],["shortestPath",[0,3]]]',
      output: '[6,-1,null,6]',
      explanation:
        'shortestPath(3,2): 3→0→1→2 = 3+2+1 = 6. shortestPath(0,3): no path → -1. After addEdge([1,3,4]): shortestPath(0,3) = 0→1→3 = 2+4 = 6.',
    },
  ],
  hints: [
    'Use Dijkstra\'s algorithm for each shortestPath query. With n ≤ 100 and at most 100 queries, repeated Dijkstra runs are efficient enough.',
    'Maintain the adjacency list and update it on each addEdge call. For each shortestPath(node1, node2), run Dijkstra from node1 and return dist[node2].',
    'Initialize a priority queue with (0, node1). Relax edges greedily by always expanding the minimum-cost unvisited node.',
  ],
  functionName: 'designGraph',
  params: ['n', 'edges', 'ops'],
  starterCode: {
    javascript: `function designGraph(n, edges, ops) {
  const adj = Array.from({ length: n }, () => []);
  for (const [from, to, cost] of edges) {
    adj[from].push([to, cost]);
  }

  const dijkstra = (src, dst) => {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    const pq = [[0, src]]; // [cost, node]
    while (pq.length > 0) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift();
      if (d > dist[u]) continue;
      for (const [v, w] of adj[u]) {
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          pq.push([dist[v], v]);
        }
      }
    }
    return dist[dst] === Infinity ? -1 : dist[dst];
  };

  const results = [];
  for (const [op, args] of ops) {
    if (op === 'addEdge') {
      const [from, to, cost] = args;
      adj[from].push([to, cost]);
      results.push(null);
    } else {
      const [node1, node2] = args;
      results.push(dijkstra(node1, node2));
    }
  }
  return results;
}`,
    typescript: "function designGraph(n: number, edges: number[][], ops: (string | number[])[][]): (number | null)[] {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [from, to, cost] of edges) {\n    adj[from].push([to, cost]);\n  }\n\n  const dijkstra = (src, dst) => {\n    const dist = new Array(n).fill(Infinity);\n    dist[src] = 0;\n    const pq = [[0, src]]; // [cost, node]\n    while (pq.length > 0) {\n      pq.sort((a, b) => a[0] - b[0]);\n      const [d, u] = pq.shift();\n      if (d > dist[u]) continue;\n      for (const [v, w] of adj[u]) {\n        if (dist[u] + w < dist[v]) {\n          dist[v] = dist[u] + w;\n          pq.push([dist[v], v]);\n        }\n      }\n    }\n    return dist[dst] === Infinity ? -1 : dist[dst];\n  };\n\n  const results = [];\n  for (const [op, args] of ops) {\n    if (op === 'addEdge') {\n      const [from, to, cost] = args;\n      adj[from].push([to, cost]);\n      results.push(null);\n    } else {\n      const [node1, node2] = args;\n      results.push(dijkstra(node1, node2));\n    }\n  }\n  return results;\n}",

    python: `def designGraph(n, edges, ops):
    from heapq import heappush, heappop

    adj = [[] for _ in range(n)]
    for frm, to, cost in edges:
        adj[frm].append((to, cost))

    def dijkstra(src, dst):
        dist = [float('inf')] * n
        dist[src] = 0
        pq = [(0, src)]
        while pq:
            d, u = heappop(pq)
            if d > dist[u]:
                continue
            for v, w in adj[u]:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
                    heappush(pq, (dist[v], v))
        return dist[dst] if dist[dst] != float('inf') else -1

    results = []
    for op, args in ops:
        if op == 'addEdge':
            adj[args[0]].append((args[1], args[2]))
            results.append(None)
        else:
            results.append(dijkstra(args[0], args[1]))
    return results
`,
  },
  visibleTests: [
    {
      args: [
        4,
        [[0,2,5],[0,1,2],[1,2,1],[3,0,3]],
        [['shortestPath',[3,2]],['shortestPath',[0,3]],['addEdge',[1,3,4]],['shortestPath',[0,3]]],
      ],
      expected: [6, -1, null, 6],
    },
  ],
  hiddenTests: [
    // Single node: shortestPath(0,0) = 0
    {
      args: [1, [], [['shortestPath',[0,0]]]],
      expected: [0],
    },
    // Two nodes, one edge: shortestPath(0,1)=cost, reverse has no edge
    {
      args: [2, [[0,1,7]], [['shortestPath',[0,1]],['shortestPath',[1,0]]]],
      expected: [7, -1],
    },
    // addEdge creates the only path
    {
      args: [
        3,
        [[0,1,3]],
        [['shortestPath',[0,2]],['addEdge',[1,2,5]],['shortestPath',[0,2]]],
      ],
      expected: [-1, null, 8],
    },
    // Multiple paths: picks shortest
    // n=3, edges=[0->1 cost 10, 0->2 cost 1, 2->1 cost 1]. shortestPath(0,1)=0->2->1=2
    {
      args: [3, [[0,1,10],[0,2,1],[2,1,1]], [['shortestPath',[0,1]]]],
      expected: [2],
    },
    // After addEdge creates shorter path
    // n=3, edges=[0->1 cost 10]. addEdge(0->2 cost 1), addEdge(2->1 cost 1). shortestPath(0,1)=2
    {
      args: [
        3,
        [[0,1,10]],
        [['shortestPath',[0,1]],['addEdge',[0,2,1]],['addEdge',[2,1,1]],['shortestPath',[0,1]]],
      ],
      expected: [10, null, null, 2],
    },
  ],
};
