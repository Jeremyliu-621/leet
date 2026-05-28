import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-average-subarray-i',
  title: 'Maximum Average Subarray I',
  difficulty: 'easy',
  tags: ['sliding-window'],
  description: `You are given an integer array \`nums\` consisting of \`n\` elements, and an integer \`k\`.

Find a contiguous subarray whose **length is equal to** \`k\` that has the maximum average value and return this value. Any answer with a calculation error less than \`10^-5\` will be accepted.`,
  constraints: [
    'n == nums.length',
    '1 <= k <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,12,-5,-6,50,3], k = 4',
      output: '12.75000',
      explanation: 'Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75.',
    },
    {
      input: 'nums = [5], k = 1',
      output: '5.00000',
      explanation: 'Only one element, so the average is 5.',
    },
  ],
  hints: [
    'Level 1: Use a sliding window of exactly k elements. Start by summing the first k elements, then slide the window to the right by subtracting the leftmost element and adding the next element.',
    'Level 2: Initialize windowSum = sum of nums[0..k-1] and maxSum = windowSum. For each i from k to nums.length-1: windowSum += nums[i] - nums[i-k]; maxSum = Math.max(maxSum, windowSum). Return maxSum / k.',
    'Level 3: let sum=0; for(let i=0;i<k;i++) sum+=nums[i]; let max=sum; for(let i=k;i<nums.length;i++){sum+=nums[i]-nums[i-k]; if(sum>max)max=sum;} return max/k;',
  ],
  functionName: 'findMaxAverage',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function findMaxAverage(nums, k) {\n  // your code here\n}\n',
    typescript: "function findMaxAverage(nums: number[], k: number): number {\n  // your code here\n}",

    python: 'def findMaxAverage(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
    { args: [[5], 1], expected: 5.0 },
    { args: [[0, 1, 1, 3, 3], 4], expected: 2.0 },
    { args: [[-1], 1], expected: -1.0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 5.0 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 4.5 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 3.0 },
    { args: [[-5, -4, -3, -2, -1], 2], expected: -1.5 },
    { args: [[3, 3, 3, 3], 3], expected: 3.0 },
  ],
};
