import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-target-indices-after-sorting',
  title: 'Find Target Indices After Sorting Array',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\` and a target element \`target\`.

A **target index** is an index \`i\` such that \`nums[i] == target\`.

Return *a list of the target indices of* \`nums\` *after sorting* \`nums\` *in non-decreasing order*. If there are no target indices, return an **empty** list. The returned list must be sorted in **increasing** order.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i], target <= 100`',
  ],
  examples: [
    {
      input: 'nums = [1,2,5,2,3], target = 2',
      output: '[1,2]',
      explanation: 'After sorting, nums becomes [1,2,2,3,5]. The indices where nums[i] == 2 are 1 and 2.',
    },
    {
      input: 'nums = [1,5,6,2,5], target = 5',
      output: '[2,3]',
      explanation: 'After sorting, nums becomes [1,2,5,5,6]. The indices where nums[i] == 5 are 2 and 3.',
    },
    {
      input: 'nums = [1,2,4], target = 3',
      output: '[]',
      explanation: 'target = 3 does not exist in nums, so the output is an empty list.',
    },
  ],
  hints: [
    'Sort the array. Then iterate and collect every index where the value equals target.',
    'Alternatively, count elements strictly less than target (call it `less`) and count elements equal to target (call it `count`). The answer is the range `[less, less + count - 1]`.',
  ],
  functionName: 'targetIndices',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function targetIndices(nums, target) {

}`,
    python: `def targetIndices(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 5, 2, 3], 2], expected: [1, 2] },
    { args: [[1, 5, 6, 2, 5], 5], expected: [2, 3] },
    { args: [[1, 2, 4], 3], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [0] },
    { args: [[1, 2, 3], 4], expected: [] },
    { args: [[1, 1, 1], 1], expected: [0, 1, 2] },
    { args: [[5, 3, 1], 3], expected: [1] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [2] },
    { args: [[3, 3, 3, 3], 3], expected: [0, 1, 2, 3] },
  ],
};
