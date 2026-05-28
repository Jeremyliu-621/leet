import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-equal-subarray',
  title: 'Find the Longest Equal Subarray',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

A subarray is called **equal** if all of its elements are equal. Note that the empty subarray is an equal subarray.

Return the **length** of the **longest** equal subarray that can be obtained by **deleting at most \`k\` elements** from \`nums\`.

In other words, find the longest contiguous segment of identical values in \`nums\` after removing at most \`k\` other elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= nums.length',
    '0 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,3,1,3], k = 3',
      output: '3',
      explanation: 'Delete indices 0, 2, and 4 to get [3,3,3]. The longest equal subarray has length 3.',
    },
    {
      input: 'nums = [1,1,2,2,1,1], k = 2',
      output: '4',
      explanation: 'Delete indices 2 and 3 to get [1,1,1,1]. The longest equal subarray has length 4.',
    },
    {
      input: 'nums = [1,2,1], k = 1',
      output: '2',
      explanation: 'Delete index 1 to get [1,1]. Length = 2.',
    },
  ],
  hints: [
    'Use a sliding window. Keep a frequency map of elements in the current window. Track the maximum frequency (`maxFreq`) seen so far.',
    'A window of size `w` is valid if `w - maxFreq <= k` (at most `k` elements need to be removed to make all remaining elements equal).',
    'When the window becomes invalid (too many deletions needed), shrink from the left. The answer is the maximum `maxFreq` across all valid windows.',
  ],
  functionName: 'longestEqualSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function longestEqualSubarray(nums, k) {
  const freq = new Map();
  let left = 0, maxFreq = 0, result = 0;
  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(nums[right]));
    // Shrink window if more than k deletions needed
    while ((right - left + 1) - maxFreq > k) {
      freq.set(nums[left], freq.get(nums[left]) - 1);
      left++;
      // Update maxFreq after shrinking
    }
    result = Math.max(result, maxFreq);
  }
  return result;
}`,
    python: `def longestEqualSubarray(nums, k):
    from collections import defaultdict
    freq = defaultdict(int)
    left = max_freq = result = 0
    for right, val in enumerate(nums):
        freq[val] += 1
        max_freq = max(max_freq, freq[val])
        while (right - left + 1) - max_freq > k:
            freq[nums[left]] -= 1
            left += 1
            max_freq = max(freq.values())
        result = max(result, max_freq)
    return result`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 1, 3], 3], expected: 3 },
    { args: [[1, 1, 2, 2, 1, 1], 2], expected: 4 },
    { args: [[1, 2, 1], 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[3, 3, 3, 3, 3], 2], expected: 5 },
    { args: [[1, 2, 1, 2, 1], 1], expected: 2 },
    { args: [[5, 5, 5, 5, 5, 4, 5], 1], expected: 6 },
    { args: [[1, 1, 1, 1], 0], expected: 4 },
    { args: [[1, 2, 3, 1, 2, 3, 1], 2], expected: 2 },
  ],
};
