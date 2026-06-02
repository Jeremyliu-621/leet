import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-a-number-is-fascinating',
  title: 'Check if a Number is Fascinating',
  difficulty: 'easy',
  tags: ['math', 'hash-map'],
  description: `You are given an integer \`n\` that is **exactly 3 digits** long.

We call the number \`n\` **fascinating** if, after the following modification, the resulting number contains the digits **1 to 9** exactly once and does **not** contain any **0**s:

- **Concatenate** \`n\` with the numbers \`2 * n\` and \`3 * n\`.

Return \`true\` *if \`n\` is fascinating, or* \`false\` *otherwise.*`,
  constraints: [
    '`100 <= n <= 999`',
  ],
  examples: [
    {
      input: 'n = 192',
      output: 'true',
      explanation:
        'Concatenate 192, 384, 576 to get "192384576". It contains all digits 1-9 exactly once and no zeros.',
    },
    {
      input: 'n = 100',
      output: 'false',
      explanation: '"100200300" contains zeros.',
    },
  ],
  hints: [
    'Concatenate n, 2*n, and 3*n as strings. Check that the result has length 9, contains every digit 1–9 exactly once, and no zeros.',
    'A sorted check works: sort the characters and compare to "123456789".',
    `\`\`\`js
function isFascinating(n) {
  const s = '' + n + (2 * n) + (3 * n);
  return s.length === 9 && s.split('').sort().join('') === '123456789';
}\`\`\``,
  ],
  functionName: 'isFascinating',
  params: ['n'],
  starterCode: {
    javascript: `function isFascinating(n) {
  const s = '' + n + 2 * n + 3 * n;
  return s.length === 9 && s.split('').sort().join('') === '123456789';
}`,
    typescript: `function isFascinating(n: number): boolean {
  const s = '' + n + 2 * n + 3 * n;
  return s.length === 9 && s.split('').sort().join('') === '123456789';
}`,
    python: `def isFascinating(n):
    s = str(n) + str(2 * n) + str(3 * n)
    return len(s) == 9 and sorted(s) == list('123456789')`,
  },
  visibleTests: [
    { args: [192], expected: true },
    { args: [100], expected: false },
    { args: [273], expected: true },
  ],
  hiddenTests: [
    { args: [219], expected: true },
    { args: [327], expected: true },
    { args: [111], expected: false },
    { args: [999], expected: false },
    { args: [381], expected: false },
    { args: [500], expected: false },
  ],
};
