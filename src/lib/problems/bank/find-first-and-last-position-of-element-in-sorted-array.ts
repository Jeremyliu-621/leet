import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-first-and-last-position-of-element-in-sorted-array',
  title: 'Find First and Last Position of Element in Sorted Array',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `Given an array of integers \`nums\` sorted in non-decreasing order, find the starting and ending position of a given \`target\` value.

If \`target\` is not found in the array, return \`[-1, -1]\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    'nums is a non-decreasing array.',
    '-10^9 <= target <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,7,7,8,8,10], target = 8',
      output: '[3,4]',
    },
    {
      input: 'nums = [5,7,7,8,8,10], target = 6',
      output: '[-1,-1]',
    },
    {
      input: 'nums = [], target = 0',
      output: '[-1,-1]',
    },
  ],
  hints: [
    'Level 1: Run two separate binary searches — one to find the leftmost index of target, one to find the rightmost index.',
    'Level 2: For leftmost: when nums[mid] === target, record mid and continue searching left (hi = mid - 1). For rightmost: when nums[mid] === target, record mid and continue right (lo = mid + 1).',
    'Level 3: Both searches run in O(log n). If leftmost returns -1, target is absent; return [-1, -1]. Otherwise return [leftmost, rightmost].',
  ],
  functionName: 'searchRange',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function searchRange(nums, target) {
  function find(left) {
    let lo = 0, hi = nums.length - 1, res = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) { res = mid; if (left) hi = mid - 1; else lo = mid + 1; }
      else if (nums[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return res;
  }
  return [find(true), find(false)];
}`,
    typescript: `function searchRange(nums: number[], target: number): number[] {
  function find(left: boolean): number {
    let lo = 0, hi = nums.length - 1, res = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] === target) { res = mid; if (left) hi = mid - 1; else lo = mid + 1; }
      else if (nums[mid]! < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return res;
  }
  return [find(true), find(false)];
}`,
    python: `def searchRange(nums, target):
    def find(left):
        lo, hi, res = 0, len(nums) - 1, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == target:
                res = mid
                if left: hi = mid - 1
                else: lo = mid + 1
            elif nums[mid] < target: lo = mid + 1
            else: hi = mid - 1
        return res
    return [find(True), find(False)]`,
  },
  visibleTests: [
    { args: [[5, 7, 7, 8, 8, 10], 8], expected: [3, 4] },
    { args: [[5, 7, 7, 8, 8, 10], 6], expected: [-1, -1] },
    { args: [[], 0], expected: [-1, -1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [0, 0] },
    { args: [[1, 4], 4], expected: [1, 1] },
    { args: [[2, 2], 2], expected: [0, 1] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [2, 2] },
    { args: [[1, 1, 1, 1, 1], 1], expected: [0, 4] },
    { args: [[1, 3, 3, 3, 5], 3], expected: [1, 3] },
    { args: [[1, 2, 3, 4, 5], 6], expected: [-1, -1] },
    { args: [[-4, -3, -2, -1, 0], -2], expected: [2, 2] },
  ],
};
