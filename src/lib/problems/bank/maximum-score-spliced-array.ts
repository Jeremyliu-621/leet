import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-spliced-array',
  title: 'Maximum Score of Spliced Array',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given two 0-indexed integer arrays \`nums1\` and \`nums2\`, both of length \`n\`.

You can perform the following operation **at most once**: choose two indices \`left\` and \`right\` (\`0 <= left <= right < n\`) and **swap** the subarray \`nums1[left..right]\` with \`nums2[left..right]\`.

Return the **maximum** possible sum of \`nums1\` after performing the operation.

**Note:** The sum of \`nums1\` before any operation also counts as a valid answer.`,
  constraints: [
    'n == nums1.length == nums2.length',
    '1 <= n <= 10^5',
    '1 <= nums1[i], nums2[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums1 = [60,60,60], nums2 = [10,90,10]',
      output: '210',
      explanation: 'Swap the subarray [left=1, right=1]: nums1 becomes [60,90,60], sum = 210.',
    },
    {
      input: 'nums1 = [20,40,20,70,30], nums2 = [50,20,50,40,20]',
      output: '220',
      explanation: 'Swap subarray [left=0, right=2]: nums1 becomes [50,20,50,70,30], sum = 220.',
    },
    {
      input: 'nums1 = [0,1,2], nums2 = [3,4,5]',
      output: '12',
      explanation: 'Swap the entire array. nums1 becomes [3,4,5], sum = 12.',
    },
  ],
  hints: [
    'After swapping the subarray [left, right], the new sum of nums1 = sum(nums1) + sum(nums2[l..r] - nums1[l..r]). To maximize, find the maximum-sum contiguous subarray of the difference array (nums2[i] - nums1[i]).',
    'Use Kadane\'s algorithm on the difference array d[i] = nums2[i] - nums1[i]. The answer is sum(nums1) + max(0, maxSubarraySum(d)).',
    '`function kadane(a,b){let s=a.reduce((x,y)=>x+y,0),m=0,e=0;for(let i=0;i<a.length;i++){e=Math.max(0,e+b[i]-a[i]);m=Math.max(m,e);}return s+m;} return kadane(nums1,nums2);`',
  ],
  functionName: 'maximumsSplicedArray',
  params: ['nums1', 'nums2'],
  starterCode: {
    javascript: 'function maximumsSplicedArray(nums1, nums2) {\n  \n}\n',
    typescript: "function maximumsSplicedArray(nums1: number[], nums2: number[]): number {\n  \n}",

    python: 'def maximumsSplicedArray(nums1: list[int], nums2: list[int]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[60, 60, 60], [10, 90, 10]], expected: 210 },
    { args: [[20, 40, 20, 70, 30], [50, 20, 50, 40, 20]], expected: 220 },
    { args: [[0, 1, 2], [3, 4, 5]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[3, 3, 3], [3, 3, 3]], expected: 9 },
    { args: [[1], [100]], expected: 100 },
    { args: [[5, 5], [1, 1]], expected: 10 },
    { args: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]], expected: 21 },
    { args: [[10, 1, 10], [1, 10, 1]], expected: 30 },
    { args: [[1, 1, 1, 1], [4, 1, 1, 1]], expected: 7 },
  ],
};
