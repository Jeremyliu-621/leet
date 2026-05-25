import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-target-indices-after-sorting',
  title: 'Find Target Indices After Sorting Array',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\` and a target element \`target\`.

A **target index** is an index \`i\` such that \`nums[i] == target\`.

Return a list of the target indices of \`nums\` after sorting \`nums\` in **non-decreasing** order. If there are no target indices, return an **empty** list. The returned list must be sorted in **increasing** order.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i], target <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,5,2,3], target = 2',
      output: '[1,2]',
      explanation: 'After sorting: [1,2,2,3,5]. Target 2 is at indices 1 and 2.',
    },
    {
      input: 'nums = [1,2,5,2,3], target = 3',
      output: '[3]',
      explanation: 'After sorting: [1,2,2,3,5]. Target 3 is at index 3.',
    },
    {
      input: 'nums = [1,2,5,2,3], target = 5',
      output: '[4]',
    },
  ],
  hints: [
    'Sort a copy of the array, then collect all indices where the value equals target.',
    'Alternatively: count elements less than target (= starting index) and elements equal to target (= count of indices).',
  ],
  functionName: 'targetIndices',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function targetIndices(nums, target) {\n  \n}\n',
    python: 'def targetIndices(nums, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 5, 2, 3], 2], expected: [1, 2] },
    { args: [[1, 2, 5, 2, 3], 3], expected: [3] },
    { args: [[1, 2, 5, 2, 3], 5], expected: [4] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 4], expected: [] },
    { args: [[5, 5, 5], 5], expected: [0, 1, 2] },
    { args: [[1, 2, 3, 4, 5], 1], expected: [0] },
    { args: [[3, 3, 1, 3], 3], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [4] },
  ],
};
