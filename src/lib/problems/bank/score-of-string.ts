import type { Problem } from '../types';

export const problem: Problem = {
  id: 'score-of-string',
  title: 'Score of a String',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\`. The **score** of a string is defined as the sum of the absolute difference between the **ASCII** values of adjacent characters.

Return the **score** of \`s\`.`,
  constraints: [
    '2 <= s.length <= 100',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "hello"',
      output: '13',
      explanation: '|h-e|+|e-l|+|l-l|+|l-o| = 3+7+0+3 = 13.',
    },
    {
      input: 's = "zaz"',
      output: '50',
      explanation: '|z-a|+|a-z| = 25+25 = 50.',
    },
  ],
  hints: [
    'Level 1: Iterate through adjacent pairs of characters and sum their absolute ASCII differences.',
    'Level 2: Use charCodeAt to get ASCII values.',
    'Level 3: let s2=0;for(let i=1;i<s.length;i++)s2+=Math.abs(s.charCodeAt(i)-s.charCodeAt(i-1));return s2;',
  ],
  functionName: 'scoreOfString',
  params: ['s'],
  starterCode: {
    javascript: 'function scoreOfString(s) {\n  // your code here\n}\n',
    python: 'def scoreOfString(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['hello'], expected: 13 },
    { args: ['zaz'], expected: 50 },
  ],
  hiddenTests: [
    { args: ['ab'], expected: 1 },
    { args: ['az'], expected: 25 },
    { args: ['abc'], expected: 2 },
    { args: ['aa'], expected: 0 },
    { args: ['ba'], expected: 1 },
  ],
};
