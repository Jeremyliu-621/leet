import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-anagrams-in-string',
  title: 'Find All Anagrams in a String',
  difficulty: 'medium',
  tags: ['sliding-window', 'hash-map'],
  description: `Given two strings \`s\` and \`p\`, return an array of all the start indices of \`p\`'s **anagrams** in \`s\`. The answer may be returned in **any order**.

An **anagram** is a string that contains the same characters, only the order of characters can be different.`,
  constraints: [
    '1 <= s.length, p.length <= 3 * 10^4',
    's and p consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "cbaebabacd", p = "abc"',
      output: '[0, 6]',
      explanation: 'The substring "cba" at index 0 is an anagram of "abc". The substring "bac" at index 6 is an anagram of "abc".',
    },
    {
      input: 's = "abab", p = "ab"',
      output: '[0, 1, 2]',
      explanation: '"ab" at 0, "ba" at 1, and "ab" at 2 are all anagrams of "ab".',
    },
  ],
  hints: [
    'Level 1: Use a fixed-size sliding window of length p.length. Maintain character frequency maps for p and the current window. When all frequencies match, record the start index.',
    'Level 2: Use two arrays of size 26. Track a matches counter for how many characters have the same frequency in both maps. Slide the window: add the new right char, remove the leftmost char, update matches.',
    'Level 3: const need=Array(26).fill(0),have=Array(26).fill(0),res=[],a="a".charCodeAt(0);for(const c of p)need[c.charCodeAt(0)-a]++;let m=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i)-a;have[r]++;if(need[r]>0&&have[r]===need[r])m++;if(i>=p.length){const l=s.charCodeAt(i-p.length)-a;if(need[l]>0&&have[l]===need[l])m--;have[l]--;}if(m===26)res.push(i-p.length+1);}return res;',
  ],
  functionName: 'findAnagrams',
  params: ['s', 'p'],
  starterCode: {
    javascript: 'function findAnagrams(s, p) {\n  // your code here\n}\n',
    typescript: "function findAnagrams(s: string, p: string): number[] {\n  // your code here\n}",

    python: 'def findAnagrams(s, p):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['cbaebabacd', 'abc'], expected: [0, 6] },
    { args: ['abab', 'ab'], expected: [0, 1, 2] },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: [0] },
    { args: ['aa', 'bb'], expected: [] },
    { args: ['baa', 'aa'], expected: [1] },
    { args: ['aaaaaaaaaa', 'aaaa'], expected: [0, 1, 2, 3, 4, 5, 6] },
  ],
};
