import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-remove-cars-illegal-goods',
  title: 'Minimum Time to Remove All Cars Containing Illegal Goods',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** binary string \`s\` where \`s[i] = '1'\` denotes that the \`i\`-th car contains illegal goods, and \`s[i] = '0'\` denotes that it does not.

You can perform **three types** of operations **any number of times**:

1. Remove a car from the **left** end of the string. This operation takes **1 unit** of time.
2. Remove a car from the **right** end of the string. This operation takes **1 unit** of time.
3. Remove any single car that contains illegal goods from **anywhere** in the string. This operation takes **2 units** of time.

Return the **minimum time** to remove all cars containing illegal goods.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's[i] is either \'0\' or \'1\'',
  ],
  examples: [
    {
      input: 's = "1100101"',
      output: '5',
      explanation: 'Remove prefix "11" (cost 2) then remove the suffix "101" (cost 3). Total = 5.',
    },
    {
      input: 's = "0010"',
      output: '2',
      explanation: 'Remove the single illegal car at index 2 using operation 3 (cost 2).',
    },
  ],
  hints: [
    'Think about splitting the string into three parts: a prefix removed by operation 1, a suffix removed by operation 2, and a middle portion where illegal cars are removed one by one.',
    'Define left[i] = minimum cost to clear all \'1\'s from s[0..i]. Then left[i] = left[i-1] if s[i]=\'0\', or min(left[i-1]+2, i+1) if s[i]=\'1\'. Similarly define right[i] for the suffix.',
    'The answer is the minimum over all split points of left[i] + right[i+1].',
  ],
  functionName: 'minimumTime',
  params: ['s'],
  starterCode: {
    javascript: `function minimumTime(s) {

}`,
    typescript: 'function minimumTime(s: string): number {\n\n}',
    python: `def minimumTime(s):
    pass`,
  },
  visibleTests: [
    { args: ['1100101'], expected: 5 },
    { args: ['0010'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 1 },
    { args: ['11'], expected: 2 },
    { args: ['0110'], expected: 3 },
    { args: ['111'], expected: 3 },
    { args: ['00000'], expected: 0 },
    { args: ['101'], expected: 2 },
    { args: ['1001'], expected: 2 },
  ],
};
