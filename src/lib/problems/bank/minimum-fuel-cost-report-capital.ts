import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-fuel-cost-report-capital',
  title: 'Minimum Fuel Cost to Report to the Capital',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of \`n\` cities numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` roads. The capital city is city \`0\`. You are given a 2D integer array \`roads\` where \`roads[i] = [a_i, b_i]\` denotes that there exists a **bidirectional** road connecting cities \`a_i\` and \`b_i\`.

There is a representative for each city. The representative of city \`i\` starts at city \`i\` and travels toward the capital city \`0\`.

Each representative must reach the capital. They travel using **cars** with \`seats\` seats. A car uses 1 unit of fuel per road traversed. You may pick up representatives along the way. Each car can carry at most \`seats\` representatives at a time.

Return the **minimum** number of liters of fuel to reach the capital city \`0\`.`,
  constraints: [
    '1 <= n <= 10^5',
    'roads.length == n - 1',
    'roads[i].length == 2',
    '0 <= a_i, b_i < n',
    'a_i != b_i',
    '1 <= seats <= 10^5',
    'The input is generated such that roads forms a tree.',
  ],
  examples: [
    {
      input: 'roads = [[0,1],[0,2],[0,3]], seats = 5',
      output: '3',
      explanation: 'Each representative drives alone to city 0. 3 cars × 1 road = 3 fuel.',
    },
    {
      input: 'roads = [[0,1],[1,2]], seats = 2',
      output: '2',
      explanation: "Rep 2 travels to city 1 (1 fuel). Rep 1 and 2 travel to city 0 together (1 car, 1 fuel). Total = 2.",
    },
  ],
  hints: [
    'Level 1: Use DFS. For each subtree, the number of representatives that must cross the edge to parent = subtree size. The fuel for that edge = ceil(subtree_size / seats).',
    'Level 2: dfs(u, parent) returns the size of u\'s subtree. For each child v, add dfs(v, u) to size. Then add ceil(size / seats) to the answer (except for the root, city 0).',
    'Level 3: Build adjacency list. ans=0; dfs(u,p)={let sz=1;for(v of adj[u])if(v!==p)sz+=dfs(v,u);if(u!==0)ans+=Math.ceil(sz/seats);return sz;};dfs(0,-1);return ans;',
  ],
  functionName: 'minimumFuelCost',
  params: ['roads', 'seats'],
  starterCode: {
    javascript: 'function minimumFuelCost(roads, seats) {\n  // your code here\n}\n',
    typescript: "function minimumFuelCost(roads: number[][], seats: number): number {\n  // your code here\n}",

    python: 'def minimumFuelCost(roads, seats):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1], [0, 2], [0, 3]], 5], expected: 3 },
    { args: [[[0, 1], [1, 2]], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[], 1], expected: 0 },
    { args: [[[0, 1], [0, 2]], 1], expected: 2 },
    { args: [[[0, 1], [1, 2], [2, 3]], 3], expected: 3 },
    { args: [[[0, 1], [0, 2], [1, 3], [1, 4]], 2], expected: 5 },
  ],
};
