import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-average-subarray-ii',
  title: 'Maximum Average Subarray II',
  difficulty: 'hard',
  tags: ['binary-search', 'sliding-window'],
  description: `Find the maximum average value of any contiguous subarray of **nums** with length **at least** k.

Answers within **10^-5** of the actual answer will be accepted.

**Function signature:** \`findMaxAverage(nums, k)\`

Return the answer formatted to 5 decimal places.

**Example:**
- nums=[1,12,-5,-6,50,3], k=4 → 12.75000 (subarray [12,-5,-6,50]=51/4=12.75)
- nums=[5], k=1 → 5.00000`,
  constraints: [
    'n == nums.length',
    '1 <= k <= n <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,12,-5,-6,50,3], k = 4',
      output: '12.75000',
      explanation: 'The subarray [12,-5,-6,50] has average 51/4=12.75.',
    },
    {
      input: 'nums = [5], k = 1',
      output: '5.00000',
      explanation: 'Only one element.',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer. For a candidate average `mid`, check whether any subarray of length ≥ k has average ≥ mid. This is equivalent to checking if the subarray sum of (nums[i]-mid) is ≥ 0 for some subarray of length ≥ k.',
    'Level 2: For the feasibility check: subtract mid from every element. Compute the prefix sum of the first k elements. Then slide a window of length k and also track the minimum prefix sum before the current window to handle "length ≥ k". If windowSum - minPrevSum ≥ 0, return true.',
    'Level 3: Binary search with lo=min, hi=max, 100 iterations. check(mid): adjusted=nums.map(v=>v-mid); windowSum=adjusted.slice(0,k).reduce sum; if(windowSum>=0)return true; prevSum=0,minPrevSum=0; for i=k..n-1: windowSum+=adjusted[i]; prevSum+=adjusted[i-k]; minPrevSum=min(minPrevSum,prevSum); if(windowSum-minPrevSum>=0)return true; return false.',
  ],
  functionName: 'findMaxAverage',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function findMaxAverage(nums, k) {\n  \n}\n',
    typescript: "function findMaxAverage(nums: number[], k: number): number {\n  \n}",

    python: 'def findMaxAverage(nums, k):\n    ',
  },
  visibleTests: [
    { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
    { args: [[5], 1], expected: 5 },
    { args: [[0, 4, 0, 3, 2], 1], expected: 4 },
  ],
  hiddenTests: [
    { args: [[3, 3], 2], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 4.5 },
    { args: [[-1, -2, -3, -4, -5], 3], expected: -2 },
    { args: [[6, 2, 0, 3, 5, 6, 1, 2, 7, 3], 4], expected: 4.2 },
  ],
};
