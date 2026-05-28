import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-occurrences-z-algorithm',
  title: 'Find All Pattern Occurrences (Z-Algorithm)',
  difficulty: 'hard',
  tags: ['strings', 'arrays'],
  description: `Given a text string \`text\` and a pattern string \`pattern\`, find **all starting indices** in \`text\` where \`pattern\` occurs as a substring. Return the indices in sorted (ascending) order.

Implement this efficiently using the **Z-algorithm** approach: build the Z-array of the concatenated string \`pattern + "#" + text\`, where \`z[i]\` is the length of the longest substring starting at position \`i\` that is also a prefix of the full concatenated string. An occurrence is found at every position where \`z[i] >= pattern.length\`.

**Example:**
- \`text = "aababcabab"\`, \`pattern = "ab"\`
- Occurrences at indices: **1, 3, 6, 8**

Return \`[]\` if there are no occurrences.`,
  constraints: [
    '1 <= pattern.length <= 1000',
    '1 <= text.length <= 10^5',
    'pattern.length <= text.length',
    'Both strings consist of lowercase English letters only',
  ],
  examples: [
    {
      input: 'text = "aababcabab", pattern = "ab"',
      output: '[1, 3, 6, 8]',
      explanation: '"ab" appears at positions 1, 3, 6, and 8 in the text.',
    },
    {
      input: 'text = "aaaa", pattern = "aa"',
      output: '[0, 1, 2]',
      explanation: '"aa" starts at 0, 1, and 2 (overlapping occurrences are included).',
    },
    {
      input: 'text = "abcdef", pattern = "xyz"',
      output: '[]',
      explanation: 'Pattern not found.',
    },
  ],
  hints: [
    'Construct the concatenated string `s = pattern + "#" + text`. Build the Z-array where `z[i]` = length of the longest string starting at `s[i]` that matches a prefix of `s`.',
    'To build the Z-array, maintain a window `[l, r]` that is the rightmost Z-box found so far. For each index `i`, if `i < r` you can initialize `z[i] = min(r - i, z[i - l])`, then extend naively.',
    'An occurrence of `pattern` in `text` corresponds to any position `i` in the concatenated string where `i >= pattern.length + 1` (past the "#") and `z[i] >= pattern.length`. The starting index in `text` is `i - pattern.length - 1`.',
  ],
  functionName: 'findAllOccurrences',
  params: ['text', 'pattern'],
  starterCode: {
    javascript: `function findAllOccurrences(text, pattern) {
  // Return sorted array of starting indices of all pattern occurrences in text
}`,
    typescript: "function findAllOccurrences(text: string, pattern: string): number[] {\n  // Return sorted array of starting indices of all pattern occurrences in text\n}",

    python: `def findAllOccurrences(text: str, pattern: str) -> list[int]:
    # Return sorted array of starting indices of all pattern occurrences in text
    pass`,
  },
  visibleTests: [
    { args: ['aababcabab', 'ab'], expected: [1, 3, 6, 8] },
    { args: ['aaaa', 'aa'], expected: [0, 1, 2] },
    { args: ['abcdef', 'xyz'], expected: [] },
    { args: ['abcabc', 'abc'], expected: [0, 3] },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: [0] },
    { args: ['aaab', 'aaa'], expected: [0] },
    { args: ['abababab', 'abab'], expected: [0, 2, 4] },
    { args: ['mississippi', 'issi'], expected: [1, 4] },
    { args: ['mississippi', 'ss'], expected: [2, 5] },
    { args: ['hello', 'world'], expected: [] },
    { args: ['aaa', 'a'], expected: [0, 1, 2] },
    { args: ['abcde', 'abcde'], expected: [0] },
  ],
};
