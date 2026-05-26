import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-of-path',
  title: 'Minimum Score of a Path Between Two Cities',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given \`n\` cities numbered \`1\` to \`n\` and a 2D array \`roads\` where \`roads[i] = [a, b, distance]\` represents a **bidirectional** road.

The **score** of a path between cities is the **minimum** distance of any road in the path.

Return the **minimum possible score** of a path between cities \`1\` and \`n\`.

**Note:** A path may visit a city or road more than once.

**Example 1:**
\`\`\`
Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
\`\`\`

**Example 2:**
\`\`\`
Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
\`\`\`

**Constraints:**
- \`2 ≤ n ≤ 10⁵\`
- \`1 ≤ roads.length ≤ 10⁵\``,
  constraints: [
    '2 ≤ n ≤ 10⁵',
    '1 ≤ roads.length ≤ 10⁵',
    'There is a path from city 1 to city n',
  ],
  examples: [
    { input: 'n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]', output: '5' },
    { input: 'n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]', output: '2' },
  ],
  hints: [
    'Since paths can revisit nodes, the answer is the minimum edge weight in the connected component containing both node 1 and node n.',
    'BFS/DFS from node 1; track all reachable nodes. The answer is the min edge weight in the component.',
    `\`\`\`js
// The answer is the minimum edge weight reachable from node 0 (which connects to node n-1)
// BFS/DFS from 0 on undirected graph; minimum edge weight encountered
const adj = Array.from({length: n}, ()=>[]);
for (const [u,v,w] of edges) { adj[u].push([v,w]); adj[v].push([u,w]); }
const vis = new Array(n).fill(false);
const q = [0]; vis[0]=true;
let minW = Infinity;
while (q.length) {
  const u=q.shift();
  for (const [v,w] of adj[u]) { minW=Math.min(minW,w); if(!vis[v]){vis[v]=true;q.push(v);} }
}
return minW;\`\`\``,
  ],
  functionName: 'minScore',
  params: ['n', 'roads'],
  starterCode: {
    javascript: 'function minScore(n, roads) {\n\n}\n',
    python: 'def minScore(n, roads):\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]], expected: 5 },
    { args: [4, [[1, 2, 2], [1, 3, 4], [3, 4, 7]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [2, [[1, 2, 5]]], expected: 5 },
    { args: [3, [[1, 2, 3], [2, 3, 1]]], expected: 1 },
    { args: [3, [[1, 2, 10], [1, 3, 1]]], expected: 1 },
  ],
};
