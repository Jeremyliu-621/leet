import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-n-unique-integers-sum-to-zero',
  title: 'Find N Unique Integers Sum up to Zero',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer \`n\`, return **any** array containing \`n\` **unique** integers such that they add up to \`0\`.`,
  constraints: ['`1 <= n <= 1000`'],
  examples: [
    {
      input: 'n = 5',
      output: '[-7,-1,1,3,4]',
      explanation: 'Any array of length 5 that sums to 0 is accepted.',
    },
    {
      input: 'n = 3',
      output: '[-1,0,1]',
    },
    {
      input: 'n = 1',
      output: '[0]',
    },
  ],
  hints: [
    'Use integers 1 through n-1, then add their negated sum as the nth element.',
  ],
  functionName: 'sumZero',
  params: ['n'],
  starterCode: {
    javascript: `function sumZero(n) {

}`,
    python: `def sumZero(n):
    pass`,
  },
  visibleTests: [
    { args: [5], expected: [1, 2, 3, 4, -10] },
    { args: [3], expected: [1, 2, -3] },
    { args: [1], expected: [0] },
  ],
  hiddenTests: [
    { args: [2], expected: [1, -1] },
    { args: [4], expected: [1, 2, 3, -6] },
    { args: [6], expected: [1, 2, 3, 4, 5, -15] },
  ],
};
