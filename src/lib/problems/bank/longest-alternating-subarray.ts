import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-alternating-subarray',
  title: 'Longest Alternating Subarray',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. A subarray \`s\` of length \`m\` is called **alternating** if:

- \`m\` is greater than \`1\`.
- \`s[1] - s[0] = 1\`.
- The 0-indexed subarray \`s\` has the property that \`s[i] - s[i - 1] = (-1)^i\` for all indices \`1 <= i < m\`.

In other words, the subarray starts with an increase of 1, then alternates between decreasing and increasing by 1.

Return the **maximum** length of all alternating subarrays present in \`nums\`, or \`-1\` if no such subarray exists.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,3,4,3,4]',
      output: '4',
      explanation: '[3,4,3,4] is alternating: starts with +1, then -1, then +1. Length = 4.',
    },
    {
      input: 'nums = [4,5,6]',
      output: '2',
      explanation: '[4,5] and [5,6] are alternating subarrays of length 2.',
    },
  ],
  hints: [
    'For each starting index i, extend the alternating subarray as far as possible.',
    'The expected difference at position k within the subarray is +1 if k is odd, -1 if k is even.',
    'Track the current run length and update the answer.',
  ],
  functionName: 'alternatingSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function alternatingSubarray(nums) {
  let ans = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i+1] - nums[i] !== 1) continue;
    let len = 2;
    ans = Math.max(ans, len);
    for (let j = i + 2; j < nums.length; j++) {
      if (nums[j] - nums[j-1] === (len % 2 === 0 ? -1 : 1)) { len++; ans = Math.max(ans, len); }
      else break;
    }
  }
  return ans;
}`,
    typescript: `function alternatingSubarray(nums: number[]): number {
  let ans = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i+1] - nums[i] !== 1) continue;
    let len = 2;
    ans = Math.max(ans, len);
    for (let j = i + 2; j < nums.length; j++) {
      if (nums[j] - nums[j-1] === (len % 2 === 0 ? -1 : 1)) { len++; ans = Math.max(ans, len); }
      else break;
    }
  }
  return ans;
}`,
    python: `def alternatingSubarray(nums):
    ans = -1
    n = len(nums)
    for i in range(n - 1):
        if nums[i+1] - nums[i] != 1: continue
        length = 2; ans = max(ans, length)
        for j in range(i+2, n):
            expected = -1 if length % 2 == 0 else 1
            if nums[j] - nums[j-1] == expected: length += 1; ans = max(ans, length)
            else: break
    return ans`,
  },
  visibleTests: [
    { args: [[2, 3, 4, 3, 4]], expected: 4 },
    { args: [[4, 5, 6]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 3]], expected: -1 },
    { args: [[1, 2, 1, 2, 1]], expected: 5 },

    { args: [[3, 4, 3, 2, 3]], expected: 3 },
  ],
};
