import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-largest-group',
  title: 'Count Largest Group',
  difficulty: 'easy',
  tags: ['hash-map', 'math'],
  description: `You are given an integer \`n\`.

Each number from \`1\` to \`n\` is grouped according to the **sum of its digits**.

Return the number of groups that have the **largest** size.`,
  constraints: [
    '1 <= n <= 10^4',
  ],
  examples: [
    {
      input: 'n = 13',
      output: '4',
      explanation: 'Digit sums 1→[1,10], 2→[2,11], 3→[3,12], 4→[4,13], 5→[5], ..., 9→[9]. Max size = 2. Four groups have this size.',
    },
    {
      input: 'n = 2',
      output: '2',
      explanation: 'Groups: {1}:[1], {2}:[2]. Both have size 1 (the maximum). Count = 2.',
    },
    {
      input: 'n = 15',
      output: '6',
      explanation: 'Digit sums 1..6 each have groups of size 2 (e.g. sum=1→[1,10], sum=6→[6,15]). Sums 7..9 have size 1. Max=2, count=6.',
    },
  ],
  hints: [
    'For each number 1..n, compute its digit sum by repeatedly dividing by 10 and summing the remainders.',
    'Use a hash map (or array since digit sums are ≤ 36 for n ≤ 10^4) to count how many numbers have each digit sum.',
    'Find the maximum frequency, then count how many digit sums achieve that maximum.',
  ],
  functionName: 'countLargestGroup',
  params: ['n'],
  starterCode: {
    javascript: `function countLargestGroup(n) {

}`,
    typescript: `function countLargestGroup(n: number): number {

}`,
    python: `def countLargestGroup(n: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [13], expected: 4 },
    { args: [2], expected: 2 },
    { args: [15], expected: 6 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 1 },
    { args: [11], expected: 2 },
    { args: [19], expected: 9 },
    { args: [24], expected: 5 },
    { args: [50], expected: 1 },
    { args: [100], expected: 1 },
  ],
};
