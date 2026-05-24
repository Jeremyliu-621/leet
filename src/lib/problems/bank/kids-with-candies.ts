import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kids-with-candies',
  title: 'Kids With the Greatest Number of Candies',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` kids with candies. You are given an integer array \`candies\`, where each \`candies[i]\` represents the number of candies the \`i\`th kid has, and an integer \`extraCandies\`, denoting the number of extra candies that you have.

Return a boolean array \`result\` of length \`n\`, where \`result[i]\` is \`true\` if, after giving the \`i\`th kid all the \`extraCandies\`, they will have the **greatest** number of candies among all the kids, or \`false\` otherwise.

Note that **multiple** kids can have the greatest number of candies.`,
  constraints: [
    '`n == candies.length`',
    '`2 <= n <= 100`',
    '`1 <= candies[i] <= 100`',
    '`1 <= extraCandies <= 50`',
  ],
  examples: [
    {
      input: 'candies = [2,3,5,1,3], extraCandies = 3',
      output: '[true,true,true,false,true]',
      explanation: 'Kid 0: 2+3=5 (max). Kid 1: 3+3=6 (max). Kid 2: 5+3=8 (max). Kid 3: 1+3=4 (not max). Kid 4: 3+3=6 (max).',
    },
    {
      input: 'candies = [4,2,1,1,2], extraCandies = 1',
      output: '[true,false,false,false,false]',
    },
  ],
  hints: [
    'Find the maximum value in candies. For each kid, check if candies[i] + extraCandies >= max.',
  ],
  functionName: 'kidsWithCandies',
  params: ['candies', 'extraCandies'],
  starterCode: {
    javascript: `function kidsWithCandies(candies, extraCandies) {

}`,
    python: `def kidsWithCandies(candies, extraCandies):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 5, 1, 3], 3], expected: [true, true, true, false, true] },
    { args: [[4, 2, 1, 1, 2], 1], expected: [true, false, false, false, false] },
  ],
  hiddenTests: [
    { args: [[12, 1, 12], 10], expected: [true, false, true] },
    { args: [[1, 1], 1], expected: [true, true] },
    { args: [[5, 5, 5], 0], expected: [true, true, true] },
    { args: [[3, 7, 2, 5], 2], expected: [false, true, false, true] },
  ],
};
