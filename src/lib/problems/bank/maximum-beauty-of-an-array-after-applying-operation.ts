import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-beauty-of-an-array-after-applying-operation',
  title: 'Maximum Beauty of an Array After Applying Operation',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** array \`nums\` and a **non-negative** integer \`k\`.

In one operation, you can do the following:

- Choose an index \`i\` that **hasn't been chosen before** from the range \`[0, nums.length - 1]\`.
- Replace \`nums[i]\` with any integer from the range \`[nums[i] - k, nums[i] + k]\`.

The **beauty** of the array is the length of the **longest** subsequence consisting of **equal** elements.

Return the **maximum** possible beauty of the array after applying the operation any number of times.

**Note** that you can apply the operation to each index **only once**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i], k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,6,1,2], k = 2',
      output: '3',
      explanation: 'Elements [4,6,1] can all be changed to 3 (within ±2): 4→3, 6→4... best is picking target 3: 1→3, 4→3, and not 6. Or target 4: 4→4, 6→4, 2→4. That gives 3.',
    },
    {
      input: 'nums = [1,1,1,1], k = 10',
      output: '4',
      explanation: 'All elements are already equal.',
    },
    {
      input: 'nums = [0, 1], k = 0',
      output: '1',
      explanation: 'k=0 means no changes allowed. At most 1 element with any common value.',
    },
  ],
  hints: [
    'Each element x can be changed to any value in [x-k, x+k]. Sort the array.',
    'After sorting, find the longest window [l, r] where nums[r] - nums[l] <= 2*k.',
    'Use a two-pointer sliding window on the sorted array.',
  ],
  functionName: 'maximumBeauty',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumBeauty(nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0, ans = 0;
  for (let r = 0; r < nums.length; r++) {
    while (nums[r] - nums[l] > 2 * k) l++;
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}`,
    typescript: `function maximumBeauty(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let l = 0, ans = 0;
  for (let r = 0; r < nums.length; r++) {
    while (nums[r]! - nums[l]! > 2 * k) l++;
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}`,
    python: `def maximumBeauty(nums, k):
    nums.sort()
    l, ans = 0, 0
    for r in range(len(nums)):
        while nums[r] - nums[l] > 2 * k:
            l += 1
        ans = max(ans, r - l + 1)
    return ans`,
  },
  visibleTests: [
    { args: [[4, 6, 1, 2], 2], expected: 3 },
    { args: [[1, 1, 1, 1], 10], expected: 4 },
    { args: [[0, 1], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 5], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 3 },
    { args: [[100000, 0], 50000], expected: 2 },
    { args: [[10, 20, 30], 5], expected: 2 },
    { args: [[1, 3, 5, 7], 2], expected: 3 },
  ],
};
