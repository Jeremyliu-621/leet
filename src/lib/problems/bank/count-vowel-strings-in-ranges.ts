import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowel-strings-in-ranges',
  title: 'Count Vowel Strings in Ranges',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a **0-indexed** array of string \`words\` and a 2D array of integers \`queries\`.

Each query \`queries[i] = [li, ri]\` asks us to find the number of strings present in the range \`li\` to \`ri\` (both **inclusive**) of \`words\` that start with a vowel and end with a vowel.

Return an integer array \`ans\` of size \`queries.length\`, where \`ans[i]\` is the answer to the \`i\`th query.`,
  constraints: [
    '1 <= words.length <= 10^5',
    '1 <= words[i].length <= 40',
    'words[i] consists only of lowercase English letters.',
    '1 <= queries.length <= 10^5',
    '0 <= li <= ri < words.length',
  ],
  examples: [
    {
      input: 'words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]',
      output: '[2,3,0]',
      explanation: '"aba" and "ece" start and end with vowels. [0,2]: 2. [1,4]: "ece","aa","e"=3. [1,1]: "bcb"=0.',
    },
    {
      input: 'words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]',
      output: '[3,2,1]',
      explanation: 'All three words start and end with vowels.',
    },
  ],
  hints: [
    'Precompute a prefix sum array where prefix[i] = number of vowel-start-and-end words in words[0..i-1].',
    'A word qualifies if vowels.has(word[0]) && vowels.has(word[word.length-1]). Vowels: a, e, i, o, u.',
    'For each query [l, r]: answer = prefix[r+1] - prefix[l].',
  ],
  functionName: 'vowelStrings',
  params: ['words', 'queries'],
  starterCode: {
    javascript: `function vowelStrings(words, queries) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const isVowel = w => vowels.has(w[0]) && vowels.has(w[w.length - 1]);
  const prefix = new Array(words.length + 1).fill(0);
  for (let i = 0; i < words.length; i++) prefix[i + 1] = prefix[i] + (isVowel(words[i]) ? 1 : 0);
  return queries.map(([l, r]) => prefix[r + 1] - prefix[l]);
}`,
    typescript: `function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const isVowel = (w: string) => vowels.has(w[0]!) && vowels.has(w[w.length - 1]!);
  const prefix = new Array<number>(words.length + 1).fill(0);
  for (let i = 0; i < words.length; i++) prefix[i + 1] = prefix[i]! + (isVowel(words[i]!) ? 1 : 0);
  return queries.map(q => prefix[q[1]! + 1]! - prefix[q[0]!]!);
}`,
    python: `def vowelStrings(words, queries):
    vowels = set('aeiou')
    def is_vowel_word(w): return w[0] in vowels and w[-1] in vowels
    prefix = [0] * (len(words) + 1)
    for i, w in enumerate(words):
        prefix[i + 1] = prefix[i] + (1 if is_vowel_word(w) else 0)
    return [prefix[r + 1] - prefix[l] for l, r in queries]`,
  },
  visibleTests: [
    { args: [['aba', 'bcb', 'ece', 'aa', 'e'], [[0, 2], [1, 4], [1, 1]]], expected: [2, 3, 0] },
    { args: [['a', 'e', 'i'], [[0, 2], [0, 1], [2, 2]]], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [['abc', 'aba'], [[0, 1]]], expected: [1] },
    { args: [['aaa', 'bbb', 'ccc'], [[0, 2], [0, 0]]], expected: [1, 1] },
    { args: [['oo', 'ee'], [[0, 1], [0, 0], [1, 1]]], expected: [2, 1, 1] },
  ],
};
