import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-with-maximum-bitwise-and',
  title: 'Longest Subarray With Maximum Bitwise AND',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an integer array \`nums\` of size \`n\`.

Consider a non-empty subarray from \`nums\` that has the **maximum** possible **bitwise AND**.

In other words, let \`k\` be the maximum value of the bitwise AND of **any** subarray of \`nums\`. Return the **length of the longest** subarray with a bitwise AND equal to \`k\`.

Note that the bitwise AND of an array is the AND of all elements in the array, and a **subarray** is a contiguous part of the array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,3,2,2]',
      output: '2',
      explanation: 'The maximum AND of any subarray is 3 (from [3,3]). Subarrays with AND=3: [3,3] (length 2), [3] (length 1). Longest is 2.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation: 'Maximum element is 4. Any subarray including 4 and other elements has AND < 4. Longest subarray with AND=4 is just [4] (length 1).',
    },
  ],
  hints: [
    'Level 1: The maximum AND of any subarray equals the maximum element in the array. ANDing with any other element can only decrease the value.',
    'Level 2: So we need to find the longest consecutive run of the maximum element.',
    'Level 3: Find maxVal = max(nums). Then scan for the longest streak of maxVal values.',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestSubarray(nums) {
  const maxVal = Math.max(...nums);
  let best = 0;
  let cur = 0;
  for (const x of nums) {
    if (x === maxVal) {
      cur++;
      if (cur > best) best = cur;
    } else {
      cur = 0;
    }
  }
  return best;
}`,
    typescript: `function longestSubarray(nums: number[]): number {
  const maxVal = Math.max(...nums);
  let best = 0;
  let cur = 0;
  for (const x of nums) {
    if (x === maxVal) {
      cur++;
      if (cur > best) best = cur;
    } else {
      cur = 0;
    }
  }
  return best;
}`,
    python: `def longestSubarray(nums):
    max_val = max(nums)
    best = cur = 0
    for x in nums:
        if x == max_val:
            cur += 1
            best = max(best, cur)
        else:
            cur = 0
    return best`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 3, 2, 2]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 1 },
    { args: [[5, 5, 5]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3, 3, 3, 1, 3, 3]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 1 },
    { args: [[7, 7, 7, 7]], expected: 4 },
  ],
};
