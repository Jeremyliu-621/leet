import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rabbits-in-forest',
  title: 'Rabbits in Forest',
  difficulty: 'medium',
  tags: ['math', 'hash-map'],
  description: `There is a forest with an unknown number of rabbits. We asked \`n\` rabbits **"How many rabbits have the same color as you?"** and collected their answers in an integer array \`answers\` where \`answers[i]\` is the answer of the \`i\`-th rabbit.

Given the array \`answers\`, return the **minimum** number of rabbits that could be in the forest.`,
  constraints: [
    '`1 <= answers.length <= 1000`',
    '`0 <= answers[i] < 1000`',
  ],
  examples: [
    {
      input: 'answers = [1,1,2]',
      output: '5',
      explanation:
        'The two rabbits that answered "1" could be the same color. The rabbit that answered "2" belongs to a group of 3 (size = answer + 1). Total: 2 + 3 = 5.',
    },
    {
      input: 'answers = [10,10,10]',
      output: '11',
      explanation:
        'All three say 10. They could all be in the same group of 11. Minimum is 11.',
    },
  ],
  hints: [
    'If a rabbit says `k`, it belongs to a group of exactly `k + 1` rabbits. Group the answers by value using a frequency map.',
    'For a group of rabbits all answering `k`: you need `ceil(count / (k+1))` distinct color groups, each of size `k+1`.',
    'Sum up `ceil(freq[k] / (k+1)) * (k+1)` over all distinct answer values `k`.',
  ],
  functionName: 'numRabbits',
  params: ['answers'],
  starterCode: {
    javascript: `function numRabbits(answers) {

}`,
    typescript: "function numRabbits(answers: number[]): number {\n\n}",

    python: `def numRabbits(answers):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 2]], expected: 5 },
    { args: [[10, 10, 10]], expected: 11 },
    { args: [[0, 0, 1, 1, 1]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[0]], expected: 1 },
    { args: [[0, 0, 0]], expected: 3 },
    { args: [[1, 0, 1, 0, 0]], expected: 5 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[2, 2, 2, 2]], expected: 6 },
    { args: [[3, 3, 3, 3, 3]], expected: 8 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 6 },
  ],
};
