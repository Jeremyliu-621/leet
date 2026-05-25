import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-positive-integer-with-negative',
  title: 'Largest Positive Integer That Exists With Its Negative',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` that **does not contain** any zeros, find the **largest positive** integer \`k\` such that \`-k\` also exists in the array.

Return the positive integer \`k\`. If there is no such integer, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    'nums[i] != 0',
  ],
  examples: [
    {
      input: 'nums = [-1,2,-3,3]',
      output: '3',
      explanation: '3 is in the array and so is -3.',
    },
    {
      input: 'nums = [-1,10,6,7,-7,1]',
      output: '7',
    },
    {
      input: 'nums = [-10,8,6,7,-2,-3]',
      output: '-1',
    },
  ],
  hints: [
    'Level 1: Put all numbers in a Set for O(1) lookup.',
    'Level 2: For each positive number n in the array, check if -n is also in the Set. Track the maximum.',
    'Level 3: const s=new Set(nums);let ans=-1;for(const n of nums)if(n>0&&s.has(-n))ans=Math.max(ans,n);return ans;',
  ],
  functionName: 'findMaxK',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMaxK(nums) {\n  // your code here\n}\n',
    python: 'def findMaxK(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[-1, 2, -3, 3]], expected: 3 },
    { args: [[-1, 10, 6, 7, -7, 1]], expected: 7 },
    { args: [[-10, 8, 6, 7, -2, -3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, -1]], expected: 1 },
    { args: [[-1]], expected: -1 },
    { args: [[1, 2, 3, -1, -2, -3]], expected: 3 },
    { args: [[5, -5, 3, -3]], expected: 5 },
    { args: [[1, 2, 3]], expected: -1 },
  ],
};
