import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-teams',
  title: 'Count Number of Teams',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There are \`n\` soldiers standing in a line. Each soldier is assigned a **unique** \`rating\` value.

You have to form a team of 3 soldiers amongst them under the following rules:

- Choose 3 soldiers with index \`i\`, \`j\`, \`k\` and rating \`rating[i]\`, \`rating[j]\`, \`rating[k]\`.
- A team is valid if: (\`0 <= i < j < k < n\`) and (\`rating[i] < rating[j] < rating[k]\`) or (\`rating[i] > rating[j] > rating[k]\`).

Return the number of teams you can form given the conditions. (Soldiers can be part of multiple teams.)`,
  constraints: [
    'n == rating.length',
    '3 <= n <= 1000',
    '1 <= rating[i] <= 10^5',
    'All the integers in rating are unique.',
  ],
  examples: [
    {
      input: 'rating = [2,5,3,4,1]',
      output: '3',
      explanation: 'Valid teams: (2,3,4), (5,3,1), (5,4,1).',
    },
    {
      input: 'rating = [2,1,3]',
      output: '0',
      explanation: 'No valid monotone triple exists: (2,1,3) has 2>1<3, not monotone increasing or decreasing.',
    },
  ],
  hints: [
    'For each middle element j, count how many elements to its left are smaller (leftSmall) and larger (leftLarge).',
    'Then count elements to its right that are larger (rightLarge) and smaller (rightSmall).',
    'Add leftSmall * rightLarge + leftLarge * rightSmall to the answer.',
  ],
  functionName: 'numTeams',
  params: ['rating'],
  starterCode: {
    javascript: `function numTeams(rating) {

}`,
    typescript: "function numTeams(rating: number[]): number {\n\n}",

    python: `def numTeams(rating):
    pass`,
  },
  visibleTests: [
    { args: [[2, 5, 3, 4, 1]], expected: 3 },
    { args: [[2, 1, 3]], expected: 0 },

  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[4, 3, 2, 1]], expected: 4 },
    { args: [[1, 3, 2, 4]], expected: 2 },
    { args: [[3, 1, 2]], expected: 0 },
  ],
};
