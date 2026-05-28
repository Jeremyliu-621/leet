import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-balls-in-box',
  title: 'Maximum Number of Balls in a Box',
  difficulty: 'easy',
  tags: ['math', 'hash-map'],
  description: `You are working in a ball factory where you have \`n\` balls numbered from \`lowLimit\` to \`highLimit\` (**inclusive**) and an infinite number of boxes numbered from \`1\` to \`infinity\`.

Your job at the factory is to put each ball in the box with a number equal to the **sum of digits** of the ball's number. For example, ball number 321 is placed in box 6 (3 + 2 + 1 = 6).

Return the **maximum number of balls** in a single box.`,
  constraints: [
    '1 <= lowLimit <= highLimit <= 10^5',
  ],
  examples: [
    {
      input: 'lowLimit = 1, highLimit = 10',
      output: '2',
      explanation: 'Box 1: ball 1 and ball 10 (1+0=1). Box 2: ball 2. ... Box 9: ball 9. Box 1 has 2 balls — the max.',
    },
    {
      input: 'lowLimit = 5, highLimit = 15',
      output: '2',
      explanation: 'Box 6: balls 6 and 15 (1+5=6). Box 5,7,8,9 have 1 ball each. Box 1: ball 10. Box 2: 11. Box 3: 12. Box 4: 13. Box 5: 5,14. Box 6: 6,15. Box 7: 7. Box 8: 8. Box 9: 9. Max = 2.',
    },
    {
      input: 'lowLimit = 19, highLimit = 28',
      output: '2',
      explanation: 'Sum of digits: 19→10, 20→2, 21→3, 22→4, 23→5, 24→6, 25→7, 26→8, 27→9, 28→10. Box 10 has 2 balls (19 and 28). Max = 2.',
    },
  ],
  hints: [
    'For each number from lowLimit to highLimit, compute the digit sum and increment a frequency counter for that box.',
    'The digit sum of a number can be computed by repeatedly taking the remainder mod 10.',
    'Return the maximum value in your frequency counter.',
  ],
  functionName: 'countBalls',
  params: ['lowLimit', 'highLimit'],
  starterCode: {
    javascript: 'function countBalls(lowLimit, highLimit) {\n  // your code here\n}\n',
    typescript: "function countBalls(lowLimit: number, highLimit: number): number {\n  // your code here\n}",

    python: 'def countBalls(lowLimit, highLimit):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [1, 10], expected: 2 },
    { args: [5, 15], expected: 2 },
    { args: [19, 28], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 9], expected: 1 },
    { args: [1, 100], expected: 10 },
    { args: [100, 100], expected: 1 },
    { args: [99, 100], expected: 1 },
  ],
};
