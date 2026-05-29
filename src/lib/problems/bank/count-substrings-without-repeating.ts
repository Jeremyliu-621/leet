import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-without-repeating',
  title: 'Count Substrings Without Repeating Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\`, return the **number of substrings** that contain **no repeating characters**.

A **substring** is a contiguous sequence of characters within a string.

For example, in \`"abc"\`, every substring has unique characters: \`"a"\`, \`"b"\`, \`"c"\`, \`"ab"\`, \`"bc"\`, \`"abc"\` — 6 total.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abc"',
      output: '6',
      explanation: 'All 6 substrings have unique characters: "a", "b", "c", "ab", "bc", "abc".',
    },
    {
      input: 's = "aa"',
      output: '2',
      explanation: '"a" (index 0) and "a" (index 1) are valid. "aa" repeats the character \'a\'.',
    },
    {
      input: 's = "abcabc"',
      output: '15',
      explanation: 'Lengths 1–3 all contribute: 6 single chars + 5 pairs + 4 triples = 15.',
    },
  ],
  hints: [
    'Use a sliding window with two pointers `left` and `right`. Expand `right` one step at a time.',
    'Maintain a frequency map (or a `Set`) of characters in the current window [left, right]. When a duplicate appears, advance `left` until the duplicate is gone.',
    'At each position of `right`, every starting index from `left` to `right` gives a valid substring, so add `right - left + 1` to the count.',
  ],
  functionName: 'countSubstringsNoRepeat',
  params: ['s'],
  starterCode: {
    javascript: 'function countSubstringsNoRepeat(s) {\n  // your code here\n}\n',
    typescript: 'function countSubstringsNoRepeat(s: string): number {\n  // your code here\n}',
    python: 'def countSubstringsNoRepeat(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abc'], expected: 6 },
    { args: ['aa'], expected: 2 },
    { args: ['abcabc'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcd'], expected: 10 },
    { args: ['aab'], expected: 4 },
    { args: ['abba'], expected: 6 },
    { args: ['pwwkew'], expected: 12 },
    { args: ['zzzz'], expected: 4 },
    { args: ['abcde'], expected: 15 },
    { args: ['aabb'], expected: 5 },
  ],
};
