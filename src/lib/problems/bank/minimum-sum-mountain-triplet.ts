import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-mountain-triplet',
  title: 'Minimum Sum of Mountain Triplets I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`nums\` of integers.

A triplet of indices \`(i, j, k)\` is a **mountain** if:
- \`i < j < k\`
- \`nums[i] < nums[j]\` and \`nums[k] < nums[j]\`

Return the **minimum possible sum** of a mountain triplet of \`nums\`. If no such triplet exists, return \`-1\`.`,
  constraints: [
    '`3 <= nums.length <= 50`',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [8,6,1,5,3]',
      output: '9',
      explanation: 'Triplet (2,3,4): nums[2]+nums[3]+nums[4] = 1+5+3 = 9. nums[2]<nums[3] and nums[4]<nums[3].',
    },
    {
      input: 'nums = [5,4,8,7,10,2]',
      output: '13',
    },
    {
      input: 'nums = [6,5,4,3,4,5]',
      output: '-1',
      explanation: 'No valid mountain triplet exists (all peaks are lower than their neighbors).',
    },
  ],
  hints: [
    'Try all O(n^3) triplets. For each valid mountain triplet, track the minimum sum.',
    "Use three nested loops for i < j < k. Check nums[i]<nums[j] && nums[k]<nums[j]. If so, update a running minimum with nums[i]+nums[j]+nums[k].",
    'let m=Infinity;for(let i=0;i<nums.length-2;i++)for(let j=i+1;j<nums.length-1;j++)for(let k=j+1;k<nums.length;k++)if(nums[i]<nums[j]&&nums[k]<nums[j])m=Math.min(m,nums[i]+nums[j]+nums[k]);return m===Infinity?-1:m;',
  ],
  functionName: 'minimumSum',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSum(nums) {

}`,
    python: `def minimumSum(nums):
    pass`,
  },
  visibleTests: [
    { args: [[8, 6, 1, 5, 3]], expected: 9 },
    { args: [[5, 4, 8, 7, 10, 2]], expected: 13 },
    { args: [[6, 5, 4, 3, 4, 5]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: 4 },
    { args: [[1, 1, 1]], expected: -1 },
    { args: [[3, 1, 2]], expected: -1 },
    { args: [[1, 5, 2, 3, 1]], expected: 4 },
    { args: [[50, 1, 50, 1, 50]], expected: 52 },
  ],
};
