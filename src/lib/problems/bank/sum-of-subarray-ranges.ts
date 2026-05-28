import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-subarray-ranges',
  title: 'Sum of Subarray Ranges',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You are given an integer array \`nums\`. The **range** of a subarray of \`nums\` is the difference between the largest and smallest element in the subarray.

Return the **sum of all subarray ranges** of \`nums\`.

A subarray is a contiguous **non-empty** sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '4',
      explanation: 'Ranges: [1]=0, [2]=0, [3]=0, [1,2]=1, [2,3]=1, [1,2,3]=2. Sum=4.',
    },
    {
      input: 'nums = [1,3,3]',
      output: '4',
      explanation: 'Ranges: [1]=0, [3]=0, [3]=0, [1,3]=2, [3,3]=0, [1,3,3]=2. Sum=4.',
    },
    {
      input: 'nums = [4,-2,-3,4,1]',
      output: '59',
    },
  ],
  hints: [
    'Level 1: The O(n^2) approach works within constraints: for each starting index i, track running min and max as j increases, adding max-min for each subarray [i..j].',
    'Level 2: Nested loop: for each i, set mn=mx=nums[i]. For j from i to n-1: update mn=min(mn,nums[j]), mx=max(mx,nums[j]), add mx-mn to result.',
    'Level 3: let res=0;for(let i=0;i<nums.length;i++){let mn=nums[i],mx=nums[i];for(let j=i;j<nums.length;j++){mn=Math.min(mn,nums[j]);mx=Math.max(mx,nums[j]);res+=mx-mn;}}return res;',
  ],
  functionName: 'subArrayRanges',
  params: ['nums'],
  starterCode: {
    javascript: 'function subArrayRanges(nums) {\n  // your code here\n}\n',
    python: 'def subArrayRanges(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[1, 3, 3]], expected: 4 },
    { args: [[4, -2, -3, 4, 1]], expected: 59 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, -1]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 10 },
    { args: [[-1, -2, -3]], expected: 4 },
    { args: [[3, 1, 2, 4]], expected: 13 },
  ],
};
