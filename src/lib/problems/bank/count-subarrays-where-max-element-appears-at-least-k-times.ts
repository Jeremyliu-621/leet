import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-where-max-element-appears-at-least-k-times',
  title: 'Count Subarrays Where Max Element Appears at Least K Times',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` and a **positive** integer \`k\`.

Return the number of subarrays where the **maximum** element of \`nums\` appears **at least** \`k\` times in that subarray.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,3,3], k = 2',
      output: '6',
      explanation: 'The maximum element is 3. Subarrays with at least 2 occurrences of 3: [1,3,2,3],[1,3,2,3,3],[3,2,3],[3,2,3,3],[2,3,3],[3,3]. Count = 6.',
    },
    {
      input: 'nums = [1,4,2,1], k = 3',
      output: '0',
      explanation: 'The maximum element is 4, but it appears only once, so no subarray has it at least 3 times.',
    },
  ],
  hints: [
    'Level 1: The maximum element of the entire array is fixed. Count subarrays where this value appears at least k times.',
    'Level 2: Use a sliding window: expand right, increment count when max is seen. When count reaches k, every extension of the right boundary is valid; add (nums.length - right) to answer, then shrink left.',
    'Level 3: O(n) time. Pre-compute the global maximum once.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countSubarrays(nums, k) {
  const maxVal = Math.max(...nums);
  let ans = 0, left = 0, cnt = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxVal) cnt++;
    while (cnt >= k) {
      ans += nums.length - right;
      if (nums[left] === maxVal) cnt--;
      left++;
    }
  }
  return ans;
}`,
    typescript: `function countSubarrays(nums: number[], k: number): number {
  const maxVal = Math.max(...nums);
  let ans = 0, left = 0, cnt = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right]! === maxVal) cnt++;
    while (cnt >= k) {
      ans += nums.length - right;
      if (nums[left]! === maxVal) cnt--;
      left++;
    }
  }
  return ans;
}`,
    python: `def countSubarrays(nums, k):
    max_val = max(nums)
    ans = left = cnt = 0
    for right in range(len(nums)):
        if nums[right] == max_val:
            cnt += 1
        while cnt >= k:
            ans += len(nums) - right
            if nums[left] == max_val:
                cnt -= 1
            left += 1
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 3], 2], expected: 6 },
    { args: [[1, 4, 2, 1], 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[3, 3, 3], 2], expected: 3 },
    { args: [[3, 3, 3], 3], expected: 1 },
    { args: [[1, 2, 1, 2, 1], 2], expected: 4 },
    { args: [[5, 5, 5, 5, 5], 3], expected: 6 },
    { args: [[1, 1, 1, 1], 1], expected: 10 },
  ],
};
