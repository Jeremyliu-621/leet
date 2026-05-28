import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-candies-allocated-to-k-children',
  title: 'Maximum Candies Allocated to K Children',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`candies\`, where each \`candies[i]\` represents a pile of candies of size \`candies[i]\`. You can divide each pile into any number of **sub-piles**, but you **cannot** merge two piles together.

Given an integer \`k\`, return the **maximum** number of candies each child can get if you distribute candies to \`k\` children such that each child gets the **same** number of candies.`,
  constraints: [
    '1 <= candies.length <= 10^5',
    '1 <= candies[i] <= 10^7',
    '1 <= k <= 10^12',
  ],
  examples: [
    {
      input: 'candies = [5,8,6], k = 3',
      output: '5',
      explanation: 'Give 5 from pile 0 (5), 5 from pile 1 (8, leftover 3), 5 from pile 2 (6, leftover 1). 5 candies each.',
    },
    {
      input: 'candies = [2,5], k = 11',
      output: '0',
      explanation: 'There are only 7 candies total, not enough for 11 children to get at least 1.',
    },
  ],
  hints: [
    'Binary search on the answer: the number of candies each child gets.',
    'For a given count m, check if we can give m candies to at least k children.',
    'A pile of size p can supply floor(p / m) children if each gets m candies.',
    'Sum floor(candies[i] / m) across all piles; if the sum >= k, then m is feasible.',
    'Binary search in range [1, max(candies)]. Return the largest feasible m.',
  ],
  functionName: 'maximumCandies',
  params: ['candies', 'k'],
  starterCode: {
    javascript: `function maximumCandies(candies, k) {

}`,
    typescript: "function maximumCandies(candies: number[], k: number): number {\n\n}",

    python: `def maximumCandies(candies, k):
    pass`,
  },
  visibleTests: [
    { args: [[5, 8, 6], 3], expected: 5 },
    { args: [[2, 5], 11], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 10], 5], expected: 3 },
    { args: [[10], 3], expected: 3 },
    { args: [[4, 7, 5], 16], expected: 1 },
    { args: [[1000000], 1000000], expected: 1 },
  ],
};
