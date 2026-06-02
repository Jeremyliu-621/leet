import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-n-unique-integers-sum-up-to-zero',
  title: 'Find N Unique Integers Sum up to Zero',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer \`n\`, return **any** array of \`n\` **unique** integers that add up to zero.

Return the array \`[1, 2, ..., n-1, -(n*(n-1)/2)]\` so that when \`n = 1\` the result is \`[0]\`.`,
  constraints: [
    '`1 <= n <= 1000`',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '[1, 2, -3]',
      explanation: '1 + 2 + (−3) = 0.',
    },
    {
      input: 'n = 1',
      output: '[0]',
      explanation: 'The only unique integer that sums to zero by itself is 0.',
    },
    {
      input: 'n = 4',
      output: '[1, 2, 3, -6]',
      explanation: '1 + 2 + 3 + (−6) = 0.',
    },
  ],
  hints: [
    'Build an array `[1, 2, ..., n-1]`. What single number can you append so that the total is zero?',
    'The sum of 1 through n-1 is `n*(n-1)/2`. Append the negation of that sum.',
    'When n = 1 the prefix is empty and the sum is 0, so you append 0 itself — which is the only unique integer that works.',
  ],
  functionName: 'sumZero',
  params: ['n'],
  starterCode: {
    javascript: `function sumZero(n) {
  const arr = Array.from({ length: n - 1 }, (_, i) => i + 1);
  arr.push(-(n * (n - 1) / 2));
  return arr;
}`,
    typescript: `function sumZero(n: number): number[] {
  const arr = Array.from({ length: n - 1 }, (_, i) => i + 1);
  arr.push(-(n * (n - 1) / 2));
  return arr;
}`,
    python: `def sumZero(n):
    arr = list(range(1, n))
    arr.append(-(n * (n - 1) // 2))
    return arr`,
  },
  visibleTests: [
    { args: [3], expected: [1, 2, -3] },
    { args: [1], expected: [0] },
    { args: [4], expected: [1, 2, 3, -6] },
  ],
  hiddenTests: [
    { args: [2], expected: [1, -1] },
    { args: [5], expected: [1, 2, 3, 4, -10] },
    { args: [6], expected: [1, 2, 3, 4, 5, -15] },
    { args: [10], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, -45] },
  ],
};
