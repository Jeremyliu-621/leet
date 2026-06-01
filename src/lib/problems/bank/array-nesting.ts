import type { Problem } from '../types';

export const problem: Problem = {
  id: 'array-nesting',
  title: 'Array Nesting',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` of length \`n\` where \`nums\` is a permutation of the numbers in the range \`[0, n - 1]\`.

You should build a set \`s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ...}\` subjected to the following rule:
- The first element in \`s[k]\` starts with the selection of the element \`nums[k]\` of \`index = k\`.
- The next element in \`s[k]\` should be \`nums[nums[k]]\`, and then \`nums[nums[nums[k]]]\`, and so on.
- We stop adding right before a duplicate element occurs in \`s[k]\`.

Return the longest length of a set \`s[k]\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= nums[i] < n',
    'All the values of nums are unique.',
  ],
  examples: [
    {
      input: 'nums = [5,4,0,3,1,6,2]',
      output: '4',
      explanation: 'nums[0] = 5, nums[5] = 6, nums[6] = 2, nums[2] = 0. s[0] = {0, 2, 5, 6} with length 4.',
    },
    {
      input: 'nums = [0,1,2]',
      output: '1',
      explanation: 'Each element points to itself, so each set has length 1.',
    },
  ],
  hints: [
    'Each index belongs to exactly one cycle in the permutation.',
    'Follow the chain from each unvisited index until you revisit a node.',
    'Mark visited indices to avoid reprocessing the same cycle.',
  ],
  functionName: 'arrayNesting',
  params: ['nums'],
  starterCode: {
    javascript: `function arrayNesting(nums) {
  const n = nums.length;
  const visited = new Uint8Array(n);
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    let len = 0, j = i;
    while (!visited[j]) { visited[j] = 1; j = nums[j]; len++; }
    if (len > max) max = len;
  }
  return max;
}`,
    typescript: `function arrayNesting(nums: number[]): number {
  const n = nums.length;
  const visited = new Uint8Array(n);
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    let len = 0, j = i;
    while (!visited[j]) { visited[j] = 1; j = nums[j]!; len++; }
    if (len > max) max = len;
  }
  return max;
}`,
    python: `def arrayNesting(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    visited = [False] * n
    best = 0
    for i in range(n):
        if visited[i]: continue
        length, j = 0, i
        while not visited[j]:
            visited[j] = True
            j = nums[j]
            length += 1
        best = max(best, length)
    return best`,
  },
  visibleTests: [
    { args: [[5, 4, 0, 3, 1, 6, 2]], expected: 4 },
    { args: [[0, 1, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1, 0]], expected: 2 },
    { args: [[3, 0, 1, 2]], expected: 4 },
    { args: [[0, 2, 1]], expected: 2 },
  ],
};
