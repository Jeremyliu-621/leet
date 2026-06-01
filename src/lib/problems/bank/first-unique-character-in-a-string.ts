import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-unique-character-in-a-string',
  title: 'First Unique Character in a String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, find the first non-repeating character in it and return its index. If it does not exist, return \`-1\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "leetcode"',
      output: '0',
      explanation: 'The character "l" at index 0 is the first character that does not occur at any other index.',
    },
    {
      input: 's = "loveleetcode"',
      output: '2',
      explanation: '"l" and "o" both appear twice; "v" at index 2 is the first unique character.',
    },
    {
      input: 's = "aabb"',
      output: '-1',
      explanation: 'All characters appear more than once.',
    },
  ],
  hints: [
    'Count the frequency of every character in one pass using a hash map or a 26-element array.',
    'In a second pass over the string, return the index of the first character whose count is exactly 1.',
    'If no such character exists, return -1.',
  ],
  functionName: 'firstUniqChar',
  params: ['s'],
  starterCode: {
    javascript: `function firstUniqChar(s) {
  const freq = new Map();
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  for (let i = 0; i < s.length; i++) if (freq.get(s[i]) === 1) return i;
  return -1;
}`,
    typescript: `function firstUniqChar(s: string): number {
  const freq = new Map<string, number>();
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  for (let i = 0; i < s.length; i++) if (freq.get(s[i]) === 1) return i;
  return -1;
}`,
    python: `def firstUniqChar(s):
    from collections import Counter
    freq = Counter(s)
    for i, c in enumerate(s):
        if freq[c] == 1:
            return i
    return -1`,
  },
  visibleTests: [
    { args: ['leetcode'], expected: 0 },
    { args: ['loveleetcode'], expected: 2 },
    { args: ['aabb'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['z'], expected: 0 },
    { args: ['aabbcc'], expected: -1 },
    { args: ['abcabc'], expected: -1 },
    { args: ['abcd'], expected: 0 },
    { args: ['aabbc'], expected: 4 },
    { args: ['zzza'], expected: 3 },
    { args: ['abacaba'], expected: 3 },
  ],
};
