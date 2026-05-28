import type { Problem } from '../types';

export const problem: Problem = {
  id: 'excel-sheet-column-title',
  title: 'Excel Sheet Column Title',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`columnNumber\`, return its corresponding column title as it appears in an Excel sheet.

For example:
\`\`\`
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
\`\`\``,
  constraints: [
    '`1 <= columnNumber <= 2^31 - 1`',
  ],
  examples: [
    { input: 'columnNumber = 1', output: '"A"' },
    { input: 'columnNumber = 28', output: '"AB"' },
    { input: 'columnNumber = 701', output: '"ZY"' },
  ],
  hints: [
    'This is base-26 conversion, but with A=1 instead of A=0. Before extracting each digit, subtract 1 to shift to 0-indexed (0–25).',
    'Loop: `result = String.fromCharCode(65 + (columnNumber - 1) % 26) + result; columnNumber = Math.floor((columnNumber - 1) / 26);` until columnNumber is 0.',
    `\`\`\`js
function convertToTitle(columnNumber) {
  let res = "";
  while (columnNumber > 0) {
    columnNumber--;
    res = String.fromCharCode(65 + columnNumber % 26) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
}\`\`\``,
  ],
  functionName: 'convertToTitle',
  params: ['columnNumber'],
  starterCode: {
    javascript: `function convertToTitle(columnNumber) {

}`,
    typescript: "function convertToTitle(columnNumber: number): string {\n\n}",

    python: `def convertToTitle(columnNumber):
    pass`,
  },
  visibleTests: [
    { args: [1], expected: 'A' },
    { args: [28], expected: 'AB' },
    { args: [701], expected: 'ZY' },
  ],
  hiddenTests: [
    { args: [26], expected: 'Z' },
    { args: [27], expected: 'AA' },
    { args: [52], expected: 'AZ' },
    { args: [2147483647], expected: 'FXSHRXW' },
  ],
};
