import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-and-replace-pattern',
  title: 'Find and Replace Pattern',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a list of strings \`words\` and a string \`pattern\`, return *a list of* \`words[i]\` *that match* \`pattern\`. You may return the answer in **any order**.

A word matches the pattern if there exists a **permutation of letters** \`p\` so that after replacing every letter \`x\` in the pattern with \`p(x)\`, we get the desired word.

Formally, given a pattern, a word matches the pattern if there is a bijection from the letters in the pattern to the letters in the word.`,
  constraints: [
    '1 <= pattern.length <= 20',
    '1 <= words.length <= 50',
    'words[i].length == pattern.length',
    'pattern and words[i] are lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["aa","bb","bc","ac","ca","ab","ba"], pattern = "ab"',
      output: '["bc","ac","ca","ab","ba"]',
      explanation: '"aa" and "bb" don\'t match (same letter maps to two different pattern chars). The rest match.',
    },
    {
      input: 'words = ["a","b","c"], pattern = "a"',
      output: '["a","b","c"]',
      explanation: 'Every single-character word matches the single-character pattern.',
    },
  ],
  hints: [
    'Level 1: Normalize both the word and the pattern to a canonical form. Map each character to the index of its first occurrence. Two strings match the pattern when their canonical forms are identical.',
    'Level 2: To canonicalize a string, iterate its characters. Keep a map from character to assigned index. If a character is new, assign it the next available index. The canonical form is the array of assigned indices.',
    'Level 3: Alternatively, enforce bijectivity directly: use two maps — one from word-char to pattern-char, and one from pattern-char to word-char. At each position, if either map is inconsistent, the word does not match.',
  ],
  functionName: 'findAndReplacePattern',
  params: ['words', 'pattern'],
  starterCode: {
    javascript: `function findAndReplacePattern(words, pattern) {
  function normalize(s) {
    const map = {};
    let idx = 0;
    return s.split('').map(c => {
      if (!(c in map)) map[c] = idx++;
      return map[c];
    }).join(',');
  }
  const pat = normalize(pattern);
  return words.filter(w => normalize(w) === pat);
}`,
    typescript: `function findAndReplacePattern(words: string[], pattern: string): string[] {
  function normalize(s: string): string {
    const map: Record<string, number> = {};
    let idx = 0;
    return s.split('').map(c => {
      if (!(c in map)) map[c] = idx++;
      return map[c];
    }).join(',');
  }
  const pat = normalize(pattern);
  return words.filter(w => normalize(w) === pat);
}`,
    python: `def findAndReplacePattern(words, pattern):
    def normalize(s):
        mapping = {}
        idx = 0
        result = []
        for c in s:
            if c not in mapping:
                mapping[c] = idx
                idx += 1
            result.append(mapping[c])
        return tuple(result)
    pat = normalize(pattern)
    return [w for w in words if normalize(w) == pat]`,
  },
  visibleTests: [
    { args: [['aa', 'bb', 'bc', 'ac', 'ca', 'ab', 'ba'], 'ab'], expected: ['bc', 'ac', 'ca', 'ab', 'ba'] },
    { args: [['a', 'b', 'c'], 'a'], expected: ['a', 'b', 'c'] },
  ],
  hiddenTests: [
    { args: [['mee', 'aqq', 'dkd', 'ccc'], 'abb'], expected: ['mee', 'aqq'] },
    { args: [['abc', 'cba', 'xyx', 'xyz'], 'abc'], expected: ['abc', 'cba', 'xyz'] },
    { args: [['aa', 'bb', 'cc'], 'aa'], expected: ['aa', 'bb', 'cc'] },
    { args: [['xyz', 'aab'], 'aab'], expected: ['aab'] },
    { args: [['aa', 'bb', 'yy', 'bc', 'yz'], 'cc'], expected: ['aa', 'bb', 'yy'] },
    { args: [['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'], expected: ['mee', 'aqq'] },
  ],
};
