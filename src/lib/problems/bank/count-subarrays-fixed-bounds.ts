import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-fixed-bounds',
  title: 'Count Subarrays With Fixed Bounds',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` and two integers \`minK\` and \`maxK\`.

A **fixed-bound subarray** of \`nums\` is a subarray that satisfies:
- The **minimum** value in the subarray equals \`minK\`.
- The **maximum** value in the subarray equals \`maxK\`.

Return the number of fixed-bound subarrays.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i], minK, maxK <= 10^6',
    'minK <= maxK',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2,7,5], minK = 1, maxK = 5',
      output: '2',
      explanation:
        'The fixed-bound subarrays are [1,3,5] and [1,3,5,2]. Both have minimum 1 and maximum 5.',
    },
    {
      input: 'nums = [1,1,1,1], minK = 1, maxK = 1',
      output: '10',
      explanation:
        'Every subarray of nums has minimum value 1 and maximum value 1. There are 10 non-empty subarrays in total.',
    },
    {
      input: 'nums = [1,2,3], minK = 1, maxK = 3',
      output: '1',
      explanation:
        'Only the full subarray [1,2,3] has minimum 1 and maximum 3.',
    },
  ],
  hints: [
    'Level 1: Walk left to right tracking three positions: last "bad" index (element outside [minK, maxK]), last position where nums[i]==minK, last position where nums[i]==maxK.',
    'Level 2: For each right end i, the number of valid subarrays ending at i is max(0, min(lastMin, lastMax) - lastBad). A subarray [l..i] is valid when l > lastBad (no out-of-range element), l <= lastMin, and l <= lastMax.',
    'Level 3: Initialize all three tracking positions to -1. Scan left-to-right; update lastBad when nums[i] is outside [minK, maxK]; update lastMin/lastMax when nums[i] equals minK/maxK. Answer += max(0, min(lastMin, lastMax) - lastBad).',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'minK', 'maxK'],
  starterCode: {
    javascript: `function countSubarrays(nums, minK, maxK) {
  let ans = 0, lastBad = -1, lastMin = -1, lastMax = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) lastBad = i;
    if (nums[i] === minK) lastMin = i;
    if (nums[i] === maxK) lastMax = i;
    ans += Math.max(0, Math.min(lastMin, lastMax) - lastBad);
  }
  return ans;
}`,
    typescript: `function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let ans = 0, lastBad = -1, lastMin = -1, lastMax = -1;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]!;
    if (v < minK || v > maxK) lastBad = i;
    if (v === minK) lastMin = i;
    if (v === maxK) lastMax = i;
    ans += Math.max(0, Math.min(lastMin, lastMax) - lastBad);
  }
  return ans;
}`,
    python: `def countSubarrays(nums, minK, maxK):
    ans, last_bad, last_min, last_max = 0, -1, -1, -1
    for i, v in enumerate(nums):
        if v < minK or v > maxK: last_bad = i
        if v == minK: last_min = i
        if v == maxK: last_max = i
        ans += max(0, min(last_min, last_max) - last_bad)
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 2, 7, 5], 1, 5], expected: 2 },
    { args: [[1, 1, 1, 1], 1, 1], expected: 10 },
    { args: [[1, 2, 3], 1, 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[5, 5, 5], 5, 5], expected: 6 },
    { args: [[1, 2, 3, 4, 5], 2, 4], expected: 1 },
    { args: [[3, 3, 3], 1, 3], expected: 0 },
    { args: [[1, 3, 1, 3], 1, 3], expected: 6 },
    { args: [[2, 1, 3, 2, 1, 3], 1, 3], expected: 12 },
    { args: [[1, 2, 3, 2, 1], 1, 3], expected: 5 },
    { args: [[5, 1, 3, 7], 1, 5], expected: 2 },
  ],
};
