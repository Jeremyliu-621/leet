import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-revert-word-to-initial-state-i',
  title: 'Minimum Time to Revert Word to Initial State I',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a **0-indexed** string \`word\` of length \`n\` and a positive integer \`k\`.

At every second, you must perform the following operation:

- Remove the first \`k\` characters of \`word\`.
- Add any \`k\` characters to the **end** of \`word\`.

**Note** that you do not need to add the same characters that you removed.

Return the **minimum** time greater than zero required for \`word\` to revert to its **initial** state.`,
  constraints: [
    '1 <= n <= 50',
    '1 <= k <= n',
    'word consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abacaba", k = 3',
      output: '2',
      explanation: 'After 1 second: remove "aba", add "aba" → "cabaaba". Not the original. After 2 seconds: remove first 3 of "cabaaba" = "cab", string becomes "aaba" + k chars. We can choose to add "aca" to get "aabaaca"... actually: after 2 operations we remove 2k=6 chars from the start, so word[6:] = "a" remains, pad with 6 chars to get "a...". The suffix word[2k:] must be a prefix of word. word[6:] = "a" is a prefix of "abacaba". So t=2.',
    },
    {
      input: 'word = "abcbabcd", k = 2',
      output: '4',
      explanation: 'After t operations, word[t*k:] must be a prefix of word. The smallest t>0 such that word[t*k:] is a prefix of word.',
    },
    {
      input: 'word = "aaa", k = 1',
      output: '1',
      explanation: 'After 1 second: remove first "a", add "a" → "aaa" again. t=1.',
    },
  ],
  hints: [
    'After t operations, the remaining original suffix is word[t*k:]. We can append any characters to pad back to length n.',
    'So word reverts if word[t*k:] is a prefix of word.',
    'Try t = 1, 2, 3, ... until word[t*k:] is a prefix of word, or t*k >= n (in which case the word is empty and we can rebuild it).',
  ],
  functionName: 'minimumTimeToInitialState',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function minimumTimeToInitialState(word, k) {

}`,
    python: `def minimumTimeToInitialState(word, k):
    pass`,
  },
  visibleTests: [
    { args: ['abacaba', 3], expected: 2 },
    { args: ['abcbabcd', 2], expected: 4 },
    { args: ['aaa', 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['ab', 1], expected: 2 },
    { args: ['abab', 2], expected: 1 },
    { args: ['abcd', 1], expected: 4 },
    { args: ['aaaa', 2], expected: 1 },
    { args: ['abcabc', 3], expected: 1 },
  ],
};
