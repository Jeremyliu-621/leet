import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-prefix-common-array-of-two-arrays',
  title: 'Find the Prefix Common Array of Two Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **0-indexed** integer permutations \`A\` and \`B\` of length \`n\`.

Define the **prefix common array** \`C\` of \`A\` and \`B\` as an array where \`C[i]\` is equal to the count of numbers that are present at or before the index \`i\` in both \`A\` and \`B\`.

Return the **prefix common array** of \`A\` and \`B\`.

A sequence of \`n\` integers is called a **permutation** if it contains all integers from \`1\` to \`n\` exactly once.`,
  constraints: [
    '1 <= A.length == B.length == n <= 50',
    '1 <= A[i], B[i] <= n',
    'It is guaranteed that A and B are both permutations of the n integers.',
  ],
  examples: [
    {
      input: 'A = [1, 3, 2, 4], B = [3, 1, 2, 4]',
      output: '[0, 2, 3, 4]',
      explanation: 'After i=0: {1}∩{3}=∅. After i=1: {1,3}∩{3,1}={1,3}. After i=2: add 2 to both. After i=3: add 4 to both.',
    },
    {
      input: 'A = [2, 3, 1], B = [3, 1, 2]',
      output: '[0, 1, 3]',
      explanation: 'After i=0: {2}∩{3}=∅. After i=1: 3 now in A, 1 now in B: {3} is shared. After i=2: all shared.',
    },
  ],
  hints: [
    'Use a seen array (size n+1) with states: 0=unseen, 1=in A only, 2=in B only, 3=in both.',
    'For each position i: if A[i] was already seen in B, increment the count.',
    'Similarly if B[i] was already seen in A, increment the count.',
    'Handle the case A[i] == B[i] carefully to avoid double-counting.',
  ],
  functionName: 'findThePrefixCommonArray',
  params: ['A', 'B'],
  starterCode: {
    javascript: `function findThePrefixCommonArray(A, B) {
  const seen = new Set(), result = [];
  let common = 0;
  for (let i = 0; i < A.length; i++) {
    if (seen.has(A[i])) common++; else seen.add(A[i]);
    if (seen.has(B[i])) common++; else seen.add(B[i]);
    result.push(common);
  }
  return result;
}`,
    typescript: `function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const seen = new Set<number>(), result: number[] = [];
  let common = 0;
  for (let i = 0; i < A.length; i++) {
    if (seen.has(A[i]!)) common++; else seen.add(A[i]!);
    if (seen.has(B[i]!)) common++; else seen.add(B[i]!);
    result.push(common);
  }
  return result;
}`,
    python: `def findThePrefixCommonArray(A, B):
    A = list(A.to_py()) if hasattr(A, 'to_py') else list(A)
    B = list(B.to_py()) if hasattr(B, 'to_py') else list(B)
    seen, result, common = set(), [], 0
    for a, b in zip(A, B):
        if a in seen: common += 1
        else: seen.add(a)
        if b in seen: common += 1
        else: seen.add(b)
        result.append(common)
    return result`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 4], [3, 1, 2, 4]], expected: [0, 2, 3, 4] },
    { args: [[2, 3, 1], [3, 1, 2]], expected: [0, 1, 3] },
    { args: [[1, 2, 3], [1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1], [1]], expected: [1] },
    { args: [[1, 2], [2, 1]], expected: [0, 2] },
  ],
  hiddenTests: [
    { args: [[3, 1, 2], [1, 2, 3]], expected: [0, 1, 3] },
    { args: [[1, 4, 2, 3], [4, 1, 3, 2]], expected: [0, 2, 2, 4] },
    { args: [[1, 2, 3, 4], [4, 3, 2, 1]], expected: [0, 0, 2, 4] },
    { args: [[2, 1, 4, 3], [1, 2, 3, 4]], expected: [0, 2, 2, 4] },
    { args: [[1, 3, 2, 4, 5], [5, 4, 3, 2, 1]], expected: [0, 0, 1, 3, 5] },
    { args: [[1, 2], [1, 2]], expected: [1, 2] },
    { args: [[2, 1], [2, 1]], expected: [1, 2] },
    { args: [[3, 2, 1], [1, 2, 3]], expected: [0, 1, 3] },
  ],
};
