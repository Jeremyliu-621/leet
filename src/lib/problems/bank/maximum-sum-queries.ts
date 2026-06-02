import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-queries',
  title: 'Maximum Sum Queries',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\`, each of length \`n\`, and a 2D array \`queries\` where \`queries[i] = [xi, yi]\`.

For the \`i\`th query, find the **maximum value** of \`nums1[j] + nums2[j]\` among all indices \`j\` where \`nums1[j] >= xi\` and \`nums2[j] >= yi\`, or \`-1\` if there is no such index.

Return an array \`answer\` where \`answer[i]\` is the answer to the \`i\`th query.

**Example 1:**
\`\`\`
Input: nums1 = [4,3,1,2], nums2 = [2,4,9,5], queries = [[4,1],[1,3],[2,5]]
Output: [6,10,7]
\`\`\`

**Example 2:**
\`\`\`
Input: nums1 = [3,2,5], nums2 = [2,3,4], queries = [[4,4],[3,2],[1,1]]
Output: [9,9,9]
\`\`\`

**Constraints:**
- \`nums1.length == nums2.length == n\`
- \`1 <= n <= 10^5\`
- \`1 <= nums1[i], nums2[i] <= 10^9\`
- \`1 <= queries.length <= 10^5\``,
  constraints: [
    'nums1.length == nums2.length == n',
    '1 <= n, queries.length <= 10^5',
    '1 <= nums1[i], nums2[i] <= 10^9',
  ],
  examples: [
    { input: 'nums1 = [4,3,1,2], nums2 = [2,4,9,5], queries = [[4,1],[1,3],[2,5]]', output: '[6,10,7]' },
    { input: 'nums1 = [3,2,5], nums2 = [2,3,4], queries = [[4,4],[3,2],[1,1]]', output: '[9,9,9]' },
  ],
  hints: [
    'Sort queries by xi descending and index pairs by nums1 descending. As xi decreases, add qualifying pairs to your structure.',
    'For each query, among all added pairs, find the max sum where nums2[j] >= yi. Maintain a monotone stack on (nums2[j], sum) — higher nums2 should mean higher or equal sum (discard dominated).',
    'Binary search the monotone stack for the first entry with nums2 >= yi, returning its sum.',
  ],
  functionName: 'maximumSumQueries',
  params: ['nums1', 'nums2', 'queries'],
  starterCode: {
    javascript: `function maximumSumQueries(nums1, nums2, queries) {
  const n = nums1.length;
  return queries.map(([x, y]) => {
    let best = -1;
    for (let j = 0; j < n; j++) if (nums1[j] >= x && nums2[j] >= y) best = Math.max(best, nums1[j] + nums2[j]);
    return best;
  });
}`,
    typescript: `function maximumSumQueries(nums1: number[], nums2: number[], queries: number[][]): number[] {
  const n = nums1.length;
  return queries.map(q => {
    const [x, y] = q as [number, number];
    let best = -1;
    for (let j = 0; j < n; j++) if (nums1[j]! >= x && nums2[j]! >= y) best = Math.max(best, nums1[j]! + nums2[j]!);
    return best;
  });
}`,
    python: `def maximumSumQueries(nums1, nums2, queries):
    if hasattr(nums1, 'to_py'): nums1 = nums1.to_py()
    if hasattr(nums2, 'to_py'): nums2 = nums2.to_py()
    if hasattr(queries, 'to_py'): queries = queries.to_py()
    nums1 = [int(x) for x in nums1]; nums2 = [int(x) for x in nums2]
    queries = [[int(v) for v in (q.to_py() if hasattr(q,'to_py') else q)] for q in queries]
    n = len(nums1)
    result = []
    for x, y in queries:
        best = -1
        for j in range(n):
            if nums1[j] >= x and nums2[j] >= y: best = max(best, nums1[j] + nums2[j])
        result.append(best)
    return result`,
  },
  visibleTests: [
    { args: [[4, 3, 1, 2], [2, 4, 9, 5], [[4, 1], [1, 3], [2, 5]]], expected: [6, 10, 7] },
    { args: [[3, 2, 5], [2, 3, 4], [[4, 4], [3, 2], [1, 1]]], expected: [9, 9, 9] },
    { args: [[1], [1], [[1, 1]]], expected: [2] },
  ],
  hiddenTests: [
    { args: [[1], [1], [[2, 1]]], expected: [-1] },
    { args: [[1, 2], [2, 1], [[1, 1], [2, 2]]], expected: [3, -1] },
    { args: [[5, 5], [5, 5], [[5, 5]]], expected: [10] },
  ],
};
