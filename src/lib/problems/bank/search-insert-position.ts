import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-insert-position',
  title: 'Search Insert Position',
  difficulty: 'easy',
  tags: ['binary-search', 'arrays'],
  description: `Given a sorted array of **distinct** integers \`nums\` and a \`target\` value, return the index if the target is found. If not, return the index where it would be inserted to keep the array sorted.

Your solution must run in **O(log n)** time.`,
  constraints: [
    '1 <= nums.length <= 10000',
    '-10000 <= nums[i] <= 10000',
    'All values in nums are distinct',
    'nums is sorted in ascending order',
    '-10000 <= target <= 10000',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 5, 6], target = 5',
      output: '2',
    },
    {
      input: 'nums = [1, 3, 5, 6], target = 2',
      output: '1',
    },
    {
      input: 'nums = [1, 3, 5, 6], target = 7',
      output: '4',
    },
  ],
  hints: [
    'The O(log n) requirement rules out a linear scan. Binary search is the right tool — think about what you are searching for.',
    'You want the leftmost index where `nums[i] >= target`. Use a standard binary search with `lo = 0, hi = nums.length`. The loop invariant: the answer is always in `[lo, hi]`.',
    '`let lo = 0, hi = nums.length; while (lo < hi) { const mid = (lo + hi) >> 1; if (nums[mid] < target) lo = mid + 1; else hi = mid; } return lo;`',
  ],
  functionName: 'searchInsert',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function searchInsert(nums, target) {\n  // your code here\n}\n',
    python: 'def searchInsert(nums: list, target: int) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 5, 6], 5], expected: 2 },
    { args: [[1, 3, 5, 6], 2], expected: 1 },
    { args: [[1, 3, 5, 6], 7], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 6], 0], expected: 0 },
    { args: [[1], 0], expected: 0 },
    { args: [[1], 1], expected: 0 },
    { args: [[1, 3], 2], expected: 1 },
  ],
};
