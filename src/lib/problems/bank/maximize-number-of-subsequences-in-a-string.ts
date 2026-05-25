import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-number-of-subsequences-in-a-string',
  title: 'Maximize Number of Subsequences in a String',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given a string \`text\` and another string \`pattern\` of length **2** (two distinct characters).

You can add **at most one** occurrence of \`pattern[0]\` **anywhere** in \`text\` or add **at most one** occurrence of \`pattern[1]\` **anywhere** in \`text\`.

Return the **maximum** number of times \`pattern\` can occur as a **subsequence** of the modified \`text\`.`,
  constraints: [
    '1 <= text.length <= 10^5',
    'pattern.length == 2',
    'text and pattern consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "abdcdbc", pattern = "ac"',
      output: '4',
      explanation: 'Prepend "a" → "aabdcdbc". Subsequences of "ac": 4.',
    },
    {
      input: 'text = "aabb", pattern = "ab"',
      output: '6',
      explanation: 'Either prepend "a" or append "b" → "aaabb" or "aabbb" each give 6.',
    },
  ],
  hints: [
    'Count base subsequences, then compute the gain from prepending pattern[0] vs appending pattern[1].',
    'Prepending pattern[0] gains count(pattern[1] in text); appending pattern[1] gains count(pattern[0] in text).',
    'Return base + max(count of pattern[0], count of pattern[1]).',
  ],
  functionName: 'maximumSubsequenceCount',
  params: ['text', 'pattern'],
  starterCode: {
    javascript: `function maximumSubsequenceCount(text, pattern) {

}`,
    python: `def maximumSubsequenceCount(text, pattern):
    pass`,
  },
  visibleTests: [
    { args: ['abdcdbc', 'ac'], expected: 4 },
    { args: ['aabb', 'ab'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a', 'aa'], expected: 1 },
    { args: ['b', 'ba'], expected: 1 },
    { args: ['ab', 'ab'], expected: 2 },
    { args: ['z', 'ab'], expected: 0 },
  ],
};
