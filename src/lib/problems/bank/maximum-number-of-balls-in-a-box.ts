import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-balls-in-a-box',
  title: 'Maximum Number of Balls in a Box',
  difficulty: 'easy',
  tags: ['hash-map', 'math'],
  description: `You are working in a ball factory. You have \`n\` boxes numbered from \`lowLimit\` to \`highLimit\` inclusive (that is, there are \`highLimit - lowLimit + 1\` boxes). A ball with number \`i\` is placed in box number equal to the **sum of the digits** of \`i\`.

For example, ball \`321\` is placed in box \`3 + 2 + 1 = 6\`.

Return the **maximum** number of balls any one box contains.`,
  constraints: [
    '1 <= lowLimit <= highLimit <= 10^5',
  ],
  examples: [
    {
      input: 'lowLimit = 1, highLimit = 10',
      output: '2',
      explanation: 'Box 1 has balls 1 and 10 (digit sum 1 and 1+0=1). Box 2 has ball 2. ... Box 9 has ball 9. Max is 2.',
    },
    {
      input: 'lowLimit = 5, highLimit = 15',
      output: '2',
      explanation: 'Box 6 has balls 6 and 15 (1+5=6). Box 5, 7–9 each have 2 balls too. Max is 2.',
    },
    {
      input: 'lowLimit = 19, highLimit = 28',
      output: '2',
      explanation: 'Each box from 10–19 (digit sum range 1–10) gets at most 2 balls.',
    },
  ],
  hints: [
    'For each ball number i from lowLimit to highLimit, compute its digit sum and increment a frequency map.',
    'The digit sum of a number up to 10^5 is at most 9+9+9+9+9 = 45, so you only need 46 buckets.',
    'Return the maximum value in the frequency map.',
  ],
  functionName: 'countBalls',
  params: ['lowLimit', 'highLimit'],
  starterCode: {
    javascript: `function countBalls(lowLimit, highLimit) {

}`,
    python: `def countBalls(lowLimit, highLimit):
    pass`,
  },
  visibleTests: [
    { args: [1, 10], expected: 2 },
    { args: [5, 15], expected: 2 },
    { args: [19, 28], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [100, 100], expected: 1 },
    { args: [1, 100], expected: 10 },
    { args: [1, 1000], expected: 75 },
    { args: [44, 55], expected: 2 },
    { args: [1, 9], expected: 1 },
    { args: [1, 50000], expected: 3256 },
  ],
};
