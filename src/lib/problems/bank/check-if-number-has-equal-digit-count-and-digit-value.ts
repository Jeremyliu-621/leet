import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-number-has-equal-digit-count-and-digit-value',
  title: 'Check if the Sentence Is Pangram',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** string \`num\` of length \`n\` consisting of digits.

Return \`true\` if for **every** index \`i\` in the range \`0 <= i < n\`, the digit \`i\` occurs \`num[i]\` times in \`num\`, otherwise return \`false\`.`,
  constraints: [
    'n == num.length',
    '1 <= n <= 10',
    'num consists of digits.',
  ],
  examples: [
    {
      input: 'num = "1210"',
      output: 'true',
      explanation: 'Digit 0 occurs 1 time (num[0]=1 ✓). Digit 1 occurs 2 times (num[1]=2 ✓). Digit 2 occurs 1 time (num[2]=1 ✓). Digit 3 occurs 0 times (num[3]=0 ✓).',
    },
    {
      input: 'num = "030"',
      output: 'false',
      explanation: 'Digit 0 should occur num[0]=0 times but occurs 2 times.',
    },
  ],
  hints: [
    'Count how many times each digit 0-9 appears in num.',
    'Check if count[i] == int(num[i]) for each i.',
    `\`\`\`js
function digitCount(num) {
  const s = String(num);
  const freq = {};
  for (const c of s) freq[c] = (freq[c]||0)+1;
  for (let i = 0; i < s.length; i++)
    if ((freq[i]||0) !== Number(s[i])) return false;
  return true;
}\`\`\``,
  ],
  functionName: 'digitCount',
  params: ['num'],
  starterCode: {
    javascript: `function digitCount(num) {

}`,
    python: `def digitCount(num):
    pass`,
  },
  visibleTests: [
    { args: ['1210'], expected: true },
    { args: ['030'], expected: false },
  ],
  hiddenTests: [
    { args: ['0'], expected: false },
    { args: ['2020'], expected: true },
    { args: ['21200'], expected: true },
    { args: ['1111'], expected: false },
  ],
};
