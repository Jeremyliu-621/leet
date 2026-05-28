import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-array-continuous',
  title: 'Minimum Number of Operations to Make Array Continuous',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window', 'binary-search'],
  description: `You are given an integer array \`nums\`. In one operation, you can replace **any** element in \`nums\` with **any** integer.

\`nums\` is considered **continuous** if both of the following conditions are fulfilled:
- All elements in \`nums\` are **unique**.
- The difference between the **maximum** element and the **minimum** element in \`nums\` equals \`nums.length - 1\`.

Note that the order of the elements does not matter.

Return the **minimum** number of operations required to make \`nums\` continuous.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,2,5,3]',
      output: '0',
      explanation: 'nums is already continuous: [2,3,4,5], all distinct, max - min = 3 = length - 1.',
    },
    {
      input: 'nums = [1,2,3,5,6]',
      output: '1',
      explanation: 'Replace 6 with 4 to get [1,2,3,4,5]. One operation needed.',
    },
  ],
  hints: [
    'Sort and deduplicate nums first. The answer is n minus the maximum count of elements already fitting in some valid window.',
    'A valid window of size n starting at value v contains integers in [v, v+n-1]. Use a sliding window on the sorted unique array to find the largest subset fitting any such window.',
    'For each left pointer, binary-search (or advance a right pointer) to find how many unique values fit in [nums[left], nums[left]+n-1].',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n  \n}\n',
    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 5, 3]], expected: 0 },
    { args: [[1, 2, 3, 5, 6]], expected: 1 },
    { args: [[2, 2, 3, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[3, 5, 1]], expected: 1 },
    { args: [[1, 10, 100, 1000]], expected: 3 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: 0 },
  ],
};
