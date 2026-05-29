import type { Problem } from '../types';

export const problem: Problem = {
  id: 'finding-pairs-with-certain-difference',
  title: 'Finding Pairs With a Certain Difference',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\` where \`k > 0\`.

For each pair of integers \`(num1, num2)\` where \`num2 - num1 == k\`, count the number of such **distinct** pairs. A pair \`(num1, num2)\` is distinct if there is no other pair with the same values in the same relative order.

Return the count of distinct pairs \`(num1, num2)\` satisfying \`num2 - num1 == k\`.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 100',
    '1 <= k <= 99',
  ],
  examples: [
    {
      input: 'nums = [3,1,4,1,5], k = 2',
      output: '2',
      explanation: 'The distinct pairs with difference 2 are (1,3) and (3,5). Note (1,3) appears once even though 1 appears twice.',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 1',
      output: '4',
      explanation: 'Pairs: (1,2), (2,3), (3,4), (4,5).',
    },
    {
      input: 'nums = [1,3], k = 3',
      output: '0',
      explanation: '3-1=2, not equal to k=3.',
    },
  ],
  hints: [
    'Use a Set to deduplicate the numbers in nums.',
    'For each unique number x, check if x+k also exists in the set. If yes, count it as a valid pair.',
    'Iterating over the set of unique values avoids counting duplicate pairs.',
  ],
  functionName: 'findPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function findPairs(nums, k) {

}`,
    typescript: 'function findPairs(nums: number[], k: number): number {\n\n}',
    python: `def findPairs(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 4, 1, 5], 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[1, 3], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 2], 1], expected: 1 },
    { args: [[1, 3, 1, 5, 4], 2], expected: 2 },
    { args: [[10, 20, 30, 40], 10], expected: 3 },
    { args: [[100, 1], 99], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1], expected: 9 },
    { args: [[1, 1, 1, 1], 1], expected: 0 },
  ],
};
