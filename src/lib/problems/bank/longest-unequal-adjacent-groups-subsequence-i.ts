import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-unequal-adjacent-groups-subsequence-i',
  title: 'Longest Unequal Adjacent Groups Subsequence I',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `You are given a string array \`words\` and a **binary** array \`groups\`, both of length \`n\`, where \`words[i]\` is associated with \`groups[i]\`.

You need to select the **longest alternating subsequence** from \`words\`. A subsequence of \`words\` is called **alternating** if for any two consecutive elements in the subsequence, their corresponding group values are **different**.

Return any **valid alternating subsequence** from \`words\`. It can be shown that any two valid longest alternating subsequences have the same length.`,
  constraints: [
    '1 <= n <= 100',
    '1 <= words[i].length <= 10',
    'groups[i] is either 0 or 1.',
    'words[i] consists of lowercase English letters.',
    'words and groups have the same length.',
  ],
  examples: [
    {
      input: 'words = ["e","a","b"], groups = [0,0,1]',
      output: '["e","b"]',
      explanation: 'A valid longest alternating subsequence is ["e","b"] (groups 0,1). ["a","b"] is also valid.',
    },
    {
      input: 'words = ["a","b","c","d"], groups = [1,0,1,1]',
      output: '["a","b","c"]',
      explanation: '"a"(1) → "b"(0) → "c"(1) alternates. Length 3 is maximum.',
    },
    {
      input: 'words = ["a","b"], groups = [0,0]',
      output: '["a"]',
      explanation: 'Both words have group 0. We can only take 1 word.',
    },
  ],
  hints: [
    'Greedily pick the first element, then each subsequent element whose group differs from the last picked group.',
    'This is equivalent to taking one representative from each run of same-group consecutive elements.',
    'Build the result by iterating through words and groups, adding words[i] whenever groups[i] != last_group.',
  ],
  functionName: 'getLongestSubsequence',
  params: ['words', 'groups'],
  starterCode: {
    javascript: `function getLongestSubsequence(words, groups) {

}`,
    typescript: `function getLongestSubsequence(words: string[], groups: number[]): string[] {

}`,
    python: `def getLongestSubsequence(words, groups):
    pass`,
  },
  visibleTests: [
    { args: [['e', 'a', 'b'], [0, 0, 1]], expected: ['e', 'b'] },
    { args: [['a', 'b', 'c', 'd'], [1, 0, 1, 1]], expected: ['a', 'b', 'c'] },
    { args: [['a', 'b'], [0, 0]], expected: ['a'] },
  ],
  hiddenTests: [
    { args: [['x'], [0]], expected: ['x'] },
    { args: [['a', 'b', 'c'], [0, 1, 0]], expected: ['a', 'b', 'c'] },
    { args: [['a', 'b', 'c'], [0, 0, 0]], expected: ['a'] },
    { args: [['a', 'b', 'c', 'd'], [0, 1, 0, 1]], expected: ['a', 'b', 'c', 'd'] },
    { args: [['a', 'b', 'c', 'd'], [1, 1, 0, 0]], expected: ['a', 'c'] },
    { args: [['p', 'q', 'r', 's'], [0, 1, 1, 0]], expected: ['p', 'q', 's'] },
  ],
};
