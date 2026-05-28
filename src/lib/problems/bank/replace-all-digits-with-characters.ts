import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-all-digits-with-characters',
  title: 'Replace All Digits with Characters',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** string \`s\` that has lowercase English letters in its **even** indices and digits in its **odd** indices.

You must perform an operation for each digit \`d\` at index \`i\`:

- Replace \`s[i]\` with the character that is \`d\` positions **ahead** of \`s[i-1]\` in the alphabet.

Return the resulting string after the operation.

**Note:** The test cases are generated such that the operation produces valid characters.`,
  constraints: [
    '1 <= s.length <= 100',
    's.length is odd.',
    's[i] is a lowercase letter for even indices.',
    's[i] is a digit for odd indices.',
    's[i-1] + s[i] <= \'z\' for odd i.',
  ],
  examples: [
    {
      input: 's = "a1c1e1"',
      output: '"abcdef"',
      explanation: 'Index 1: s[0]="a", shift 1 → "b". Index 3: s[2]="c", shift 1 → "d". Index 5: s[4]="e", shift 1 → "f".',
    },
    {
      input: 's = "a1b2c3d4e"',
      output: '"abbdcfdhe"',
      explanation: 'Shift each digit: a+1=b, b+2=d, c+3=f, d+4=h.',
    },
  ],
  hints: [
    'Iterate through odd indices. Replace s[i] with the character at code s[i-1].charCodeAt(0) + parseInt(s[i]).',
    'In JavaScript: `String.fromCharCode(s.charCodeAt(i-1) + parseInt(s[i]))`. In Python: `chr(ord(prev_char) + int(digit))`.',
    'Build the result character by character: even indices are copied as-is; odd indices are computed from the preceding letter.',
  ],
  functionName: 'replaceDigits',
  params: ['s'],
  starterCode: {
    javascript: `function replaceDigits(s) {

}`,
    python: `def replaceDigits(s):
    pass`,
  },
  visibleTests: [
    { args: ['a1c1e1'], expected: 'abcdef' },
    { args: ['a1b2c3d4e'], expected: 'abbdcfdhe' },
  ],
  hiddenTests: [
    { args: ['a0'], expected: 'aa' },
    { args: ['z0'], expected: 'zz' },
    { args: ['a1b1c1'], expected: 'abbccd' },
    { args: ['b3'], expected: 'be' },
  ],
};
