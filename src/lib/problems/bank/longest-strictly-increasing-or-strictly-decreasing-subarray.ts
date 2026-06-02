import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-strictly-increasing-or-strictly-decreasing-subarray',
  title: 'Longest Strictly Increasing or Strictly Decreasing Subarray',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array of integers \`nums\`. Return the length of the **longest** subarray of \`nums\` which is either **strictly increasing** or **strictly decreasing**.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,4,3,3,2]',
      output: '2',
      explanation: 'The strictly increasing subarrays are [1], [4], [3], [3], [2], and [1,4]. The strictly decreasing subarrays are [1], [4], [3], [3], [2], [4,3], and [3,2]. Hence, we return 2.',
    },
    {
      input: 'nums = [3,3,3,3]',
      output: '1',
      explanation: 'The longest strictly increasing or decreasing subarrays have length 1.',
    },
    {
      input: 'nums = [3,2,1]',
      output: '3',
      explanation: 'The array [3,2,1] is strictly decreasing, so we return 3.',
    },
  ],
  hints: [
    'Use two variables to track the current length of a strictly increasing run and the current length of a strictly decreasing run.',
    'Iterate through the array. If nums[i] > nums[i-1], extend the increasing run and reset the decreasing run; vice versa. If equal, reset both.',
    'The answer is the maximum value seen across all inc/dec run lengths.',
  ],
  functionName: 'longestMonotonicSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestMonotonicSubarray(nums) {
  let inc = 1, dec = 1, ans = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i-1]) { inc++; dec = 1; }
    else if (nums[i] < nums[i-1]) { dec++; inc = 1; }
    else { inc = 1; dec = 1; }
    ans = Math.max(ans, inc, dec);
  }
  return ans;
}`,
    typescript: `function longestMonotonicSubarray(nums: number[]): number {
  let inc = 1, dec = 1, ans = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i-1]) { inc++; dec = 1; }
    else if (nums[i] < nums[i-1]) { dec++; inc = 1; }
    else { inc = 1; dec = 1; }
    ans = Math.max(ans, inc, dec);
  }
  return ans;
}`,
    python: `def longestMonotonicSubarray(nums):
    inc = dec = ans = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[i-1]: inc += 1; dec = 1
        elif nums[i] < nums[i-1]: dec += 1; inc = 1
        else: inc = dec = 1
        ans = max(ans, inc, dec)
    return ans`,
  },
  visibleTests: [
    { args: [[1, 4, 3, 3, 2]], expected: 2 },
    { args: [[3, 3, 3, 3]], expected: 1 },
    { args: [[3, 2, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[1, 3, 2, 4, 3]], expected: 2 },
    { args: [[1, 2, 1, 2, 1]], expected: 2 },
    { args: [[1, 2, 3, 2, 1]], expected: 3 },
  ],
};
