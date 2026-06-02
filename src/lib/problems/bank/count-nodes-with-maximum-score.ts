import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-nodes-with-maximum-score',
  title: 'Count Nodes With the Maximum Score',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `There is a **binary** tree rooted at \`0\` consisting of \`n\` nodes. The nodes are labeled from \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`parents\` representing the tree, where \`parents[i]\` is the parent of node \`i\`. Since node \`0\` is the root, \`parents[0] == -1\`.

Each node has a **score**. To find the score of a node \`i\`, consider if removing node \`i\` from the tree splits the tree into multiple connected components. The score of node \`i\` is the **product of the sizes of all those components**.

Return the **number of nodes that have the highest score**.`,
  constraints: [
    'n == parents.length',
    '2 <= n <= 10^5',
    'parents[0] == -1',
    '0 <= parents[i] < n for i != 0',
    'parents represents a valid binary tree.',
  ],
  examples: [
    {
      input: 'parents = [-1,2,0,2,0]',
      output: '3',
      explanation:
        'Tree: 0→{2,4}, 2→{1,3}. Subtree sizes: sub[0]=5, sub[2]=3, sub[4]=1, sub[1]=1, sub[3]=1. Score(0)=3*1=3; Score(1)=4; Score(2)=1*1*2=2; Score(3)=4; Score(4)=4. Max=4, count=3 (nodes 1,3,4).',
    },
    {
      input: 'parents = [-1,2,0]',
      output: '2',
      explanation:
        'Tree: 0→{2}, 2→{1}. Subtree sizes: sub[0]=3, sub[2]=2, sub[1]=1. Score(0)=2; Score(1)=2; Score(2)=1*1=1. Max=2, count=2 (nodes 0,1).',
    },
    {
      input: 'parents = [-1,0,0]',
      output: '2',
      explanation:
        'Tree: 0→{1,2}. Score(0)=1*1=1; Score(1)=2; Score(2)=2. Max=2, count=2.',
    },
  ],
  hints: [
    'Level 1: When node i is removed, the tree splits into: one component per child subtree, and one component for the rest of the tree above i. Score = product of all non-zero component sizes.',
    'Level 2: Compute subtree sizes with a post-order traversal (process leaves first using topological sort via a queue of degree-0 nodes).',
    'Level 3: For each node i: score = (product of subtree sizes of each child) * (n - subtree_size[i]) where the last factor is skipped if 0. Track max score and count.',
  ],
  functionName: 'countHighestScoreNodes',
  params: ['parents'],
  starterCode: {
    javascript: `function countHighestScoreNodes(parents) {
  const n = parents.length;
  const children = Array.from({length: n}, () => []);
  for (let i = 1; i < n; i++) children[parents[i]].push(i);
  const size = new Array(n).fill(1);
  const deg = children.map(c => c.length);
  const queue = [];
  for (let i = 0; i < n; i++) if (deg[i] === 0) queue.push(i);
  while (queue.length) {
    const u = queue.pop();
    if (parents[u] !== -1) {
      size[parents[u]] += size[u];
      if (--deg[parents[u]] === 0) queue.push(parents[u]);
    }
  }
  let maxScore = 0, count = 0;
  for (let i = 0; i < n; i++) {
    let score = 1;
    for (const c of children[i]) score *= size[c];
    const up = n - size[i];
    if (up > 0) score *= up;
    if (score > maxScore) { maxScore = score; count = 1; }
    else if (score === maxScore) count++;
  }
  return count;
}`,
    typescript: `function countHighestScoreNodes(parents: number[]): number {
  const n = parents.length;
  const children: number[][] = Array.from({length: n}, () => []);
  for (let i = 1; i < n; i++) children[parents[i]!]!.push(i);
  const size = new Array<number>(n).fill(1);
  const deg = children.map(c => c.length);
  const queue: number[] = [];
  for (let i = 0; i < n; i++) if (deg[i] === 0) queue.push(i);
  while (queue.length) {
    const u = queue.pop()!;
    if (parents[u] !== -1) {
      size[parents[u]!]! += size[u]!;
      if (--deg[parents[u]!]! === 0) queue.push(parents[u]!);
    }
  }
  let maxScore = 0, count = 0;
  for (let i = 0; i < n; i++) {
    let score = 1;
    for (const c of children[i]!) score *= size[c]!;
    const up = n - size[i]!;
    if (up > 0) score *= up;
    if (score > maxScore) { maxScore = score; count = 1; }
    else if (score === maxScore) count++;
  }
  return count;
}`,
    python: `def countHighestScoreNodes(parents):
    if hasattr(parents, 'to_py'): parents = parents.to_py()
    parents = [int(x) for x in parents]
    n = len(parents)
    children = [[] for _ in range(n)]
    for i in range(1, n):
        children[parents[i]].append(i)
    size = [1] * n
    deg = [len(children[i]) for i in range(n)]
    queue = [i for i in range(n) if deg[i] == 0]
    while queue:
        u = queue.pop()
        if parents[u] != -1:
            size[parents[u]] += size[u]
            deg[parents[u]] -= 1
            if deg[parents[u]] == 0:
                queue.append(parents[u])
    max_score = 0; count = 0
    for i in range(n):
        score = 1
        for c in children[i]:
            score *= size[c]
        up = n - size[i]
        if up > 0:
            score *= up
        if score > max_score:
            max_score = score; count = 1
        elif score == max_score:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [[-1, 2, 0, 2, 0]], expected: 3 },
    { args: [[-1, 2, 0]], expected: 2 },
    { args: [[-1, 0, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[-1, 0]], expected: 2 },
    { args: [[-1, 0, 0, 1, 1, 2, 2]], expected: 1 },
    { args: [[-1, 0, 0, 1]], expected: 2 },
    { args: [[-1, 0, 1, 2, 3]], expected: 3 },
  ],
};
