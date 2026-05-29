import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-three-consecutive-odds',
  title: 'Check if Array Has Three Consecutive Odd Numbers',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `Given an integer array \`arr\`, return \`true\` if there are **three consecutive odd numbers** in the array. Otherwise, return \`false\`.`,
  constraints: [
    '`1 <= arr.length <= 1000`',
    '`1 <= arr[i] <= 1000`',
  ],
  examples: [
    {
      input: 'arr = [2,6,4,1]',
      output: 'false',
      explanation: 'There are no three consecutive odd numbers in the array.',
    },
    {
      input: 'arr = [1,2,34,3,4,5,7,23,12]',
      output: 'true',
      explanation: 'The three consecutive odd numbers are 5, 7, and 23.',
    },
    {
      input: 'arr = [1,3,5]',
      output: 'true',
      explanation: 'All three elements are odd and consecutive.',
    },
  ],
  hints: [
    'Keep a running count of consecutive odd numbers. Reset it to 0 whenever you encounter an even number.',
    'If the running count ever reaches 3, return `true` immediately.',
    '`let count = 0; for (const x of arr) { if (x % 2 === 1) { if (++count >= 3) return true; } else count = 0; } return false;`',
  ],
  functionName: 'threeConsecutiveOdds',
  params: ['arr'],
  starterCode: {
    javascript: `function threeConsecutiveOdds(arr) {

}`,
    typescript: 'function threeConsecutiveOdds(arr: number[]): boolean {\n\n}',
    python: `def threeConsecutiveOdds(arr):
    pass`,
  },
  visibleTests: [
    { args: [[2, 6, 4, 1]], expected: false },
    { args: [[1, 2, 34, 3, 4, 5, 7, 23, 12]], expected: true },
    { args: [[1, 3, 5]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1, 3]], expected: false },
    { args: [[2, 4, 6]], expected: false },
    { args: [[1, 3, 5, 7]], expected: true },
    { args: [[2, 1, 3, 5, 2]], expected: true },
  ],
};
