import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-array-according-to-given-pivot',
  title: 'Partition Array According to Given Pivot',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`pivot\`. Rearrange \`nums\` such that the following conditions are satisfied:

- Every element less than \`pivot\` appears **before** every element greater than \`pivot\`.
- Every element equal to \`pivot\` appears **in between** the elements less than and greater than \`pivot\`.
- The **relative order** of the elements less than \`pivot\` and the elements greater than \`pivot\` is maintained.

Return \`nums\` *after the rearrangement*.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^6 <= nums[i] <= 10^6`',
    '`pivot` equals to an element of `nums`.',
  ],
  examples: [
    {
      input: 'nums = [9,12,5,10,14,3,10], pivot = 10',
      output: '[9,5,3,10,10,12,14]',
      explanation: 'Elements less than 10: [9,5,3] (relative order maintained). Pivot elements: [10,10]. Elements greater: [12,14] (relative order maintained).',
    },
    {
      input: 'nums = [-3,4,3,2], pivot = 2',
      output: '[-3,2,4,3]',
    },
  ],
  hints: [
    'Collect elements less than pivot, then elements equal to pivot, then elements greater. Concatenate.',
  ],
  functionName: 'pivotArray',
  params: ['nums', 'pivot'],
  starterCode: {
    javascript: `function pivotArray(nums, pivot) {

}`,
    python: `def pivotArray(nums, pivot):
    pass`,
  },
  visibleTests: [
    { args: [[9, 12, 5, 10, 14, 3, 10], 10], expected: [9, 5, 3, 10, 10, 12, 14] },
    { args: [[-3, 4, 3, 2], 2], expected: [-3, 2, 4, 3] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2, 3], 2], expected: [1, 2, 3] },
    { args: [[3, 2, 1], 2], expected: [1, 2, 3] },
    { args: [[5, 5, 5], 5], expected: [5, 5, 5] },
    { args: [[1, 3, 2, 4, 3], 3], expected: [1, 2, 3, 3, 4] },
  ],
};
