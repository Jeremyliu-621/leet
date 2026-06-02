import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-average-subarray',
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
    },
  ],
  hints: [
    'Level 1: Use a sliding window of size k. Compute the sum of the first k elements. Then slide the window right: subtract the leftmost element and add the new rightmost. Track the maximum sum.',
    'Level 2: Initialize windowSum = sum of nums[0..k-1]. For i from k to nums.length-1: windowSum += nums[i] - nums[i-k]. Track maxSum = Math.max(maxSum, windowSum). Return maxSum/k.',
    'Level 3: let s=nums.slice(0,k).reduce((a,b)=>a+b,0),max=s;for(let i=k;i<nums.length;i++){s+=nums[i]-nums[i-k];max=Math.max(max,s);}return max/k;',
  ],
  functionName: 'findMaxAverage',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function findMaxAverage(nums, k) {
  let s = nums.slice(0, k).reduce((a, b) => a + b, 0), max = s;
  for (let i = k; i < nums.length; i++) {
    s += nums[i] - nums[i - k];
    max = Math.max(max, s);
  }
  return max / k;
}`,
    typescript: `function findMaxAverage(nums: number[], k: number): number {
  let s = nums.slice(0, k).reduce((a, b) => a + b, 0), max = s;
  for (let i = k; i < nums.length; i++) {
    s += nums[i]! - nums[i - k]!;
    max = Math.max(max, s);
  }
  return max / k;
}`,
    python: `def findMaxAverage(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    s = sum(nums[:k])
    best = s
    for i in range(k, len(nums)):
        s += nums[i] - nums[i - k]
        best = max(best, s)
    return best / k`,
  },
  visibleTests: [
    { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
    { args: [[5], 1], expected: 5.0 },
  ],
  hiddenTests: [
    { args: [[0, 1, 1, 3, 3], 4], expected: 2.0 },
    { args: [[-1], 1], expected: -1.0 },
    { args: [[4, 0, 4, 3, 3], 5], expected: 2.8 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 4.5 },
  ],
};
