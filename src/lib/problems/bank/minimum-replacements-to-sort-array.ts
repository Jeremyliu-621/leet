import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-replacements-to-sort-array',
  title: 'Minimum Replacements to Sort the Array',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given a 0-indexed integer array \`nums\`. In one operation you can replace any element of the array with **any two** elements that **sum** to it.

Return the **minimum number of operations** to make the array sorted in non-decreasing order.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,9,3]',
      output: '2',
      explanation: 'Replace 9 with [3,6] → [3,3,6,3]. Then replace 6 with [3,3] → [3,3,3,3,3]. 2 operations.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'Already sorted. 0 operations needed.',
    },
  ],
  hints: [
    'Level 1: Scan right to left. The last element never needs splitting. For each nums[i] that is greater than its right neighbor, you must split it.',
    'Level 2: If nums[i] > limit (current right bound), split nums[i] into ceil(nums[i] / limit) equal pieces. Operations = numParts - 1. The new leftmost piece has value floor(nums[i] / numParts), becoming the new limit.',
    'Level 3: numParts = ceil(nums[i] / nums[i+1]). newValue = floor(nums[i] / numParts). ops += numParts - 1. Update limit = newValue for the next iteration leftward.',
  ],
  functionName: 'minimumReplacement',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumReplacement(nums) {
  const n = nums.length;
  let ops = 0;
  let limit = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > limit) {
      const numParts = Math.ceil(nums[i] / limit);
      ops += numParts - 1;
      limit = Math.floor(nums[i] / numParts);
    } else {
      limit = nums[i];
    }
  }
  return ops;
}`,
    typescript: `function minimumReplacement(nums: number[]): number {
  const n = nums.length;
  let ops = 0;
  let limit = nums[n - 1]!;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i]! > limit) {
      const numParts = Math.ceil(nums[i]! / limit);
      ops += numParts - 1;
      limit = Math.floor(nums[i]! / numParts);
    } else {
      limit = nums[i]!;
    }
  }
  return ops;
}`,
    python: `def minimumReplacement(nums):
    n = len(nums)
    ops = 0
    limit = nums[-1]
    for i in range(n - 2, -1, -1):
        if nums[i] > limit:
            import math
            num_parts = math.ceil(nums[i] / limit)
            ops += num_parts - 1
            limit = nums[i] // num_parts
        else:
            limit = nums[i]
    return ops`,
  },
  visibleTests: [
    { args: [[3, 9, 3]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 5, 5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[12, 9, 7, 6, 17, 19, 21]], expected: 6 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[4, 2]], expected: 1 },
    { args: [[9, 6]], expected: 1 },
  ],
};
