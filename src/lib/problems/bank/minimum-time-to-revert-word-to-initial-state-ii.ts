import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-revert-word-to-initial-state-ii',
  title: 'Minimum Time to Revert Word to Initial State II',
  difficulty: 'hard',
  tags: ['strings'],
  description: `You are given a **0-indexed** string \`word\` of length \`n\` and a positive integer \`k\`.

At every second, you must perform the following operation:

- Remove the first \`k\` characters of \`word\`.
- Add any \`k\` characters to the **end** of \`word\`.

Return the **minimum** time greater than zero required for \`word\` to revert to its **initial** state.

**Note:** This is the same problem as "Minimum Time to Revert Word to Initial State I", but with \`n\` up to \`10^6\`. The naive O(n²) string-prefix check is too slow — you need an O(n) approach using the **Z-function**.

The Z-function of a string \`s\` is an array where \`Z[i]\` is the length of the longest substring starting at \`s[i]\` that is also a prefix of \`s\`. After \`t\` operations, the remaining original suffix is \`word[t*k:]\`. The word reverts iff \`word[t*k:]\` is a prefix of \`word\`, which happens iff \`Z[t*k] >= n - t*k\` (or \`t*k >= n\`, meaning the suffix is empty).`,
  constraints: [
    '1 <= n == word.length <= 10^6',
    '1 <= k <= n',
    'word consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abacaba", k = 3',
      output: '2',
      explanation: 'After t=1: word[3:]="caba" is NOT a prefix of "abacaba". After t=2: word[6:]="a" IS a prefix of "abacaba". So minimum time is 2.',
    },
    {
      input: 'word = "abcbabcd", k = 2',
      output: '4',
      explanation: 'The smallest t>0 such that word[t*k:] is a prefix of word is t=4 (word[8:] is empty, and we can rebuild it to word).',
    },
    {
      input: 'word = "aaa", k = 1',
      output: '1',
      explanation: 'word[1:]="aa" is a prefix of "aaa" (Z[1]=2 >= 3-1=2). So t=1.',
    },
  ],
  hints: [
    'After t operations, the remaining original suffix is word[t*k:]. The word reverts iff word[t*k:] is a prefix of word.',
    'Compute the Z-function: Z[i] = length of the longest common prefix of word and word[i:].',
    'word[t*k:] is a prefix of word iff Z[t*k] >= n - t*k (suffix length). If t*k >= n, the suffix is empty and we can always reconstruct — so that t is also valid.',
    'Try t = 1, 2, 3, ... and return the first valid t. Since t*k grows by k each step, at most ceil(n/k) steps.',
  ],
  functionName: 'minimumTimeToInitialState',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function minimumTimeToInitialState(word, k) {

}`,
    typescript: `function minimumTimeToInitialState(word: string, k: number): number {

}`,
    python: `def minimumTimeToInitialState(word: str, k: int) -> int:
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
    { args: ['ababab', 2], expected: 1 },
    { args: ['abcde', 5], expected: 1 },
    { args: ['aaaaaa', 3], expected: 1 },
    { args: ['abcabcabc', 3], expected: 1 },
  ],
};
