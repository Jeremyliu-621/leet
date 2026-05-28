import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-connect-points',
  title: 'Min Cost to Connect All Points',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You are given an array \`points\` representing integer coordinates of some points on a 2D-plane, where \`points[i] = [xi, yi]\`.

The cost of connecting two points \`[xi, yi]\` and \`[xj, yj]\` is the **Manhattan distance** between them: \`|xi - xj| + |yi - yj|\`.

Return the **minimum cost** to make all points connected. All points are connected if there is **exactly one** simple path between any two points.`,
  constraints: [
    '1 <= points.length <= 1000',
    '-10^6 <= xi, yi <= 10^6',
    'All pairs (xi, yi) are distinct.',
  ],
  examples: [
    {
      input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
      output: '20',
      explanation: 'Connecting these 5 points with minimum cost yields 20 using Manhattan distances.',
    },
    {
      input: 'points = [[3,12],[-2,5],[-4,1]]',
      output: '18',
      explanation: 'Connect all 3 points with total Manhattan distance 18.',
    },
  ],
  hints: [
    'Level 1: This is a Minimum Spanning Tree (MST) problem. You need to connect n points with n-1 edges of minimum total cost. Use Prim\'s or Kruskal\'s algorithm.',
    "Level 2: Prim's with a min-heap: start from node 0. Maintain a min-heap of (cost, node) pairs. At each step, extract the cheapest reachable node not yet in MST, add its cost, then push all edges from it to unvisited nodes.",
    "Level 3: Prim's O(n^2): const n=points.length,inMST=new Array(n).fill(false),dist=new Array(n).fill(Infinity);dist[0]=0;let res=0;for(let i=0;i<n;i++){let u=-1;for(let j=0;j<n;j++)if(!inMST[j]&&(u===-1||dist[j]<dist[u]))u=j;inMST[u]=true;res+=dist[u];for(let v=0;v<n;v++)if(!inMST[v]){const d=Math.abs(points[u][0]-points[v][0])+Math.abs(points[u][1]-points[v][1]);if(d<dist[v])dist[v]=d;}}return res;",
  ],
  functionName: 'minCostConnectPoints',
  params: ['points'],
  starterCode: {
    javascript: 'function minCostConnectPoints(points) {\n  // your code here\n}\n',
    python: 'def minCostConnectPoints(points):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]], expected: 20 },
    { args: [[[3, 12], [-2, 5], [-4, 1]]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 0 },
    { args: [[[0, 0], [1, 1]]], expected: 2 },
    { args: [[[0, 0], [1, 1], [1, 0]]], expected: 2 },
    { args: [[[0, 0], [2, 0], [4, 0]]], expected: 4 },
    { args: [[[-1000000, -1000000], [1000000, 1000000]]], expected: 4000000 },
  ],
};
