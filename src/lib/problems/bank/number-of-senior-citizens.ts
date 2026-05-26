import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-senior-citizens',
  title: 'Number of Senior Citizens',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** array of strings \`details\`. Each element of \`details\` provides information about a given passenger compressed into a string of length \`15\`. The system is such that:

- The first ten characters consist of the phone number of passengers.
- The next character denotes the gender of the person.
- The following two characters are used to indicate the age of the person.
- The last two characters determine the seat allotted to that person.

Return the number of passengers who are **strictly more than 60 years old**.`,
  constraints: [
    '1 <= details.length <= 100',
    'details[i].length == 15',
    'details[i] consists of digits from \'0\' to \'9\'.',
    'details[i][10] is either \'M\', \'F\', or \'O\'.',
    'The phone numbers and seat numbers of the passengers are distinct.',
  ],
  examples: [
    {
      input: 'details = ["7868190130M7522","5303914400F9211","9273338290F4010"]',
      output: '2',
      explanation: 'Passengers at indices 0 and 1 are older than 60 (age 75 and 92). The passenger at index 2 is 40 years old.',
    },
    {
      input: 'details = ["1313579440F2036","2921522980M5644"]',
      output: '0',
      explanation: 'None of the passengers are older than 60.',
    },
  ],
  hints: [
    'The age is encoded at positions 11 and 12 (0-indexed) of each string.',
    'Parse the two-character substring as a number and check if it is strictly greater than 60.',
    `\`\`\`js
function countSeniors(details) {
  return details.filter(d => Number(d.slice(11,13)) > 60).length;
}\`\`\``,
  ],
  functionName: 'countSeniors',
  params: ['details'],
  starterCode: {
    javascript: 'function countSeniors(details) {\n  \n}\n',
    python: 'def countSeniors(details):\n    pass\n',
  },
  visibleTests: [
    {
      args: [['7868190130M7522', '5303914400F9211', '9273338290F4010']],
      expected: 2,
    },
    {
      args: [['1313579440F2036', '2921522980M5644']],
      expected: 0,
    },
    {
      args: [['9999999999M6000']],
      expected: 0,
    },
  ],
  hiddenTests: [
    { args: [['0000000000M6000']], expected: 0 },
    { args: [['0000000000M6200']], expected: 1 },
    { args: [['0000000000F9999']], expected: 1 },
    {
      args: [['1111111111M6100', '2222222222F6200', '3333333333O5900']],
      expected: 2,
    },
    {
      args: [['1234567890M0015', '0987654321F6115', '1357924680O8020']],
      expected: 2,
    },
  ],
};
