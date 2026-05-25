import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-consecutive-odds',
  title: 'Three Consecutive Odds',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`arr\`, return \`true\` if there are three consecutive odd numbers in the array. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= arr.length <= 1000',
    '1 <= arr[i] <= 1000',
  ],
  examples: [
    {
      input: 'arr = [2,6,4,1]',
      output: 'false',
      explanation: 'There are no three consecutive odd numbers.',
    },
    {
      input: 'arr = [1,2,34,3,4,5,7,23,12]',
      output: 'true',
      explanation: '[5,7,23] are three consecutive odd numbers.',
    },
  ],
  hints: [
    'Count consecutive odd numbers. Reset count to 0 when you encounter an even number.',
    'Return true as soon as count reaches 3.',
    'One-liner: check any window of 3 consecutive elements: arr.some((_, i) => i >= 2 && arr[i]%2 && arr[i-1]%2 && arr[i-2]%2)',
  ],
  functionName: 'threeConsecutiveOdds',
  params: ['arr'],
  starterCode: {
    javascript: `function threeConsecutiveOdds(arr) {

}`,
    python: `def threeConsecutiveOdds(arr):
    pass`,
  },
  visibleTests: [
    { args: [[2, 6, 4, 1]], expected: false },
    { args: [[1, 2, 34, 3, 4, 5, 7, 23, 12]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 3, 5]], expected: true },
    { args: [[1, 3]], expected: false },
    { args: [[1]], expected: false },
    { args: [[2, 1, 3, 5, 2]], expected: true },
  ],
};
