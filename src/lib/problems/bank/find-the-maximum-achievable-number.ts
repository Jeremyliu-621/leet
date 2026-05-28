import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-achievable-number',
  title: 'Find the Maximum Achievable Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given two integers \`num\` and \`t\`. A number \`x\` is called **achievable** if it can become equal to \`num\` after applying the following operation **at most** \`t\` times:

- Increase or decrease \`x\` by \`1\`, and simultaneously increase or decrease \`num\` by \`1\`.

Return the **maximum possible achievable number**.`,
  constraints: [
    '1 <= num <= 50',
    '1 <= t <= 50',
  ],
  examples: [
    {
      input: 'num = 4, t = 1',
      output: '6',
      explanation: 'x = 6. Apply once: x decreases by 1 (→ 5), num increases by 1 (→ 5). They are equal.',
    },
    {
      input: 'num = 3, t = 2',
      output: '7',
      explanation: 'x = 7. Apply twice: (7→6, 3→4), then (6→5, 4→5). They are equal.',
    },
  ],
  hints: [
    'Each operation can move x and num closer together by 2 (x decreases by 1, num increases by 1).',
    'Starting from x far above num, we can close the gap by 2 per operation.',
    'The maximum achievable x is num + 2 * t.',
  ],
  functionName: 'theMaximumAchievableX',
  params: ['num', 't'],
  starterCode: {
    javascript: `function theMaximumAchievableX(num, t) {

}`,
    typescript: "function theMaximumAchievableX(num: number, t: number): number {\n\n}",

    python: `def theMaximumAchievableX(num, t):
    pass`,
  },
  visibleTests: [
    { args: [4, 1], expected: 6 },
    { args: [3, 2], expected: 7 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 3 },
    { args: [10, 5], expected: 20 },
    { args: [0, 0], expected: 0 },
    { args: [100, 50], expected: 200 },
    { args: [50, 50], expected: 150 },
  ],
};
