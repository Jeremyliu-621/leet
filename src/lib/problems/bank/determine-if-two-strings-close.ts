import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-two-strings-close',
  title: 'Determine if Two Strings Are Close',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Two strings are considered **close** if you can attain one from the other using the following operations:

- **Operation 1:** Swap any two **existing** characters. For example, \`abcde → aecdb\`.
- **Operation 2:** Transform every occurrence of one **existing** character into another **existing** character, and do the same with the other character. For example, \`aacabb → bbcbaa\`.

You can use the operations on either string as many times as necessary.

Given two strings \`word1\` and \`word2\`, return \`true\` if \`word1\` and \`word2\` are **close**, and \`false\` otherwise.`,
  constraints: [
    '1 <= word1.length, word2.length <= 10^5',
    'word1 and word2 consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "abc", word2 = "bca"',
      output: 'true',
      explanation: 'Apply Op 1: "abc" → "bca".',
    },
    {
      input: 'word1 = "a", word2 = "aa"',
      output: 'false',
    },
    {
      input: 'word1 = "cabbba", word2 = "abbccc"',
      output: 'true',
      explanation: 'Both have chars {a,b,c} and frequency multisets {1,2,3}.',
    },
  ],
  hints: [
    'Level 1: Two strings are close if: (1) they have the same set of unique characters, and (2) the multiset of character frequencies is the same.',
    'Level 2: Count frequencies for each string. Check same key sets, then sort both frequency arrays and compare.',
    'Level 3: const f=(w)=>{const m=new Map();for(const c of w)m.set(c,(m.get(c)??0)+1);return m;};const m1=f(word1),m2=f(word2);return [...m1.keys()].sort().join("")===[...m2.keys()].sort().join("")&&[...m1.values()].sort((a,b)=>a-b).join(",")===([...m2.values()].sort((a,b)=>a-b).join(","));',
  ],
  functionName: 'closeStrings',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: 'function closeStrings(word1, word2) {\n  // your code here\n}\n',
    python: 'def closeStrings(word1, word2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abc', 'bca'], expected: true },
    { args: ['a', 'aa'], expected: false },
    { args: ['cabbba', 'abbccc'], expected: true },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: true },
    { args: ['aab', 'bba'], expected: true },
    { args: ['aaabbc', 'bbbaac'], expected: true },
    { args: ['ab', 'cd'], expected: false },
    { args: ['uau', 'ssx'], expected: false },
  ],
};
