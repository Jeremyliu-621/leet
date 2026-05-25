import type { Problem } from '../types';

export const problem: Problem = {
  id: 'increasing-decreasing-string',
  title: 'Increasing Decreasing String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`. Reorder it using the following algorithm:

1. Pick the **smallest** character from \`s\` and append it to the result.
2. Pick the **smallest** character from \`s\` that is larger than the last appended character, and append it.
3. Repeat step 2 until no more characters can be picked; then go to step 4.
4. Pick the **largest** character from \`s\` and append it.
5. Pick the **largest** character from \`s\` that is smaller than the last appended character, and append it.
6. Repeat step 5 until no more characters can be picked; then go back to step 1.

Repeat the entire process until all characters from \`s\` have been appended to the result.

Return the resulting string.`,
  constraints: [
    '`1 <= s.length <= 500`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaaabbbbcccc"',
      output: '"abccbaabccba"',
      explanation:
        'Pass 1 (ascending): pick a, b, c → "abc". Pass 2 (descending): pick c, b, a → "cba". Repeat for remaining characters: "abc" then "cba". Result: "abccbaabccba".',
    },
    {
      input: 's = "rat"',
      output: '"art"',
      explanation: 'Only one ascending pass is needed: pick a, r, t → "art".',
    },
  ],
  hints: [
    'Count character frequencies. Repeatedly sweep a→z (picking each available character once), then z→a, until all characters are used.',
  ],
  functionName: 'sortString',
  params: ['s'],
  starterCode: {
    javascript: 'function sortString(s) {\n  \n}\n',
    python: 'def sortString(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aaaabbbbcccc'], expected: 'abccbaabccba' },
    { args: ['rat'], expected: 'art' },
    { args: ['abcabc'], expected: 'abccba' },
  ],
  hiddenTests: [
    { args: ['abcd'], expected: 'abcd' },
    { args: ['aabb'], expected: 'abba' },
    { args: ['z'], expected: 'z' },
    { args: ['ba'], expected: 'ab' },
    { args: ['abcabc'], expected: 'abccba' },
  ],
};
