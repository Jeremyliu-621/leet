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
    javascript: 'function minInterval(intervals, queries) {\n\n}\n',
    typescript: "function minInterval(intervals: number[][], queries: number[]): number[] {\n\n}",

    python: 'def minInterval(intervals: list, queries: list) -> list:\n    pass\n',
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
