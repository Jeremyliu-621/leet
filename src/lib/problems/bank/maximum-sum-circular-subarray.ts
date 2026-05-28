import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-circular-subarray',
  title: 'Maximum Sum Circular Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a **circular integer array** \`nums\` of length \`n\`, return the maximum possible sum of a non-empty **subarray** of \`nums\`.

A **circular array** means the end of the array connects to the beginning. Formally, the next element of \`nums[n-1]\` is \`nums[0]\`, and the previous element of \`nums[0]\` is \`nums[n-1]\`.

A **subarray** may only include each element at most once. Formally, for a subarray \`nums[i], nums[i+1], ..., nums[j]\` (where \`0 <= i <= j < n\`), in the circular case we allow \`i > j\` (wrapping around).`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 3 * 10^4',
    '-3 * 10^4 <= nums[i] <= 3 * 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,-2,3,-2]',
      output: '3',
      explanation: 'Subarray [3] has maximum sum 3.',
    },
    {
      input: 'nums = [5,-3,5]',
      output: '10',
      explanation: 'Subarray [5,5] (wrapping around: indices 2→0) has sum 10.',
    },
    {
      input: 'nums = [-3,-2,-3]',
      output: '-2',
      explanation: 'All numbers are negative; the maximum subarray is [-2].',
    },
  ],
  hints: [
    'Consider two cases: (1) the maximum subarray lies entirely in the non-circular range — use Kadane\'s algorithm; (2) the maximum subarray wraps around — its complement (the elements not in the subarray) is a minimum contiguous subarray. Answer = total sum - minimum subarray sum.',
    'Edge case: if all elements are negative, the wrap-around case would give total - (total) = 0, which is wrong. In that case, just return the maximum element.',
    `\`\`\`js
function maxSubarraySumCircular(nums) {
  let maxSum=nums[0],curMax=0,minSum=nums[0],curMin=0,total=0;
  for(const n of nums){
    curMax=Math.max(curMax+n,n);
    maxSum=Math.max(maxSum,curMax);
    curMin=Math.min(curMin+n,n);
    minSum=Math.min(minSum,curMin);
    total+=n;
  }
  // if all negative, maxSum is the answer (wrap-around would give 0)
  return maxSum>0?Math.max(maxSum,total-minSum):maxSum;
}\`\`\``,
  ],
  functionName: 'maxSubarraySumCircular',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxSubarraySumCircular(nums) {\n  \n}\n',
    typescript: "function maxSubarraySumCircular(nums: number[]): number {\n  \n}",

    python: 'def maxSubarraySumCircular(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, -2, 3, -2]], expected: 3 },
    { args: [[5, -3, 5]], expected: 10 },
    { args: [[-3, -2, -3]], expected: -2 },
  ],
  hiddenTests: [
    { args: [[3, -1, 2, -1]], expected: 4 },
    { args: [[3, -2, 2, -3]], expected: 3 },
    { args: [[1]], expected: 1 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[2, -1, 2, -1, 2]], expected: 5 },
  ],
};
