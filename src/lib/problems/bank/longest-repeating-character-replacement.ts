import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-repeating-character-replacement',
  title: 'Longest Repeating Character Replacement',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `You are given a string \`s\` and an integer \`k\`. You can choose any character in the string and change it to any other uppercase English character. You can perform this operation at most \`k\` times. Return the length of the longest substring containing the same letter you can get after performing the above operations.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s consists of only uppercase English letters`',
    '`0 <= k <= s.length`',
  ],
  examples: [
    {
      input: 's = "ABAB", k = 2',
      output: '4',
      explanation: 'Replace the two A\'s with B\'s, or the two B\'s with A\'s, to get a string of length 4 with all the same character.',
    },
    {
      input: 's = "AABABBA", k = 1',
      output: '4',
      explanation: 'Replace the one B at index 5 with A to get "AABAAAA". The longest substring of one repeating character is "AAAA" of length 4.',
    },
  ],
  hints: [
    'Sliding window: maintain a frequency count for characters in the current window.',
    'The window is valid if (window_size - max_freq) <= k.',
    'Expand the right pointer; when the window becomes invalid, move the left pointer. The window size never shrinks — this is the key optimization.',
  ],
  functionName: 'characterReplacement',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function characterReplacement(s, k) {

}`,
    typescript: "function characterReplacement(s: string, k: number): number {\n\n}",

    python: `def characterReplacement(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['ABAB', 2], expected: 4 },
    { args: ['AABABBA', 1], expected: 4 },
    { args: ['AAAA', 0], expected: 4 },
  ],
  hiddenTests: [
    { args: ['ABCD', 1], expected: 2 },
    { args: ['ABCDE', 2], expected: 3 },
    { args: ['AA', 0], expected: 2 },
    { args: ['AAABBC', 2], expected: 5 },
  ],
};
