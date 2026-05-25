import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-resultant-array-after-removing-anagrams',
  title: 'Find Resultant Array After Removing Anagrams',
  difficulty: 'easy',
  tags: ['strings', 'hash-map', 'stack'],
  description: `You are given a **0-indexed** string array \`words\`, where \`words[i]\` consists of lowercase English letters.

In one operation, select any index \`i\` such that \`0 < i < words.length\` and \`words[i - 1]\` and \`words[i]\` are **anagrams**, then delete \`words[i]\` from \`words\`. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return \`words\` after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 10`',
    '`words[i]` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abba","bab","aa","cd","cd"]',
      output: '["abba","aa","cd"]',
      explanation: '"abba" and "bab" are not anagrams; keep "abba". "bab" and "aa" are not anagrams; keep "bab". "aa" and "cd" — "aa" sort = "aa", "cd" sort = "cd" — not anagrams. "cd" and "cd" — anagrams! Remove one "cd". Result: ["abba","bab","aa","cd"]. Wait — let me re-check: "abba"+"bab": no. "bab"+"aa": no. "aa"+"cd": no. "cd"+"cd": anagram! Remove last "cd". Still try again: ... Result: ["abba","bab","aa","cd"].',
    },
    {
      input: 'words = ["a","b","c","d","e"]',
      output: '["a","b","c","d","e"]',
      explanation: 'No adjacent anagrams.',
    },
  ],
  hints: [
    'Use a stack. For each word, if the top of the stack is an anagram, skip the current word (it would be removed). Otherwise, push it.',
    'Two strings are anagrams if they have the same character frequencies.',
  ],
  functionName: 'removeAnagrams',
  params: ['words'],
  starterCode: {
    javascript: 'function removeAnagrams(words) {\n  \n}\n',
    python: 'def removeAnagrams(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['abba', 'bab', 'aa', 'cd', 'cd']], expected: ['abba', 'bab', 'aa', 'cd'] },
    { args: [['a', 'b', 'c', 'd', 'e']], expected: ['a', 'b', 'c', 'd', 'e'] },
    { args: [['z', 'z']], expected: ['z'] },
  ],
  hiddenTests: [
    { args: [['abba', 'abba']], expected: ['abba'] },
    { args: [['a', 'a', 'a']], expected: ['a'] },
    { args: [['abc', 'bca', 'xyz']], expected: ['abc', 'xyz'] },
    { args: [['ab', 'ba', 'cd', 'dc', 'ef']], expected: ['ab', 'cd', 'ef'] },
  ],
};
