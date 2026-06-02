import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sorted-pair-exists',
  title: 'Pair Exists In Sorted Array',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description:
    'Given an integer array nums sorted in non-decreasing order and an integer target, decide whether any two distinct positions hold values that sum to target.\n\nBecause the array is sorted, a two-pointer scan from both ends solves this without extra space: move the left pointer right to increase the sum, and the right pointer left to decrease it.\n\nReturn true if such a pair exists, otherwise return false.',
  constraints: [
    '0 <= nums.length <= 1000',
    'nums is sorted in non-decreasing order.',
    'All values in nums are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,2,4,7], target = 6',
      output: 'true',
      explanation: '2 + 4 = 6.',
    },
    {
      input: 'nums = [1,2,4,7], target = 100',
      output: 'false',
      explanation: 'No pair reaches 100.',
    },
    {
      input: 'nums = [-3,0,3], target = 0',
      output: 'true',
    },
  ],
  hints: [
    'The array is sorted — that means you can reason about whether the current sum is too small or too large and adjust accordingly. A hash-set works, but there\'s an O(1) space approach.',
    'Place one pointer at the smallest value (`lo = 0`) and one at the largest (`hi = nums.length - 1`). If their sum equals target, return true. If it\'s too small, advance `lo`; if too large, retreat `hi`.',
    '`let lo = 0, hi = nums.length - 1; while (lo < hi) { const s = nums[lo] + nums[hi]; if (s === target) return true; if (s < target) lo++; else hi--; } return false;`',
  ],
  functionName: 'sortedPairExists',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function sortedPairExists(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const s = nums[lo] + nums[hi];
    if (s === target) return true;
    if (s < target) lo++; else hi--;
  }
  return false;
}`,
    typescript: `function sortedPairExists(nums: number[], target: number): boolean {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const s = nums[lo]! + nums[hi]!;
    if (s === target) return true;
    if (s < target) lo++; else hi--;
  }
  return false;
}`,
    python: `def sortedPairExists(nums, target):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]; target = int(target)
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        s = nums[lo] + nums[hi]
        if s == target: return True
        if s < target: lo += 1
        else: hi -= 1
    return False`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 7], 6], expected: true },
    { args: [[1, 2, 4, 7], 100], expected: false },
    { args: [[-3, 0, 3], 0], expected: true },
  ],
  hiddenTests: [
    { args: [[], 5], expected: false },
    { args: [[4], 8], expected: false },
    { args: [[2, 2], 4], expected: true },
    { args: [[1, 3, 5, 9, 11], 14], expected: true },
    { args: [[1, 3, 5, 9, 11], 7], expected: false },
    { args: [[-5, -2, 0, 1, 6], -7], expected: true },
  ],
};
