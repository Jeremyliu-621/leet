import type { Problem } from '../types';

export const problem: Problem = {
  id: 'character-replacement',
  title: 'Longest Repeating Character Replacement',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` of uppercase English letters and an integer \`k\`, you may replace **at most k characters** in the string with any uppercase letter.

Return the length of the **longest substring** that contains only one distinct letter after performing at most \`k\` replacements.`,
  constraints: [
    '1 <= s.length <= 1000',
    '0 <= k <= s.length',
    's consists of uppercase English letters only.',
  ],
  examples: [
    {
      input: 's = "ABAB", k = 2',
      output: '4',
      explanation: 'Replace the two A\'s with B\'s (or vice versa) to get "BBBB" or "AAAA". Length 4.',
    },
    {
      input: 's = "AABABBA", k = 1',
      output: '4',
      explanation: 'Replace the one B at index 3 to get "AAAAABB". The longest uniform substring is length 4.',
    },
    {
      input: 's = "AAAA", k = 2',
      output: '4',
      explanation: 'Already all the same character. No replacements needed.',
    },
  ],
  hints: [
    'Level 1: Use a sliding window. The key observation: a window is valid if (window size − count of most frequent character in window) ≤ k.',
    'Level 2: Maintain a frequency map for the current window and track `maxCount` (the highest frequency of any single character seen so far). Expand the right pointer; when `(right - left + 1) - maxCount > k`, slide the left pointer right by one.',
    'Level 3: `const freq = new Array(26).fill(0); let left = 0, maxCount = 0, best = 0; for (let right = 0; right < s.length; right++) { freq[s.charCodeAt(right) - 65]++; maxCount = Math.max(maxCount, freq[s.charCodeAt(right) - 65]); while ((right - left + 1) - maxCount > k) { freq[s.charCodeAt(left) - 65]--; left++; } best = Math.max(best, right - left + 1); } return best;`',
  ],
  functionName: 'characterReplacement',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function characterReplacement(s, k) {\n  // your code here\n}\n',
    typescript: "function characterReplacement(s: string, k: number): number {\n  // your code here\n}",

    python: 'def characterReplacement(s, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['ABAB', 2], expected: 4 },
    { args: ['AABABBA', 1], expected: 4 },
    { args: ['AAAA', 2], expected: 4 },
  ],
  hiddenTests: [
    { args: ['A', 0], expected: 1 },
    { args: ['AB', 0], expected: 1 },
    { args: ['AB', 1], expected: 2 },
    { args: ['AABB', 0], expected: 2 },
    { args: ['AABCCBB', 2], expected: 5 },
    { args: ['ABCDE', 4], expected: 5 },
    { args: ['BAAAB', 2], expected: 5 },
  ],
};
