import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-after-insertion',
  title: 'Maximum Value after Insertion',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given a very large integer \`n\`, represented as a string, and an integer digit \`x\`. The digits in \`n\` and the digit \`x\` are in the inclusive range \`[1, 9]\`, and \`n\` may represent a **negative** number.

You want to **maximize** the value of \`n\` after inserting \`x\` anywhere in the decimal representation of \`n\`. You **cannot** insert \`x\` before the negative sign.

- If \`n\` is positive, inserting \`x\` will increase (or keep equal) its value.
- If \`n\` is negative, inserting \`x\` will decrease (or keep equal) its absolute value, thus increasing (or keeping equal) the overall value of \`n\`.

Return a string representing the maximum value of \`n\` after the insertion.`,
  constraints: [
    '1 <= n.length <= 10^5',
    '1 <= x <= 9',
    'The digits in n are in the range [1, 9].',
    'n does not have leading zeros.',
    'n represents either a positive or negative integer.',
  ],
  examples: [
    {
      input: 'n = "99", x = 9',
      output: '"999"',
      explanation: 'The result is the same regardless of where you insert 9.',
    },
    {
      input: 'n = "-13", x = 2',
      output: '"-123"',
      explanation: 'Inserting 2 between -1 and 3 gives -123, which is greater than -132 and -213.',
    },
    {
      input: 'n = "54", x = 7',
      output: '"754"',
    },
  ],
  hints: [
    'For a positive number, insert x before the first digit that is smaller than x — this pushes that smaller digit right, increasing the overall value.',
    'For a negative number, insert x before the first digit greater than x — this increases the digit at that position\'s "place value" in a negative context, making the number less negative (i.e., larger).',
    `\`\`\`js
function maxValue(n, x) {
  const neg = n[0] === '-';
  const digits = neg ? n.slice(1) : n;
  let i = 0;
  while (i < digits.length) {
    if (neg ? parseInt(digits[i]) > x : parseInt(digits[i]) < x) break;
    i++;
  }
  const inserted = digits.slice(0, i) + x + digits.slice(i);
  return neg ? '-' + inserted : inserted;
}
\`\`\``,
  ],
  functionName: 'maxValue',
  params: ['n', 'x'],
  starterCode: {
    javascript: `function maxValue(n, x) {

}`,
    typescript: 'function maxValue(n: string, x: number): string {\n\n}',
    python: `def maxValue(n: str, x: int) -> str:
    pass`,
  },
  visibleTests: [
    { args: ['99', 9], expected: '999' },
    { args: ['-13', 2], expected: '-123' },
    { args: ['54', 7], expected: '754' },
  ],
  hiddenTests: [
    { args: ['1', 9], expected: '91' },
    { args: ['9', 1], expected: '91' },
    { args: ['-9', 1], expected: '-19' },
    { args: ['-1', 9], expected: '-19' },
    { args: ['132', 5], expected: '5132' },
    { args: ['-132', 5], expected: '-1325' },
    { args: ['999', 5], expected: '9995' },
    { args: ['-999', 5], expected: '-5999' },
    { args: ['21', 2], expected: '221' },
    { args: ['-21', 2], expected: '-212' },
  ],
};
