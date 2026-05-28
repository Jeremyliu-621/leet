import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-collect-elements',
  title: 'Minimum Operations to Collect Elements',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`nums\` of positive integers of length \`n\`, and a positive integer \`k\`.

In one operation, you can pick the **last** element of the array and move it to the beginning.

Return the **minimum** number of operations needed so that the first \`k\` **positive integers** appear in the beginning of the array as a subsequence.

**Note:** \`nums\` is guaranteed to be a permutation of \`1\` to \`n\`.`,
  constraints: [
    '`1 <= n <= 50`',
    '`1 <= k <= n`',
    '`nums` is a permutation of integers in the range `[1, n]`.',
  ],
  examples: [
    {
      input: 'nums = [3,1,5,4,2], k = 2',
      output: '4',
      explanation: 'Scan from right: pick 2 (ops=1), 4 (ops=2), 5 (ops=3), 1 (ops=4). Now {1,2} are collected.',
    },
    {
      input: 'nums = [3,1,5,4,2], k = 5',
      output: '5',
      explanation: 'All 5 elements must be picked, requiring 5 operations.',
    },
    {
      input: 'nums = [1,2], k = 2',
      output: '2',
      explanation: 'Pick 2 then 1 — 2 operations.',
    },
  ],
  hints: [
    'You are essentially scanning from the right and collecting elements one at a time.',
    'Track which elements in `{1, ..., k}` you still need. Stop as soon as all are collected.',
    'The answer equals the index (from the right, 1-indexed) of the last element needed.',
    `\`\`\`js
function minOperations(nums, k) {
  const need = new Set(Array.from({ length: k }, (_, i) => i + 1));
  for (let ops = 1; ops <= nums.length; ops++) {
    need.delete(nums[nums.length - ops]);
    if (need.size === 0) return ops;
  }
  return nums.length;
}\`\`\``,
  ],
  functionName: 'minOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperations(nums, k) {

}`,
    typescript: 'function minOperations(nums: number[], k: number): number {\n\n}',
    python: `def minOperations(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 5, 4, 2], 2], expected: 4 },
    { args: [[3, 1, 5, 4, 2], 5], expected: 5 },
    { args: [[1, 2], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[2, 1], 1], expected: 1 },
    { args: [[2, 1], 2], expected: 2 },
    { args: [[3, 2, 1], 2], expected: 2 },
    { args: [[4, 3, 2, 1], 3], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 5 },
  ],
};
