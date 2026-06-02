import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-building-where-alice-and-bob-can-meet',
  title: 'Find Building Where Alice and Bob Can Meet',
  difficulty: 'hard',
  tags: ['arrays', 'stack', 'binary-search'],
  description: `You are given a **0-indexed** array \`heights\` of positive integers, where \`heights[i]\` represents the height of the \`i\`-th building.

If a person is in building \`i\`, they can move to building \`j\` if and only if \`i < j\` and \`heights[i] < heights[j]\`.

You are also given another array \`queries\` where \`queries[i] = [a_i, b_i]\`. On the \`i\`-th query, Alice is in building \`a_i\` and Bob is in building \`b_i\`.

Return an array \`ans\` where \`ans[i]\` is the **index of the leftmost building** where Alice and Bob can **both** meet. If there is no such building, \`ans[i]\` is \`-1\`.

**Note:** Alice and Bob can stay at their initial building; they don't have to move.`,
  constraints: [
    '1 <= heights.length <= 5 × 10^4',
    '1 <= heights[i] <= 10^9',
    '1 <= queries.length <= 5 × 10^4',
    '0 <= queries[i][0], queries[i][1] < heights.length',
  ],
  examples: [
    {
      input: 'heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]',
      output: '[2,5,-1,5,2]',
      explanation: '[0,1]: heights[1]=4<heights[0]=6, find j>1 with h[j]>6 → index 2 (h=8). [0,3]: find j>3 with h[j]>6 → index 5 (h=7). [2,4]: need h>8 after index 4 — none → -1. [3,4]: find j>4 with h[j]>5 → index 5 (h=7). [2,2]: same index → 2.',
    },
    {
      input: 'heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[6,3]]',
      output: '[7,6,-1,6]',
      explanation: '[0,7]: heights[7]=6>heights[0]=5 → 7. [3,5]: heights[5]=1<heights[3]=2, find j>5 with h>2 → index 6 (h=4). [5,2]: swap to [2,5]; heights[2]=8, need j>5 with h>8 → -1. [6,3]: swap to [3,6]; heights[6]=4>heights[3]=2 → 6.',
    },
    {
      input: 'heights = [1,2,3], queries = [[0,2],[0,1]]',
      output: '[2,1]',
      explanation: 'Both queries: heights[b] > heights[a] so answer = b directly.',
    },
  ],
  hints: [
    'WLOG assume a ≤ b (swap if needed). If a == b, answer is a. If heights[b] > heights[a], answer is b. Otherwise, find the minimum j > b with heights[j] > max(heights[a], heights[b]) = heights[a].',
    'For the remaining queries, process offline sorted by b (the right endpoint) descending. Traverse heights from right to left, maintaining a monotone decreasing stack.',
    'When processing a query at position b, binary search in the stack for the leftmost (smallest index) entry with height > heights[a]. The stack has decreasing heights so you can binary search on height.',
    'Each stack entry has a larger index than the one above it (we add right to left) — binary search for height > target gives the index of the answer.',
  ],
  functionName: 'leftmostBuildingQueries',
  params: ['heights', 'queries'],
  starterCode: {
    javascript: `function leftmostBuildingQueries(heights, queries) {
  const n = heights.length, q = queries.length;
  const ans = new Array(q).fill(-1);
  const pending = Array.from({ length: n }, () => []);
  for (let i = 0; i < q; i++) {
    let [a, b] = queries[i];
    if (a > b) [a, b] = [b, a];
    if (a === b || heights[b] > heights[a]) { ans[i] = a === b ? a : b; continue; }
    pending[b].push([heights[a], i]);
  }
  const stack = []; // [height, index], monotone decreasing height
  for (let b = n - 1; b >= 0; b--) {
    for (const [thr, qi] of pending[b]) {
      if (!stack.length || stack[0][0] <= thr) continue;
      let lo = 0, hi = stack.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (stack[mid][0] > thr) lo = mid; else hi = mid - 1; }
      ans[qi] = stack[lo][1];
    }
    while (stack.length && stack[stack.length - 1][0] <= heights[b]) stack.pop();
    stack.push([heights[b], b]);
  }
  return ans;
}`,
    typescript: `function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
  const n = heights.length, q = queries.length;
  const ans: number[] = new Array(q).fill(-1);
  const pending: [number, number][][] = Array.from({ length: n }, () => []);
  for (let i = 0; i < q; i++) {
    let a = queries[i]![0]!, b = queries[i]![1]!;
    if (a > b) [a, b] = [b, a];
    if (a === b || heights[b]! > heights[a]!) { ans[i] = a === b ? a : b; continue; }
    pending[b]!.push([heights[a]!, i]);
  }
  const stack: [number, number][] = [];
  for (let b = n - 1; b >= 0; b--) {
    for (const [thr, qi] of pending[b]!) {
      if (!stack.length || stack[0]![0]! <= thr) continue;
      let lo = 0, hi = stack.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (stack[mid]![0]! > thr) lo = mid; else hi = mid - 1; }
      ans[qi] = stack[lo]![1]!;
    }
    while (stack.length && stack[stack.length - 1]![0]! <= heights[b]!) stack.pop();
    stack.push([heights[b]!, b]);
  }
  return ans;
}`,
    python: `def leftmostBuildingQueries(heights, queries):
    n, ans = len(heights), [-1] * len(queries)
    pending = [[] for _ in range(n)]
    for i, (a, b) in enumerate(queries):
        if a > b: a, b = b, a
        if a == b or heights[b] > heights[a]: ans[i] = a if a == b else b; continue
        pending[b].append((heights[a], i))
    stack = []  # (height, index), heights decreasing from stack[0]
    for b in range(n - 1, -1, -1):
        for thr, qi in pending[b]:
            if not stack or stack[0][0] <= thr: continue
            lo, hi = 0, len(stack) - 1
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if stack[mid][0] > thr: lo = mid
                else: hi = mid - 1
            ans[qi] = stack[lo][1]
        while stack and stack[-1][0] <= heights[b]: stack.pop()
        stack.append((heights[b], b))
    return ans`,
  },
  visibleTests: [
    { args: [[6, 4, 8, 5, 2, 7], [[0, 1], [0, 3], [2, 4], [3, 4], [2, 2]]], expected: [2, 5, -1, 5, 2] },
    { args: [[5, 3, 8, 2, 6, 1, 4, 6], [[0, 7], [3, 5], [5, 2], [6, 3]]], expected: [7, 6, -1, 6] },
    { args: [[1, 2, 3], [[0, 2], [0, 1]]], expected: [2, 1] },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0]]], expected: [0] },
    { args: [[1, 2], [[0, 1], [1, 0]]], expected: [1, 1] },
    { args: [[3, 3, 3], [[0, 2], [0, 1], [1, 2]]], expected: [-1, -1, -1] },
    { args: [[1, 2, 3, 4, 5], [[0, 4], [0, 1], [2, 3]]], expected: [4, 1, 3] },
    { args: [[5, 4, 3, 2, 1], [[0, 4], [0, 3], [1, 2]]], expected: [-1, -1, -1] },
    { args: [[1, 3, 2, 4], [[0, 2], [1, 3], [0, 3]]], expected: [2, 3, 3] },
    { args: [[2, 1, 3, 1, 2], [[0, 3], [1, 4], [2, 4]]], expected: [-1, 4, -1] },
    { args: [[1, 2, 1, 2, 1], [[0, 1], [2, 3], [4, 0]]], expected: [1, 3, -1] },
    { args: [[10, 5, 8, 3, 6], [[0, 2], [1, 3], [2, 4]]], expected: [-1, 4, -1] },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6], [[0, 5], [2, 7], [1, 6]]], expected: [5, 7, 6] },
  ],
};
