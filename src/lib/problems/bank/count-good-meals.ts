import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-meals',
  title: 'Count Good Meals',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays', 'math'],
  description: `A **good meal** is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.

You can pick **any** two different foods to make a good meal.

Given an array of integers \`deliciousness\` where \`deliciousness[i]\` is the deliciousness of the \`i\`-th item of food, return the number of different good meals you can make from this list **modulo** \`10^9 + 7\`.

Note that items with different indices are considered different even if they have the same deliciousness value.`,
  constraints: [
    '1 <= deliciousness.length <= 10^5',
    '0 <= deliciousness[i] <= 2^20',
  ],
  examples: [
    {
      input: 'deliciousness = [1,3,5,7,9]',
      output: '4',
      explanation:
        'The good pairs are (1,3) with sum 4=2^2, (1,7) with sum 8=2^3, (3,5) with sum 8=2^3, and (7,9) with sum 16=2^4.',
    },
    {
      input: 'deliciousness = [1,1,1,3,3,3,7]',
      output: '15',
      explanation:
        'Three pairs (1,1) sum to 2, nine pairs (1,3) sum to 4, and three pairs (1,7) sum to 8, giving 3+9+3=15 good meals.',
    },
  ],
  hints: [
    'As you process each element, for each power of two from 2^0 to 2^21, check whether (power - current element) already exists in a frequency map.',
    'For each element d processed, count how many prior elements equal (power - d) for all 22 powers. Add those counts, then insert d into the map.',
    'The deliciousness values are at most 2^20, so the maximum possible sum is 2*2^20 = 2^21. Only powers from 2^0 through 2^21 need to be checked.',
  ],
  functionName: 'countPairs',
  params: ['deliciousness'],
  starterCode: {
    javascript: 'function countPairs(deliciousness) {\n  \n}\n',
    python: 'def countPairs(deliciousness):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,5,7,9]], expected: 4 },
    { args: [[1,1,1,3,3,3,7]], expected: 15 },
  ],
  hiddenTests: [
    // empty → 0 pairs
    { args: [[]], expected: 0 },
    // single element → no pairs
    { args: [[8]], expected: 0 },
    // two equal elements summing to power of 2: [1,1]=2=2^1 → 1 pair
    { args: [[1,1]], expected: 1 },
    // two equal elements: [2,2]=4=2^2 → 1 pair
    { args: [[2,2]], expected: 1 },
    // three equal elements: [4,4,4] → C(3,2)=3 pairs, each sum=8=2^3
    { args: [[4,4,4]], expected: 3 },
    // no pairs sum to power of 2: [1,2,4,8] → 1+2=3, 1+4=5, 1+8=9, 2+4=6, 2+8=10, 4+8=12 → none
    { args: [[1,2,4,8]], expected: 0 },
    // simple pair: [3,5]=8=2^3 → 1 pair
    { args: [[3,5]], expected: 1 },
  ],
};
