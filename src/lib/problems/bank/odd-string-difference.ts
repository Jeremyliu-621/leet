import type { Problem } from '../types';

export const problem: Problem = {
  id: 'odd-string-difference',
  title: 'Odd String Difference',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given an array of equal-length strings \`words\`. For each string, compute a **difference integer array** by subtracting each consecutive pair of characters: \`difference[i] = words[j][i+1] - words[j][i]\` (using character code values).

All strings except one have the same difference array. Return the string with the **different** difference array.`,
  constraints: [
    '3 <= words.length <= 100',
    'n == words[i].length',
    '2 <= n <= 20',
    'words[i] consists of lowercase English letters.',
    'All strings in words have different character difference arrays except exactly one.',
  ],
  examples: [
    {
      input: 'words = ["abc","bcd","abd"]',
      output: '"abd"',
      explanation: '"abc" diff: [1,1]. "bcd" diff: [1,1]. "abd" diff: [1,2]. "abd" is different.',
    },
    {
      input: 'words = ["aeiou","bfjpv","abcde"]',
      output: '"abcde"',
      explanation: '"aeiou" and "bfjpv" both have diff [4,4,6,6]. "abcde" has diff [1,1,1,1].',
    },
  ],
  hints: [
    'Level 1: Compute the difference array for each word.',
    'Level 2: Use a Map from difference-array-string to list of words. The key with one entry is the odd one out.',
    'Level 3: const diff=w=>w.slice(1).split("").map((c,i)=>c.charCodeAt(0)-w.charCodeAt(i));const m=new Map();for(const w of words){const k=diff(w).join(",");m.set(k,[...(m.get(k)??[]),w]);}return [...m.values()].find(v=>v.length===1)[0];',
  ],
  functionName: 'oddString',
  params: ['words'],
  starterCode: {
    javascript: 'function oddString(words) {\n  // your code here\n}\n',
    python: 'def oddString(words):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['abc', 'bcd', 'abd']], expected: 'abd' },
    { args: [['aeiou', 'bfjpv', 'abcde']], expected: 'abcde' },
  ],
  hiddenTests: [
    { args: [['ab', 'bc', 'ad']], expected: 'ad' },
    { args: [['aaa', 'bbb', 'abc']], expected: 'abc' },
    { args: [['abc', 'xyz', 'abd']], expected: 'abd' },
    { args: [['ab', 'ab', 'ac']], expected: 'ac' },
  ],
};
