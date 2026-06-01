import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kmp-string-search',
  title: 'Pattern Matching — KMP Algorithm',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `Given a text string and a pattern string, return a sorted list of all **starting indices** in \`text\` where \`pattern\` occurs as a substring.

Use the **Knuth–Morris–Pratt (KMP)** algorithm (O(n + m) time, O(m) space):
1. Precompute the **failure function** (also called the prefix table / lps array) for the pattern: \`lps[i]\` = length of the longest proper prefix of \`pattern[0..i]\` that is also a suffix.
2. Scan the text left-to-right with a pointer into the pattern; on mismatch, jump using \`lps\` instead of restarting from the beginning.

Return the list of 0-indexed starting positions in ascending order.`,
  constraints: [
    '1 <= text.length <= 10^5',
    '1 <= pattern.length <= text.length',
    'Both strings contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "abcabc", pattern = "abc"',
      output: '[0,3]',
      explanation: '"abc" starts at index 0 and index 3.',
    },
    {
      input: 'text = "aaaa", pattern = "aa"',
      output: '[0,1,2]',
      explanation: 'Overlapping matches are allowed: "aa" at 0, 1, and 2.',
    },
    {
      input: 'text = "abc", pattern = "d"',
      output: '[]',
      explanation: 'Pattern not found.',
    },
  ],
  hints: [
    'Build the lps (longest proper prefix-suffix) array in O(m): start with lps[0]=0 and len=0. For i from 1 to m-1: while len>0 and pattern[i]!=pattern[len], set len=lps[len-1]; if pattern[i]==pattern[len], len++; lps[i]=len.',
    'Scan text with pointer i and pattern pointer j. If text[i]==pattern[j], advance both. If j==m, record i-m as a match, then set j=lps[j-1]. On mismatch and j>0, set j=lps[j-1] without advancing i.',
    'After a full match (j reaches m), use lps[m-1] to continue searching — do not reset j to 0, so overlapping matches are captured.',
  ],
  functionName: 'kmpSearch',
  params: ['text', 'pattern'],
  starterCode: {
    javascript: `function kmpSearch(text, pattern) {\n\n}`,
    typescript: `function kmpSearch(text: string, pattern: string): number[] {\n\n}`,
    python: `def kmpSearch(text: str, pattern: str) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: ['abcabc', 'abc'], expected: [0, 3] },
    { args: ['aaaa', 'aa'], expected: [0, 1, 2] },
    { args: ['abc', 'd'], expected: [] },
    { args: ['aabcaabxaaab', 'aab'], expected: [0, 4, 9] },
  ],
  hiddenTests: [
    { args: ['aaa', 'a'], expected: [0, 1, 2] },
    { args: ['abababab', 'abab'], expected: [0, 2, 4] },
    { args: ['hello', 'hello'], expected: [0] },
    { args: ['abcdef', 'gh'], expected: [] },
    { args: ['aabaab', 'aab'], expected: [0, 3] },
    { args: ['mississippi', 'issi'], expected: [1, 4] },
    { args: ['a', 'a'], expected: [0] },
  ],
};
