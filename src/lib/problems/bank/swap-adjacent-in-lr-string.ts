import type { Problem } from '../types';

export const problem: Problem = {
  id: 'swap-adjacent-in-lr-string',
  title: 'Swap Adjacent in LR String',
  difficulty: 'medium',
  tags: ['two-pointers'],
  description: `In a string consisting only of \`'L'\`, \`'R'\`, and \`'X'\` characters:

- \`'R'\` can move **right** by swapping with an adjacent \`'X'\` to its right: \`"RX" → "XR"\`
- \`'L'\` can move **left** by swapping with an adjacent \`'X'\` to its left: \`"XL" → "LX"\`

Given strings \`start\` and \`end\` of the same length, return \`true\` if \`start\` can be transformed into \`end\` using any number of such moves.`,
  constraints: [
    '1 <= start.length <= 10^4',
    'start.length == end.length',
    "Both start and end consist only of 'L', 'R', and 'X'.",
  ],
  examples: [
    {
      input: 'start = "RXXLRXRXL", end = "XRLXXRRXL"',
      output: 'true',
      explanation: 'R at 0 moves right to 1, L at 3 moves left to 2, R at 4 moves right to 5 — all valid.',
    },
    {
      input: 'start = "X", end = "L"',
      output: 'false',
      explanation: "The non-X sequence in start is '' but in end is 'L'. Different sequences — impossible.",
    },
    {
      input: 'start = "LLR", end = "LLR"',
      output: 'true',
      explanation: 'start and end are identical, so no moves needed.',
    },
  ],
  hints: [
    "The relative order of 'L' and 'R' characters never changes — only 'X' (empty spaces) allow movement. So the sequence of non-X characters must be identical in start and end.",
    "Extract non-X characters from both strings and check they are equal. If not, return false immediately.",
    "For each paired character: if it's 'L', its index in start must be ≥ its index in end (L can only move left). If it's 'R', its index in start must be ≤ its index in end (R can only move right).",
  ],
  functionName: 'canTransform',
  params: ['start', 'end'],
  starterCode: {
    javascript: `function canTransform(start, end) {

}`,
    typescript: "function canTransform(start: string, end: string): boolean {\n\n}",

    python: `def canTransform(start, end):
    pass`,
  },
  visibleTests: [
    { args: ['RXXLRXRXL', 'XRLXXRRXL'], expected: true },
    { args: ['X', 'L'], expected: false },
    { args: ['LLR', 'LLR'], expected: true },
  ],
  hiddenTests: [
    { args: ['XL', 'LX'], expected: true },
    { args: ['XXRXX', 'XXXRX'], expected: true },
    { args: ['XR', 'RX'], expected: false },
    { args: ['XLRX', 'LXRX'], expected: true },
  ],
};
