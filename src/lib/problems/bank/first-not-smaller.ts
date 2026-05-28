import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-not-smaller',
  title: 'Insertion Point In Sorted Array',
  difficulty: 'easy',
  tags: ['binary-search'],
  description:
    'Given an integer array nums sorted in non-decreasing order and an integer target, return the index of the first element that is greater than or equal to target.\n\nThis is the position where target could be inserted while keeping the array sorted. If target is larger than every element, the answer is nums.length.\n\nBinary search finds this boundary in logarithmic time.',
  constraints: [
    '0 <= nums.length <= 1000',
    'nums is sorted in non-decreasing order.',
    'All values in nums are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,7], target = 5',
      output: '2',
      explanation: 'The first element not smaller than 5 is at index 2.',
    },
    {
      input: 'nums = [1,3,5,7], target = 4',
      output: '2',
      explanation: '4 would be inserted before 5, at index 2.',
    },
    {
      input: 'nums = [1,3,5,7], target = 8',
      output: '4',
      explanation: '8 is larger than every element, so it goes at the end.',
    },
  ],
  hints: [
    'You want the *leftmost* index where the element is ≥ target — the classic "left boundary" binary search. What should happen when you find a qualifying element at `mid`?',
    'Keep a variable `result = nums.length` (the fallback when nothing qualifies). When `nums[mid] >= target`, record `result = mid` and continue searching *left* (`hi = mid - 1`) to find an earlier match. When `nums[mid] < target`, search right.',
    '`let lo = 0, hi = nums.length - 1, result = nums.length; while (lo <= hi) { const mid = (lo + hi) >> 1; if (nums[mid] >= target) { result = mid; hi = mid - 1; } else { lo = mid + 1; } } return result;`',
  ],
  functionName: 'firstNotSmaller',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function firstNotSmaller(nums, target) {\n  // your code here\n}\n',
    python: 'def firstNotSmaller(nums, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 5, 7], 5], expected: 2 },
    { args: [[1, 3, 5, 7], 4], expected: 2 },
    { args: [[1, 3, 5, 7], 8], expected: 4 },
  ],
  hiddenTests: [
    { args: [[], 5], expected: 0 },
    { args: [[2, 2, 2], 2], expected: 0 },
    { args: [[1, 2, 3], 0], expected: 0 },
    { args: [[-5, -3, -1], -3], expected: 1 },
    { args: [[10], 10], expected: 0 },
    { args: [[1, 4, 4, 4, 9], 4], expected: 1 },
  ],
};
