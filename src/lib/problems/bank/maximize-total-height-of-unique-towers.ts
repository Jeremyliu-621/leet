import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-total-height-of-unique-towers',
  title: 'Maximize the Total Height of Unique Towers',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You have \`n\` towers, each of which must have a **distinct** height. You are given an array \`maximumHeight\` where \`maximumHeight[i]\` is the maximum height that tower \`i\` can have.

Return the **maximum possible total height** of all towers, or \`-1\` if it is impossible to assign distinct heights.

Each tower must have a height of at least \`1\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= maximumHeight[i] <= 10^9',
  ],
  examples: [
    {
      input: 'maximumHeight = [2, 3, 4, 3]',
      output: '10',
      explanation: 'Assign heights [1, 2, 3, 4] — all distinct, each within limit. Total = 10.',
    },
    {
      input: 'maximumHeight = [15, 10]',
      output: '25',
      explanation: 'Assign heights [14, 10] or [15, 10]. Maximum total = 25.',
    },
    {
      input: 'maximumHeight = [2, 2, 1]',
      output: '-1',
      explanation: 'Need 3 distinct heights from ≤2, ≤2, ≤1. Impossible — at most 2 are available.',
    },
  ],
  hints: [
    'Sort towers by maximumHeight in descending order. The tower with the highest cap should get the highest height.',
    'Greedily assign: the first tower gets its maximum. Each subsequent tower gets min(maximumHeight[i], prev - 1) to stay below the previous and within bounds.',
    'If the assigned height ever drops below 1, it\'s impossible. Otherwise sum up all assigned heights.',
  ],
  functionName: 'maximumTotalSum',
  params: ['maximumHeight'],
  starterCode: {
    javascript: 'function maximumTotalSum(maximumHeight) {\n  \n}\n',
    typescript: 'function maximumTotalSum(maximumHeight: number[]): number {\n  \n}\n',
    python: 'def maximumTotalSum(maximumHeight):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 4, 3]], expected: 10 },
    { args: [[15, 10]], expected: 25 },
    { args: [[2, 2, 1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: -1 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[5, 5, 5]], expected: 12 },
    { args: [[10, 1]], expected: 11 },
    { args: [[1000000000, 1000000000, 1000000000]], expected: 2999999997 },
  ],
};
