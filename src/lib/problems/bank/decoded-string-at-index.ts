import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decoded-string-at-index',
  title: 'Decoded String at Index',
  difficulty: 'medium',
  tags: ['strings', 'math', 'stack'],
  description: `You are given an encoded string \`s\` and an integer \`k\`. The string is decoded as follows:
- A **letter** appends itself to the decoded string.
- A **digit** \`d\` causes the current decoded string to be repeated \`d\` times.

Return the **k-th character** (1-indexed) in the decoded string. The decoded string is guaranteed to have length ≥ k.

**Key insight:** The decoded string can be astronomically long. Instead of building it, work **backwards** — compute the total decoded length, then reverse through the encoded string reducing \`k\` modulo the current size at each step.`,
  constraints: [
    '2 <= s.length <= 100',
    "s consists of lowercase English letters and digits 2-9",
    '1 <= k <= 10^9',
    'It is guaranteed that k <= (decoded string length)',
  ],
  examples: [
    {
      input: 's = "leet2code3", k = 10',
      output: '"o"',
      explanation: 'Decoded string is "leetleetcodeleetleetcodeleetleetcode". The 10th character is "o".',
    },
    {
      input: 's = "ha22", k = 5',
      output: '"h"',
      explanation: 'Decoded: "ha" → "haha" → "hahahaha". The 5th character is "h".',
    },
    {
      input: 's = "ab2", k = 4',
      output: '"b"',
      explanation: 'Decoded: "ab" → "abab". The 4th character is "b".',
    },
  ],
  hints: [
    'First pass forward: compute the total decoded length (use BigInt in JS to avoid overflow).',
    'Second pass backward: at each character, update k %= size. If k === 0 and the character is a letter, return it. If the character is a digit d, size /= d. If a letter, size -= 1.',
    'The modulo operation maps k into the equivalent position in the current (smaller) decoded string.',
  ],
  functionName: 'decodeAtIndex',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function decodeAtIndex(s, k) {
  // Return the k-th character (1-indexed) of the decoded string
}`,
    python: `def decodeAtIndex(s: str, k: int) -> str:
    # Return the k-th character (1-indexed) of the decoded string
    pass`,
  },
  visibleTests: [
    { args: ['leet2code3', 10], expected: 'o' },
    { args: ['ha22', 5], expected: 'h' },
    { args: ['abc', 2], expected: 'b' },
    { args: ['ab2', 4], expected: 'b' },
  ],
  hiddenTests: [
    { args: ['a2345678999999999999999', 1], expected: 'a' },
    { args: ['vzpp636', 10], expected: 'z' },
    { args: ['a', 1], expected: 'a' },
    { args: ['a2b3', 6], expected: 'b' },
    { args: ['leetcode', 8], expected: 'e' },
    { args: ['xyz2', 5], expected: 'y' },
    { args: ['d3', 6], expected: 'd' },
  ],
};
