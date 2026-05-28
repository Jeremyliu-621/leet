import type { Problem } from '../types';

export const problem: Problem = {
  id: 'excel-column-number',
  title: 'Excel Sheet Column Number',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `Given a string \`columnTitle\` that represents the column title as it appears in an Excel spreadsheet, return its corresponding column number.

For example: A → 1, B → 2, ..., Z → 26, AA → 27, AB → 28, ...

This is essentially a base-26 number system where A=1, B=2, ..., Z=26.`,
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
      explanation: 'A=1 (shifted left, multiplied by 26) + B=2 → 26 + 2 = 28.',
    },
    {
      input: 'columnTitle = "ZY"',
      output: '701',
    },
  ],
  hints: [
    'Think of it as base-26 where A=1, B=2, ..., Z=26. Process left to right: `result = result * 26 + charValue`.',
    'For each character, compute its value as `charCode - "A".charCode + 1`. Accumulate: `result = result * 26 + value`.',
    '`let r=0; for(const c of s) r=r*26+(c.charCodeAt(0)-64); return r;`',
  ],
  functionName: 'titleToNumber',
  params: ['columnTitle'],
  starterCode: {
    javascript: 'function titleToNumber(columnTitle) {\n  // your code here\n}\n',
    typescript: "function titleToNumber(columnTitle: string): number {\n  // your code here\n}",

    python: 'def titleToNumber(columnTitle: str) -> int:\n    # your code here\n    pass\n',
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
