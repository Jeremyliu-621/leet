import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-interval-to-include-each-query',
  title: 'Minimum Interval to Include Each Query',
  difficulty: 'hard',
  tags: ['heap', 'binary-search', 'arrays'],
  description: `You are given a 2D integer array \`intervals\`, where \`intervals[i] = [left_i, right_i]\` describes an interval starting at \`left_i\` and ending at \`right_i\` (inclusive). The **size** of an interval is \`right_i - left_i + 1\`.

You are also given an integer array \`queries\`. For each query \`queries[j]\`, find the **minimum size** of an interval such that \`left_i <= queries[j] <= right_i\`. If no interval contains a query, the answer is \`-1\`.

Return an array containing the answers to each query.

**Offline approach:**
1. Sort queries (with their original indices) by value.
2. Sort intervals by left endpoint.
3. Use a min-heap keyed by size. For each query: push all intervals whose left ≤ query. Pop intervals whose right < query. The heap top gives the minimum size.`,
  constraints: [
    '1 <= intervals.length <= 100000',
    '1 <= intervals[i][0] <= intervals[i][1] <= 1000000',
    '1 <= queries.length <= 100000',
    '1 <= queries[j] <= 1000000',
  ],
  examples: [
    {
      input: 'intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]',
      output: '[3,3,1,4]',
      explanation: 'Query 2: smallest interval containing 2 is [2,4] (size 3). Query 4: [4,4] (size 1). Query 5: [3,6] (size 4).',
    },
    {
      input: 'intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]',
      output: '[2,-1,4,6]',
    },
  ],
  hints: [
    'Sort queries by value. Sort intervals by left endpoint. This lets you sweep through queries and intervals together.',
    'Use a min-heap ordered by interval size. As you process each query (in sorted order), push all intervals with left ≤ query value. Then pop all intervals with right < query value.',
    'The top of the min-heap is the smallest valid interval. Store the result at the original query index and continue.',
  ],
  functionName: 'minInterval',
  params: ['intervals', 'queries'],
  starterCode: {
    javascript: `function minInterval(intervals, queries) {
  intervals = [...intervals].sort((a, b) => a[0] - b[0]);
  const qi = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
  const res = new Array(queries.length).fill(-1);
  const heap = []; // [size, right] min-heap by size
  const up = i => { while (i > 0) { const p = (i-1)>>1; if (heap[p][0] <= heap[i][0]) break; [heap[p],heap[i]]=[heap[i],heap[p]]; i=p; } };
  const dn = () => { let i=0; while(true){let m=i,l=2*i+1,r=2*i+2; if(l<heap.length&&heap[l][0]<heap[m][0])m=l; if(r<heap.length&&heap[r][0]<heap[m][0])m=r; if(m===i)break; [heap[m],heap[i]]=[heap[i],heap[m]]; i=m;} };
  let ii = 0;
  for (const [q, idx] of qi) {
    while (ii < intervals.length && intervals[ii][0] <= q) { heap.push([intervals[ii][1]-intervals[ii][0]+1, intervals[ii][1]]); up(heap.length-1); ii++; }
    while (heap.length > 0 && heap[0][1] < q) { heap[0] = heap.pop(); if (heap.length > 0) dn(); }
    if (heap.length > 0) res[idx] = heap[0][0];
  }
  return res;
}`,
    typescript: `function minInterval(intervals: number[][], queries: number[]): number[] {
  const sorted = [...intervals].sort((a, b) => a[0]! - b[0]!);
  const qi = queries.map((q, i) => [q, i] as [number,number]).sort((a, b) => a[0] - b[0]);
  const res = new Array(queries.length).fill(-1);
  const heap: [number,number][] = [];
  const up = (i: number) => { while (i > 0) { const p = (i-1)>>1; if (heap[p]![0] <= heap[i]![0]) break; [heap[p],heap[i]]=[heap[i]!,heap[p]!]; i=p; } };
  const dn = () => { let i=0; while(true){let m=i,l=2*i+1,r=2*i+2; if(l<heap.length&&heap[l]![0]<heap[m]![0])m=l; if(r<heap.length&&heap[r]![0]<heap[m]![0])m=r; if(m===i)break; [heap[m],heap[i]]=[heap[i]!,heap[m]!]; i=m;} };
  let ii = 0;
  for (const [q, idx] of qi) {
    while (ii < sorted.length && sorted[ii]![0]! <= q) { heap.push([sorted[ii]![1]!-sorted[ii]![0]!+1, sorted[ii]![1]!]); up(heap.length-1); ii++; }
    while (heap.length > 0 && heap[0]![1]! < q) { heap[0] = heap.pop()!; if (heap.length > 0) dn(); }
    if (heap.length > 0) res[idx] = heap[0]![0];
  }
  return res;
}`,
    python: `def minInterval(intervals: list, queries: list) -> list:
    if hasattr(intervals, 'to_py'): intervals = list(intervals.to_py())
    if hasattr(queries, 'to_py'): queries = list(queries.to_py())
    intervals = [list(iv.to_py()) if hasattr(iv, 'to_py') else list(iv) for iv in intervals]
    import heapq
    intervals.sort(key=lambda x: x[0])
    qi = sorted(enumerate(queries), key=lambda x: x[1])
    res = [-1] * len(queries); heap = []; ii = 0
    for orig_idx, q in qi:
        while ii < len(intervals) and intervals[ii][0] <= q:
            iv = intervals[ii]; heapq.heappush(heap, (iv[1]-iv[0]+1, iv[1])); ii += 1
        while heap and heap[0][1] < q: heapq.heappop(heap)
        if heap: res[orig_idx] = heap[0][0]
    return res`,
  },
  visibleTests: [
    { args: [[[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]], expected: [3,3,1,4] },
    { args: [[[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]], expected: [2,-1,4,6] },
  ],
  hiddenTests: [
    { args: [[[1,1]], [1]], expected: [1] },
    { args: [[[1,3],[2,6]], [5]], expected: [5] },
    { args: [[[1,10],[2,5],[3,4]], [3,4]], expected: [2,2] },
    { args: [[[5,10]], [1,5,10,15]], expected: [-1,6,6,-1] },
  ],
};
