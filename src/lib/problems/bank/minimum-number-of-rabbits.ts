import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-rabbits',
  title: 'Rabbits in Forest',
  difficulty: 'medium',
  tags: ['hash-map', 'math'],
  description: `There is a forest with an unknown number of rabbits. We asked n rabbits **"How many rabbits have the same color as you?"** and collected the answers in an integer array \`answers\` where \`answers[i]\` is the answer of the \`i\`-th rabbit.

Given the array \`answers\`, return the **minimum** number of rabbits that could be in the forest.

**Key insight:** If a rabbit says \`k\`, then there are at least \`k + 1\` rabbits of that color. Among rabbits saying the same \`k\`, they *could* be the same color — but at most \`k + 1\` of them can share a color. Use \`⌈count / (k+1)⌉\` groups, each of size \`k+1\`.`,
  constraints: [
    '`1 <= answers.length <= 1000`',
    '`0 <= answers[i] < 1000`',
  ],
  examples: [
    {
      input: 'answers = [1,1,2]',
      output: '5',
      explanation: 'The two rabbits answering "1" could be the same color (2 rabbits). The rabbit answering "2" must be one of 3 rabbits of that color. So minimum = 2 + 3 = 5.',
    },
    {
      input: 'answers = [10,10,10]',
      output: '11',
      explanation: 'All three say "10", so they could all be the same color group of 11. Minimum = 11.',
    },
  ],
  hints: [
    'Count the frequency of each answer value.',
    'For rabbits answering k, they form groups of size k+1. If freq rabbits answer k, you need ⌈freq/(k+1)⌉ groups.',
    'Each group contributes k+1 rabbits to the total. Sum across all answer values.',
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
  ],
  hiddenTests: [
    { args: [[]], expected: 0 },
    { args: [[0]], expected: 1 },
    { args: [[0, 0, 1, 1, 1]], expected: 6 },
    { args: [[1, 0, 1, 0, 0]], expected: 5 },
    { args: [[1, 1, 1, 1, 1]], expected: 6 },
    { args: [[2, 2, 2, 3, 3, 3, 3]], expected: 7 },
  ],
};
