import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-two-strings-close',
  title: 'Determine if Two Strings Are Close',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Two strings are considered **close** if you can attain one from the other using the following operations:

- **Operation 1:** Swap any two **existing** characters.
- **Operation 2:** Transform every occurrence of one **existing** character into another **existing** character, and do the same with the other character.

You can use the operations on either string as many times as necessary.

Given two strings, \`word1\` and \`word2\`, return \`true\` if \`word1\` and \`word2\` are **close**, and \`false\` otherwise.`,
  constraints: [
    '1 <= word1.length, word2.length <= 10^5',
    'word1 and word2 contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "abc", word2 = "bca"',
      output: 'true',
      explanation: 'Apply operation 1 to rearrange "abc" to "bca".',
    },
    {
      input: 'word1 = "a", word2 = "aa"',
      output: 'false',
      explanation: 'Different lengths.',
    },
    {
      input: 'word1 = "cabbba", word2 = "abbccc"',
      output: 'true',
      explanation: 'Same character set {a,b,c}. Sorted frequencies [1,2,3] == [1,2,3].',
    },
  ],
  hints: [
    'Level 1: Two strings are close if: (1) they have the same length, (2) they contain the same set of characters, and (3) the multiset of character frequencies is the same (when sorted).',
    'Level 2: Check lengths are equal. Compute freq maps for both. Check the keys (char sets) are the same. Sort both value arrays and compare.',
    "Level 3: if(word1.length!==word2.length)return false;const f1=new Map(),f2=new Map();for(const c of word1)f1.set(c,(f1.get(c)??0)+1);for(const c of word2)f2.set(c,(f2.get(c)??0)+1);if([...f1.keys()].sort().join()!==[...f2.keys()].sort().join())return false;return [...f1.values()].sort((a,b)=>a-b).join()===[...f2.values()].sort((a,b)=>a-b).join();",
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
    { args: ['a', 'a'], expected: true },
    { args: ['abc', 'xyz'], expected: false },
    { args: ['aab', 'bba'], expected: true },
    { args: ['ab', 'abb'], expected: false },
    { args: ['uau', 'sss'], expected: false },
  ],
};
