import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-addition',
  title: 'Range Addition',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You have a zero-initialized integer array of length \`n\`. You are given an array of \`updates\` where each \`updates[i] = [startIdx, endIdx, inc]\` adds \`inc\` to all elements in the subarray \`[startIdx, endIdx]\` (inclusive).

After applying all updates, return the resulting array.

**Efficient approach:** Use the **difference array** technique — recording increments at boundaries rather than updating every element for each operation.`,
  constraints: [
    '1 <= n <= 10^4',
    '0 <= updates.length <= 10^4',
    '0 <= startIdx <= endIdx < n',
    '-1000 <= inc <= 1000',
  ],
  examples: [
    {
      input: 'n = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]',
      output: '[-2,0,3,5,3]',
      explanation:
        'Start: [0,0,0,0,0]. After [1,3,+2]: [0,2,2,2,0]. After [2,4,+3]: [0,2,5,5,3]. After [0,2,-2]: [-2,0,3,5,3].',
    },
    {
      input: 'n = 1, updates = [[0,0,1]]',
      output: '[1]',
      explanation: 'Single element incremented by 1.',
    },
  ],
  hints: [
    'Naively applying each update is O(n × k). The difference array trick is O(n + k).',
    'Build a difference array `diff` of length n+1. For each update [start, end, inc], do `diff[start] += inc` and `diff[end+1] -= inc`.',
    'The prefix sum of `diff` gives the final array values.',
  ],
  functionName: 'getModifiedArray',
  params: ['n', 'updates'],
  starterCode: {
    javascript: `function getModifiedArray(n, updates) {
  const diff = new Array(n + 1).fill(0);
  for (const [s, e, inc] of updates) { diff[s] += inc; diff[e + 1] -= inc; }
  const result = [];
  let sum = 0;
  for (let i = 0; i < n; i++) { sum += diff[i]; result.push(sum); }
  return result;
}`,
    typescript: `function getModifiedArray(n: number, updates: number[][]): number[] {
  const diff = new Array(n + 1).fill(0) as number[];
  for (const u of updates) { diff[u[0]!]! += u[2]!; diff[u[1]! + 1]! -= u[2]!; }
  const result: number[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) { sum += diff[i]!; result.push(sum); }
  return result;
}`,
    python: `def getModifiedArray(n, updates):
    if hasattr(n, 'to_py'): n = n.to_py()
    if hasattr(updates, 'to_py'): updates = updates.to_py()
    n = int(n)
    updates = [[int(v) for v in (u.to_py() if hasattr(u,'to_py') else u)] for u in updates]
    diff = [0]*(n+1)
    for s, e, inc in updates: diff[s] += inc; diff[e+1] -= inc
    result = []; sm = 0
    for i in range(n): sm += diff[i]; result.append(sm)
    return result`,
  },
  visibleTests: [
    { args: [5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]], expected: [-2, 0, 3, 5, 3] },
    { args: [1, [[0, 0, 1]]], expected: [1] },
  ],
  hiddenTests: [
    { args: [3, []], expected: [0, 0, 0] },
    { args: [5, [[0, 4, 1]]], expected: [1, 1, 1, 1, 1] },
    { args: [4, [[0, 3, 1], [1, 2, -1]]], expected: [1, 0, 0, 1] },
    { args: [10, [[0, 9, 5], [3, 7, -3]]], expected: [5, 5, 5, 2, 2, 2, 2, 2, 5, 5] },
    { args: [3, [[0, 0, 100], [1, 1, -100], [2, 2, 50]]], expected: [100, -100, 50] },
  ],
};
