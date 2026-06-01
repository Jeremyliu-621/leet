import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-element',
  title: 'Remove Element',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\` and an integer \`val\`, remove all occurrences of \`val\` **in-place** and return the count of remaining elements.

The order of elements may be changed. Do not allocate extra space — modify the array in place with O(1) extra memory.

Return \`k\`, the number of elements that are **not** equal to \`val\`. The first \`k\` positions of \`nums\` should hold the kept elements; anything beyond \`k\` is ignored.

> **Testing note:** The judge compares only the first \`k\` elements of \`nums\` (in any order). This problem returns \`k\` from a pre-set \`nums\` slice.`,
  constraints: [
    '0 <= nums.length <= 100',
    '0 <= nums[i] <= 50',
    '0 <= val <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,2,2,3], val = 3',
      output: '2',
      explanation:
        '2 elements remain (the two 2s). The first 2 positions of nums can be [2,2] in any order.',
    },
    {
      input: 'nums = [0,1,2,2,3,0,4,2], val = 2',
      output: '5',
      explanation: '5 elements remain: [0,1,3,0,4] (in any order).',
    },
  ],
  hints: [
    'Use a write pointer `k` starting at 0. Iterate through every element; whenever it is not `val`, write it to `nums[k]` and advance `k`.',
    'At the end, `k` equals the number of kept elements and `nums[0..k-1]` holds them.',
    'This is a classic two-pointer (slow/fast) pattern: the fast pointer reads every element, the slow pointer only advances on a keep.',
  ],
  functionName: 'removeElement',
  params: ['nums', 'val'],
  starterCode: {
    javascript: `function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[k++] = nums[i];
  }
  return k;
}`,
    typescript: `function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[k++] = nums[i]!;
  }
  return k;
}`,
    python: `def removeElement(nums, val):
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k`,
  },
  visibleTests: [
    { args: [[3, 2, 2, 3], 3], expected: 2 },
    { args: [[0, 1, 2, 2, 3, 0, 4, 2], 2], expected: 5 },
  ],
  hiddenTests: [
    { args: [[], 0], expected: 0 },
    { args: [[1], 1], expected: 0 },
    { args: [[1], 2], expected: 1 },
    { args: [[2, 2, 2], 2], expected: 0 },
    { args: [[1, 2, 3], 4], expected: 3 },
    { args: [[1, 2, 3, 1, 2, 3], 1], expected: 4 },
  ],
};
