import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-target-index',
  title: 'Locate Value In Sorted Array',
  difficulty: 'easy',
  tags: ['binary-search'],
  description:
    'Given an integer array nums sorted in strictly increasing order and an integer target, find the index at which target appears.\n\nBecause the array is sorted, binary search locates the value in logarithmic time by repeatedly halving the search range.\n\nReturn the index of target, or -1 if it is not present. All values in nums are distinct.',
  constraints: [
    '0 <= nums.length <= 1000',
    'nums is sorted in strictly increasing order.',
    'All values in nums are distinct integers.',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,7,9], target = 7',
      output: '3',
      explanation: '7 sits at index 3.',
    },
    {
      input: 'nums = [1,3,5,7,9], target = 4',
      output: '-1',
      explanation: '4 is not in the array.',
    },
    {
      input: 'nums = [2], target = 2',
      output: '0',
    },
  ],
  hints: [
    'A linear scan works in O(n), but the sorted order lets binary search find the answer in O(log n). What information tells you which half of the array the target must be in?',
    'Maintain two pointers `lo = 0` and `hi = nums.length - 1`. Compute midpoint `mid = (lo + hi) >> 1`. If `nums[mid] === target` you are done. If `nums[mid] < target`, the answer must be in the right half; otherwise the left half.',
    '`while (lo <= hi) { const mid = (lo + hi) >> 1; if (nums[mid] === target) return mid; else if (nums[mid] < target) lo = mid + 1; else hi = mid - 1; } return -1;`',
  ],
  functionName: 'findTargetIndex',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function findTargetIndex(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
    typescript: `function findTargetIndex(nums: number[], target: number): number {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid]! === target) return mid;
    else if (nums[mid]! < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
    python: `def findTargetIndex(nums, target):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 7, 9], 7], expected: 3 },
    { args: [[1, 3, 5, 7, 9], 4], expected: -1 },
    { args: [[2], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[], 1], expected: -1 },
    { args: [[5], 9], expected: -1 },
    { args: [[-10, -5, 0, 5, 10], -10], expected: 0 },
    { args: [[-10, -5, 0, 5, 10], 10], expected: 4 },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: 2 },
    { args: [[10, 20, 30, 40], 25], expected: -1 },
  ],
};
