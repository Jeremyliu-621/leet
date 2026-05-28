import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-target-indices-after-sorting-array',
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
      explanation: 'Sorted: [1,2,2,3,5]. target=2 appears at indices 1 and 2.',
    },
    {
      input: 'nums = [1,2,5,2,3], target = 3',
      output: '[3]',
      explanation: 'Sorted: [1,2,2,3,5]. target=3 appears at index 3.',
    },
    {
      input: 'nums = [1,2,5,2,3], target = 5',
      output: '[4]',
      explanation: 'Sorted: [1,2,2,3,5]. target=5 appears at index 4.',
    },
  ],
  hints: [
    'Sort nums, then collect all indices where the value equals target.',
    'Alternatively, count elements less than target and count how many equal target.',
    `\`\`\`js
function targetIndices(nums, target) {
  nums.sort((a,b)=>a-b);
  const res = [];
  for (let i = 0; i < nums.length; i++) if (nums[i]===target) res.push(i);
  return res;
}\`\`\``,
  ],
  functionName: 'targetIndices',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function targetIndices(nums, target) {

}`,
    typescript: "function targetIndices(nums: number[], target: number): number[] {\n\n}",

    python: `def targetIndices(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 5, 2, 3], 2], expected: [1, 2] },
    { args: [[1, 2, 5, 2, 3], 3], expected: [3] },
    { args: [[1, 2, 5, 2, 3], 5], expected: [4] },
  ],
  hiddenTests: [
    { args: [[1, 2, 5, 2, 3], 4], expected: [] },
    { args: [[1], 1], expected: [0] },
    { args: [[5, 5, 5], 5], expected: [0, 1, 2] },
    { args: [[1, 3, 2], 2], expected: [1] },
  ],
};
