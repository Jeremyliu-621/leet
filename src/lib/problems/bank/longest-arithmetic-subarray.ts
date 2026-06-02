import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-arithmetic-subarray',
  title: 'Longest Arithmetic Subarray',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the length of the **longest contiguous subarray** that forms an **arithmetic sequence**.

An arithmetic sequence is a sequence where the difference between every pair of consecutive elements is the same constant (the **common difference**).

A subarray of length 1 trivially qualifies (any constant difference works). A subarray of length 2 always qualifies.

**Note:** This asks for a contiguous *subarray*, not a subsequence — elements must be adjacent in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 5, 7, 2, 4, 6]',
      output: '4',
      explanation:
        'The subarray [1,3,5,7] has common difference 2 and length 4.',
    },
    {
      input: 'nums = [1, 2, 3, 4]',
      output: '4',
      explanation: 'The entire array is arithmetic with common difference 1.',
    },
    {
      input: 'nums = [5, 3, 1]',
      output: '3',
      explanation: 'The entire array is arithmetic with common difference -2.',
    },
  ],
  hints: [
    'Iterate through the array keeping track of the current run length and the current common difference.',
    'Start each run at index 1. The initial difference is `nums[1] - nums[0]`. Extend the run as long as the next difference matches. Reset when it does not.',
    'When extending, update a running maximum length. Be careful: resetting the run means starting fresh at length 2 with the new difference `nums[i] - nums[i-1]`.',
  ],
  functionName: 'longestArithmeticSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestArithmeticSubarray(nums) {
  if (nums.length <= 1) return nums.length;
  let best = 2, cur = 2, diff = nums[1] - nums[0];
  for (let i = 2; i < nums.length; i++) {
    const d = nums[i] - nums[i-1];
    if (d === diff) cur++;
    else { diff = d; cur = 2; }
    if (cur > best) best = cur;
  }
  return best;
}`,
    typescript: `function longestArithmeticSubarray(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let best = 2, cur = 2, diff = nums[1] - nums[0];
  for (let i = 2; i < nums.length; i++) {
    const d = nums[i] - nums[i-1];
    if (d === diff) cur++;
    else { diff = d; cur = 2; }
    if (cur > best) best = cur;
  }
  return best;
}`,
    python: `def longestArithmeticSubarray(nums):
    if len(nums) <= 1: return len(nums)
    best = cur = 2; diff = nums[1] - nums[0]
    for i in range(2, len(nums)):
        d = nums[i] - nums[i-1]
        if d == diff: cur += 1
        else: diff = d; cur = 2
        best = max(best, cur)
    return best`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 7, 2, 4, 6]], expected: 4 },
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[5, 3, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[1, 3, 2, 4, 6, 8]], expected: 4 },
    { args: [[7, 7, 7, 7]], expected: 4 },
    { args: [[1, 2, 4, 7, 11]], expected: 2 },
    { args: [[10, 5, 0, -5, -10, 3, 6, 9]], expected: 5 },
    { args: [[1, 1, 1, 2, 3, 4]], expected: 4 },
    { args: [[0, 3, 6, 9, 12, 5, 10, 15]], expected: 5 },
  ],
};
