import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-search-range',
  title: 'Count Occurrences In Sorted Array',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `Given an integer array \`nums\` sorted in **non-decreasing** order and an integer \`target\`, return the number of times \`target\` appears in the array.

Because the array is sorted, you can find the **first** and **last** positions of the target with two separate binary searches, then compute the count as \`last - first + 1\`.

A linear scan would work but runs in O(n); the binary search approach runs in O(log n).`,
  constraints: [
    '0 <= nums.length <= 1000',
    'nums is sorted in non-decreasing order.',
    'All values are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,2,3], target = 2',
      output: '3',
      explanation: 'Target 2 appears at indices 1, 2, and 3.',
    },
    {
      input: 'nums = [1,2,3], target = 4',
      output: '0',
      explanation: 'Target 4 is not in the array.',
    },
    {
      input: 'nums = [5,5,5,5], target = 5',
      output: '4',
      explanation: 'All four elements equal the target.',
    },
  ],
  hints: [
    'The simplest correct approach is a linear scan with a counter. For the O(log n) approach, think about finding the first and last occurrence of `target` separately.',
    'Two "left-boundary" binary searches: one for the first index where `nums[mid] >= target` and one for the first index where `nums[mid] > target`. The difference gives the count.',
    '`function lowerBound(nums, t) { let lo=0, hi=nums.length, res=nums.length; while(lo<hi){const mid=(lo+hi)>>1; if(nums[mid]>=t){res=mid;hi=mid;}else lo=mid+1;} return res; }` Then `return lowerBound(nums, target+1) - lowerBound(nums, target);`',
  ],
  functionName: 'countOccurrences',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function countOccurrences(nums, target) {\n  // your code here\n}\n',
    typescript: "function countOccurrences(nums: number[], target: number): number {\n  // your code here\n}",

    python: 'def countOccurrences(nums, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 2, 3], 2], expected: 3 },
    { args: [[1, 2, 3], 4], expected: 0 },
    { args: [[5, 5, 5, 5], 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [[], 1], expected: 0 },
    { args: [[1], 1], expected: 1 },
    { args: [[1], 2], expected: 0 },
    { args: [[-1, -1, 0, 1, 1], -1], expected: 2 },
    { args: [[1, 1, 1, 1, 1], 1], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 1 },
  ],
};
