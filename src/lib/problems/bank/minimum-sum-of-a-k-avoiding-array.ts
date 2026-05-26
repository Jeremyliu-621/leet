import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-of-a-k-avoiding-array',
  title: 'Minimum Sum of a K-avoiding Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two integers, \`n\` and \`k\`. An array of **distinct** positive integers is called **k-avoiding** if there is no pair of distinct elements that **sum** to \`k\`.

Return the **minimum possible sum** of a k-avoiding array of length \`n\`.`,
  constraints: [
    '`1 <= n, k <= 50`',
  ],
  examples: [
    {
      input: 'n = 5, k = 4',
      output: '18',
      explanation: 'Consider the k-avoiding array [1,2,4,5,6]. Sum = 1+2+4+5+6=18. Note: 3 is skipped because 1+3=4=k.',
    },
    {
      input: 'n = 2, k = 6',
      output: '3',
      explanation: 'The k-avoiding array [1,2] with sum 3. Neither 1+2=3 nor any pair sums to 6.',
    },
  ],
  hints: [
    'Greedily pick the smallest positive integers, skipping any that would form a pair summing to k.',
    'When you pick integer i, it "blocks" k-i (if k-i > 0 and k-i is not yet picked).',
    'Since we go 1,2,3,..., when we encounter i such that k-i is already in the set, skip i.',
  ],
  functionName: 'minimumSum',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function minimumSum(n, k) {

}`,
    python: `def minimumSum(n, k):
    pass`,
  },
  visibleTests: [
    { args: [5, 4], expected: 18 },
    { args: [2, 6], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 10], expected: 1 },
    { args: [3, 3], expected: 8 },
    { args: [3, 5], expected: 8 },
    { args: [5, 6], expected: 19 },
    { args: [10, 4], expected: 63 },
  ],
};
