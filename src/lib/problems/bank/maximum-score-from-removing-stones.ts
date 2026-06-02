import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-from-removing-stones',
  title: 'Maximum Score From Removing Stones',
  difficulty: 'easy',
  tags: ['math', 'heap'],
  description: `You are playing a solitaire game with **three piles** of stones of sizes \`a\`, \`b\`, and \`c\` respectively.

Each turn you may remove one stone from **two different non-empty piles**, scoring one point.

Return the **maximum number of points** you can score.`,
  constraints: [
    '`1 <= a, b, c <= 10^5`',
  ],
  examples: [
    {
      input: 'a = 2, b = 4, c = 6',
      output: '6',
      explanation: 'Remove from (a,c) twice and (b,c) four times: 2+4=6 turns.',
    },
    {
      input: 'a = 4, b = 4, c = 6',
      output: '7',
      explanation: 'Remove from (a,c) and (b,c) alternately: (4+4+6=14, 14//2=7).',
    },
    {
      input: 'a = 1, b = 8, c = 8',
      output: '8',
      explanation: 'Remove from (b,c) for 8 rounds; only 1+8+8=17 stones total, floor(17/2)=8.',
    },
  ],
  hints: [
    'If the largest pile is bigger than the sum of the other two, you can only exhaust the other two against it.',
    'Otherwise the limiting factor is the total: floor((a+b+c)/2).',
    'Answer = min(floor((a+b+c)/2), (a+b+c) - max(a,b,c)).',
  ],
  functionName: 'maximumScore',
  params: ['a', 'b', 'c'],
  starterCode: {
    javascript: `function maximumScore(a, b, c) {
  const total = a + b + c;
  return Math.min(Math.floor(total / 2), total - Math.max(a, b, c));
}`,
    typescript: `function maximumScore(a: number, b: number, c: number): number {
  const total = a + b + c;
  return Math.min(Math.floor(total / 2), total - Math.max(a, b, c));
}`,
    python: `def maximumScore(a, b, c):
    total = a + b + c
    return min(total // 2, total - max(a, b, c))`,
  },
  visibleTests: [
    { args: [2, 4, 6], expected: 6 },
    { args: [4, 4, 6], expected: 7 },
    { args: [1, 8, 8], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 1 },
    { args: [1, 1, 2], expected: 2 },
    { args: [5, 5, 5], expected: 7 },
    { args: [1, 1, 100], expected: 2 },
    { args: [10, 10, 10], expected: 15 },
    { args: [3, 4, 5], expected: 6 },
  ],
};
