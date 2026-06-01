import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-iv',
  title: 'Jump Game IV',
  difficulty: 'hard',
  tags: ['graph', 'arrays'],
  description: `Given an array of integers \`arr\`, you are initially positioned at the first index of the array.

In one step you can jump from index \`i\` to:
- \`i + 1\` where \`i + 1 < arr.length\`,
- \`i - 1\` where \`i - 1 >= 0\`, or
- \`j\` where \`arr[i] == arr[j]\` and \`i != j\`.

Return the **minimum number of steps** to reach the **last index** of the array.`,
  constraints: [
    '1 <= arr.length <= 5 * 10^4',
    '-10^8 <= arr[i] <= 10^8',
  ],
  examples: [
    {
      input: 'arr = [100,-23,-23,404,100,23,23,23,3,404]',
      output: '3',
      explanation: 'Jump from 0 (100) → 4 (100) → 3 (404) → 9 (404). 3 steps.',
    },
    {
      input: 'arr = [7]',
      output: '0',
      explanation: 'Already at the last index.',
    },
    {
      input: 'arr = [7,6,9,6,9,6,9,7]',
      output: '1',
      explanation: 'Jump directly from index 0 (7) to index 7 (7). 1 step.',
    },
  ],
  hints: [
    'Level 1: Model this as a shortest-path problem on an implicit graph. Nodes are indices; edges connect i to i±1 and to all j where arr[j]===arr[i]. BFS gives minimum steps.',
    'Level 2: Pre-group indices by value: `Map<value, indices[]>`. For BFS: use a queue starting at [0, 0 steps]. From each index, explore i+1, i-1, and all same-value indices. Remove a value from the map once all its indices are enqueued (avoids revisiting them).',
    'Level 3: `const n=arr.length; if(n===1)return 0; const graph=new Map(); for(let i=0;i<n;i++){const v=arr[i]; if(!graph.has(v))graph.set(v,[]); graph.get(v).push(i);} const visited=new Set([0]); const q=[[0,0]]; while(q.length){const [i,steps]=q.shift(); const next=[i-1,i+1,...(graph.get(arr[i])??[])]; graph.delete(arr[i]); for(const j of next){if(j===n-1)return steps+1; if(j>=0&&j<n&&!visited.has(j)){visited.add(j);q.push([j,steps+1]);}}} return -1;`',
  ],
  functionName: 'minJumps',
  params: ['arr'],
  starterCode: {
    javascript: `function minJumps(arr) {
  const n = arr.length;
  if (n === 1) return 0;
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    if (!graph.has(arr[i])) graph.set(arr[i], []);
    graph.get(arr[i]).push(i);
  }
  const visited = new Set([0]);
  const q = [[0, 0]];
  while (q.length) {
    const [i, steps] = q.shift();
    const next = [i - 1, i + 1, ...(graph.get(arr[i]) ?? [])];
    graph.delete(arr[i]);
    for (const j of next) {
      if (j === n - 1) return steps + 1;
      if (j >= 0 && j < n && !visited.has(j)) { visited.add(j); q.push([j, steps + 1]); }
    }
  }
  return -1;
}`,
    typescript: `function minJumps(arr: number[]): number {
  const n = arr.length;
  if (n === 1) return 0;
  const graph = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    if (!graph.has(arr[i]!)) graph.set(arr[i]!, []);
    graph.get(arr[i]!)!.push(i);
  }
  const visited = new Set([0]);
  const q: [number, number][] = [[0, 0]];
  while (q.length) {
    const [i, steps] = q.shift()!;
    const next = [i - 1, i + 1, ...(graph.get(arr[i]!) ?? [])];
    graph.delete(arr[i]!);
    for (const j of next) {
      if (j === n - 1) return steps + 1;
      if (j >= 0 && j < n && !visited.has(j)) { visited.add(j); q.push([j, steps + 1]); }
    }
  }
  return -1;
}`,
    python: `def minJumps(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    from collections import defaultdict, deque
    n = len(arr)
    if n == 1: return 0
    graph = defaultdict(list)
    for i, v in enumerate(arr): graph[v].append(i)
    visited = {0}
    q = deque([(0, 0)])
    while q:
        i, steps = q.popleft()
        neighbors = [i - 1, i + 1] + graph.pop(arr[i], [])
        for j in neighbors:
            if j == n - 1: return steps + 1
            if 0 <= j < n and j not in visited:
                visited.add(j)
                q.append((j, steps + 1))
    return -1`,
  },
  visibleTests: [
    {
      args: [[100, -23, -23, 404, 100, 23, 23, 23, 3, 404]],
      expected: 3,
    },
    {
      args: [[7]],
      expected: 0,
    },
    {
      args: [[7, 6, 9, 6, 9, 6, 9, 7]],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[6, 1, 9]],
      expected: 2,
    },
    {
      args: [[11, 22, 7, 7, 7, 22, 11]],
      expected: 1,
    },
    {
      args: [[1, 2, 3, 4, 5]],
      expected: 4,
    },
    {
      args: [[0, 0]],
      expected: 1,
    },
    {
      args: [[1, 1, 1, 1, 1]],
      expected: 1,
    },
  ],
};
