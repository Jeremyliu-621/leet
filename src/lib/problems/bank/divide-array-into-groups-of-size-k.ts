import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-array-into-groups-of-size-k',
  title: 'Divide Array Into Groups of Size K',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` of size \`n\` and a positive integer \`k\`. Divide the array into one or more subarrays of size **exactly** \`k\` such that:

- Each element of \`nums\` appears in **exactly one** subarray.
- The elements in each subarray are **distinct**.

Return a 2D array containing all the subarrays. If it is impossible to satisfy the conditions, return an **empty** array. If there are multiple answers, return **any** of them.

**Note:** The subarrays do not need to be contiguous with respect to the original array.`,
  constraints: [
    '1 <= n <= 1000',
    '1 <= nums[i] <= 1000',
    '1 <= k <= n',
    'n is divisible by k',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 2',
      output: '[[1,2],[3,4]]',
      explanation: 'Sort and group: [1,2] and [3,4]. Each group has distinct elements.',
    },
    {
      input: 'nums = [1,2,3,3,6,7], k = 3',
      output: '[[1,2,3],[3,6,7]]',
      explanation: 'After sorting: [1,2,3,3,6,7]. Groups: [1,2,3] and [3,6,7].',
    },
    {
      input: 'nums = [1,2,3,4,5,6], k = 3',
      output: '[[1,2,3],[4,5,6]]',
      explanation: 'After sorting, consecutive groups of 3 each have distinct elements.',
    },
  ],
  hints: [
    'Sort the array first. This brings equal elements close together.',
    'After sorting, check if any consecutive k elements contain duplicates (i.e., nums[i] == nums[i+1] within a window). If so, return [].',
    'Sort nums, then slice into chunks of size k. A chunk is invalid if nums[i] === nums[i + k] (after sorting, duplicates within a window would be adjacent).',
  ],
  functionName: 'divideArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function divideArray(nums, k) {\n  // your code here\n}\n',
    typescript: "function divideArray(nums: number[], k: number): number[][] {\n  // your code here\n}",

    python: 'def divideArray(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 2], expected: [[1, 2], [3, 4]] },
    { args: [[1, 2, 3, 3, 6, 7], 3], expected: [[1, 2, 3], [3, 6, 7]] },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: [[1, 2, 3], [4, 5, 6]] },
  ],
  hiddenTests: [
    { args: [[1, 1], 2], expected: [] },
    { args: [[1], 1], expected: [[1]] },
    { args: [[1, 2], 1], expected: [[1], [2]] },
    { args: [[1, 2, 1, 2], 2], expected: [] },
    { args: [[5, 1, 3, 2, 4, 6], 3], expected: [[1, 2, 3], [4, 5, 6]] },
  ],
};
