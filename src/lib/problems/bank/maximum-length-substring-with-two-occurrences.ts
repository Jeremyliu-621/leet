import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-substring-with-two-occurrences',
  title: 'Maximum Length Substring With Two Occurrences',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\`, return the **maximum** length of a substring such that it contains **at most two occurrences** of each character.`,
  constraints: [
    '2 <= s.length <= 100',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "bcbbbcba"',
      output: '4',
      explanation: 'The longest substring where every character appears at most twice is "bcbb" (length 4). "bcbbb" has \'b\' appearing 3 times.',
    },
    {
      input: 's = "aab"',
      output: '3',
      explanation: 'The whole string "aab" has \'a\' appearing twice and \'b\' once — all characters appear at most twice. Length = 3.',
    },
    {
      input: 's = "aaaa"',
      output: '2',
      explanation: 'The longest valid substring is "aa" (length 2). Any longer substring has \'a\' appearing more than twice.',
    },
  ],
  hints: [
    'Use a sliding window (two pointers) approach.',
    'Maintain a frequency map of characters in the current window.',
    'Shrink the left side whenever any character frequency exceeds 2.',
    'Track the maximum window size seen.',
  ],
  functionName: 'maximumLengthSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function maximumLengthSubstring(s) {
  const freq = {};
  let l = 0, ans = 0;
  for (let r = 0; r < s.length; r++) {
    freq[s[r]] = (freq[s[r]] || 0) + 1;
    while (freq[s[r]] > 2) { freq[s[l]]--; l++; }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}`,
    typescript: `function maximumLengthSubstring(s: string): number {
  const freq: Record<string, number> = {};
  let l = 0, ans = 0;
  for (let r = 0; r < s.length; r++) {
    freq[s[r]!] = (freq[s[r]!] ?? 0) + 1;
    while (freq[s[r]!]! > 2) { freq[s[l]!]!--; l++; }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}`,
    python: `def maximumLengthSubstring(s):
    from collections import defaultdict
    freq = defaultdict(int)
    l, ans = 0, 0
    for r, c in enumerate(s):
        freq[c] += 1
        while freq[c] > 2:
            freq[s[l]] -= 1
            l += 1
        ans = max(ans, r - l + 1)
    return ans`,
  },
  visibleTests: [
    { args: ['bcbbbcba'], expected: 4 },
    { args: ['aab'], expected: 3 },
    { args: ['aaaa'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['bcbbbcba'], expected: 4 },
    { args: ['aab'], expected: 3 },
    { args: ['aaaa'], expected: 2 },
    { args: ['ab'], expected: 2 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['abcabcabc'], expected: 6 },
    { args: ['aabbccdd'], expected: 8 },
    { args: ['zzzz'], expected: 2 },
  ],
};
