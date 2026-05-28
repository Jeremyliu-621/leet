import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-obtained-of-any-permutation',
  title: 'Maximum Sum Obtained of Any Permutation',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `We have an array of integers \`nums\` (not necessarily distinct) and an array of \`requests\`, where \`requests[i] = [starti, endi]\`. The \`i\`-th request asks for the sum of \`nums[starti] + nums[starti + 1] + ... + nums[endi]\` (inclusive).

Both arrays are 0-indexed.

Return the **maximum total sum** of all requests **among all permutations** of \`nums\`. Since the answer may be too large, return it modulo \`10^9 + 7\`.

**Key insight:** To maximize the total sum, assign the largest values in \`nums\` to the indices that appear in the most requests.

**Example:**

\`nums = [1, 2, 3, 4, 5]\`, \`requests = [[1, 3], [0, 1]]\`

Index request counts: 0→1, 1→2, 2→1, 3→1, 4→0

Optimal permutation assigns: index 1 gets 5, index 0,2,3 get 4,3,2, index 4 gets 1.

Best total: \`5+4+3+2 + 5+4 = ...\`  → Actually: sorted by count descending, assign largest nums. Result: **19**.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '0 <= nums[i] <= 10^5',
    '1 <= requests.length <= 10^5',
    'requests[i].length == 2',
    '0 <= starti <= endi < n',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], requests = [[1,3],[0,1]]',
      output: '19',
      explanation: 'One permutation of nums is [2,5,4,3,1]. Requests: [5+4+3=12] + [2+5=7] = 19.',
    },
    {
      input: 'nums = [1,2,3,4,5,6], requests = [[0,1]]',
      output: '11',
      explanation: 'A permutation placing 6 and 5 at indices 0 and 1 gives 6+5=11.',
    },
    {
      input: 'nums = [1,2,3,4,5,10], requests = [[0,2],[1,3],[1,1]]',
      output: '47',
      explanation: 'Greedily assign largest nums to most-requested indices.',
    },
  ],
  hints: [
    'Count how many requests cover each index. An index covered by more requests should receive a larger number from nums. Use a difference array to count range covers efficiently.',
    'Use a difference array: for each request [l, r], increment diff[l] by 1 and decrement diff[r+1] by 1. Compute prefix sums to get the request count for every index.',
    'Sort nums in descending order and sort the request counts in descending order. Pair up: the i-th largest num goes to the i-th most-requested index. Multiply and sum, then take modulo 10^9+7.',
  ],
  functionName: 'maxSumRangeQuery',
  params: ['nums', 'requests'],
  starterCode: {
    javascript: `function maxSumRangeQuery(nums, requests) {

}`,
    python: `def maxSumRangeQuery(nums, requests):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], [[1, 3], [0, 1]]], expected: 19 },
    { args: [[1, 2, 3, 4, 5, 6], [[0, 1]]], expected: 11 },
    { args: [[1, 2, 3, 4, 5, 10], [[0, 2], [1, 3], [1, 1]]], expected: 47 },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0]]], expected: 1 },
    { args: [[1, 2], [[0, 0], [0, 0]]], expected: 4 },
    { args: [[5, 3, 1], [[0, 2]]], expected: 9 },
    { args: [[1, 2, 3], [[0, 0], [1, 1], [2, 2]]], expected: 6 },
    { args: [[10, 1, 2, 3], [[0, 3], [0, 1], [2, 3]]], expected: 32 },
    { args: [[1, 2, 3, 4], [[0, 3], [0, 3], [0, 3]]], expected: 30 },
  ],
};
