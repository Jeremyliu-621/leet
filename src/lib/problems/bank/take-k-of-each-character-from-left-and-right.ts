import type { Problem } from '../types';

export const problem: Problem = {
  id: 'take-k-of-each-character-from-left-and-right',
  title: 'Take K of Each Character From Left and Right',
  difficulty: 'medium',
  tags: ['sliding-window', 'strings'],
  description: `You are given a string \`s\` consisting only of characters \`'a'\`, \`'b'\`, and \`'c'\` and a non-negative integer \`k\`. Each minute, you may take either the **leftmost** or the **rightmost** character of \`s\`.

Return the **minimum** number of minutes needed for you to take **at least** \`k\` of each character, or return \`-1\` if it is not possible.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '0 <= k <= s.length',
    "s consists of only the letters 'a', 'b', and 'c'",
  ],
  examples: [
    {
      input: 's = "aabaaaacaabc", k = 2',
      output: '8',
      explanation: 'Take 3 from the right and 5 from the left, or other combinations. The minimum is 8.',
    },
    {
      input: 's = "a", k = 1',
      output: '-1',
      explanation: 'It is not possible to take at least 1 of each character.',
    },
  ],
  hints: [
    'Equivalently, maximize the length of a middle window we can skip, such that the remaining characters on left+right have at least k of each.',
    'Count total occurrences of a, b, c. If any < k, return -1.',
    'Use a sliding window on the middle: shrink the window whenever the remaining counts drop below k.',
  ],
  functionName: 'takeCharacters',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function takeCharacters(s, k) {

}`,
    python: `def takeCharacters(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['aabaaaacaabc', 2], expected: 8 },
    { args: ['a', 1], expected: -1 },
  ],
  hiddenTests: [
    { args: ['abc', 1], expected: 3 },
    { args: ['abc', 0], expected: 0 },
    { args: ['aabbcc', 2], expected: 6 },
    { args: ['abc', 2], expected: -1 },
  ],
};
