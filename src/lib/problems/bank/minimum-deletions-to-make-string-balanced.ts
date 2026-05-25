import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-string-balanced',
  title: 'Minimum Deletions to Make String Balanced',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a string \`s\` consisting only of characters \`'a'\` and \`'b'\`.

You can delete any number of characters in \`s\` to make \`s\` **balanced**. \`s\` is **balanced** if there is no pair of indices \`(i, j)\` such that \`i < j\` and \`s[i] = 'b'\` and \`s[j] = 'a'\`.

Return the **minimum** number of deletions needed to make \`s\` balanced.`,
  constraints: [
    '1 <= s.length <= 10^5',
    "s[i] is 'a' or 'b'.",
  ],
  examples: [
    {
      input: 's = "aababbab"',
      output: '2',
      explanation: 'Delete indices 2 and 6 to get "aaabbb" (0-indexed), or delete another valid pair.',
    },
    {
      input: 's = "bbaaaaabb"',
      output: '2',
      explanation: 'Delete the two \'b\'s at the start.',
    },
  ],
  hints: [
    'At any cut point, characters to the left should all be \'a\' and to the right all \'b\'.',
    'Scan left to right. Track the number of \'b\'s seen so far (bCount) and current minimum deletions (dp).',
    'When you see \'a\': dp = min(dp + 1, bCount) — either delete this \'a\', or we have been deleting too many \'b\'s.',
  ],
  functionName: 'minimumDeletions',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumDeletions(s) {\n\n}\n',
    python: 'def minimumDeletions(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aababbab'], expected: 2 },
    { args: ['bbaaaaabb'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['b'], expected: 0 },
    { args: ['ba'], expected: 1 },
    { args: ['abba'], expected: 1 },
  ],
};
