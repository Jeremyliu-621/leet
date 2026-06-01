import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-search',
  title: 'Binary Search',
  difficulty: 'easy',
  tags: ['binary-search', 'arrays'],
  description: `Given an array of integers \`nums\` which is sorted in **ascending order**, and an integer \`target\`, write a function to search \`target\` in \`nums\`. If \`target\` exists, return its **index**. Otherwise, return \`-1\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 < nums[i], target < 10^4',
    'All the integers in nums are unique.',
    'nums is sorted in ascending order.',
  ],
  examples: [
    {
      input: 'nums = [-1,0,3,5,9,12], target = 9',
      output: '4',
      explanation: '9 exists at index 4.',
    },
    {
      input: 'nums = [-1,0,3,5,9,12], target = 2',
      output: '-1',
      explanation: '2 does not exist in nums so return -1.',
    },
  ],
  hints: [
    'Maintain two pointers `lo` and `hi` starting at 0 and `nums.length - 1`. At each step, compare `nums[mid]` to `target` and halve the search space.',
    'If `nums[mid] === target` return `mid`. If `nums[mid] < target` move `lo = mid + 1`. Otherwise move `hi = mid - 1`.',
    'The loop exits when `lo > hi` — return -1 at that point since target was not found.',
  ],
  functionName: 'search',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function search(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1; else hi = mid - 1;
  }
  return -1;
}`,
    typescript: `function search(nums: number[], target: number): number {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid]! < target) lo = mid + 1; else hi = mid - 1;
  }
  return -1;
}`,
    python: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
  },
  visibleTests: [
    { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
  ],
  hiddenTests: [
    { args: [[5], 5], expected: 0 },
    { args: [[5], -5], expected: -1 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 2 },
    { args: [[1, 3, 5, 7, 9, 11], 7], expected: 3 },
    { args: [[2, 4, 6, 8, 10], 6], expected: 2 },
    { args: [[2, 4, 6, 8, 10], 7], expected: -1 },
    { args: [[-10, -5, 0, 5, 10], -10], expected: 0 },
    { args: [[-10, -5, 0, 5, 10], 10], expected: 4 },
  ],
};
