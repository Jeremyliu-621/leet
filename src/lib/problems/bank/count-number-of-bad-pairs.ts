import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-bad-pairs',
  title: 'Count Number of Bad Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of indices \`(i, j)\` is a **bad pair** if \`i < j\` and \`j - i != nums[j] - nums[i]\`.

Return the **total number of bad pairs** in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,1,3,3]',
      output: '5',
      explanation: '(0,1): 1-0=1, 1-4=-3. Bad. (0,2): 2≠-1. Bad. (0,3): 3≠-1. Bad. (1,2): 1≠2. Bad. (1,3): 2≠2. Bad. (2,3): 1≠0. Bad. Wait, total pairs = C(4,2)=6. Let me recount good pairs: (i,j) is good if j-i=nums[j]-nums[i], i.e. nums[i]-i=nums[j]-j. Values: 4-0=4, 1-1=0, 3-2=1, 3-3=0. Pairs with equal value: (1,3) → 0==0. So 1 good pair, 5 bad pairs.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'nums[i]-i = 1 for all i, so every pair is good. 0 bad pairs.',
    },
  ],
  hints: [
    'A pair (i,j) is good if j-i == nums[j]-nums[i], which means nums[i]-i == nums[j]-j.',
    'Count the frequency of each (nums[i]-i) value using a hash map.',
    'Total pairs = n*(n-1)/2. Subtract good pairs (which form C(count, 2) for each group).',
  ],
  functionName: 'countBadPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countBadPairs(nums) {

}`,
    python: `def countBadPairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 3, 3]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 2]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 10 },
  ],
};
