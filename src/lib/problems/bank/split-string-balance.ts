import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-string-balance',
  title: 'Split a String in Balanced Strings',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Balanced strings are those that have an equal quantity of \`'L'\` and \`'R'\` characters.

Given a balanced string \`s\`, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.`,
  constraints: [
    '2 <= s.length <= 1000',
    's[i] is either \'L\' or \'R\'',
    's is a balanced string',
  ],
  examples: [
    {
      input: 's = "RLRRLLRLRL"',
      output: '4',
      explanation: 's can be split into "RL", "RRLL", "RL", "RL", each of which is a balanced string.',
    },
    {
      input: 's = "RLRRRLLRLL"',
      output: '2',
      explanation: 's can be split into "RL", "RRRLLRLL", each of which is a balanced string.',
    },
    {
      input: 's = "LLLLRRRR"',
      output: '1',
      explanation: 's cannot be split into more than 1 balanced string.',
    },
  ],
  hints: [
    'Use a counter: +1 for R, -1 for L (or vice versa). Each time the counter reaches 0, increment the answer.',
    'The split is balanced when the left half has as many `\'l\'`s as the right half has `\'r\'`s. Scan from left: use a counter (+1 for `\'l\'`, -1 for `\'r\'`); count how many prefix sums equal 0 at a valid split point.',
    `\`\`\`js
let count = 0, bal = 0, splits = 0;
for (const c of s) bal += c === 'l' ? 1 : -1;
let cur = 0;
for (let i = 0; i < s.length-1; i++) {
  cur += s[i] === 'l' ? 1 : -1;
  if (cur === bal - cur) splits++;
}
return splits;\`\`\``
  ],
  functionName: 'balancedStringSplit',
  params: ['s'],
  starterCode: {
    javascript: 'function balancedStringSplit(s) {\n  \n}\n',
    python: 'def balancedStringSplit(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['RLRRLLRLRL'], expected: 4 },
    { args: ['RLRRRLLRLL'], expected: 2 },
    { args: ['LLLLRRRR'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['RL'], expected: 1 },
    { args: ['RLLLLRRRLR'], expected: 3 },
    { args: ['LRLR'], expected: 2 },
    { args: ['LLRR'], expected: 1 },
    { args: ['RRLL'], expected: 1 },
  ],
};
