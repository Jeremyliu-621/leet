import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-the-longest-new-string',
  title: 'Construct the Longest New String',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given three integers \`x\`, \`y\`, and \`z\` representing the number of strings \`"AA"\`, \`"BB"\`, and \`"AB"\` you have respectively.

You can concatenate these strings in any order to create a new string. However, the new string **must not** contain \`"AAA"\` or \`"BBB"\` as a substring.

Return the **maximum** length of the new string.`,
  constraints: [
    '1 <= x, y, z <= 50',
  ],
  examples: [
    {
      input: 'x = 2, y = 5, z = 1',
      output: '12',
      explanation: 'One valid string of length 12 uses 2 "AA", 2 "BB", and 1 "AB" (e.g., "BBAABBABAA" is invalid — one arrangement is "AABB" * 2 + "AB" = "AABBAABBAB" which is 10... wait). Using min(x,y)=2 pairs and 1 AB: 2*(2*2+1) + (5>2?2:0) = 2*5+2=12.',
    },
    {
      input: 'x = 3, y = 2, z = 2',
      output: '14',
      explanation: 'min(x,y)=2 pairs "AABB" × 2 + 2 "AB" + 1 extra "AA" (since x>y): 2*(2*2+2) + 2 = 2*6+2=14.',
    },
  ],
  hints: [
    'Think about which arrangements avoid "AAA" or "BBB".',
    'Pair each "AA" with a "BB" to form "AABB" blocks — these are always safe.',
    'Insert each "AB" freely (e.g., "AA"+"AB"+"BB"+"AB" = "AAABBBAB" — careful!). AB can go at the boundary.',
    'If x ≠ y, the extra "AA" or "BB" can be placed at one end without introducing a triple.',
    'Answer = 2 * (2 * min(x, y) + z) + (x ≠ y ? 2 : 0).',
  ],
  functionName: 'longestString',
  params: ['x', 'y', 'z'],
  starterCode: {
    javascript: `function longestString(x, y, z) {\n  \n}`,
    typescript: `function longestString(x: number, y: number, z: number): number {\n  \n}`,
    python: `def longestString(x, y, z):\n    `,
  },
  visibleTests: [
    { args: [2, 5, 1], expected: 12 },
    { args: [3, 2, 2], expected: 14 },
    { args: [1, 1, 0], expected: 4 },
  ],
  hiddenTests: [
    { args: [2, 5, 1], expected: 12 },
    { args: [3, 2, 2], expected: 14 },
    { args: [1, 1, 0], expected: 4 },
    { args: [1, 1, 1], expected: 6 },
    { args: [0, 0, 5], expected: 10 },
    { args: [5, 5, 0], expected: 20 },
    { args: [2, 2, 3], expected: 14 },
    { args: [1, 0, 0], expected: 2 },
  ],
};
