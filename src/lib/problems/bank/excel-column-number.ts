import type { Problem } from '../types';

export const problem: Problem = {
  id: 'excel-column-number',
  title: 'Excel Sheet Column Number',
  difficulty: 'medium',
  tags: ['math', 'strings'],
  description: `Given a string \`columnTitle\` that represents the column title as it appears in an Excel sheet, return its corresponding column number.

For example:
- \`A\` → 1
- \`B\` → 2
- \`Z\` → 26
- \`AA\` → 27
- \`AB\` → 28`,
  examples: [
    { input: 'columnTitle = "A"', output: '1' },
    { input: 'columnTitle = "AB"', output: '28' },
    { input: 'columnTitle = "ZY"', output: '701' },
  ],
  constraints: [
    '1 <= columnTitle.length <= 7',
    'columnTitle consists only of uppercase English letters.',
    'columnTitle is in the range ["A", "FXSHRXW"].',
  ],
  functionName: 'titleToNumber',
  params: ['columnTitle'],
  starterCode: {
    javascript: 'function titleToNumber(columnTitle) {\n  // your code here\n}\n',
    python: 'def titleToNumber(columnTitle):\n    # your code here\n    pass\n',
  },
  hints: [
    'Think of it like converting from base-26, but where A=1, B=2, ..., Z=26 (not 0-based).',
    'Iterate left to right. For each character, result = result * 26 + (charCode - "A".charCode + 1).',
    'This is analogous to converting a decimal string: reading left to right, multiply the accumulated value by the base and add the current digit.',
  ],
  visibleTests: [
    { args: ['A'], expected: 1 },
    { args: ['AB'], expected: 28 },
    { args: ['ZY'], expected: 701 },
  ],
  hiddenTests: [
    { args: ['Z'], expected: 26 },
    { args: ['AA'], expected: 27 },
    { args: ['AZ'], expected: 52 },
    { args: ['BA'], expected: 53 },
  ],
};
