import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-max-element-k-times',
  title: 'Count Subarrays Where Max Element Appears At Least K Times',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` and a positive integer \`k\`.

Return the number of subarrays where the **maximum element** of \`nums\` appears **at least \`k\` times**.

The maximum element is the global maximum of the entire array.

**Examples:**
- \`nums = [1, 3, 2, 3, 3]\`, \`k = 2\` → \`6\`
- \`nums = [1, 4, 2, 1]\`, \`k = 3\` → \`0\`

**Constraints:**
- \`1 ≤ nums.length ≤ 10⁵\`
- \`1 ≤ nums[i] ≤ 10⁶\`
- \`1 ≤ k ≤ 10⁵\``,
  constraints: [
    '1 ≤ nums.length ≤ 10⁵',
    '1 ≤ nums[i] ≤ 10⁶',
    '1 ≤ k ≤ 10⁵',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,3,3], k = 2',
      output: '6',
      explanation: 'The max element is 3. Subarrays with at least 2 threes: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3], [3,3] — 6 total.',
    },
    {
      input: 'nums = [1,4,2,1], k = 3',
      output: '0',
      explanation: 'The max element is 4. It appears only once in the array so no subarray has it 3+ times.',
    },
  ],
  hints: [
    'First find the global maximum of `nums`. You only need to track occurrences of this specific value.',
    'Use a sliding window with left pointer `l` and right pointer `r`. Maintain a count of how many times the max appears in the current window `[l, r]`.',
    'When `count >= k`, the max appears at least k times. Every extension of the left side (i.e., starting from index 0 to `l`) also gives a valid subarray ending at `r`. So add `l` to the result, then shrink from the left.',
    'Move left pointer right until `count < k`, counting valid subarrays along the way.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countSubarrays(nums, k) {
  const mx = Math.max(...nums);
  let ans = 0, count = 0, left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === mx) count++;
    while (count >= k) {
      ans += nums.length - right;
      if (nums[left++] === mx) count--;
    }
  }
  return ans;
}`,
    typescript: `function countSubarrays(nums: number[], k: number): number {
  const mx = Math.max(...nums);
  let ans = 0, count = 0, left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right]! === mx) count++;
    while (count >= k) {
      ans += nums.length - right;
      if (nums[left++]! === mx) count--;
    }
  }
  return ans;
}`,
    python: `def countSubarrays(nums, k):
    mx = max(nums)
    ans = count = left = 0
    for right, v in enumerate(nums):
        if v == mx: count += 1
        while count >= k:
            ans += len(nums) - right
            if nums[left] == mx: count -= 1
            left += 1
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 3], 2], expected: 6 },
    { args: [[1, 4, 2, 1], 3], expected: 0 },
    { args: [[3, 3, 3], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 3 },
    { args: [[5, 5, 5, 5], 1], expected: 10 },
    { args: [[5, 5, 5, 5], 4], expected: 1 },
    { args: [[1, 1, 1, 2], 2], expected: 0 },
    { args: [[2, 1, 2, 1, 2], 2], expected: 5 },
    { args: [[1], 1], expected: 1 },
  ],
};
