import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-time-for-given-digits',
  title: 'Largest Time for Given Digits',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `Given an array \`arr\` of 4 digits, find the latest 24-hour time that can be made using each digit **exactly once**.

24-hour times are formatted as \`"HH:MM"\`, where \`HH\` is between \`00\` and \`23\`, and \`MM\` is between \`00\` and \`59\`. The earliest 24-hour time is \`00:00\`, and the latest is \`23:59\`.

Return the latest 24-hour time in \`"HH:MM"\` format. If no valid time can be made with these digits, return the empty string \`""\`.`,
  constraints: [
    '`arr.length == 4`',
    '`0 <= arr[i] <= 9`',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,4]',
      output: '"23:41"',
      explanation: 'The latest valid time is 23:41.',
    },
    {
      input: 'arr = [5,5,5,5]',
      output: '""',
      explanation: 'No valid 24-hour time can be formed — hours must be ≤ 23.',
    },
    {
      input: 'arr = [0,0,0,0]',
      output: '"00:00"',
      explanation: 'The only valid time is 00:00.',
    },
  ],
  hints: [
    'There are only 4! = 24 permutations of 4 digits — try all of them.',
    'For each permutation [a,b,c,d], the time is a*10+b : c*10+d. Check if a*10+b ≤ 23 and c*10+d ≤ 59.',
    'Track the maximum valid time found (as an integer or string comparison) and format it as "HH:MM".',
  ],
  functionName: 'largestTimeFromDigits',
  params: ['arr'],
  starterCode: {
    javascript: `function largestTimeFromDigits(arr) {

}`,
    typescript: `function largestTimeFromDigits(arr: number[]): string {

}`,
    python: `def largestTimeFromDigits(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: '23:41' },
    { args: [[5, 5, 5, 5]], expected: '' },
    { args: [[0, 0, 0, 0]], expected: '00:00' },
  ],
  hiddenTests: [
    { args: [[0, 2, 3, 0]], expected: '23:00' },
    { args: [[1, 9, 9, 7]], expected: '' },
    { args: [[2, 0, 6, 6]], expected: '06:26' },
    { args: [[0, 0, 1, 5]], expected: '15:00' },
    { args: [[2, 3, 5, 9]], expected: '23:59' },
    { args: [[2, 4, 6, 0]], expected: '20:46' },
  ],
};
