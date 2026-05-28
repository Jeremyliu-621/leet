import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cells-in-range',
  title: 'Cells in a Range on an Excel Sheet',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A cell \`(r, c)\` of an excel sheet is represented as a string \`"<col><row>"\` where:

- \`<col>\` denotes the column number \`c\` of the cell. It is represented by **lowercase** English letters. For example, the \`1\`st column is denoted by \`'a'\`, the \`2\`nd by \`'b'\`, ..., the \`26\`th by \`'z'\`.
- \`<row>\` is the row number \`r\` of the cell. The \`r\`th row is simply represented by the integer \`r\`.

You are given a string \`s\` in the format \`"<col1><row1>:<col2><row2>"\`, where \`<col1>\` represents the column \`c1\`, \`<row1>\` represents the row \`r1\`, \`<col2>\` represents the column \`c2\`, and \`<row2>\` represents the row \`r2\`, such that \`r1 <= r2\` and \`c1 <= c2\`.

Return the **list of cells** \`(r, c)\` such that \`c1 <= c <= c2\` and \`r1 <= r <= r2\`. The cells should be represented as strings in the format mentioned above and be sorted in **non-decreasing** order first by columns and then by rows within the same column.`,
  constraints: [
    '`s.length == 5`',
    '`\'a\' <= s[0] <= s[3] <= \'z\'`',
    '`\'1\' <= s[1] <= s[4] <= \'9\'`',
    '`s` consists of lowercase English letters, digits and `\':\'`.',
  ],
  examples: [
    {
      input: 's = "K1:L2"',
      output: '["K1","K2","L1","L2"]',
    },
    {
      input: 's = "A1:F1"',
      output: '["A1","B1","C1","D1","E1","F1"]',
    },
  ],
  hints: [
    'Parse the column chars and row digits. Iterate column first (outer), then row (inner), building each cell string.',
    'Extract col1=s.charCodeAt(0), row1=+s[1], col2=s.charCodeAt(3), row2=+s[4]. Nested loop c from col1 to col2, r from row1 to row2.',
    'const r=[];for(let c=s.charCodeAt(0);c<=s.charCodeAt(3);c++)for(let n=+s[1];n<=+s[4];n++)r.push(String.fromCharCode(c)+n);return r;',
  ],
  functionName: 'cellsInRange',
  params: ['s'],
  starterCode: {
    javascript: `function cellsInRange(s) {

}`,
    typescript: "function cellsInRange(s: string): string[] {\n\n}",

    python: `def cellsInRange(s):
    pass`,
  },
  visibleTests: [
    { args: ['K1:L2'], expected: ['K1', 'K2', 'L1', 'L2'] },
    { args: ['A1:F1'], expected: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'] },
  ],
  hiddenTests: [
    { args: ['A1:A1'], expected: ['A1'] },
    { args: ['A1:B2'], expected: ['A1', 'A2', 'B1', 'B2'] },
    { args: ['C3:E5'], expected: ['C3', 'C4', 'C5', 'D3', 'D4', 'D5', 'E3', 'E4', 'E5'] },
    { args: ['A1:A9'], expected: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'] },
  ],
};
