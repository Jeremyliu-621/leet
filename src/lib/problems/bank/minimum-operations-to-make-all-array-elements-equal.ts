import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-all-array-elements-equal',
  title: 'Minimum Operations to Make All Array Elements Equal',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an array \`nums\` consisting of positive integers.

You are also given an integer array \`queries\`. For the \`i\`th query, you want to make all elements of \`nums\` equal to \`queries[i]\`. In one operation, you can increase or decrease an element by \`1\`.

Return an array \`answer\` where \`answer[i]\` is the **minimum** number of operations to make all elements of \`nums\` equal to \`queries[i]\`.

**Example 1:**
\`\`\`
Input: nums = [3,1,6,8], queries = [1,5]
Output: [14,10]
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [2,9,6,3], queries = [10]
Output: [20]
\`\`\`

**Constraints:**
- \`1 <= n, m <= 10^5\`
- \`1 <= nums[i], queries[i] <= 10^9\``,
  constraints: ['1 <= n, m <= 10^5', '1 <= nums[i], queries[i] <= 10^9'],
  examples: [
    { input: 'nums = [3,1,6,8], queries = [1,5]', output: '[14,10]' },
    { input: 'nums = [2,9,6,3], queries = [10]', output: '[20]' },
  ],
  hints: [
    'Sort nums and build a prefix sum array.',
    'For each query q, binary search for the count of elements < q (call it `lo`). Left side costs q*lo - prefixSum[lo]; right side costs (totalSum - prefixSum[lo]) - q*(n - lo).',
    'Total cost = left + right. Sum prefix sums beforehand so each query is O(log n).',
  ],
  functionName: 'minOperations',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: 'function minOperations(nums, queries) {\n  // your code here\n}\n',
    typescript: "function minOperations(nums: number[], queries: number[]): number[] {\n  // your code here\n}",

    python: 'def minOperations(nums, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 6, 8], [1, 5]], expected: [14, 10] },
    { args: [[2, 9, 6, 3], [10]], expected: [20] },
    { args: [[1], [1]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[5, 5, 5], [5]], expected: [0] },
    { args: [[1, 2, 3, 4, 5], [3]], expected: [6] },
    { args: [[1, 10], [5]], expected: [9] },
    { args: [[3, 3, 3], [1, 3, 5]], expected: [6, 0, 6] },
  ],
};
