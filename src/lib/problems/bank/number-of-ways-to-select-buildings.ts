import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-select-buildings',
  title: 'Number of Ways to Select Buildings',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** binary string \`s\` which represents the types of buildings along a street where:

- \`s[i] = '0'\` denotes that the \`i\`th building is an **office** and
- \`s[i] = '1'\` denotes that the \`i\`th building is a **restaurant**.

As a city official, you would like to **select** 3 buildings with indices \`i\`, \`j\`, and \`k\` where \`i < j < k\` such that the selected buildings are **not** consecutive buildings of the same type. That is, \`s[i] != s[j]\`, \`s[j] != s[k]\`, and \`s[i] != s[k]\`.

Return the **number of ways** to select 3 buildings.`,
  constraints: [
    '3 <= s.length <= 10^5',
    "s[i] is either '0' or '1'.",
  ],
  examples: [
    {
      input: 's = "001101"',
      output: '6',
      explanation: 'Valid selections include "010" and "101" patterns.',
    },
    {
      input: 's = "0101"',
      output: '2',
      explanation: '"010" at indices (0,1,2) and "101" at indices (1,2,3).',
    },
    {
      input: 's = "111"',
      output: '0',
      explanation: 'No valid selection exists.',
    },
  ],
  hints: [
    'Track counts of individual 0s and 1s, and counts of "01" and "10" pairs seen so far.',
    'When you see a \'1\', it can complete a "101" pattern using existing "10" pair count.',
    'When you see a \'0\', it can complete a "010" pattern using existing "01" pair count.',
  ],
  functionName: 'numberOfWays',
  params: ['s'],
  starterCode: {
    javascript: 'function numberOfWays(s) {\n  \n}\n',
    python: 'def numberOfWays(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['001101'], expected: 6 },
    { args: ['0101'], expected: 2 },
    { args: ['111'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['010'], expected: 1 },
    { args: ['101'], expected: 1 },
    { args: ['000'], expected: 0 },
    { args: ['0011'], expected: 0 },
    { args: ['010101'], expected: 8 },
  ],
};
