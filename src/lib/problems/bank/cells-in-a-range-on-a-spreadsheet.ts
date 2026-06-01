import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cells-in-a-range-on-a-spreadsheet',
  title: 'Cells in a Range on an Excel Sheet',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A cell \`(r, c)\` of an excel sheet is represented as a string \`"<col><row>"\` where:

- \`<col>\` denotes the column number \`c\` of the cell. It is represented by **alphabetical letters**.
  - For example, the \`1st\` column is denoted by \`'A'\`, the \`2nd\` by \`'B'\`, the \`3rd\` by \`'C'\`, and so on.
- \`<row>\` is the row number \`r\` of the cell. It is represented as the string representation of the number \`r\`.

You are given a string \`s\` in the format \`"<col1><row1>:<col2><row2>"\`, where \`<col1>\` represents the column \`c1\`, \`<row1>\` represents the row \`r1\`, \`<col2>\` represents the column \`c2\`, and \`<row2>\` represents the row \`r2\`. These two cells define the **top-left** and **bottom-right** cells of a rectangle in the sheet.

Return *the **list** of cells \`(r, c)\` such that \`r1 <= r <= r2\` and \`c1 <= c <= c2\`*. The cells should be represented as strings in the format mentioned above and be sorted in **non-decreasing** order first by columns and then by rows within the same column.`,
  constraints: [
    's.length == 5',
    '\'A\' <= s[0] <= s[3] <= \'Z\'',
    '\'1\' <= s[1] <= s[4] <= \'9\'',
    's consists of uppercase English letters, digits and \':\'.',
  ],
  examples: [
    {
      input: 's = "K1:L2"',
      output: '["K1","K2","L1","L2"]',
      explanation:
        'Columns K through L, rows 1 through 2. Column-first ordering: K1, K2, L1, L2.',
    },
    {
      input: 's = "A1:F1"',
      output: '["A1","B1","C1","D1","E1","F1"]',
      explanation: 'Single row 1, columns A through F.',
    },
  ],
  hints: [
    'Level 1: Parse the string: col1=s[0], row1=s[1], col2=s[3], row2=s[4].',
    'Level 2: Iterate columns from col1 to col2 (using charCode), then rows from row1 to row2 (as digits). Append "C" + r for each cell.',
    'Level 3: O((c2-c1+1)*(r2-r1+1)) time and space. Both ranges are at most 26 and 9 respectively.',
  ],
  functionName: 'cellsInRange',
  params: ['s'],
  starterCode: {
    javascript: `function cellsInRange(s) {
  const [c1, r1, , c2, r2] = s;
  const res = [];
  for (let c = c1.charCodeAt(0); c <= c2.charCodeAt(0); c++)
    for (let r = Number(r1); r <= Number(r2); r++)
      res.push(String.fromCharCode(c) + r);
  return res;
}`,
    typescript: `function cellsInRange(s: string): string[] {
  const [c1, r1, , c2, r2] = s;
  const res: string[] = [];
  for (let c = c1!.charCodeAt(0); c <= c2!.charCodeAt(0); c++)
    for (let r = Number(r1); r <= Number(r2); r++)
      res.push(String.fromCharCode(c) + r);
  return res;
}`,
    python: `def cellsInRange(s):
    c1, r1, c2, r2 = s[0], int(s[1]), s[3], int(s[4])
    return [chr(c) + str(r)
            for c in range(ord(c1), ord(c2) + 1)
            for r in range(r1, r2 + 1)]`,
  },
  visibleTests: [
    { args: ['K1:L2'], expected: ['K1', 'K2', 'L1', 'L2'] },
    { args: ['A1:F1'], expected: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'] },
  ],
  hiddenTests: [
    { args: ['A1:A1'], expected: ['A1'] },
    { args: ['A1:B2'], expected: ['A1', 'A2', 'B1', 'B2'] },
    { args: ['C3:D5'], expected: ['C3', 'C4', 'C5', 'D3', 'D4', 'D5'] },
    { args: ['Z1:Z9'], expected: ['Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9'] },
    { args: ['A9:C9'], expected: ['A9', 'B9', 'C9'] },
    { args: ['B2:B3'], expected: ['B2', 'B3'] },
  ],
};
