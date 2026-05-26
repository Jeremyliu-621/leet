import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zigzag-conversion',
  title: 'Zigzag Conversion',
  difficulty: 'medium',
  tags: ['strings'],
  description: `The string \`"PAYPALISHIRING"\` is written in a zigzag pattern on a given number of rows like this (you may want to display this pattern in a fixed font for better legibility):

\`\`\`
P   A   H   N
A P L S I I G
Y   I   R
\`\`\`

And then read line by line: \`"PAHNAPLSIIGYIR"\`.

Write the code that will take a string and make this conversion given a number of rows.

Return the string read line by line.`,
  examples: [
    { input: 's = "PAYPALISHIRING", numRows = 3', output: '"PAHNAPLSIIGYIR"' },
    { input: 's = "PAYPALISHIRING", numRows = 4', output: '"PINALSIGYAHRPI"', explanation: 'P    I    N\nA  L S  I G\nY A  H R\nP    I' },
    { input: 's = "A", numRows = 1', output: '"A"' },
  ],
  constraints: [
    '1 <= s.length <= 1000',
    's consists of English letters (lower-case and upper-case), \',\' and \'.\'.',
    '1 <= numRows <= 1000',
  ],
  functionName: 'convert',
  params: ['s', 'numRows'],
  starterCode: {
    javascript: 'function convert(s, numRows) {\n  // your code here\n}\n',
    python: 'def convert(s, numRows):\n    # your code here\n    pass\n',
  },
  hints: [
    'Create numRows empty strings. Use a row index and a direction (+1 or -1) to assign each character.',
    'When you reach row 0, change direction to +1. When you reach row numRows-1, change to -1.',
    'Concatenate all rows to get the result.',
  ],
  visibleTests: [
    { args: ['PAYPALISHIRING', 3], expected: 'PAHNAPLSIIGYIR' },
    { args: ['PAYPALISHIRING', 4], expected: 'PINALSIGYAHRPI' },
    { args: ['A', 1], expected: 'A' },
  ],
  hiddenTests: [
    { args: ['AB', 1], expected: 'AB' },
    { args: ['ABCDE', 2], expected: 'ACEBD' },
    { args: ['ABCD', 3], expected: 'ABDC' },
  ],
};
