import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-unique-chars-of-all-substrings',
  title: 'Count Unique Characters of All Substrings of a Given String',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Let's define a function \`countUniqueChars(s)\` that returns the number of unique characters in \`s\`.

For example, \`countUniqueChars("LEETCODE") = 3\` because \`"L"\`, \`"T"\`, and \`"C"\` are the only characters that appear exactly once in \`"LEETCODE"\` (Note: \`"E"\`, \`"O"\`, and \`"D"\` each appear more than once, so they don't count).

Given a string \`s\`, return the sum of \`countUniqueChars(t)\` where \`t\` ranges over every non-empty substring of \`s\`. The answer may be very large, so return the answer \`modulo 10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of uppercase English letters only.',
  ],
  examples: [
    {
      input: 's = "ABC"',
      output: '10',
      explanation: 'All letters appear once in each substring they are in. Sum = 1+1+1+2+2+3 = 10.',
    },
    {
      input: 's = "ABA"',
      output: '8',
      explanation: '"A"(0):1, "B":1, "A"(2):1, "AB":2, "BA":2, "ABA":1(only B unique). Sum=8.',
    },
    {
      input: 's = "LEETCODE"',
      output: '92',
      explanation: 'Compute contributions of each character based on gaps between same-character occurrences.',
    },
  ],
  hints: [
    'For each character at position i, count how many substrings contain it exactly once.',
    'If the previous same character is at prev and next is at nxt, the contribution is (i - prev) * (nxt - i).',
    'Use -1 and n as sentinels for no previous/next occurrence.',
  ],
  functionName: 'uniqueLetterString',
  params: ['s'],
  starterCode: {
    javascript: 'function uniqueLetterString(s) {\n  \n}\n',
    typescript: "function uniqueLetterString(s: string): number {\n  \n}",

    python: 'def uniqueLetterString(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['ABC'], expected: 10 },
    { args: ['ABA'], expected: 8 },
    { args: ['LEETCODE'], expected: 92 },
  ],
  hiddenTests: [
    { args: ['A'], expected: 1 },
    { args: ['AA'], expected: 2 },
    { args: ['AB'], expected: 4 },
    { args: ['AABA'], expected: 11 },
    { args: ['ABCABC'], expected: 36 },
  ],
};
