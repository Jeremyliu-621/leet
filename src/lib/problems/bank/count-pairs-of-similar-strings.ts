import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-of-similar-strings',
  title: 'Count Pairs of Similar Strings',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a **0-indexed** string array \`words\`.

Two strings are **similar** if they consist of the same characters.

For example, \`"abca"\` and \`"cba"\` are similar since both consist of characters \`'a'\`, \`'b'\`, and \`'c'\`. However, \`"abacba"\` and \`"bcfd"\` are not similar since they do not consist of the same characters.

Return the number of **pairs** \`(i, j)\` such that \`0 <= i < j <= word.length - 1\` and the two strings \`words[i]\` and \`words[j]\` are similar.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["aba","aabb","abcd","bac","aabc"]',
      output: '2',
      explanation: 'Character sets: "aba"={a,b}, "aabb"={a,b}, "abcd"={a,b,c,d}, "bac"={a,b,c}, "aabc"={a,b,c}. Similar pairs: ("aba","aabb") and ("bac","aabc"). Count = 2.',
    },
    {
      input: 'words = ["aabb","ab","ba"]',
      output: '3',
      explanation: 'All three consist of {a,b}. Pairs: (0,1), (0,2), (1,2). Count = 3.',
    },
  ],
  hints: [
    'For each word, extract its set of unique characters and represent it as a sorted string or bitmask.',
    'Two words are similar if and only if their character sets are equal.',
    'Use a hash map to count how many words have each character set, then use C(count, 2) = count*(count-1)/2 for each group.',
  ],
  functionName: 'similarPairs',
  params: ['words'],
  starterCode: {
    javascript: 'function similarPairs(words) {\n  \n}\n',
    python: 'def similarPairs(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['aba','aabb','abcd','bac','aabc']], expected: 2 },
    { args: [['aabb','ab','ba']], expected: 3 },
    { args: [['aa']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a','a','a']], expected: 3 },
    { args: [['abc','cba','bca','xyz']], expected: 3 },
    { args: [['ab','ba','abc']], expected: 1 },
    { args: [['a','b']], expected: 0 },
    { args: [['z','zz','zzz']], expected: 3 },
  ],
};
