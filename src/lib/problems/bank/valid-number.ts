import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-number',
  title: 'Valid Number',
  difficulty: 'hard',
  tags: ['strings'],
  description: `Given a string \`s\`, return whether \`s\` is a **valid number**.

A valid number is defined using one of the following definitions:
1. An **integer number** followed by an optional exponent.
2. A **decimal number** followed by an optional exponent.

An **integer number** is defined with an optional sign (\`'+'\` or \`'-'\`) followed by **digits**.

A **decimal number** is defined with an optional sign followed by one of the following definitions:
- Digits followed by a dot (\`'.'\`).
- Digits followed by a dot followed by more digits.
- A dot followed by digits.

An **exponent** is defined with an exponent notation (\`'e'\` or \`'E'\`) followed by an **integer number**.

For example, \`"2"\`, \`"0089"\`, \`"-0.1"\`, \`"+3.14"\`, \`"4."\`, \`"-.9"\`, \`"2e10"\`, \`"-90E3"\`, \`"3e+7"\`, \`"+6e-1"\`, \`"53.5e93"\`, and \`"-123.456e789"\` are valid, while \`"abc"\`, \`"1a"\`, \`"/"\`, \`"1e"\`, \`"e3"\`, \`"99e2.5"\`, \`"--6"\`, \`"-+3"\`, and \`"95a54e53"\` are not.`,
  constraints: [
    '`1 <= s.length <= 20`',
    '`s` consists of only English letters, digits, `+`, `-`, and `.`.',
  ],
  examples: [
    { input: 's = "0"', output: 'true' },
    { input: 's = "e"', output: 'false' },
    { input: 's = "."', output: 'false' },
    { input: 's = "3.14"', output: 'true' },
    { input: 's = "3e+7"', output: 'true' },
    { input: 's = "1e"', output: 'false', explanation: 'Exponent must be followed by an integer.' },
  ],
  hints: [
    'Track three booleans: seenDigit, seenDot, seenE.',
    'Iterate character by character. A sign is valid only at position 0 or immediately after an e/E.',
    'A dot is valid only if no dot or exponent has been seen yet.',
    'An e/E is valid only if a digit has been seen before it and no e/E has been seen yet. Reset seenDigit to false after the exponent so that the exponent part must also have digits.',
    'Any other character makes the number invalid. At the end, seenDigit must be true.',
  ],
  functionName: 'isNumber',
  params: ['s'],
  starterCode: {
    javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {

}`,
    python: `def isNumber(s: str) -> bool:
    `,
  },
  visibleTests: [
    { args: ['0'], expected: true },
    { args: ['e'], expected: false },
    { args: ['.'], expected: false },
    { args: ['3.14'], expected: true },
    { args: ['3e+7'], expected: true },
    { args: ['1e'], expected: false },
  ],
  hiddenTests: [
    { args: ['2'], expected: true },
    { args: ['0089'], expected: true },
    { args: ['-0.1'], expected: true },
    { args: ['+3.14'], expected: true },
    { args: ['4.'], expected: true },
    { args: ['-.9'], expected: true },
    { args: ['2e10'], expected: true },
    { args: ['-90E3'], expected: true },
    { args: ['+6e-1'], expected: true },
    { args: ['53.5e93'], expected: true },
    { args: ['-123.456e789'], expected: true },
    { args: ['abc'], expected: false },
    { args: ['1a'], expected: false },
    { args: ['/'], expected: false },
    { args: ['99e2.5'], expected: false },
    { args: ['--6'], expected: false },
    { args: ['-+3'], expected: false },
    { args: ['95a54e53'], expected: false },
  ],
};
