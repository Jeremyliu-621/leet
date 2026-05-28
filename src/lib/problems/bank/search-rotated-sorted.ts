import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-rotated-sorted',
  title: 'Search in Rotated Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Given an integer array \`nums\` sorted in ascending order, and then **rotated** at some unknown pivot index, find the index of a given \`target\` value.

The array has **no duplicate elements**. If \`target\` is not in the array, return \`-1\`.

You must write a solution with **O(log n)** runtime complexity.

**Example:** \`[4,5,6,7,0,1,2]\` is a sorted array \`[0,1,2,4,5,6,7]\` rotated at pivot index 3.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
    'All values in nums are unique.',
    'nums is an ascending array rotated at some pivot.',
    '-10000 <= target <= 10000',
  ],
  examples: [
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 0',
      output: '4',
      explanation: '0 is at index 4 in the rotated array.',
    },
    {
      input: 'nums = [4,5,6,7,0,1,2], target = 3',
      output: '-1',
      explanation: '3 is not present in the array.',
    },
    {
      input: 'nums = [1], target = 0',
      output: '-1',
      explanation: 'Single-element array does not contain 0.',
    },
  ],
  hints: [
    'Even though the array is rotated, one half of any binary-search split must still be in sorted order. Which half?',
    'At each step, compare `nums[mid]` with `nums[left]` to decide which half is sorted. If the left half is sorted and `target` falls in `[nums[left], nums[mid])`, search left; otherwise search right. Mirror logic applies when the right half is sorted.',
    '```js\nlet left = 0, right = nums.length - 1;\nwhile (left <= right) {\n  const mid = (left + right) >> 1;\n  if (nums[mid] === target) return mid;\n  if (nums[left] <= nums[mid]) { // left half sorted\n    if (target >= nums[left] && target < nums[mid]) right = mid - 1;\n    else left = mid + 1;\n  } else { // right half sorted\n    if (target > nums[mid] && target <= nums[right]) left = mid + 1;\n    else right = mid - 1;\n  }\n}\nreturn -1;\n```',
  ],
  functionName: 'searchRotated',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function searchRotated(nums, target) {\n  // your code here\n}\n',
    typescript: "function searchRotated(nums: number[], target: number): number {\n  // your code here\n}",

    python: 'def searchRotated(nums, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
    { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
    { args: [[1], 0], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[3, 1, 2], 1], expected: 1 },
    { args: [[6, 7, 0, 1, 2, 3, 4, 5], 0], expected: 2 },
    { args: [[6, 7, 0, 1, 2, 3, 4, 5], 6], expected: 0 },
    { args: [[6, 7, 0, 1, 2, 3, 4, 5], 5], expected: 7 },
    { args: [[2, 3, 4, 5, 6, 7, 0, 1], 0], expected: 6 },
    { args: [[5, 1, 3], 3], expected: 2 },
  ],
};
