import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greedy-interval-cover',
  title: 'Minimum Intervals to Cover a Range',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a list of intervals \`intervals\` where \`intervals[i] = [start, end]\` (inclusive on both ends), and two integers \`lo\` and \`hi\`.

Return the **minimum number of intervals** from the list needed to fully cover the range \`[lo, hi]\` — meaning every integer point from \`lo\` to \`hi\` (inclusive) is contained within at least one chosen interval.

If it is impossible to cover the entire range, return **-1**.

**Greedy strategy:** Sort intervals by their start position. Always pick the interval that extends the coverage the furthest while still connecting to (or overlapping with) the current coverage boundary.`,
  constraints: [
    '1 <= intervals.length <= 10^5',
    '0 <= intervals[i][0] <= intervals[i][1] <= 10^9',
    '0 <= lo <= hi <= 10^9',
  ],
  examples: [
    {
      input: 'intervals = [[1,4],[3,8],[7,10]], lo = 1, hi = 10',
      output: '3',
      explanation: '[1,4] covers 1-4. Best extension starting ≤ 5 is [3,8], covering up to 8. Best extension starting ≤ 9 is [7,10], covering up to 10. Three intervals suffice.',
    },
    {
      input: 'intervals = [[1,2],[3,4],[5,6]], lo = 1, hi = 6',
      output: '3',
      explanation: '[1,2] covers to 2; [3,4] starts at 3 (connected); [5,6] starts at 5 (connected). Need all three.',
    },
    {
      input: 'intervals = [[1,10]], lo = 3, hi = 7',
      output: '1',
      explanation: 'The single interval covers the entire query range.',
    },
  ],
  hints: [
    'Sort intervals by start time. Then sweep from `lo`: at each step, among all intervals whose start is <= current coverage end + 1, pick the one that reaches furthest right.',
    'Maintain a pointer into the sorted intervals. For each "jump", scan all intervals starting at or before the current reach boundary, pick the max end among them, advance the boundary, and increment the count.',
    `\`\`\`js\nfunction minIntervalsCover(intervals, lo, hi) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  let count = 0, reach = lo - 1, i = 0;\n  while (reach < hi) {\n    let best = reach;\n    while (i < intervals.length && intervals[i][0] <= reach + 1) {\n      best = Math.max(best, intervals[i][1]);\n      i++;\n    }\n    if (best === reach) return -1;\n    reach = best;\n    count++;\n  }\n  return count;\n}\n\`\`\``,
  ],
  functionName: 'minIntervalsCover',
  params: ['intervals', 'lo', 'hi'],
  starterCode: {
    javascript: `function minIntervalsCover(intervals, lo, hi) {\n\n}`,
    typescript: `function minIntervalsCover(intervals: number[][], lo: number, hi: number): number {\n\n}`,
    python: `def min_intervals_cover(intervals: list[list[int]], lo: int, hi: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[[1, 4], [3, 8], [7, 10]], 1, 10], expected: 3 },
    { args: [[[1, 2], [3, 4], [5, 6]], 1, 6], expected: 3 },
    { args: [[[1, 10]], 3, 7], expected: 1 },
    { args: [[[1, 2], [4, 5]], 1, 5], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[0, 0]], 0, 0], expected: 1 },
    { args: [[[1, 5], [3, 8], [6, 10]], 2, 9], expected: 2 },
    { args: [[[1, 3], [5, 7]], 1, 7], expected: -1 },
    { args: [[[0, 1], [1, 2], [2, 3]], 0, 3], expected: 2 },
    { args: [[[1, 100]], 1, 100], expected: 1 },
    { args: [[[1, 3], [2, 4], [4, 6]], 1, 6], expected: 2 },
    { args: [[[5, 10], [1, 6]], 1, 10], expected: 2 },
    { args: [[[1, 3], [6, 9]], 1, 9], expected: -1 },
  ],
};
