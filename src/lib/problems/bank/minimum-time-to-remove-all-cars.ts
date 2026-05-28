import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-remove-all-cars',
  title: 'Minimum Time to Remove All Cars Containing Illegal Goods',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays', 'simulation'],
  description: `You are given a **0-indexed** binary string \`s\` which represents a sequence of train cars. \`s[i] = '0'\` denotes that the \`i\`-th car does **not** contain illegal goods; \`s[i] = '1'\` denotes that the \`i\`-th car **does** contain illegal goods.

As the train dispatcher, you must remove **all** cars containing illegal goods. You have three operations:

1. Remove a car from the **left** end — costs **1** unit of time.
2. Remove a car from the **right** end — costs **1** unit of time.
3. Remove a car from **anywhere** — costs **2** units of time.

Return the **minimum time** to remove all the cars containing illegal goods.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's[i] is either \'0\' or \'1\'',
  ],
  examples: [
    {
      input: 's = "1100101"',
      output: '5',
      explanation: 'One optimal approach: remove 4 cars from left (cost 4), then remove the single "1" in the middle using operation 3 (cost 2) — total 6. Better: remove 2 from left (cost 2), remove middle "1" (cost 2), remove last from right (cost 1) — total 5.',
    },
    {
      input: 's = "0010"',
      output: '2',
      explanation: 'Remove the two rightmost cars (cost 2). Or remove the "1" using op 3 (cost 2).',
    },
  ],
  hints: [
    'Define `left[i]` = minimum cost to remove all "1"s from s[0..i] using only left-end removal and middle removal. Similarly `right[i]` = minimum cost for s[i..n-1] using only right-end removal and middle removal.',
    '`left[i] = min(left[i-1] + 2*(s[i]==\'1\'), i+1)`. The first option removes s[i] in the middle (adding 2 if it\'s a 1); the second option removes all cars from 0 to i from the left (cost i+1).',
    'Similarly `right[i] = min(right[i+1] + 2*(s[i]==\'1\'), n-i)`. The answer is `min over all split points k` of `left[k] + right[k+1]`, or all-left (left[n-1]) or all-right (right[0]).',
  ],
  functionName: 'minimumTime',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumTime(s) {\n  \n}\n',
    python: 'def minimumTime(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['1100101'], expected: 5 },
    { args: ['0010'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 1 },
    { args: ['11'], expected: 2 },
    { args: ['0000'], expected: 0 },
    { args: ['1111'], expected: 4 },
    { args: ['010'], expected: 2 },
    { args: ['0110110'], expected: 6 },
  ],
};
