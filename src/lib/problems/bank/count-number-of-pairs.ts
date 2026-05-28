import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-pairs',
  title: 'Count Number of Pairs With Absolute Difference K',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of pairs \`(i, j)\` where \`i < j\` such that \`|nums[i] - nums[j]| == k\`.

\`|val|\` denotes the absolute value of \`val\`.`,
  constraints: [
    '`1 <= nums.length <= 200`',
    '`1 <= nums[i] <= 100`',
    '`1 <= k <= 99`',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1], k = 1',
      output: '4',
      explanation: 'Pairs: (0,1), (0,2), (1,3), (2,3). Each has |diff| == 1.',
    },
    {
      input: 'nums = [1,3], k = 3',
      output: '0',
    },
    {
      input: 'nums = [3,2,1,5,4], k = 2',
      output: '3',
    },
  ],
  hints: [
    'Iterate over all pairs (i, j) with i < j and check if |nums[i] - nums[j]| == k.',
    'Use a nested for loop: outer from 0 to n-2, inner from i+1 to n-1. Increment a counter when Math.abs(nums[i]-nums[j])===k.',
    'let c=0;for(let i=0;i<nums.length;i++)for(let j=i+1;j<nums.length;j++)if(Math.abs(nums[i]-nums[j])===k)c++;return c;',
  ],
  functionName: 'countKDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countKDifference(nums, k) {

}`,
    python: `def countKDifference(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], 1], expected: 4 },
    { args: [[1, 3], 3], expected: 0 },
    { args: [[3, 2, 1, 5, 4], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1, 1], 1], expected: 0 },
    { args: [[1, 2, 3], 1], expected: 2 },
    { args: [[5, 5, 5, 5], 0], expected: 6 },
    { args: [[1, 100], 99], expected: 1 },
  ],
};
