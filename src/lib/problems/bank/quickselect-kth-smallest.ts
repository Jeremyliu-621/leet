import type { Problem } from '../types';

export const problem: Problem = {
  id: 'quickselect-kth-smallest',
  title: 'Kth Smallest Element — Quickselect',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `Given an unsorted array \`nums\` and an integer \`k\`, return the **k-th smallest** element using the **Quickselect** algorithm (average O(n) time, O(1) space after in-place partition).

Quickselect is a selection algorithm based on the partition step of Quicksort. Pick a pivot, partition elements into "smaller than pivot" and "larger than pivot". If the pivot lands at position k−1, you have the answer; otherwise recurse on the relevant partition only.

**1-indexed:** "k-th smallest" means the element at index k−1 in the sorted array.`,
  constraints: [
    '1 <= k <= nums.length',
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '2',
      explanation: 'Sorted: [1,2,3,4,5,6]. 2nd smallest = 2.',
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '3',
      explanation: 'Sorted: [1,2,2,3,3,4,5,5,6]. 4th smallest = 3.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '1',
      explanation: 'Single element.',
    },
  ],
  hints: [
    'Implement a `partition(arr, lo, hi)` that places a pivot at its correct sorted position and returns that position. Use Lomuto or Hoare partition scheme.',
    'In `quickselect(arr, lo, hi, k)`: partition to get pivot index p. If p === k, return arr[p]. If p < k, recurse on the right half. If p > k, recurse on the left half. This is O(n) average, O(n²) worst case.',
    'To avoid worst-case input, pick a random pivot: swap arr[lo] with arr[lo + Math.floor(Math.random()*(hi-lo+1))] before partitioning. For deterministic tests, use the middle element as pivot.',
  ],
  functionName: 'quickselectKthSmallest',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function quickselectKthSmallest(nums, k) {\n\n}`,
    typescript: `function quickselectKthSmallest(nums: number[], k: number): number {\n\n}`,
    python: `def quickselectKthSmallest(nums: list[int], k: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 5, 6, 4], 2], expected: 2 },
    { args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 3 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 3 },
    { args: [[5, 4, 3, 2, 1], 1], expected: 1 },
    { args: [[5, 4, 3, 2, 1], 5], expected: 5 },
    { args: [[7, 10, 4, 3, 20, 15], 3], expected: 7 },
    { args: [[2, 2, 2, 2], 2], expected: 2 },
    { args: [[-3, -1, -2, 0], 2], expected: -2 },
    { args: [[100, 1, 50, 25, 75], 4], expected: 75 },
  ],
};
