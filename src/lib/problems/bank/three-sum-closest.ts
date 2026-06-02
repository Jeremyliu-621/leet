import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-sum-closest',
  title: 'Three Sum Closest',
  difficulty: 'medium',
  tags: ['two-pointers'],
  description: `Given an integer array \`nums\` of length \`n\` and an integer \`target\`, find three integers in \`nums\` such that their sum is closest to \`target\`. Return the sum of the three integers.

You may assume that each input would have exactly one solution.

**Example:** For \`nums = [-1, 2, 1, -4]\` and \`target = 1\`, the sum that is closest to target is \`2\` (from \`-1 + 2 + 1\`).`,
  constraints: [
    '3 <= nums.length <= 500',
    '-1000 <= nums[i] <= 1000',
    '-10000 <= target <= 10000',
  ],
  examples: [
    {
      input: 'nums = [-1,2,1,-4], target = 1',
      output: '2',
      explanation: 'The sum -1 + 2 + 1 = 2 is closest to target 1.',
    },
    {
      input: 'nums = [0,0,0], target = 1',
      output: '0',
      explanation: 'The only possible sum is 0 + 0 + 0 = 0.',
    },
    {
      input: 'nums = [1,2,3], target = 5',
      output: '6',
      explanation: 'The only possible sum is 1 + 2 + 3 = 6, which is closest to 5.',
    },
  ],
  hints: [
    'Sorting the array lets you systematically explore all triplets without redundant work. Think about how fixing one element and scanning the rest with two pointers covers every combination in O(n²).',
    'Sort nums. For each index i, set left = i + 1 and right = n - 1. Compute the three-number sum; if it is exactly the target, return immediately. Track the closest sum seen so far, then move the left pointer up when the sum is too small and the right pointer down when too large.',
    '`nums.sort((a, b) => a - b); let closest = nums[0] + nums[1] + nums[2]; for (let i = 0; i < nums.length - 2; i++) { let l = i + 1, r = nums.length - 1; while (l < r) { const s = nums[i] + nums[l] + nums[r]; if (Math.abs(s - target) < Math.abs(closest - target)) closest = s; if (s === target) return s; else if (s < target) l++; else r--; } } return closest;`',
  ],
  functionName: 'threeSumClosest',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (Math.abs(s - target) < Math.abs(closest - target)) closest = s;
      if (s === target) return s;
      if (s < target) l++; else r--;
    }
  }
  return closest;
}`,
    typescript: `function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closest = nums[0]! + nums[1]! + nums[2]!;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const s = nums[i]! + nums[l]! + nums[r]!;
      if (Math.abs(s - target) < Math.abs(closest - target)) closest = s;
      if (s === target) return s;
      if (s < target) l++; else r--;
    }
  }
  return closest;
}`,
    python: `def threeSumClosest(nums, target):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = sorted(int(x) for x in nums); target = int(target)
    closest = nums[0] + nums[1] + nums[2]
    for i in range(len(nums) - 2):
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s - target) < abs(closest - target): closest = s
            if s == target: return s
            if s < target: l += 1
            else: r -= 1
    return closest`,
  },
  visibleTests: [
    { args: [[-1, 2, 1, -4], 1], expected: 2 },
    { args: [[0, 0, 0], 1], expected: 0 },
    { args: [[1, 2, 3], 5], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 0], -100], expected: 2 },
    { args: [[-1, -1, -1, -1], 3], expected: -3 },
    { args: [[-3, -2, -1], 0], expected: -6 },
    { args: [[1, 1, 1], 100], expected: 3 },
    { args: [[1, 2, 4, 8, 16, 32, 64, 128], 82], expected: 82 },
  ],
};
