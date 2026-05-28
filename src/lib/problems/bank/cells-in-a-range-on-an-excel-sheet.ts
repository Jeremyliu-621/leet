import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cells-in-a-range-on-an-excel-sheet',
  title: 'Cells in a Range on an Excel Sheet',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A cell \`(c, r)\` of an excel sheet is represented as a string \`"<col><row>"\` where:

- \`<col>\` denotes the column number \`c\` of the cell. It is represented by **alphabetical letters**.
  - For example, the \`1st\` column is denoted by \`'A'\`, the \`2nd\` by \`'B'\`, the \`3rd\` by \`'C'\`, and so on.
- \`<row>\` is the row number \`r\` of the cell. The \`r\`th row is just the number \`r\`.

You are given a string \`s\` in the format \`"<col1><row1>:<col2><row2>"\`, where \`<col1>\` represents the column \`c1\`, \`<row1>\` represents the row \`r1\`, \`<col2>\` represents the column \`c2\`, and \`<row2>\` represents the row \`r2\`, such that \`c1 <= c2\` and \`r1 <= r2\`.

Return the **list of cells** \`(c, r)\` such that \`c1 <= c <= c2\` and \`r1 <= r <= r2\`. The cells should be represented as strings in the format \`"<col><row>"\` and should be sorted in **non-decreasing** order first by columns and then by rows within the same column.`,
  constraints: [
    's.length == 5',
    "'A' <= s[0] <= s[3] <= 'Z'",
    "'1' <= s[1] <= s[4] <= '9'",
    "s[2] == ':'",
  ],
  examples: [
    {
      input: 's = "K1:L2"',
      output: '["K1","K2","L1","L2"]',
      explanation: 'Columns K and L, rows 1 and 2. We list by column first: K1, K2, then L1, L2.',
    },
    {
      input: 's = "A1:F1"',
      output: '["A1","B1","C1","D1","E1","F1"]',
      explanation: 'Columns A through F, only row 1.',
    },
  ],
  hints: [
    'Parse the string to get col1, row1, col2, row2. The column characters are single uppercase letters.',
    'Iterate the outer loop over columns (charCodeAt) and the inner loop over rows (integers). Build each cell string with String.fromCharCode + row.',
    'For each col from col1..col2 (inclusive), for each row from row1..row2 (inclusive), push `String.fromCharCode(col) + row` to the result.',
  ],
  functionName: 'cellsInRange',
  params: ['s'],
  starterCode: {
    javascript: 'function cellsInRange(s) {\n  // your code here\n}\n',
    typescript: "function cellsInRange(s: string): string[] {\n  // your code here\n}",

    python: 'def cellsInRange(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['K1:L2'], expected: ['K1', 'K2', 'L1', 'L2'] },
    { args: ['A1:F1'], expected: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'] },
    { args: ['A1:A1'], expected: ['A1'] },
  ],
  hiddenTests: [
    { args: ['A1:B3'], expected: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'] },
    { args: ['C3:E5'], expected: ['C3', 'C4', 'C5', 'D3', 'D4', 'D5', 'E3', 'E4', 'E5'] },
    { args: ['Z1:Z9'], expected: ['Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9'] },
    { args: ['A1:C1'], expected: ['A1', 'B1', 'C1'] },
    { args: ['B2:D4'], expected: ['B2', 'B3', 'B4', 'C2', 'C3', 'C4', 'D2', 'D3', 'D4'] },
    { args: ['A9:B9'], expected: ['A9', 'B9'] },
  ],
};
