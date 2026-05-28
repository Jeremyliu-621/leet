import type { Problem } from '../types';

export const problem: Problem = {
  id: 'score-of-a-string',
  title: 'Score of a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\`. The **score** of a string is defined as the sum of the absolute difference between the **ASCII** values of adjacent characters.

Return the **score** of \`s\`.`,
  constraints: [
    '2 <= s.length <= 100',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "hello"',
      output: '13',
      explanation: '|h−e| + |e−l| + |l−l| + |l−o| = 3 + 7 + 0 + 3 = 13.',
    },
    {
      input: 's = "zaz"',
      output: '50',
      explanation: '|z−a| + |a−z| = 25 + 25 = 50.',
    },
    {
      input: 's = "ab"',
      output: '1',
      explanation: '|a−b| = 1.',
    },
  ],
  hints: [
    'Iterate through adjacent pairs of characters.',
    'Use `charCodeAt()` (JavaScript) or `ord()` (Python) to get the ASCII value of a character.',
    'Sum the absolute differences.',
  ],
  functionName: 'scoreOfString',
  params: ['s'],
  starterCode: {
    javascript: `function scoreOfString(s) {
  // your code here
}`,
    typescript: `function scoreOfString(s: string): number {
  // your code here
}`,
    python: `def scoreOfString(s):
    # your code here
`,
  },
  visibleTests: [
    { args: ['hello'], expected: 13 },
    { args: ['zaz'], expected: 50 },
    { args: ['ab'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['az'], expected: 25 },
    { args: ['abcde'], expected: 4 },
    { args: ['aaaa'], expected: 0 },
    { args: ['za'], expected: 25 },
    { args: ['abc'], expected: 2 },
  ],
};
