import type { Problem } from '../types';

export const problem: Problem = {
  id: 'possible-bipartition',
  title: 'Possible Bipartition',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `We want to split a group of \`n\` people (labeled \`1\` to \`n\`) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.

Given the integer \`n\` and the array \`dislikes\` where \`dislikes[i] = [a_i, b_i]\` indicates that person \`a_i\` does not want to be in the same group as person \`b_i\`, return \`true\` if it is possible to split everyone into two groups this way, or \`false\` otherwise.`,
  constraints: [
    '1 <= n <= 2000',
    '0 <= dislikes.length <= 10^4',
    'dislikes[i].length == 2',
    '1 <= a_i < b_i <= n',
    'All pairs of dislikes[i] are unique.',
  ],
  examples: [
    { input: 'n = 4, dislikes = [[1,2],[1,3],[2,4]]', output: 'true', explanation: 'Group1: [1,4], Group2: [2,3].' },
    { input: 'n = 3, dislikes = [[1,2],[1,3],[2,3]]', output: 'false', explanation: 'Odd cycle — cannot 2-color.' },
    { input: 'n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]', output: 'false', explanation: 'Odd cycle of length 5.' },
  ],
  hints: [
    'Level 1: This is equivalent to checking whether the "dislike" graph is bipartite (2-colorable). Use BFS or DFS to try to assign each node a color, reporting false if a conflict is found.',
    'Level 2: Build an adjacency list. For each unvisited node, start a BFS with color 0. Neighbors get color 1, their neighbors get 0, etc. If a neighbor already has the same color as the current node, return false.',
    'Level 3: const adj=Array.from({length:n+1},()=>[]);for(const[a,b]of dislikes){adj[a].push(b);adj[b].push(a);}const color=new Int8Array(n+1).fill(-1);for(let s=1;s<=n;s++){if(color[s]!==-1)continue;color[s]=0;const q=[s];while(q.length){const u=q.shift();for(const v of adj[u]){if(color[v]===-1){color[v]=1-color[u];q.push(v);}else if(color[v]===color[u])return false;}}}return true;',
  ],
  functionName: 'possibleBipartition',
  params: ['n', 'dislikes'],
  starterCode: {
    javascript: 'function possibleBipartition(n, dislikes) {\n  // your code here\n}\n',
    python: 'def possibleBipartition(n, dislikes):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [4, [[1, 2], [1, 3], [2, 4]]], expected: true },
    { args: [3, [[1, 2], [1, 3], [2, 3]]], expected: false },
    { args: [5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]], expected: false },
  ],
  hiddenTests: [
    { args: [5, []], expected: true },
    { args: [2, [[1, 2]]], expected: true },
    { args: [4, [[1, 2], [3, 4], [2, 3]]], expected: true },
    { args: [4, [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3]]], expected: false },
  ],
};
