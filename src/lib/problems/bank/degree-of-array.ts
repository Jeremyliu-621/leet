import type { Problem } from '../types';

export const problem: Problem = {
  id: 'degree-of-array',
  title: 'Degree of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a non-empty array of non-negative integers \`nums\`, the **degree** of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of \`nums\` that has the same degree as \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 50000',
    '0 <= nums[i] <= 49999',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,1]',
      output: '2',
      explanation:
        'The degree is 2 (both 1 and 2 appear twice). The shortest subarray with degree 2 is [2,2], which has length 2.',
    },
    {
      input: 'nums = [1,2,2,3,1,4,2]',
      output: '6',
      explanation:
        'The degree is 3 because 2 appears 3 times. The shortest subarray containing all three 2s spans indices 1–6, giving length 6.',
    },
  ],
  hints: [
    'Level 1: Track three things for each unique value: its frequency, its first occurrence index, and its last occurrence index.',
    'Level 2: Find the maximum frequency (the degree). Then, for every value that achieves that frequency, compute last[v] - first[v] + 1. Return the minimum of those lengths.',
    'Level 3: const freq={},first={},last={};for(let i=0;i<nums.length;i++){const v=nums[i];freq[v]=(freq[v]||0)+1;if(first[v]===undefined)first[v]=i;last[v]=i;}const deg=Math.max(...Object.values(freq));let ans=nums.length;for(const v in freq){if(freq[v]===deg)ans=Math.min(ans,last[v]-first[v]+1);}return ans;',
  ],
  functionName: 'findShortestSubArray',
  params: ['nums'],
  starterCode: {
    javascript:
      'function findShortestSubArray(nums) {\n  // your code here\n}\n',
    typescript: "function findShortestSubArray(nums: number[]): number {\n  // your code here\n}",

    python:
      'def findShortestSubArray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 1]], expected: 2 },
    { args: [[1, 2, 2, 3, 1, 4, 2]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[3, 3, 3, 1]], expected: 3 },
    { args: [[2, 1, 1, 2, 1, 3, 3, 3]], expected: 3 },
    { args: [[2, 2, 2, 2, 1]], expected: 4 },
  ],
};
