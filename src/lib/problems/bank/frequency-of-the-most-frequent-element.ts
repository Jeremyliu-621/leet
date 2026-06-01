import type { Problem } from '../types';

export const problem: Problem = {
  id: 'frequency-of-the-most-frequent-element',
  title: 'Frequency of the Most Frequent Element',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'binary-search'],
  description: `The **frequency** of an element is the number of times it occurs in an array.

You are given an integer array \`nums\` and an integer \`k\`. In one operation, you can choose an index of \`nums\` and increment the element at that index by \`1\`.

Return the **maximum possible frequency** of an element after performing **at most \`k\` operations**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,4], k = 5',
      output: '3',
      explanation: 'Increment 1 by 3 and 2 by 2: [4,4,4]. Frequency of 4 is 3.',
    },
    {
      input: 'nums = [1,4,8,13], k = 5',
      output: '2',
      explanation: 'Increment 1→4 (3 ops) or 4→8 (4 ops) or 8→13 (5 ops) — each gives freq 2.',
    },
    {
      input: 'nums = [3,9,6], k = 2',
      output: '1',
      explanation: 'No two elements can be made equal within 2 operations.',
    },
  ],
  hints: [
    'Sort nums. The optimal target value is always one of the existing values (the rightmost in a window).',
    'Use a sliding window. For window [left, right] targeting nums[right], the cost = nums[right] * windowSize - windowSum.',
    'When cost > k, shrink from the left: subtract nums[left] from the window sum and advance left.',
  ],
  functionName: 'maxFrequency',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxFrequency(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0, sum = 0, result = 1;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (nums[right] * (right - left + 1) - sum > k) {
      sum -= nums[left];
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}`,
    typescript: `function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0, sum = 0, result = 1;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]!;
    while (nums[right]! * (right - left + 1) - sum > k) {
      sum -= nums[left]!;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}`,
    python: `def maxFrequency(nums, k):
    nums.sort()
    left = 0
    window_sum = 0
    result = 1
    for right in range(len(nums)):
        window_sum += nums[right]
        while nums[right] * (right - left + 1) - window_sum > k:
            window_sum -= nums[left]
            left += 1
        result = max(result, right - left + 1)
    return result`,
  },
  visibleTests: [
    { args: [[1, 2, 4], 5], expected: 3 },
    { args: [[1, 4, 8, 13], 5], expected: 2 },
    { args: [[3, 9, 6], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[1, 2, 3, 4], 0], expected: 1 },
    { args: [[1, 1, 1, 2, 2, 4], 2], expected: 4 },
    { args: [[10000], 1], expected: 1 },
  ],
};
