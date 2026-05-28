import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-prefix-common-array-of-two-arrays',
  title: 'Find the Prefix Common Array of Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **0-indexed** integer permutations \`A\` and \`B\` of length \`n\`.

A **prefix common array** of \`A\` and \`B\` is an array \`C\` such that \`C[i]\` is equal to the count of numbers that are present at or before the index \`i\` in **both** \`A\` and \`B\`.

Return *the **prefix common array** of* \`A\` *and* \`B\`.

A sequence of \`n\` integers is called a **permutation** if it contains all integers from \`1\` to \`n\` exactly once.`,
  constraints: [
    '1 <= A.length == B.length == n <= 50',
    '1 <= A[i], B[i] <= n',
    'It is guaranteed that A and B are both a permutation of n integers.',
  ],
  examples: [
    {
      input: 'A = [1,3,2,4], B = [3,1,2,4]',
      output: '[0,2,3,4]',
      explanation: 'At i=0: {1} ∩ {3} = {}. At i=1: {1,3} ∩ {3,1} = {1,3}. At i=2: {1,3,2} ∩ {3,1,2} = {1,2,3}. At i=3: both = {1,2,3,4}.',
    },
    {
      input: 'A = [2,3,1], B = [3,1,2]',
      output: '[0,1,3]',
      explanation: 'At i=0: {2} ∩ {3} = {}. At i=1: {2,3} ∩ {3,1} = {3}. At i=2: all same.',
    },
  ],
  hints: [
    'Use a frequency array of size n+1.',
    'For each index i, increment freq[A[i]] and freq[B[i]]. When a value reaches 2, it\'s been seen in both arrays.',
    'Track a running count of such values and append it to the result.',
  ],
  functionName: 'findThePrefixCommonArray',
  params: ['A', 'B'],
  starterCode: {
    javascript: 'function findThePrefixCommonArray(A, B) {\n\n}\n',
    python: 'def findThePrefixCommonArray(A, B):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,2,4], [3,1,2,4]], expected: [0,2,3,4] },
    { args: [[2,3,1], [3,1,2]], expected: [0,1,3] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1] },
    { args: [[1,2], [2,1]], expected: [0,2] },
    { args: [[1,2,3], [1,2,3]], expected: [1,2,3] },
    { args: [[3,2,1], [1,2,3]], expected: [0,1,3] },
  ],
};
