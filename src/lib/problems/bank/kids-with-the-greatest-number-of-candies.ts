import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kids-with-the-greatest-number-of-candies',
  title: 'Kids With the Greatest Number of Candies',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` kids with candies. You are given an integer array \`candies\`, where each \`candies[i]\` represents the number of candies the \`i\`th kid has, and an integer \`extraCandies\`, denoting the number of extra candies that you have.

Return *a boolean array* \`result\` *of length* \`n\`, where \`result[i]\` is \`true\` if, after giving the \`i\`th kid all the \`extraCandies\`, they will have the **greatest** number of candies among all the kids, or \`false\` otherwise.

Note that **multiple** kids can have the **greatest** number of candies.`,
  constraints: [
    'n == candies.length',
    '2 <= n <= 100',
    '1 <= candies[i] <= 100',
    '1 <= extraCandies <= 50',
  ],
  examples: [
    {
      input: 'candies = [2,3,5,1,3], extraCandies = 3',
      output: '[true,true,true,false,true]',
      explanation: 'max=5. 2+3=5≥5✓, 3+3=6✓, 5+3=8✓, 1+3=4<5✗, 3+3=6✓.',
    },
    {
      input: 'candies = [4,2,1,1,2], extraCandies = 1',
      output: '[true,false,false,false,false]',
      explanation: 'max=4. Only kid 0 can reach ≥4 with 1 extra.',
    },
    {
      input: 'candies = [12,1,12], extraCandies = 10',
      output: '[true,false,true]',
      explanation: 'max=12. Kid 0: 22≥12✓. Kid 1: 11<12✗. Kid 2: 22≥12✓.',
    },
  ],
  hints: [
    'Find the maximum value in the candies array first.',
    'Then for each kid, check if candies[i] + extraCandies >= maxCandies.',
    'Return a boolean array with the results.',
  ],
  functionName: 'kidsWithCandies',
  params: ['candies', 'extraCandies'],
  starterCode: {
    javascript: `function kidsWithCandies(candies, extraCandies) {\n\n}`,
    python: `def kidsWithCandies(candies, extraCandies: int):\n    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 5, 1, 3], 3], expected: [true, true, true, false, true] },
    { args: [[4, 2, 1, 1, 2], 1], expected: [true, false, false, false, false] },
    { args: [[12, 1, 12], 10], expected: [true, false, true] },
  ],
  hiddenTests: [
    { args: [[1, 5], 5], expected: [true, true] },
    { args: [[5, 5], 1], expected: [true, true] },
    { args: [[1, 3], 1], expected: [false, true] },
    { args: [[10, 5, 3], 1], expected: [true, false, false] },
    { args: [[1, 1, 1, 1], 1], expected: [true, true, true, true] },
    { args: [[10, 1, 1, 1], 9], expected: [true, true, true, true] },
  ],
};
