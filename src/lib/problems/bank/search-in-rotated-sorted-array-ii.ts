import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-in-rotated-sorted-array-ii',
  title: 'Search in Rotated Sorted Array II',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `There is an integer array \`nums\` sorted in non-decreasing order (not necessarily with distinct values). Before being passed to your function, \`nums\` is **possibly rotated** at an unknown pivot index \`k\`.

Given the array \`nums\` after the possible rotation and an integer \`target\`, return \`true\` if \`target\` is in \`nums\`, or \`false\` if it is not in \`nums\`.

You must decrease the overall operation steps as much as possible.`,
  constraints: [
    '1 <= nums.length <= 5000',
    '-10^4 <= nums[i] <= 10^4',
    'nums is an ascending array that is possibly rotated.',
    '-10^4 <= target <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,5,6,0,0,1,2], target = 0',
      output: 'true',
    },
    {
      input: 'nums = [2,5,6,0,0,1,2], target = 3',
      output: 'false',
    },
  ],
  hints: [
    'Modified binary search: handle duplicates by shrinking from both ends when nums[lo] == nums[mid].',
    'If nums[lo] <= nums[mid]: left half is sorted. Check if target is in range [lo, mid].',
    'Otherwise right half is sorted. Check if target is in range [mid+1, hi].',
  ],
  functionName: 'search',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function search(nums, target) {

}`,
    typescript: "function search(nums: number[], target: number): boolean {\n\n}",

    python: `def search(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[2, 5, 6, 0, 0, 1, 2], 0], expected: true },
    { args: [[2, 5, 6, 0, 0, 1, 2], 3], expected: false },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: false },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1], 2], expected: true },
    { args: [[3, 1, 1], 3], expected: true },
    { args: [[1, 2, 3, 1, 1], 2], expected: true },
  ],
};
