import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-the-slanted-ciphertext',
  title: 'Decode the Slanted Ciphertext',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `A string \`originalText\` was encoded using a **slanted transposition cipher** to produce \`encodedText\` with the following steps:

1. Write \`originalText\` into a \`rows × cols\` grid **diagonally** from top-left to bottom-right, wrapping to a new diagonal each time the bottom row is reached. Fill unused cells with spaces.
2. Read the grid **row by row** (left to right, top to bottom) to produce \`encodedText\`.

Given \`encodedText\` and the integer \`rows\`, decode \`encodedText\` and return \`originalText\` (without trailing spaces).`,
  constraints: [
    '0 <= encodedText.length <= 10^6',
    'encodedText consists of lowercase English letters and spaces.',
    'encodedText is a valid encoding of some originalText that does not have trailing spaces.',
    '1 <= rows <= 1000',
    'The encoded text length is always divisible by rows.',
  ],
  examples: [
    {
      input: 'encodedText = "ch   ie   pr", rows = 3',
      output: '"cipher"',
      explanation:
        'The 3×4 grid fills "cipher" diagonally. Row by row reads "ch   ie   pr". Reading diagonally back gives "cipher".',
    },
    {
      input: 'encodedText = "hlo  el ", rows = 2',
      output: '"hello"',
      explanation:
        'The 2×4 grid has row 0 = "hlo " and row 1 = " el ". Reading diagonals back: h,e → l,l → o,space → space. Trimmed: "hello".',
    },
  ],
  hints: [
    'Let cols = encodedText.length / rows. The grid is reconstructed by treating encodedText[row * cols + col] as grid[row][col].',
    'To decode, read the diagonals: for diagonal d (0-indexed), collect grid[row][d + row] for each row.',
    'Strip trailing spaces from the final decoded string.',
  ],
  functionName: 'decodeCiphertext',
  params: ['encodedText', 'rows'],
  starterCode: {
    javascript: `function decodeCiphertext(encodedText, rows) {
  const cols = encodedText.length / rows;
  let result = '';
  for (let c = 0; c < cols; c++) {
    let r = 0, cc = c;
    while (r < rows && cc < cols) {
      result += encodedText[r * cols + cc];
      r++; cc++;
    }
  }
  return result.replace(/\\s+$/, '');
}`,
    typescript: `function decodeCiphertext(encodedText: string, rows: number): string {
  const cols = encodedText.length / rows;
  let result = '';
  for (let c = 0; c < cols; c++) {
    let r = 0, cc = c;
    while (r < rows && cc < cols) {
      result += encodedText[r * cols + cc];
      r++; cc++;
    }
  }
  return result.replace(/\\s+$/, '');
}`,
    python: `def decodeCiphertext(encodedText, rows):
    if hasattr(encodedText, 'to_py'): encodedText = encodedText.to_py()
    cols = len(encodedText) // rows
    result = []
    for c in range(cols):
        r, cc = 0, c
        while r < rows and cc < cols:
            result.append(encodedText[r * cols + cc])
            r += 1; cc += 1
    return ''.join(result).rstrip()`,
  },
  visibleTests: [
    { args: ['ch   ie   pr', 3], expected: 'cipher' },
    { args: ['hlo  el ', 2], expected: 'hello' },
    { args: ['a   b   c', 3], expected: 'abc' },
    { args: ['abcd', 1], expected: 'abcd' },
    { args: ['rmme  eebr', 2], expected: 'remember' },
  ],
  hiddenTests: [
    { args: ['a  b', 2], expected: 'ab' },
    { args: ['x   y   z', 3], expected: 'xyz' },
    { args: ['cd  oe', 2], expected: 'code' },
    { args: ['aot   lrh   gim', 3], expected: 'algorithm' },
    { args: ['ab', 1], expected: 'ab' },
  ],
};
