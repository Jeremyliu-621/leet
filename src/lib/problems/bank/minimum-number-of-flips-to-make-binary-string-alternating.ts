import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-flips-to-make-binary-string-alternating',
  title: 'Minimum Number of Flips to Make the Binary String Alternating',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a binary string \`s\`. You are allowed to perform two types of operations on the string in any sequence:

- **Type-1**: Remove the character at the start of the string \`s\` and append it to the end of the string.
- **Type-2**: Pick any character in \`s\` and flip it (0 → 1 or 1 → 0).

Return *the **minimum** number of type-2 operations* you need to do so that \`s\` becomes **alternating**.

The string is called **alternating** if no two adjacent characters are equal.

**Example 1:**
\`\`\`
Input: s = "111000"
Output: 2
\`\`\`

**Example 2:**
\`\`\`
Input: s = "010"
Output: 0
\`\`\`

**Example 3:**
\`\`\`
Input: s = "1110"
Output: 1
\`\`\``,
  examples: [
    { input: '"111000"', output: '2' },
    { input: '"010"', output: '0' },
    { input: '"1110"', output: '1' },
  ],
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is either \'0\' or \'1\'.',
  ],
  hints: [
    'Type-1 operations (rotations) can shift the alignment of an alternating pattern. Consider the two target patterns: "010101..." and "101010..." for length 2n.',
    'Duplicate the string (s + s) and use a sliding window of length n to count mismatches against both patterns.',
    'The minimum flips over all windows is the answer.',
  ],
  functionName: 'minFlips',
  params: ['s'],
  starterCode: {
    javascript: `function minFlips(s) {

}`,
    python: `def minFlips(s):
    `,
  },
  visibleTests: [
    { args: ['111000'], expected: 2 },
    { args: ['010'], expected: 0 },
    { args: ['1110'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['10'], expected: 0 },
    { args: ['01'], expected: 0 },
    { args: ['11'], expected: 1 },
    { args: ['0000'], expected: 2 },
  ],
};
