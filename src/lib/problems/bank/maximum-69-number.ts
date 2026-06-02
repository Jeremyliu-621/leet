import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-69-number',
  title: 'Maximum 69 Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a positive integer \`num\` consisting only of digits \`6\` and \`9\`.

Return the maximum number you can get by changing **at most** one digit (\`6\` becomes \`9\` or \`9\` becomes \`6\`).`,
  constraints: [
    '`1 <= num <= 10^4`',
    '`num` consists only of digits `6` and `9`.',
  ],
  examples: [
    {
      input: 'num = 9669',
      output: '9969',
      explanation: 'Changing the first 6 to 9 gives 9969, which is the maximum.',
    },
    {
      input: 'num = 9996',
      output: '9999',
      explanation: 'Changing the last 6 to 9 gives 9999.',
    },
    {
      input: 'num = 9999',
      output: '9999',
      explanation: 'No 6 to change; the number is already maximum.',
    },
  ],
  hints: [
    'To maximize the number, change the most significant 6 (the leftmost one) to 9.',
    'Convert to string, replace the first occurrence of "6" with "9", convert back to integer.',
    `\`\`\`js
function maximum69Number(num) {
  return Number(String(num).replace("6","9"));
}\`\`\``,
  ],
  functionName: 'maximum69Number',
  params: ['num'],
  starterCode: {
    javascript: `function maximum69Number(num) {
  return Number(String(num).replace('6', '9'));
}`,
    typescript: `function maximum69Number(num: number): number {
  return Number(String(num).replace('6', '9'));
}`,
    python: `def maximum69Number(num):
    return int(str(num).replace('6', '9', 1))`,
  },
  visibleTests: [
    { args: [9669], expected: 9969 },
    { args: [9996], expected: 9999 },
    { args: [9999], expected: 9999 },
  ],
  hiddenTests: [
    { args: [6], expected: 9 },
    { args: [9], expected: 9 },
    { args: [66], expected: 96 },
    { args: [6699], expected: 9699 },
    { args: [6969], expected: 9969 },
  ],
};
