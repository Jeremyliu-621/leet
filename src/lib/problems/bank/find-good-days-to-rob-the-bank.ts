import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-good-days-to-rob-the-bank',
  title: 'Find Good Days to Rob the Bank',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You and a gang of thieves are planning on robbing a bank. You are given a **0-indexed** integer array \`security\`, where \`security[i]\` is the number of guards on duty on the \`i\`th day. The days are numbered starting from \`0\`. You are also given an integer \`time\`.

The \`i\`th day is a good day to rob the bank if:

- There are at least \`time\` days before and after day \`i\`,
- The number of guards from day \`i - time\` to day \`i\` is **non-increasing**, and
- The number of guards from day \`i\` to day \`i + time\` is **non-decreasing**.

Return a list of **all** days that are good days to rob the bank. The order of the output does not matter.`,
  constraints: [
    '`1 <= security.length <= 10^5`',
    '`0 <= security[i] <= 10^5`',
    '`0 <= time <= 10^5`',
  ],
  examples: [
    {
      input: 'security = [5,3,3,3,5,6,2], time = 2',
      output: '[2,3]',
      explanation: 'Days 2 and 3 are good: day 2 has non-increasing [5,3,3] before and non-decreasing [3,3,5] after; day 3 similarly.',
    },
    {
      input: 'security = [1,1,1,1,1], time = 0',
      output: '[0,1,2,3,4]',
      explanation: 'With time=0, every day is a good day.',
    },
    {
      input: 'security = [1,2,3,4,5,6], time = 2',
      output: '[]',
      explanation: 'No day has a non-increasing prefix of length 2 before it.',
    },
  ],
  hints: [
    'Precompute left[i] = the length of the longest non-increasing consecutive run ending at i (counting how many steps back remain non-increasing).',
    'Precompute right[i] = the length of the longest non-decreasing consecutive run starting at i.',
    'Day i is good if left[i] >= time and right[i] >= time. Both arrays can be computed in O(n) with a single pass each.',
  ],
  functionName: 'goodDaysToRobBank',
  params: ['security', 'time'],
  starterCode: {
    javascript: `function goodDaysToRobBank(security, time) {

}`,
    typescript: `function goodDaysToRobBank(security: number[], time: number): number[] {

}`,
    python: `def goodDaysToRobBank(security, time):
    pass`,
  },
  visibleTests: [
    { args: [[5, 3, 3, 3, 5, 6, 2], 2], expected: [2, 3] },
    { args: [[1, 1, 1, 1, 1], 0], expected: [0, 1, 2, 3, 4] },
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: [0] },
    { args: [[3, 2, 1, 0, 1, 2, 3], 3], expected: [3] },
    { args: [[5, 3, 3, 3, 5, 6, 2], 0], expected: [0, 1, 2, 3, 4, 5, 6] },
    { args: [[10, 8, 6, 4, 4, 6, 8, 10], 2], expected: [3, 4] },
    { args: [[2, 2, 2], 1], expected: [1] },
    { args: [[5, 5, 5, 5, 5], 2], expected: [2] },
  ],
};
