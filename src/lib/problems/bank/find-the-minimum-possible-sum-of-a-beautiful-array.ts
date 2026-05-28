import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-minimum-possible-sum-of-a-beautiful-array',
  title: 'Find the Minimum Possible Sum of a Beautiful Array',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given positive integers \`n\` and \`target\`.

An array \`nums\` is **beautiful** if it satisfies the following conditions:
- \`nums.length == n\`
- \`nums\` consists of pairwise distinct positive integers.
- There is no pair of indices \`(i, j)\` in the range \`[0, n-1]\` such that \`nums[i] + nums[j] == target\`.

Return the **minimum** possible sum that a beautiful array can have modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 10^9',
    '1 <= target <= 10^9',
  ],
  examples: [
    {
      input: 'n = 2, target = 3',
      output: '4',
      explanation:
        'We cannot use both 1 and 2 since 1+2=3. The beautiful array [1,3] has minimum sum 4.',
    },
    {
      input: 'n = 3, target = 3',
      output: '8',
      explanation:
        'From 1..2 we can only pick one (since 1+2=target). Pick 1, then use 3 and 4. Array [1,3,4] has sum 8.',
    },
    {
      input: 'n = 1, target = 1',
      output: '1',
      explanation: 'A single-element array [1] is always beautiful. Minimum sum is 1.',
    },
  ],
  hints: [
    'From integers 1 to target-1, numbers come in "bad pairs" {i, target-i}. You can pick at most one from each pair. The safe range is 1 to floor(target/2).',
    'If n <= floor(target/2), use integers 1 through n (they form no bad pairs among themselves). Otherwise use all of 1..floor(target/2) and continue from target onward.',
    'Use the closed-form sum of an arithmetic sequence to avoid iterating. Be careful about large values — use BigInt or modular arithmetic to avoid integer overflow.',
  ],
  functionName: 'minimumPossibleSum',
  params: ['n', 'target'],
  starterCode: {
    javascript: `function minimumPossibleSum(n, target) {

}`,
    python: `def minimumPossibleSum(n, target):
    pass`,
  },
  visibleTests: [
    { args: [2, 3], expected: 4 },
    { args: [3, 3], expected: 8 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [5, 4], expected: 18 },
    { args: [4, 10], expected: 10 },
    { args: [1, 1000000000], expected: 1 },
    { args: [2, 2], expected: 3 },
  ],
};
