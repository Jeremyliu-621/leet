import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-trailing-zeros',
  title: 'Remove Trailing Zeros From a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a **positive** integer \`num\` represented as a string, return the string \`num\` with all trailing zeros removed.`,
  constraints: [
    '1 <= num.length <= 1000',
    'num consists of only digits.',
    'num does not have any leading zeros.',
  ],
  examples: [
    { input: 'num = "51230100"', output: '"512301"', explanation: 'Remove two trailing zeros.' },
    { input: 'num = "123"', output: '"123"', explanation: 'No trailing zeros.' },
    { input: 'num = "1000"', output: '"1"', explanation: 'Remove three trailing zeros.' },
  ],
  hints: [
    'Find the last non-zero character and slice the string up to that index.',
    'Strip trailing zeros from the numeric string by removing characters from the end while the last character is `\'0\'`.',
    `\`\`\`js
let s = num;
while (s.endsWith('0')) s = s.slice(0, -1);
return s;\`\`\``
  ],
  functionName: 'removeTrailingZeros',
  params: ['num'],
  starterCode: {
    javascript: 'function removeTrailingZeros(num) {\n  \n}\n',
    python: 'def removeTrailingZeros(num):\n    pass\n',
  },
  visibleTests: [
    { args: ['51230100'], expected: '512301' },
    { args: ['123'], expected: '123' },
    { args: ['1000'], expected: '1' },
  ],
  hiddenTests: [
    { args: ['10'], expected: '1' },
    { args: ['100200300'], expected: '1002003' },
    { args: ['5'], expected: '5' },
    { args: ['90000'], expected: '9' },
  ],
};
