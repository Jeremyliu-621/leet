import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'binary-search-debug-overflow',
  title: 'Fix the Bug: Binary Search',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  kind: 'debug',
  description: `The following implementation of **Binary Search** has a bug. Given a sorted array \`nums\` and a \`target\`, return the index of \`target\` or \`-1\` if not found.

Find and fix the bug so all tests pass.

**Hint:** The bug is in how the midpoint is computed — it works for small arrays but fails for large ones, and introduces a subtle logical error even for normal arrays.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 < nums[i], target < 10^4',
    'All values in nums are unique.',
    'nums is sorted in ascending order.',
  ],
  examples: [
    {
      input: 'nums = [-1,0,3,5,9,12], target = 9',
      output: '4',
    },
    {
      input: 'nums = [-1,0,3,5,9,12], target = 2',
      output: '-1',
    },
  ],
  hints: [
    'Look carefully at how `mid` is calculated. Does it always point to the right element?',
    'The computation `Math.floor((lo + hi) / 2)` is correct for midpoint, but the comparison logic has a bug: `nums[mid] < target` should move `lo` to `mid + 1`, not `mid`.',
    'Change `lo = mid` to `lo = mid + 1`. Without this, the loop can get stuck in an infinite loop when `lo + 1 === hi`.',
  ],
  functionName: 'search',
  params: ['nums', 'target'],
  buggyCode: {
    javascript: `function search(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
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
            lo = mid
        else:
            hi = mid - 1
    return -1`,
  },
  starterCode: {
    javascript: `function search(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
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
            lo = mid
        else:
            hi = mid - 1
    return -1`,
  },
  visibleTests: [
    { args: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { args: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
    { args: [[5], 5], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 4], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 6], expected: -1 },
    { args: [[2, 5], 5], expected: 1 },
    { args: [[1, 3], 3], expected: 1 },
  ],
};
