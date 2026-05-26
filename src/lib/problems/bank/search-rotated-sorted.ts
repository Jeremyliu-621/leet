import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-rotated-sorted',
  title: 'Search in Rotated Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `There is an integer array \`nums\` sorted in ascending order (with **distinct** values) that has been rotated at an unknown pivot index.

Given the array \`nums\` and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not.

You must write an algorithm with **O(log n)** runtime complexity.`,
  examples: [
    { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
    { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
    { input: 'nums = [1], target = 0', output: '-1' },
  ],
  constraints: [
    '1 <= nums.length <= 5000',
    '-10^4 <= nums[i] <= 10^4',
    'All values of nums are unique.',
    'nums is an ascending array that has been rotated.',
    '-10^4 <= target <= 10^4',
  ],
  functionName: 'searchRotated',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function searchRotated(nums, target) {\n  // your code here\n}\n',
    python: 'def searchRotated(nums, target):\n    # your code here\n    pass\n',
  },
  hints: [
    'At any midpoint, one of the two halves must be properly sorted. Determine which half is sorted by comparing nums[left] to nums[mid].',
    'If the left half is sorted (nums[left] <= nums[mid]): check if target is in [nums[left], nums[mid]). If yes, search left; otherwise right.',
    'If the right half is sorted: check if target is in (nums[mid], nums[right]]. If yes, search right; otherwise left.',
  ],
  visibleTests: [
    { args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
    { args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
    { args: [[1], 0], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[3, 1], 1], expected: 1 },
    { args: [[5, 1, 3], 3], expected: 2 },
    { args: [[1, 3, 5], 5], expected: 2 },
    { args: [[6, 7, 1, 2, 3, 4, 5], 6], expected: 0 },
  ],
};
