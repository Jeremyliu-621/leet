import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-convert-time',
  title: 'Minimum Number of Operations to Convert Time',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given two strings \`current\` and \`correct\` representing two **24-hour times**. Both times are in the form \`"HH:MM"\`.

You can change \`current\` to \`correct\` by performing any number of operations. In each operation, you can increase the time \`current\` by \`1\`, \`5\`, \`15\`, or \`60\` minutes. You can perform the operations **any** number of times.

Return the **minimum number of operations** needed to convert \`current\` to \`correct\`.`,
  constraints: [
    '`current\` and \`correct\` are in the format \`"HH:MM"\`.',
    '`current <= correct`',
  ],
  examples: [
    {
      input: 'current = "02:30", correct = "04:35"',
      output: '3',
      explanation: 'Difference is 125 minutes. Add 60+60=120 (2 ops), then 5 (1 op). Total: 3.',
    },
    {
      input: 'current = "11:00", correct = "11:01"',
      output: '1',
      explanation: 'Add 1 minute once.',
    },
  ],
  hints: [
    'Convert both times to total minutes. Compute the difference.',
    'Greedily subtract the largest step (60, then 15, then 5, then 1) as many times as possible.',
    '```js\nfunction convertTime(current, correct) {\n  const toMins = t => parseInt(t.slice(0, 2)) * 60 + parseInt(t.slice(3));\n  let diff = toMins(correct) - toMins(current);\n  let ops = 0;\n  for (const step of [60, 15, 5, 1]) {\n    ops += Math.floor(diff / step);\n    diff %= step;\n  }\n  return ops;\n}\n```',
  ],
  functionName: 'convertTime',
  params: ['current', 'correct'],
  starterCode: {
    javascript: `function convertTime(current, correct) {

}`,
    typescript: `function convertTime(current: string, correct: string): number {

}`,
    python: `def convertTime(current, correct):
    pass`,
  },
  visibleTests: [
    { args: ['02:30', '04:35'], expected: 3 },
    { args: ['11:00', '11:01'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['00:00', '01:00'], expected: 1 },
    { args: ['01:00', '02:30'], expected: 3 },
    { args: ['00:00', '23:59'], expected: 32 },
  ],
};
