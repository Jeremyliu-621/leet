import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-time-hhmm',
  title: 'Convert Time with Minimum Operations',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `You are given two strings \`current\` and \`correct\` representing two **24-hour** times in \`"HH:MM"\` format. Return the **minimum number of operations** to convert \`current\` to \`correct\`.

In one operation you can increase the time \`current\` by \`1\`, \`5\`, \`15\`, or \`60\` minutes. You can perform the operations any number of times.`,
  constraints: [
    'current and correct are in the format "HH:MM".',
    'current <= correct',
  ],
  examples: [
    {
      input: 'current = "02:30", correct = "04:35"',
      output: '3',
      explanation: 'Difference is 125 min. 60+60+5=125. 3 operations.',
    },
    {
      input: 'current = "11:00", correct = "11:01"',
      output: '1',
      explanation: 'One +1 operation.',
    },
  ],
  hints: [
    'Level 1: Convert both times to total minutes. The difference tells you how many minutes to add.',
    'Level 2: Greedily subtract the largest denomination (60, 15, 5, 1) that fits into the remaining difference.',
    'Level 3: let d=toMin(correct)-toMin(current),ops=0;for(const s of[60,15,5,1]){ops+=Math.floor(d/s);d%=s;}return ops;',
  ],
  functionName: 'convertTime',
  params: ['current', 'correct'],
  starterCode: {
    javascript: `function convertTime(current, correct) {
  const toMin = s => +s.slice(0,2)*60 + +s.slice(3);
  let d = toMin(correct) - toMin(current), ops = 0;
  for (const s of [60, 15, 5, 1]) { ops += Math.floor(d/s); d %= s; }
  return ops;
}`,
    typescript: `function convertTime(current: string, correct: string): number {
  const toMin = (s: string) => +s.slice(0,2)*60 + +s.slice(3);
  let d = toMin(correct) - toMin(current), ops = 0;
  for (const s of [60, 15, 5, 1]) { ops += Math.floor(d/s); d %= s; }
  return ops;
}`,
    python: `def convertTime(current, correct):
    if hasattr(current, 'to_py'): current = current.to_py()
    if hasattr(correct, 'to_py'): correct = correct.to_py()
    to_min = lambda s: int(s[:2])*60 + int(s[3:])
    d, ops = to_min(correct) - to_min(current), 0
    for s in [60, 15, 5, 1]:
        ops += d // s; d %= s
    return ops`,
  },
  visibleTests: [
    { args: ['02:30', '04:35'], expected: 3 },
    { args: ['11:00', '11:01'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['00:00', '23:59'], expected: 32 },
    { args: ['00:00', '01:00'], expected: 1 },
    { args: ['12:00', '12:15'], expected: 1 },
    { args: ['12:00', '13:00'], expected: 1 },
    { args: ['00:01', '00:06'], expected: 1 },
    { args: ['00:00', '00:16'], expected: 2 },
  ],
};
