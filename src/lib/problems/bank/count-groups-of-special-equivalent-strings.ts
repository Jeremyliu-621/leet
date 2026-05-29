import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-groups-of-special-equivalent-strings',
  title: 'Count Groups of Special-Equivalent Strings',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given an array of strings \`words\`.

Two strings \`s\` and \`t\` are **special-equivalent** if after any number of **moves**, \`s == t\`.

A **move** consists of choosing **any** even index \`i\` and swapping \`s[i]\` with \`s[i + 2]\`, **OR** choosing any odd index \`i\` and swapping \`s[i]\` with \`s[i + 2]\`.

Equivalently, two strings are special-equivalent if and only if sorting the characters at even indices gives the same result, **and** sorting the characters at odd indices gives the same result.

Return the number of **groups** of special-equivalent strings from \`words\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 20',
    'All strings in words have the same length.',
    'All strings consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]',
      output: '3',
      explanation: `One group is ["abcd","cdab","cbad"]: even-indexed chars sort to "ac", odd-indexed chars sort to "bd".
Another group is ["xyzz","zzxy"]: even-indexed chars sort to "xz", odd-indexed to "yz".
The third group is ["zzyx"]: even-indexed chars sort to "yz", odd-indexed to "xz".`,
    },
    {
      input: 'words = ["abc","acb","bca","bac","cab","cba"]',
      output: '3',
      explanation: 'Three groups: ["abc","cba"], ["acb","bca"], ["bac","cab"].',
    },
  ],
  hints: [
    'For each word, compute a canonical form: sort the even-indexed characters and sort the odd-indexed characters separately.',
    'Two words are special-equivalent if and only if they have the same canonical form.',
    'Count the number of distinct canonical forms using a Set.',
    '```js\nfunction numSpecialEquivGroups(words) {\n  const canonical = w => {\n    const even = [...w].filter((_,i) => i%2===0).sort().join(\'\');\n    const odd = [...w].filter((_,i) => i%2===1).sort().join(\'\');\n    return even + \'|\' + odd;\n  };\n  return new Set(words.map(canonical)).size;\n}\n```',
  ],
  functionName: 'numSpecialEquivGroups',
  params: ['words'],
  starterCode: {
    javascript: `function numSpecialEquivGroups(words) {

}`,
    typescript: `function numSpecialEquivGroups(words: string[]): number {

}`,
    python: `def numSpecialEquivGroups(words):
    pass`,
  },
  visibleTests: [
    { args: [['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx']], expected: 3 },
    { args: [['abc', 'acb', 'bca', 'bac', 'cab', 'cba']], expected: 3 },
    { args: [['a']], expected: 1 },
  ],
  hiddenTests: [
    { args: [['aa', 'bb']], expected: 2 },
    { args: [['ab', 'ba']], expected: 2 },
    { args: [['abc', 'abc']], expected: 1 },
    { args: [['abcd', 'abcd']], expected: 1 },
    { args: [['abcde', 'ecdab']], expected: 2 },
    { args: [['abc', 'bca', 'cab']], expected: 3 },
  ],
};
