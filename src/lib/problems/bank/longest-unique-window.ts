import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-unique-window',
  title: 'Longest Substring Without Repeats',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description: `Given a string \`s\`, find the length of the **longest substring** that contains no repeated characters.

A substring is a contiguous sequence of characters within the string. Every character in the target substring must be distinct — no character appears more than once in it.

Use a sliding window: expand the right edge and, whenever a duplicate enters, shrink the left edge until the window is unique again.`,
  constraints: [
    '0 <= s.length <= 1000',
    's contains only printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "abcabcbb"',
      output: '3',
      explanation: '"abc" is the longest substring with all unique characters.',
    },
    {
      input: 's = "bbbbb"',
      output: '1',
      explanation: 'The only non-repeating window is a single character.',
    },
    {
      input: 's = "pwwkew"',
      output: '3',
      explanation: '"wke" is a 3-character window with no repeats.',
    },
  ],
  hints: [
    'A brute-force approach checks every substring — O(n²) or worse. Think about how you can avoid re-scanning from scratch each time.',
    'Use a sliding window `[left, right]` and a Set of characters currently in the window. When `s[right]` is already in the Set, remove `s[left]` and advance `left` until the duplicate is gone. Then add `s[right]` and record the window size.',
    '`const seen = new Set<string>(); let left = 0, best = 0; for (let right = 0; right < s.length; right++) { while (seen.has(s[right])) { seen.delete(s[left++]); } seen.add(s[right]); best = Math.max(best, right - left + 1); } return best;`',
  ],
  functionName: 'longestUniqueWindow',
  params: ['s'],
  starterCode: {
    javascript: `function longestUniqueWindow(s) {
  const seen = new Set();
  let left = 0, best = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) seen.delete(s[left++]);
    seen.add(s[right]);
    best = Math.max(best, right - left + 1);
  }
  return best;
}`,
    typescript: `function longestUniqueWindow(s: string): number {
  const seen = new Set<string>();
  let left = 0, best = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right]!)) seen.delete(s[left++]!);
    seen.add(s[right]!);
    best = Math.max(best, right - left + 1);
  }
  return best;
}`,
    python: `def longestUniqueWindow(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    seen = set()
    left = best = 0
    for right in range(len(s)):
        while s[right] in seen:
            seen.discard(s[left]); left += 1
        seen.add(s[right])
        best = max(best, right - left + 1)
    return best`,
  },
  visibleTests: [
    { args: ['abcabcbb'], expected: 3 },
    { args: ['bbbbb'], expected: 1 },
    { args: ['pwwkew'], expected: 3 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['a'], expected: 1 },
    { args: ['au'], expected: 2 },
    { args: ['dvdf'], expected: 3 },
    { args: ['abcdef'], expected: 6 },
    { args: ['tmmzuxt'], expected: 5 },
  ],
};
