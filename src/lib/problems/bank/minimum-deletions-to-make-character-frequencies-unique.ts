import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-character-frequencies-unique',
  title: 'Minimum Deletions to Make Character Frequencies Unique',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `A string \`s\` is called **good** if there are no two different characters in \`s\` that have the same **frequency**.

Given a string \`s\`, return the **minimum** number of characters you need to delete to make \`s\` **good**.

**Constraints:**
- \`1 ≤ s.length ≤ 10^5\`
- \`s\` contains only lowercase English letters.`,
  examples: [
    {
      input: 's = "aab"',
      output: '0',
      explanation: 'Already good: "a" appears 2 times, "b" appears 1 time.',
    },
    {
      input: 's = "aaabbbcc"',
      output: '2',
      explanation: '"a" and "b" both appear 3 times. Delete 2 chars to make all frequencies unique.',
    },
    {
      input: 's = "ceabaacb"',
      output: '2',
      explanation: '"a":3,"b":2,"c":2,"e":1. Delete 2 "c"s to get frequencies {3,2,1}.',
    },
  ],
  constraints: ['Sort frequencies descending. For each, decrement until unused or 0. Count total decrements.'],
  hints: [
    'Count character frequencies, collect non-zero values.',
    'Sort frequencies descending. Use a set of claimed frequencies.',
    'For each frequency f, while f > 0 and f is claimed, decrement (each step = 1 deletion). Then claim f if > 0.',
  ],
  params: ['s'],
  starterCode: {
    javascript: `function minDeletions(s) {

}`,
    typescript: `function minDeletions(s: string): number {

}`,
    python: `def minDeletions(s: str) -> int:
    pass`,
  },
  functionName: 'minDeletions',
  visibleTests: [
    { args: ['aab'], expected: 0 },
    { args: ['aaabbbcc'], expected: 2 },
    { args: ['ceabaacb'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aabb'], expected: 1 },
    { args: ['aaabbbccc'], expected: 3 },
    { args: ['aa'], expected: 0 },
    { args: ['aabc'], expected: 1 },
    { args: ['zzzzzz'], expected: 0 },
    { args: ['bbcebab'], expected: 2 },
  ],
};
