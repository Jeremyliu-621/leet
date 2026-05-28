import type { Problem } from '../types';

export const problem: Problem = {
  id: 'strobogrammatic-number',
  title: 'Strobogrammatic Number',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given a string \`num\` which represents an integer, return \`true\` *if* \`num\` *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated **180** degrees (looked at upside down).

**Example 1:**
\`\`\`
Input: num = "69"
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: num = "88"
Output: true
\`\`\`

**Example 3:**
\`\`\`
Input: num = "962"
Output: false
\`\`\``,
  examples: [
    { input: '"69"', output: 'true' },
    { input: '"88"', output: 'true' },
    { input: '"962"', output: 'false' },
  ],
  constraints: [
    '1 <= num.length <= 50',
    'num consists of only digits.',
    'num does not have leading zeros except for zero itself.',
  ],
  hints: [
    'Only 0, 1, 6, 8, and 9 can appear in a strobogrammatic number (each maps to itself or a partner when flipped).',
    'Use two pointers from both ends; check that each pair forms a valid strobogrammatic pair: (0,0), (1,1), (6,9), (9,6), (8,8).',
    'If a single middle character exists (odd length), it must be 0, 1, or 8.',
  ],
  functionName: 'isStrobogrammatic',
  params: ['num'],
  starterCode: {
    javascript: `function isStrobogrammatic(num) {

}`,
    python: `def isStrobogrammatic(num):
    `,
  },
  visibleTests: [
    { args: ['69'], expected: true },
    { args: ['88'], expected: true },
    { args: ['962'], expected: false },
    { args: ['1'], expected: true },
  ],
  hiddenTests: [
    { args: ['0'], expected: true },
    { args: ['818'], expected: true },
    { args: ['6969'], expected: true },
    { args: ['2'], expected: false },
    { args: ['696'], expected: false },
  ],
};
