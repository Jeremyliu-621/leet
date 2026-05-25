import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-columns-sorted-iii',
  title: 'Delete Columns to Make Sorted III',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given an array of \`n\` strings \`strs\`, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

Suppose we chose a set of deletion indices \`answer\` such that after deletions, the final array has its strings in lexicographic order (each string is less than or equal to the next one).

Return the minimum possible value of \`answer.length\`.`,
  constraints: [
    '`n == strs.length`',
    '`1 <= n <= 100`',
    '`1 <= strs[i].length <= 100`',
    '`strs[i]` consists of lowercase English letters.',
  ],
  examples: [
    { input: 'strs = ["babca","bbazb"]', output: '3', explanation: 'Delete columns 0, 3, 4 → ["bc", "bz"] which is sorted.' },
    { input: 'strs = ["edcba"]', output: '4', explanation: 'Delete 4 columns, leaving only one column.' },
    { input: 'strs = ["ghi","def","abc"]', output: '0', explanation: 'Already sorted.' },
  ],
  hints: [
    'Use DP where dp[j] = length of the longest subsequence of columns ending at column j that keeps strings sorted.',
    'Column j can extend column i if, for all rows k, strs[k][i] <= strs[k][j].',
    'Answer is n - max(dp[j]).',
  ],
  functionName: 'minDeletionSize',
  params: ['strs'],
  starterCode: {
    javascript: 'function minDeletionSize(strs) {\n  \n}\n',
    python: 'def minDeletionSize(strs):\n    pass\n',
  },
  visibleTests: [
    { args: [['babca', 'bbazb']], expected: 3 },
    { args: [['edcba']], expected: 4 },
    { args: [['ghi', 'def', 'abc']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 0 },
    { args: [['zyx', 'wvu', 'tsr']], expected: 2 },
    { args: [['xga', 'xfb', 'ydc']], expected: 2 },
    { args: [['abc', 'bce', 'cae']], expected: 1 },
  ],
};
