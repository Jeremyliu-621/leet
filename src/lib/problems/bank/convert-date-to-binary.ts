import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-date-to-binary',
  title: 'Convert Date to Binary',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`date\` representing a Gregorian calendar date in the \`"YYYY-MM-DD"\` format.

\`date\` can be written in its binary representation obtained by converting year, month, and day to their binary equivalents **without any leading zeroes** and writing them down in \`"Year-Month-Day"\` format.

Return the **binary representation** of \`date\`.`,
  constraints: [
    'date.length == 10',
    'date[4] == date[7] == \'-\'',
    'The input is a valid date in the range 1900-01-01 to 2100-12-31.',
  ],
  examples: [
    {
      input: 'date = "2080-02-29"',
      output: '"100000100000-10-11101"',
      explanation: '2080 = 0b100000100000, 2 = 0b10, 29 = 0b11101.',
    },
    {
      input: 'date = "1900-01-01"',
      output: '"11101101100-1-1"',
      explanation: '1900 = 0b11101101100, 1 = 0b1, 1 = 0b1.',
    },
    {
      input: 'date = "2024-07-01"',
      output: '"11111101000-111-1"',
      explanation: '2024 = 0b11111101000, 7 = 0b111, 1 = 0b1.',
    },
  ],
  hints: [
    'Split the date by "-" to get year, month, day as strings.',
    'Convert each to an integer, then to binary using the built-in method.',
    'In JavaScript: Number(str).toString(2). In Python: bin(int(str))[2:].',
  ],
  functionName: 'convertDateToBinary',
  params: ['date'],
  starterCode: {
    javascript: `function convertDateToBinary(date) {

}`,
    python: `def convertDateToBinary(date):
    pass`,
  },
  visibleTests: [
    { args: ['2080-02-29'], expected: '100000100000-10-11101' },
    { args: ['1900-01-01'], expected: '11101101100-1-1' },
    { args: ['2024-07-01'], expected: '11111101000-111-1' },
  ],
  hiddenTests: [
    { args: ['2000-01-01'], expected: '11111010000-1-1' },
    { args: ['2100-12-31'], expected: '100000110100-1100-11111' },
    { args: ['1970-06-15'], expected: '11110110010-110-1111' },
    { args: ['2001-09-11'], expected: '11111010001-1001-1011' },
    { args: ['1999-12-31'], expected: '11111001111-1100-11111' },
    { args: ['2023-01-15'], expected: '11111100111-1-1111' },
  ],
};
