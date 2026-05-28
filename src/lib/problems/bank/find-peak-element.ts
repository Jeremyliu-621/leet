import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-peak-element',
  title: 'Find Peak Element',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `A **peak element** is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array \`nums\`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any** of the peaks.

You may imagine that \`nums[-1] = nums[n] = -∞\`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in **O(log n)** time.

**Approach:** Binary search. If \`nums[mid] < nums[mid+1]\`, the peak is to the right; otherwise it is at or to the left of mid.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-2^31 <= nums[i] <= 2^31 - 1',
    'nums[i] != nums[i + 1] for all valid i',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1]',
      output: '2',
      explanation: '3 is a peak element and your function should return the index 2.',
    },
    {
      input: 'nums = [1,2,1,3,5,6,4]',
      output: '5',
      explanation: 'Your function can return either index 1 (value 2) or index 5 (value 6).',
    },
  ],
  hints: [
    'Think about binary search. At any midpoint, at least one half of the array must contain a peak — the side where values are increasing.',
    'If `nums[mid] < nums[mid+1]`, a peak exists to the right (including mid+1). If `nums[mid] > nums[mid+1]`, a peak exists at mid or to the left.',
    '`let lo=0,hi=nums.length-1; while(lo<hi){const mid=(lo+hi)>>1; if(nums[mid]<nums[mid+1])lo=mid+1; else hi=mid;} return lo;`',
  ],
  functionName: 'findPeakElement',
  params: ['nums'],
  starterCode: {
    javascript: 'function findPeakElement(nums) {\n  // your code here\n}\n',
    python: 'def findPeakElement(nums: list) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 1]], expected: 2 },
    { args: [[1, 2, 1, 3, 5, 6, 4]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 0 },
    { args: [[1, 3, 2, 4, 1]], expected: 3 },
  ],
};
