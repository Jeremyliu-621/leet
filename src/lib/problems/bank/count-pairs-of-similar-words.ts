import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-of-similar-words',
  title: 'Count Pairs of Similar Words',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `You are given a **0-indexed** string array \`words\`.

Two words are **similar** if they consist of the same characters.

- For example, \`"abca"\` and \`"cba"\` are similar since both consist of characters \`'a'\`, \`'b'\`, and \`'c'\`.
- However, \`"abacba"\` and \`"bcfd"\` are not similar since they do not consist of the same characters (although they both have the same length).

Return the number of pairs \`(i, j)\` such that \`0 <= i < j <= word.length - 1\` and the two words \`words[i]\` and \`words[j]\` are similar.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["aba","aabb","abcd","bac","aabc"]',
      output: '2',
      explanation: 'Pairs (0,1) and (1,4) are similar. "aba" and "aabb" both use {a,b}. "aabb" and "aabc" both use {a,b,c}.',
    },
    {
      input: 'words = ["aabb","ab","ba"]',
      output: '3',
      explanation: 'All three use {a,b} so all three pairs are similar.',
    },
    {
      input: 'words = ["nba","cba","dba"]',
      output: '0',
      explanation: 'No two words share the same character set.',
    },
  ],
  hints: [
    'For each word, compute a canonical key representing its unique character set. Order does not matter — just which letters appear.',
    'Sort the unique characters of each word and join them to form a key string. Two words with the same key are similar.',
    'Use a frequency map of keys. For a word whose key appears k times already in the map, it forms k new pairs. Add k to the answer, then increment the key count.',
  ],
  functionName: 'similarPairs',
  params: ['words'],
  starterCode: {
    javascript: `function similarPairs(words) {
  const cnt = new Map();
  let ans = 0;
  for (const w of words) {
    const key = [...new Set(w)].sort().join('');
    ans += cnt.get(key) ?? 0;
    cnt.set(key, (cnt.get(key) ?? 0) + 1);
  }
  return ans;
}`,
    typescript: `function similarPairs(words: string[]): number {
  const cnt = new Map<string, number>();
  let ans = 0;
  for (const w of words) {
    const key = [...new Set(w)].sort().join('');
    ans += cnt.get(key) ?? 0;
    cnt.set(key, (cnt.get(key) ?? 0) + 1);
  }
  return ans;
}`,
    python: `def similarPairs(words):
    words = list(words.to_py()) if hasattr(words, 'to_py') else list(words)
    cnt = {}
    ans = 0
    for w in words:
        key = ''.join(sorted(set(w)))
        ans += cnt.get(key, 0)
        cnt[key] = cnt.get(key, 0) + 1
    return ans`,
  },
  visibleTests: [
    { args: [['aba', 'aabb', 'abcd', 'bac', 'aabc']], expected: 2 },
    { args: [['aabb', 'ab', 'ba']], expected: 3 },
    { args: [['nba', 'cba', 'dba']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 0 },
    { args: [['a', 'a']], expected: 1 },
    { args: [['abc', 'cba', 'bca', 'xyz']], expected: 3 },
    { args: [['ab', 'bc', 'ca']], expected: 0 },
    { args: [['aa', 'a']], expected: 1 },
    { args: [['ab', 'ba', 'ab', 'ba']], expected: 6 },
  ],
};
