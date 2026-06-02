import type { Problem } from '../types';

export const problem: Problem = {
  id: 'excel-sheet-column-number',
  title: 'Excel Sheet Column Number',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `Given a string \`columnTitle\` that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:
\`\`\`
A -> 1
B -> 2
Z -> 26
AA -> 27
AB -> 28
\`\`\``,
  constraints: [
    '1 <= columnTitle.length <= 7',
    'columnTitle consists only of uppercase English letters',
    'columnTitle is in the range ["A", "FXSHRXW"]',
  ],
  examples: [
    {
      input: 'columnTitle = "A"',
      output: '1',
    },
    {
      input: 'columnTitle = "AB"',
      output: '28',
    },
    {
      input: 'columnTitle = "ZY"',
      output: '701',
    },
  ],
  hints: [
    'Think of this as a base-26 number system where A=1, B=2, ..., Z=26.',
    'Process characters from left to right: result = result * 26 + charValue.',
    'charValue = charCode - charCode of "A" + 1.',
  ],
  functionName: 'titleToNumber',
  params: ['columnTitle'],
  starterCode: {
    javascript: `function titleToNumber(columnTitle) {
  let result = 0;
  for (const c of columnTitle) {
    result = result * 26 + (c.charCodeAt(0) - 64);
  }
  return result;
}`,
    typescript: `function titleToNumber(columnTitle: string): number {
  let result = 0;
  for (const c of columnTitle) {
    result = result * 26 + (c.charCodeAt(0) - 64);
  }
  return result;
}`,
    python: `def titleToNumber(columnTitle):
    result = 0
    for c in columnTitle:
        result = result * 26 + (ord(c) - 64)
    return result`,
  },
  visibleTests: [
    { args: ['A'], expected: 1 },
    { args: ['AB'], expected: 28 },
    { args: ['ZY'], expected: 701 },
  ],
  hiddenTests: [
    { args: ['Z'], expected: 26 },
    { args: ['AA'], expected: 27 },
    { args: ['AZ'], expected: 52 },
    { args: ['FXSHRXW'], expected: 2147483647 },
  ],
};
