import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-merge-of-two-strings',
  title: 'Largest Merge of Two Strings',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given two strings \`word1\` and \`word2\`. You want to construct the **lexicographically largest** string \`merge\` by repeatedly choosing to:
- append the first character of \`word1\` to \`merge\` and delete it from \`word1\`, or
- append the first character of \`word2\` to \`merge\` and delete it from \`word2\`.

Return the lexicographically largest \`merge\` you can construct.`,
  constraints: [
    '1 <= word1.length, word2.length <= 3000',
    'word1 and word2 consist only of lowercase English letters',
  ],
  examples: [
    {
      input: 'word1 = "cabaa", word2 = "bcaaa"',
      output: '"cbcabaaaaa"',
      explanation: 'Greedy: always take from the string whose remaining suffix is lexicographically larger.',
    },
    {
      input: 'word1 = "abcabc", word2 = "abdcaba"',
      output: '"abdcabcabcaba"',
      explanation: 'Compare full suffixes at each step to break ties correctly.',
    },
  ],
  hints: [
    'At each step, compare the full remaining suffix of word1 vs word2, not just the first character.',
    'If word1[i:] >= word2[j:], take from word1; otherwise take from word2.',
    'This greedy choice is always optimal because taking the larger suffix now produces the lexicographically largest overall result.',
  ],
  functionName: 'largestMerge',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function largestMerge(word1, word2) {
  let merge = '', i = 0, j = 0;
  while (i < word1.length && j < word2.length) {
    if (word1.slice(i) >= word2.slice(j)) merge += word1[i++];
    else merge += word2[j++];
  }
  return merge + word1.slice(i) + word2.slice(j);
}`,
    typescript: `function largestMerge(word1: string, word2: string): string {
  let merge = '', i = 0, j = 0;
  while (i < word1.length && j < word2.length) {
    if (word1.slice(i) >= word2.slice(j)) merge += word1[i++];
    else merge += word2[j++];
  }
  return merge + word1.slice(i) + word2.slice(j);
}`,
    python: `def largestMerge(word1, word2):
    merge = []
    i, j = 0, 0
    while i < len(word1) and j < len(word2):
        if word1[i:] >= word2[j:]: merge.append(word1[i]); i += 1
        else: merge.append(word2[j]); j += 1
    return ''.join(merge) + word1[i:] + word2[j:]`,
  },
  visibleTests: [
    { args: ['cabaa', 'bcaaa'], expected: 'cbcabaaaaa' },
    { args: ['abcabc', 'abdcaba'], expected: 'abdcabcabcaba' },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 'ba' },
    { args: ['ba', 'b'], expected: 'bba' },
    { args: ['z', 'z'], expected: 'zz' },
    { args: ['abcd', 'dbca'], expected: 'dbcabcda' },
  ],
};
