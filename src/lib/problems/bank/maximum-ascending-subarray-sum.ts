import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-ascending-subarray-sum',
  title: 'Maximum Ascending Subarray Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of positive integers \`nums\`, return the **maximum possible sum** of an **ascending** subarray in \`nums\`.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray \`[nums[l], nums[l+1], ..., nums[r-1], nums[r]]\` is **ascending** if for all \`i\` where \`l <= i < r\`, \`nums[i] < nums[i+1]\`. Note that a subarray of size \`1\` is ascending.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [10,20,30,5,10,50]',
      output: '65',
      explanation: 'The ascending subarray [5,10,50] has the largest sum: 65.',
    },
    {
      input: 'nums = [10,20,30,40,50]',
      output: '150',
      explanation: 'The entire array is ascending, sum = 150.',
    },
    {
      input: 'nums = [12,17,15,13,10,11,12]',
      output: '33',
      explanation: 'The ascending subarray [10,11,12] has sum 33.',
    },
  ],
  hints: [
    'Scan through the array, maintain the current ascending subarray sum. When the next element is not greater, compare to the max and restart.',
    "Initialize cur=nums[0], max=nums[0]. For each subsequent element: if it is greater than the previous, add it to cur; otherwise reset cur to the current element. Update max after each step.",
    'let cur=nums[0],best=nums[0];for(let i=1;i<nums.length;i++){cur=nums[i]>nums[i-1]?cur+nums[i]:nums[i];if(cur>best)best=cur;}return best;',
  ],
  functionName: 'maxAscendingSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maxAscendingSum(nums) {
  let cur = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i] > nums[i - 1] ? cur + nums[i] : nums[i];
    if (cur > best) best = cur;
  }
  return best;
}`,
    typescript: `function maxAscendingSum(nums: number[]): number {
  let cur = nums[0]!, best = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i]! > nums[i - 1]! ? cur + nums[i]! : nums[i]!;
    if (cur > best) best = cur;
  }
  return best;
}`,
    python: `def maxAscendingSum(nums):
    cur = best = nums[0]
    for i in range(1, len(nums)):
        cur = cur + nums[i] if nums[i] > nums[i-1] else nums[i]
        if cur > best:
            best = cur
    return best`,
  },
  visibleTests: [
    { args: [[10, 20, 30, 5, 10, 50]], expected: 65 },
    { args: [[10, 20, 30, 40, 50]], expected: 150 },
    { args: [[12, 17, 15, 13, 10, 11, 12]], expected: 33 },
  ],
  hiddenTests: [
    { args: [[100]], expected: 100 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[1, 2, 1, 2]], expected: 3 },
    { args: [[3, 6, 10, 1, 8, 9]], expected: 19 },
  ],
};
