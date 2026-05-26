import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-closest-time',
  title: 'Next Closest Time',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a time represented in the format \`"HH:MM"\`, form the next closest time by reusing the digits of the current time. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, \`"01:34"\`, \`"12:09"\` are all valid. \`"1:34"\`, \`"12:9"\` are all invalid.

Return the next closest time in \`"HH:MM"\` format.`,
  constraints: [
    'time.length == 5',
    'time is a valid time in the format "HH:MM".',
    '0 <= HH < 24',
    '0 <= MM < 60',
  ],
  examples: [
    {
      input: 'time = "19:34"',
      output: '"19:39"',
      explanation: 'The next closest time choosing from digits 1, 9, 3, 4 is 19:39 (5 minutes later). It is not 19:33, because this occurs 23 hours and 59 minutes later.',
    },
    {
      input: 'time = "23:59"',
      output: '"22:22"',
      explanation: 'The next closest time choosing from digits 2, 3, 5, 9 is 22:22. It may be assumed that the returned time is next day\'s time since it is smaller, which goes past midnight.',
    },
  ],
  hints: [
    'Try all possible HH:MM combinations using only digits present in the input.',
    'Convert each valid candidate to total minutes, then find the smallest total minutes strictly greater than the input time. If none exist, wrap around to the smallest valid time.',
    'There are at most 4^4 = 256 combinations to check, so brute force is fine.',
  ],
  functionName: 'nextClosestTime',
  params: ['time'],
  starterCode: {
    javascript: `function nextClosestTime(time) {

}`,
    python: `def nextClosestTime(time):
    `,
  },
  visibleTests: [
    { args: ['19:34'], expected: '19:39' },
    { args: ['23:59'], expected: '22:22' },
  ],
  hiddenTests: [
    { args: ['00:00'], expected: '00:00' },
    { args: ['13:55'], expected: '15:11' },
    { args: ['12:32'], expected: '12:33' },
    { args: ['01:34'], expected: '01:40' },
    { args: ['22:22'], expected: '22:22' },
    { args: ['09:59'], expected: '00:00' },
  ],
};
