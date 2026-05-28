import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zigzag-conversion',
  title: 'Zigzag Conversion',
  difficulty: 'medium',
  tags: ['strings'],
  description: `The string \`"PAYPALISHIRING"\` is written in a zigzag pattern on a given number of rows like this:

\`\`\`
P   A   H   N
A P L S I I G
Y   I   R
\`\`\`

And then read line by line: \`"PAHNAPLSIIGYIR"\`

Write the code that will take a string and make this conversion given a number of rows:

\`convert("PAYPALISHIRING", 3)\``,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of English letters (lower-case and upper-case), \',\' and \'.\'',
    '1 <= numRows <= 1000',
  ],
  examples: [
    {
      input: 's = "PAYPALISHIRING", numRows = 3',
      output: '"PAHNAPLSIIGYIR"',
    },
    {
      input: 's = "PAYPALISHIRING", numRows = 4',
      output: '"PINALSIGYAHRPI"',
      explanation: `\`\`\`
P     I    N
A   L S  I G
Y A   H R
P     I
\`\`\``,
    },
    {
      input: 's = "A", numRows = 1',
      output: '"A"',
    },
  ],
  hints: [
    'Use an array of strings, one per row.',
    'Walk through the characters, tracking which row each character belongs to.',
    'The row index goes 0 → numRows-1 → 0 → numRows-1 … using a direction flag.',
    'Concatenate all rows at the end.',
  ],
  functionName: 'convert',
  params: ['s', 'numRows'],
  starterCode: {
    javascript: `function convert(s, numRows) {

}`,
    typescript: "function convert(s: string, numRows: number): string {\n\n}",

    python: `def convert(s, numRows):
    pass`,
  },
  visibleTests: [
    { args: ['PAYPALISHIRING', 3], expected: 'PAHNAPLSIIGYIR' },
    { args: ['PAYPALISHIRING', 4], expected: 'PINALSIGYAHRPI' },
    { args: ['A', 1], expected: 'A' },
  ],
  hiddenTests: [
    { args: ['AB', 1], expected: 'AB' },
    { args: ['AB', 2], expected: 'AB' },
    { args: ['ABCDE', 2], expected: 'ACEBD' },
    { args: ['ABCDE', 3], expected: 'AEBDC' },
    { args: ['ABCDEFGH', 3], expected: 'AEBDFHCG' },
    { args: ['ABCDEFGH', 4], expected: 'AGBFHCED' },
  ],
};
