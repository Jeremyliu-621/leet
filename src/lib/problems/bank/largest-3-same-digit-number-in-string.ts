import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-3-same-digit-number-in-string',
  title: 'Largest 3-Same-Digit Number in String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`num\` representing a large integer. An integer is **good** if it meets the following conditions:

- It is a **substring** of \`num\` with length **3**.
- It consists of only one unique digit.

Return the **maximum good** integer as a **string** or return an empty string \`""\` if no such integer exists.`,
  constraints: [
    '3 <= num.length <= 1000',
    'num only consists of digits.',
  ],
  examples: [
    {
      input: 'num = "6777133339"',
      output: '"777"',
      explanation: 'Good integers: "777" and "333". Maximum is "777".',
    },
    {
      input: 'num = "2300019"',
      output: '"000"',
      explanation: 'The only good integer is "000".',
    },
    {
      input: 'num = "42352338"',
      output: '""',
      explanation: 'No three consecutive identical digits exist.',
    },
  ],
  hints: [
    'Slide a window of size 3 and check if all three characters are the same.',
    'Track the maximum such substring found.',
    `\`\`\`js
function largestGoodInteger(num) {
  let best = "";
  for (let i = 0; i <= num.length-3; i++)
    if (num[i]===num[i+1] && num[i+1]===num[i+2] && num.slice(i,i+3)>best)
      best = num.slice(i,i+3);
  return best;
}\`\`\``,
  ],
  functionName: 'largestGoodInteger',
  params: ['num'],
  starterCode: {
    javascript: `function largestGoodInteger(num) {
  let best = '';
  for (let i = 0; i <= num.length - 3; i++)
    if (num[i] === num[i+1] && num[i+1] === num[i+2] && num.slice(i, i+3) > best)
      best = num.slice(i, i+3);
  return best;
}`,
    typescript: `function largestGoodInteger(num: string): string {
  let best = '';
  for (let i = 0; i <= num.length - 3; i++)
    if (num[i] === num[i+1] && num[i+1] === num[i+2] && num.slice(i, i+3) > best)
      best = num.slice(i, i+3);
  return best;
}`,
    python: `def largestGoodInteger(num):
    best = ''
    for i in range(len(num) - 2):
        if num[i] == num[i+1] == num[i+2] and num[i:i+3] > best:
            best = num[i:i+3]
    return best`,
  },
  visibleTests: [
    { args: ['6777133339'], expected: '777' },
    { args: ['2300019'], expected: '000' },
    { args: ['42352338'], expected: '' },
  ],
  hiddenTests: [
    { args: ['000111'], expected: '111' },
    { args: ['999'], expected: '999' },
    { args: ['9999'], expected: '999' },
    { args: ['112233'], expected: '' },
  ],
};
