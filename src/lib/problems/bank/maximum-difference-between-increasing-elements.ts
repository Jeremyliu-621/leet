import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-between-increasing-elements',
  title: 'Maximum Difference Between Increasing Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\`, find the **maximum difference** between \`nums[j]\` and \`nums[i]\` (i.e., \`nums[j] - nums[i]\`), such that \`0 <= i < j < n\` and \`nums[i] < nums[j]\`.

Return the **maximum difference**. If no such \`i\` and \`j\` exists, return \`-1\`.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 1000',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [7,1,5,4]',
      output: '4',
      explanation: 'The maximum difference is nums[2] - nums[1] = 5 - 1 = 4.',
    },
    {
      input: 'nums = [9,4,3,2]',
      output: '-1',
      explanation: 'There is no pair (i, j) with i < j and nums[i] < nums[j], so return -1.',
    },
  ],
  hints: [
    'Track the minimum value seen so far as you iterate left to right.',
    'At each index j, the best difference using j as the right endpoint is nums[j] - minSoFar.',
    'Update minSoFar whenever you find a smaller element.',
  ],
  functionName: 'maximumDifference',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumDifference(nums) {
  let minSeen = nums[0], ans = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > minSeen) ans = Math.max(ans, nums[i] - minSeen);
    minSeen = Math.min(minSeen, nums[i]);
  }
  return ans;
}`,
    typescript: `function maximumDifference(nums: number[]): number {
  let minSeen = nums[0]!, ans = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > minSeen) ans = Math.max(ans, nums[i]! - minSeen);
    minSeen = Math.min(minSeen, nums[i]!);
  }
  return ans;
}`,
    python: `def maximumDifference(nums):
    min_seen, ans = nums[0], -1
    for x in nums[1:]:
        if x > min_seen:
            ans = max(ans, x - min_seen)
        min_seen = min(min_seen, x)
    return ans`,
  },
  visibleTests: [
    { args: [[7,1,5,4]], expected: 4 },
    { args: [[9,4,3,2]], expected: -1 },
    { args: [[1,5,2,10]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1,2]], expected: 1 },
    { args: [[5,5]], expected: -1 },
    { args: [[1,1,1]], expected: -1 },
    { args: [[1,10,5,8]], expected: 9 },
    { args: [[3,1,4,1,5,9]], expected: 8 },
  ],
};
