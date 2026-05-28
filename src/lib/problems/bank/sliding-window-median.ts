import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sliding-window-median',
  title: 'Sliding Window Median',
  difficulty: 'hard',
  tags: ['heap', 'sliding-window'],
  description: `The **median** is the middle value in an ordered list. If the list length is even, the median is the mean of the two middle values.

Given an integer array \`nums\` and an integer \`k\`, there is a sliding window of size \`k\` which moves from left to right. You can only see the \`k\` numbers in the window.

Return an array of the **medians** of each window position.

**Two-Heap approach:** Maintain a max-heap (lower half) and a min-heap (upper half) of equal size (or lower has one more). For each slide: add the new element, remove the outgoing element (lazy deletion), then rebalance.

**Simpler approach for correctness:** For each window, sort and return the middle element(s). This is O(nk log k) which suffices for small inputs.`,
  constraints: [
    '1 <= k <= nums.length <= 100000',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]',
      explanation: 'Window [1,3,-1]→1, [3,-1,-3]→-1, [-1,-3,5]→-1, [-3,5,3]→3, [5,3,6]→5, [3,6,7]→6.',
    },
    {
      input: 'nums = [1,2,3,4,2,3,1,4,2], k = 3',
      output: '[2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]',
    },
  ],
  hints: [
    'Sort each window to find the median — O(nk log k), works for the given constraints.',
    'For k odd, the median is the element at index k/2 in the sorted window. For k even, it\'s the average of indices k/2-1 and k/2.',
    'For an O(n log k) solution: maintain two heaps — a max-heap for the lower half and a min-heap for the upper half. Use lazy deletion (a set of removed elements) to handle the outgoing window element.',
  ],
  functionName: 'medianSlidingWindow',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function medianSlidingWindow(nums, k) {\n\n}\n',
    typescript: "function medianSlidingWindow(nums: number[], k: number): number[] {\n\n}",

    python: 'def medianSlidingWindow(nums: list, k: int) -> list:\n    pass\n',
  },
  visibleTests: [
    { args: [[1,3,-1,-3,5,3,6,7], 3], expected: [1,-1,-1,3,5,6] },
    { args: [[1,2,3,4,2,3,1,4,2], 3], expected: [2,3,3,3,2,3,2] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1,2], 1], expected: [1,2] },
    { args: [[1,2,3,4,5], 1], expected: [1,2,3,4,5] },
    { args: [[2,1,5,3,7,4], 3], expected: [2,3,5,4] },
  ],
};
