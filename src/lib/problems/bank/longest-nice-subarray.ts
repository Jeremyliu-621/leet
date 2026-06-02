import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-nice-subarray',
  title: 'Longest Nice Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

We call a subarray of \`nums\` **nice** if the bitwise **AND** of every pair of elements that are in **different** positions in the subarray is equal to \`0\`.

Return the length of the **longest** nice subarray.

**Note** that subarrays of length \`1\` are always considered nice.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,8,48,10]',
      output: '3',
      explanation: 'The subarray [3,48,10] is nice: 3&48=0, 3&10=0, 48&10=0. Longer subarrays fail.',
    },
    {
      input: 'nums = [3,1,5,11,13]',
      output: '1',
      explanation: 'Any two elements share a bit (e.g., 3=11b, 1=01b, 3&1=1). Each single element is nice.',
    },
  ],
  hints: [
    'Level 1: Use a sliding window. Track the OR of all bits used in the current window.',
    'Level 2: Expand right by OR-ing nums[r]. If nums[r] shares bits with the window (AND != 0), shrink from the left.',
    'Level 3: let l=0,used=0,ans=1;for(let r=0;r<nums.length;r++){while(used&nums[r])used^=nums[l++];used|=nums[r];ans=Math.max(ans,r-l+1);}return ans;',
  ],
  functionName: 'longestNiceSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function longestNiceSubarray(nums) {
  let l = 0, used = 0, ans = 1;
  for (let r = 0; r < nums.length; r++) {
    while (used & nums[r]) used ^= nums[l++];
    used |= nums[r];
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}`,
    typescript: `function longestNiceSubarray(nums: number[]): number {
  let l = 0, used = 0, ans = 1;
  for (let r = 0; r < nums.length; r++) {
    while (used & nums[r]!) used ^= nums[l++]!;
    used |= nums[r]!;
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}`,
    python: `def longestNiceSubarray(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    l = used = 0; ans = 1
    for r in range(len(nums)):
        while used & nums[r]: used ^= nums[l]; l += 1
        used |= nums[r]
        ans = max(ans, r - l + 1)
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 8, 48, 10]], expected: 3 },
    { args: [[3, 1, 5, 11, 13]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 3]], expected: 1 },
    { args: [[1, 2, 4, 8]], expected: 4 },
    { args: [[1, 2, 3]], expected: 2 },
  ],
};
