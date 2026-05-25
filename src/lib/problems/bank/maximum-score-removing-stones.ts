import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-removing-stones',
  title: 'Maximum Score From Removing Stones',
  difficulty: 'medium',
  tags: ['math', 'heap'],
  description: `You are playing a solitaire game with **three piles** of stones of sizes \`a\`, \`b\`, and \`c\` respectively. Each turn you choose two **different non-empty** piles, remove one stone from each, and add 1 to your score. The game stops when there are **fewer than two non-empty piles** left.

Return the **maximum** score you can get.`,
  constraints: [
    '1 <= a, b, c <= 10^5',
  ],
  examples: [
    {
      input: 'a = 2, b = 4, c = 6',
      output: '6',
      explanation: 'The maximum is achieved by taking from the two largest piles alternately.',
    },
    {
      input: 'a = 4, b = 4, c = 6',
      output: '7',
    },
    {
      input: 'a = 1, b = 8, c = 8',
      output: '8',
    },
  ],
  hints: [
    'If the largest pile ≥ sum of the other two, you can only pair it with each of the others until one runs out.',
    'Otherwise, all three piles can be reduced together and the answer is floor((a+b+c)/2).',
    'Sort the three values to easily identify the largest.',
  ],
  functionName: 'maximumScore',
  params: ['a', 'b', 'c'],
  starterCode: {
    javascript: 'function maximumScore(a, b, c) {\n\n}\n',
    python: 'def maximumScore(a, b, c):\n    pass\n',
  },
  visibleTests: [
    { args: [2, 4, 6], expected: 6 },
    { args: [4, 4, 6], expected: 7 },
    { args: [1, 8, 8], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 1 },
    { args: [1, 1, 2], expected: 2 },
    { args: [3, 3, 3], expected: 4 },
    { args: [1, 2, 10], expected: 3 },
  ],
};
