import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-substrings',
  title: 'Count the Number of Good Substrings',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window'],
  description: `A string is **good** if there are no repeated characters.

Given a string \`s\`, return the number of **good** substrings of length **3**.

A **substring** is a contiguous sequence of characters in a string.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`s` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aababcabc"',
      output: '4',
      explanation:
        'Good substrings of length 3 (all distinct chars): "abc" at index 5, "bca" at index 6, "cab" at index 7... actually "abc","bca","cab","abc" — 4 good substrings.',
    },
    {
      input: 's = "aaaa"',
      output: '0',
      explanation: 'Every substring of length 3 contains repeated \'a\' characters.',
    },
  ],
  hints: [
    'Level 1: Slide a window of width 3 across the string. For each window, check whether all three characters are distinct.',
    'Level 2: Three characters s[i], s[i+1], s[i+2] are all distinct if and only if s[i] ≠ s[i+1], s[i+1] ≠ s[i+2], and s[i] ≠ s[i+2].',
    'Level 3: O(n) time — iterate i from 0 to s.length-3, check 3 pairwise inequalities, count matches. Can also use new Set([s[i],s[i+1],s[i+2]]).size === 3.',
  ],
  functionName: 'countGoodSubstrings',
  params: ['s'],
  starterCode: {
    javascript: `function countGoodSubstrings(s) {
  let count = 0;
  for (let i = 0; i <= s.length - 3; i++) {
    if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]) count++;
  }
  return count;
}`,
    typescript: `function countGoodSubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i <= s.length - 3; i++) {
    if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]) count++;
  }
  return count;
}`,
    python: `def countGoodSubstrings(s):
    count = 0
    for i in range(len(s) - 2):
        if s[i] != s[i+1] and s[i+1] != s[i+2] and s[i] != s[i+2]:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: ['aababcabc'], expected: 4 },
    { args: ['aaaa'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 1 },
    { args: ['aab'], expected: 0 },
    { args: ['abcabc'], expected: 4 },
    { args: ['xyz'], expected: 1 },
    { args: ['xyzy'], expected: 1 },
    { args: ['abcd'], expected: 2 },
  ],
};
