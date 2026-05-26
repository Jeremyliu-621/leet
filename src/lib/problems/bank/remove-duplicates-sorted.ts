import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicates-sorted',
  title: 'Remove Duplicates from Sorted Array',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`nums\` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The **relative order** of the elements should be kept the same.

Return the number of unique elements \`k\`. The first \`k\` elements of \`nums\` should hold the unique elements in their original order.

Return both \`k\` and the first \`k\` elements of \`nums\` as \`[k, nums.slice(0, k)]\`.`,
  examples: [
    {
      input: 'nums = [1,1,2]',
      output: '[2,[1,2]]',
      explanation: 'After removing the duplicate 1, the unique elements are [1,2]. k = 2.',
    },
    {
      input: 'nums = [0,0,1,1,1,2,2,3,3,4]',
      output: '[5,[0,1,2,3,4]]',
      explanation: 'Unique elements: [0,1,2,3,4]. k = 5.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-100 <= nums[i] <= 100',
    'nums is sorted in non-decreasing order.',
  ],
  functionName: 'removeDuplicates',
  params: ['nums'],
  starterCode: {
    javascript: 'function removeDuplicates(nums) {\n  // Modify nums in-place.\n  // Return [k, nums.slice(0, k)] where k is the number of unique elements.\n}\n',
    python: 'def removeDuplicates(nums):\n    # Modify nums in-place.\n    # Return [k, nums[:k]] where k is the number of unique elements.\n    pass\n',
  },
  hints: [
    'Use a slow pointer (write position) and a fast pointer. The fast pointer reads; the slow pointer writes unique values.',
    'When nums[fast] !== nums[fast-1], write nums[fast] to nums[slow] and advance slow.',
    'At the end, slow is k (the count of unique elements).',
  ],
  visibleTests: [
    { args: [[1, 1, 2]], expected: [2, [1, 2]] },
    { args: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], expected: [5, [0, 1, 2, 3, 4]] },
    { args: [[1]], expected: [1, [1]] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [3, [1, 2, 3]] },
    { args: [[-3, -3, -1, 0, 0, 5]], expected: [4, [-3, -1, 0, 5]] },
    { args: [[5, 5, 5, 5]], expected: [1, [5]] },
  ],
};
