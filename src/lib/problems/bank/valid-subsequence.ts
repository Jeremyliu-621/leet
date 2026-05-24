import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-subsequence',
  title: 'Valid Subsequence',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description: `Given two integer arrays \`seq\` and \`arr\`, determine whether \`seq\` is a **subsequence** of \`arr\`.

A subsequence is derived from another sequence by deleting some (or no) elements without changing the relative order of the remaining elements. The elements do not need to be contiguous.

For example, \`[1, 3]\` is a subsequence of \`[1, 2, 3, 4]\` because you can pick indices 0 and 2 in order. \`[3, 1]\` is **not** a subsequence because the order would be reversed.`,
  constraints: [
    '0 <= seq.length <= 1000',
    '0 <= arr.length <= 1000',
    'All values are integers.',
  ],
  examples: [
    {
      input: 'seq = [1,3], arr = [1,2,3,4]',
      output: 'true',
      explanation: '1 matches arr[0], then 3 matches arr[2] — in order.',
    },
    {
      input: 'seq = [3,1], arr = [1,2,3,4]',
      output: 'false',
      explanation: '3 appears after 1 in arr, so [3,1] cannot be found in order.',
    },
    {
      input: 'seq = [], arr = [1,2,3]',
      output: 'true',
      explanation: 'An empty sequence is always a subsequence of any array.',
    },
  ],
  hints: [
    'Use a pointer into `seq` that advances only when there is a match. Iterate through `arr`; when `arr[i] === seq[pointer]`, advance the pointer. You\'re done when the pointer reaches the end of `seq`.',
    'If the `seq` pointer reaches `seq.length` before you finish scanning `arr`, every element was matched in order → return true. If you exhaust `arr` first, return false.',
    '`let i = 0; for (const val of arr) { if (i < seq.length && val === seq[i]) i++; } return i === seq.length;`',
  ],
  functionName: 'isSubsequence',
  params: ['seq', 'arr'],
  starterCode: {
    javascript: 'function isSubsequence(seq, arr) {\n  // your code here\n}\n',
    python: 'def isSubsequence(seq, arr):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3], [1, 2, 3, 4]], expected: true },
    { args: [[3, 1], [1, 2, 3, 4]], expected: false },
    { args: [[], [1, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[], []], expected: true },
    { args: [[1], [1]], expected: true },
    { args: [[1, 2], [1, 2]], expected: true },
    { args: [[1, 2, 3], [1, 3, 5]], expected: false },
    { args: [[5], [1, 2, 3, 4, 5, 6]], expected: true },
    { args: [[1, 2, 3], [3, 2, 1]], expected: false },
  ],
};
