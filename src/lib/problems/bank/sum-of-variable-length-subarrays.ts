import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-variable-length-subarrays',
  title: 'Sum of Variable Length Subarrays',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a 0-indexed integer array \`nums\` of size \`n\`.

For each index \`i\` in the range \`[0, n - 1]\`, define a subarray \`nums[start..i]\` where \`start = max(0, i - nums[i])\`.

Return the **total sum** of all elements in every subarray defined this way.`,
  constraints: [
    '1 <= n == nums.length <= 100',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,3,1]',
      output: '11',
      explanation:
        'i=0: start=max(0,-2)=0, sum=nums[0..0]=2. i=1: start=max(0,-2)=0, sum=nums[0..1]=5. i=2: start=max(0,1)=1, sum=nums[1..2]=4. Total=11.',
    },
    {
      input: 'nums = [3,1,1,2]',
      output: '13',
      explanation:
        'i=0: sum=nums[0..0]=3. i=1: start=max(0,0)=0, sum=nums[0..1]=4. i=2: start=max(0,1)=1, sum=nums[1..2]=2. i=3: start=max(0,1)=1, sum=nums[1..3]=4. Total=13.',
    },
  ],
  hints: [
    'Build a prefix sum array to answer range sum queries in O(1).',
    'For each i, start = max(0, i - nums[i]), then add prefix[i+1] - prefix[start] to the total.',
    'The prefix sum array has length n+1 where prefix[0]=0 and prefix[k]=nums[0]+...+nums[k-1].',
  ],
  functionName: 'subarraySum',
  params: ['nums'],
  starterCode: {
    javascript: `function subarraySum(nums) {\n\n}`,
    typescript: `function subarraySum(nums: number[]): number {

}`,
    python: `def subarraySum(nums: list[int]) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 1]], expected: 11 },
    { args: [[3, 1, 1, 2]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 20 },
    { args: [[5, 5, 5]], expected: 30 },
    { args: [[1, 1, 1, 1]], expected: 7 },
  ],
};
