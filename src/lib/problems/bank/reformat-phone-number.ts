import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reformat-phone-number',
  title: 'Reformat Phone Number',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `You are given a phone number as a string \`number\`. \`number\` consists of digits, spaces \`' '\`, and/or dashes \`'-'\`.

You would like to reformat the phone number in a certain manner. Firstly, **remove** all spaces and dashes. Then, **group** the digits from left to right into blocks of length **3** until there are **4** or fewer digits. The final digits are then grouped as follows:

- 2 digits: a single block of length 2.
- 3 digits: a single block of length 3.
- 4 digits: two blocks of length 2 each.

The blocks are then joined by dashes. Return the phone number after formatting.`,
  constraints: [
    '2 <= number.length <= 100',
    'number consists of digits and the characters \'-\' and \' \'.',
    'There are at least two digits in number.',
  ],
  examples: [
    {
      input: 'number = "1-23-45 6"',
      output: '"123-456"',
      explanation: 'Digits: "123456". One block of 3: "123", remaining "456" (3 digits). Result: "123-456".',
    },
    {
      input: 'number = "123 4-567"',
      output: '"123-45-67"',
      explanation: 'Digits: "1234567". Block "123", then 4 remain → two blocks of 2: "45","67". Result: "123-45-67".',
    },
    {
      input: 'number = "123 4-5678"',
      output: '"123-456-78"',
      explanation: 'Digits: "12345678". Block "123", block "456", remaining "78" (2 digits). Result: "123-456-78".',
    },
  ],
  hints: [
    'Strip all spaces and dashes to get just the digit string.',
    'Take blocks of 3 from the left while more than 4 digits remain.',
    'Handle the tail: 4 digits → two 2-digit blocks; 2 or 3 digits → one block.',
    'Join all blocks with "-".',
  ],
  functionName: 'reformatNumber',
  params: ['number'],
  starterCode: {
    javascript: 'function reformatNumber(number) {\n  \n}\n',
    typescript: 'function reformatNumber(number: string): string {\n  \n}',
    python: 'def reformatNumber(number):\n    pass\n',
  },
  visibleTests: [
    { args: ['1-23-45 6'], expected: '123-456' },
    { args: ['123 4-567'], expected: '123-45-67' },
    { args: ['123 4-5678'], expected: '123-456-78' },
  ],
  hiddenTests: [
    { args: ['90 123'], expected: '901-23' },
    { args: ['12'], expected: '12' },
    { args: ['123'], expected: '123' },
    { args: ['1234'], expected: '12-34' },
    { args: ['12-34 56 78'], expected: '123-456-78' },
  ],
};
