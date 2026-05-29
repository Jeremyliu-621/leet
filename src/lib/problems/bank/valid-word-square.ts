import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-word-square',
  title: 'Valid Word Square',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of strings \`words\`, return \`true\` if it forms a **valid word square**.

A sequence of strings forms a valid word square if the \`k\`-th row and column read the same string, where \`0 ≤ k < max(numRows, numColumns)\`.

For example, given the word square:
\`\`\`
a b c d
b b c e
c c e e
d e e e
\`\`\`
The 0th row and 0th column both read \`"abcd"\`, the 1st row and 1st column both read \`"bcce"\`, and so on.`,
  constraints: [
    '1 <= words.length <= 500',
    '1 <= words[i].length <= 500',
    'words[i] consists of only lowercase English letters.',
    'It is guaranteed that the number of rows equals the number of columns (they form a square).',
  ],
  examples: [
    {
      input: 'words = ["abcd","bnrt","crmy","dtye"]',
      output: 'true',
      explanation: 'Row 0 = "abcd", Col 0 = "abcd" ✓; Row 1 = "bnrt", Col 1 = "bnrt" ✓; etc.',
    },
    {
      input: 'words = ["abcd","bnrt","crm","dt"]',
      output: 'true',
      explanation: 'Shorter rows create "missing" characters at the boundary; the valid part still matches.',
    },
    {
      input: 'words = ["abc","bkx","cyl"]',
      output: 'false',
      explanation: 'Row 1 = "bkx", Col 1 = "bky". They differ at position 2 (x ≠ y).',
    },
  ],
  hints: [
    'For each row index `i` and column index `j`, check that `words[i][j] === words[j][i]`. If either position is out of bounds (string shorter than needed), treat the character as "absent" and the other side must also be absent.',
    'If `words[i]` exists but `words[i][j]` is undefined, the column character `words[j][i]` must also be undefined (i.e. `i >= words[j].length`).',
    'Iterate over all valid `(i, j)` pairs with `i` from 0 to `words.length - 1` and `j` from 0 to `words[i].length - 1`. If any mismatch is found, return false immediately.',
  ],
  functionName: 'validWordSquare',
  params: ['words'],
  starterCode: {
    javascript: `function validWordSquare(words) {\n\n}`,
    python: `def validWordSquare(words: list[str]) -> bool:\n    pass`,
  },
  visibleTests: [
    { args: [['abcd', 'bnrt', 'crmy', 'dtye']], expected: true },
    { args: [['abcd', 'bnrt', 'crm', 'dt']], expected: true },
    { args: [['abc', 'bkx', 'cyl']], expected: false },
  ],
  hiddenTests: [
    { args: [['a']], expected: true },
    { args: [['ab', 'ba']], expected: true },
    { args: [['ab', 'b']], expected: true },
    { args: [['ab', 'a']], expected: false },
    { args: [['abcd', 'bnrt', 'crmy', 'dtye']], expected: true },
    { args: [['abc', 'bkl', 'clo']], expected: true },
    { args: [['abc', 'bkl', 'clx']], expected: true },
    { args: [['a', 'b']], expected: false },
    { args: [['a', 'aa']], expected: false },
    { args: [['ball', 'area', 'lead', 'lady']], expected: true },
  ],
};
