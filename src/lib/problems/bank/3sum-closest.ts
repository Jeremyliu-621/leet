import type { Problem } from '../types';

export const problem: Problem = {
  id: '3sum-closest',
  title: '3Sum Closest',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` of length \`n\` and an integer \`target\`, find three integers in \`nums\` such that the sum is **closest** to \`target\`.

Return the **sum** of the three integers.

You may assume that each input would have exactly one solution.`,
  constraints: [
    '3 <= nums.length <= 500',
    '-1000 <= nums[i] <= 1000',
    '-10^4 <= target <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [-1,2,1,-4], target = 1',
      output: '2',
      explanation: 'The sum that is closest to 1 is 2 (-1 + 2 + 1 = 2).',
    },
    {
      input: 'nums = [0,0,0], target = 1',
      output: '0',
      explanation: 'The sum closest to 1 is 0.',
    },
  ],
  hints: [
    'Level 1: Sort the array. For each element at index i, use a two-pointer approach on the remaining subarray.',
    'Level 2: Initialize two pointers l = i+1, r = n-1. Compute the sum. If it\'s closer to target, update best. Move l right if sum < target, move r left if sum > target.',
    'Level 3: Early exit if sum === target. O(n²) overall.',
  ],
  functionName: 'threeSumClosest',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let best = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(sum - target) < Math.abs(best - target)) best = sum;
      if (sum === target) return sum;
      if (sum < target) l++;
      else r--;
    }
  }
  return best;
}`,
    typescript: `function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let best = nums[0]! + nums[1]! + nums[2]!;
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1;
    while (l < r) {
      const sum = nums[i]! + nums[l]! + nums[r]!;
      if (Math.abs(sum - target) < Math.abs(best - target)) best = sum;
      if (sum === target) return sum;
      if (sum < target) l++;
      else r--;
    }
  }
  return best;
}`,
    python: `def threeSumClosest(nums, target):
    nums = sorted(int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums))
    target = int(target)
    n = len(nums)
    best = nums[0] + nums[1] + nums[2]
    for i in range(n - 2):
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s - target) < abs(best - target):
                best = s
            if s == target:
                return s
            elif s < target:
                l += 1
            else:
                r -= 1
    return best`,
  },
  visibleTests: [
    { args: [[-1, 2, 1, -4], 1], expected: 2 },
    { args: [[0, 0, 0], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 0], 100], expected: 3 },
    { args: [[-100, 0, 1, 2], 0], expected: 3 },
    { args: [[1, 2, 3], 6], expected: 6 },
    { args: [[-3, -2, -1, 0, 1, 2], 2], expected: 2 },
    { args: [[1000, -1000, 0, 5, -5], 1], expected: 0 },
  ],
};
