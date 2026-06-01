import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-intervals-to-include-each-query',
  title: 'Minimum Interval to Include Each Query',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search', 'heap'],
  description: `You are given a 2D integer array \`intervals\`, where \`intervals[i] = [left_i, right_i]\` describes the \`i\`th interval starting at \`left_i\` and ending at \`right_i\` **(inclusive)**. The **size** of an interval is defined as the number of integers it contains, or more formally \`right_i - left_i + 1\`.

You are also given an integer array \`queries\`. The answer to the \`j\`th query is the **size of the smallest interval** \`i\` such that \`left_i <= queries[j] <= right_i\`. If no such interval exists, the answer is \`-1\`.

Return an array containing the answers to the queries.`,
  constraints: [
    '1 <= intervals.length <= 10^5',
    '1 <= queries.length <= 10^5',
    'intervals[i].length == 2',
    '1 <= left_i <= right_i <= 10^7',
    '1 <= queries[j] <= 10^7',
  ],
  examples: [
    {
      input: 'intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]',
      output: '[3,3,1,4]',
      explanation: 'Query 2: smallest covering interval is [2,4] (size 3). Query 3: [2,4] (size 3). Query 4: [4,4] (size 1). Query 5: [3,6] (size 4).',
    },
    {
      input: 'intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]',
      output: '[2,-1,4,6]',
      explanation: 'Query 2: [2,3] (size 2). Query 19: no interval covers 19 → -1. Query 5: [2,5] (size 4). Query 22: [20,25] (size 6).',
    },
  ],
  hints: [
    'Level 1: Sort queries by value. Sort intervals by start. Use a min-heap keyed on interval size.',
    'Level 2: For each query (in sorted order), add all intervals starting at or before the query to the heap. Then pop intervals from the heap whose right end < query. The heap top is the answer.',
    'Level 3: Remember to map sorted query results back to original indices. Total time O((n+q) log n).',
  ],
  functionName: 'minInterval',
  params: ['intervals', 'queries'],
  starterCode: {
    javascript: `function minInterval(intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  const sorted = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
  const ans = new Array(queries.length).fill(-1);
  // Min-heap: [size, right]
  const heap = [];
  const push = (v) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]]; i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2*i+1, r = 2*i+2;
        let m = i;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break;
        [heap[i], heap[m]] = [heap[m], heap[i]]; i = m;
      }
    }
    return top;
  };
  let j = 0;
  for (const [q, idx] of sorted) {
    while (j < intervals.length && intervals[j][0] <= q) {
      const [l, r] = intervals[j++];
      push([r - l + 1, r]);
    }
    while (heap.length && heap[0][1] < q) pop();
    if (heap.length) ans[idx] = heap[0][0];
  }
  return ans;
}`,
    typescript: `function minInterval(intervals: number[][], queries: number[]): number[] {
  intervals.sort((a, b) => a[0]! - b[0]!);
  const sorted = queries.map((q, i) => [q, i] as [number, number]).sort((a, b) => a[0] - b[0]);
  const ans = new Array<number>(queries.length).fill(-1);
  const heap: [number, number][] = [];
  const push = (v: [number, number]) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p]![0] <= heap[i]![0]) break;
      [heap[p], heap[i]] = [heap[i]!, heap[p]!]; i = p;
    }
  };
  const pop = () => {
    const top = heap[0]!;
    const last = heap.pop()!;
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2*i+1, r = 2*i+2;
        let m = i;
        if (l < heap.length && heap[l]![0] < heap[m]![0]) m = l;
        if (r < heap.length && heap[r]![0] < heap[m]![0]) m = r;
        if (m === i) break;
        [heap[i], heap[m]] = [heap[m]!, heap[i]!]; i = m;
      }
    }
    return top;
  };
  let j = 0;
  for (const [q, idx] of sorted) {
    while (j < intervals.length && intervals[j]![0]! <= q) {
      const [l, r] = intervals[j++]!;
      push([r! - l! + 1, r!]);
    }
    while (heap.length && heap[0]![1] < q) pop();
    if (heap.length) ans[idx] = heap[0]![0];
  }
  return ans;
}`,
    python: `def minInterval(intervals, queries):
    import heapq
    intervals.sort()
    sorted_q = sorted(enumerate(queries), key=lambda x: x[1])
    ans = [-1] * len(queries)
    heap = []  # (size, right)
    j = 0
    for idx, q in sorted_q:
        while j < len(intervals) and intervals[j][0] <= q:
            l, r = intervals[j]
            heapq.heappush(heap, (r - l + 1, r))
            j += 1
        while heap and heap[0][1] < q:
            heapq.heappop(heap)
        if heap:
            ans[idx] = heap[0][0]
    return ans`,
  },
  visibleTests: [
    { args: [[[1, 4], [2, 4], [3, 6], [4, 4]], [2, 3, 4, 5]], expected: [3, 3, 1, 4] },
    { args: [[[2, 3], [2, 5], [1, 8], [20, 25]], [2, 19, 5, 22]], expected: [2, -1, 4, 6] },
  ],
  hiddenTests: [
    { args: [[[1, 10]], [5]], expected: [10] },
    { args: [[[1, 2], [3, 4]], [1, 2, 3, 4]], expected: [2, 2, 2, 2] },
    { args: [[[1, 5], [2, 3]], [3]], expected: [2] },
    { args: [[[1, 1], [2, 2], [3, 3]], [1, 2, 3, 4]], expected: [1, 1, 1, -1] },
    { args: [[[5, 10]], [1, 3, 6]], expected: [-1, -1, 6] },
  ],
};
