import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-possible-sum-of-beautiful-array',
  title: 'Find the Minimum Possible Sum of a Beautiful Array',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given positive integers \`n\` and \`target\`.

An array \`nums\` is **beautiful** if it satisfies all of the following conditions:
- \`nums.length == n\`.
- \`nums\` consists of pairwise **distinct** positive integers.
- There is no pair of indices \`(i, j)\` with \`i != j\` such that \`nums[i] + nums[j] == target\`.

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
        'We use [1, 3]. 1+3=4 ≠ 3. Note that [1, 2] is not beautiful since 1+2=3=target.',
    },
    {
      input: 'n = 3, target = 3',
      output: '8',
      explanation:
        'We use [1, 3, 4]. Pairwise sums: 1+3=4, 1+4=5, 3+4=7 — none equal 3. Sum = 8.',
    },
    {
      input: 'n = 2, target = 6',
      output: '3',
      explanation: 'We use [1, 2]. 1+2=3 ≠ 6. Sum = 3.',
    },
  ],
  hints: [
    'Numbers 1, 2, ..., floor(target/2) are all pairwise safe — none produce a sum equal to target within that range.',
    'If n ≤ floor(target/2), the answer is simply 1+2+...+n = n*(n+1)/2.',
    'Otherwise use numbers 1..floor(target/2) and then continue with target, target+1, target+2, … since any two numbers ≥ target sum to at least 2*target > target.',
  ],
  functionName: 'minimumPossibleSum',
  params: ['n', 'target'],
  starterCode: {
    javascript: 'function minimumPossibleSum(n, target) {\n  // your code here\n}\n',
    typescript: 'function minimumPossibleSum(n: number, target: number): number {\n  // your code here\n}',
    python: 'def minimumPossibleSum(n, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [2, 3], expected: 4 },
    { args: [3, 3], expected: 8 },
    { args: [2, 6], expected: 3 },
  ],
  hiddenTests: [
    // n <= half: answer = n*(n+1)/2
    { args: [1, 1], expected: 1 },
    { args: [1, 5], expected: 1 },
    { args: [5, 10], expected: 15 },
    // n > half: base = half*(half+1)/2, then target, target+1, ...
    { args: [4, 6], expected: 12 },   // [1,2,3,6] = 12
    { args: [5, 4], expected: 18 },   // [1,2,4,5,6] = 18
    { args: [3, 5], expected: 8 },    // [1,2,5] = 8
    { args: [6, 6], expected: 27 },   // [1,2,3,6,7,8] = 27
    { args: [10, 10], expected: 75 }, // [1..5,10..14] = 15+60=75
    { args: [6, 5], expected: 29 },   // [1,2,5,6,7,8] = 29
  ],
};
