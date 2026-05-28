import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-equal-to-target',
  title: 'Minimum Operations to Make Array Equal to Target',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `You are given two positive integer arrays \`nums\` and \`target\`, both of length \`n\`.

In a single operation, you can select any **subarray** of \`nums\` and increment or decrement each element within that subarray by 1.

Return the **minimum number of operations** required to make \`nums\` equal to \`target\`.`,
  constraints: [
    '`1 <= nums.length == target.length <= 10^5`',
    '`1 <= nums[i], target[i] <= 10^8`',
  ],
  examples: [
    {
      input: 'nums = [3,5,1,2], target = [4,6,2,4]',
      output: '2',
      explanation: 'diff = [1,1,1,2]. One operation: increment [0,2] by 1 → [4,6,2,2]. Second operation: increment [3] by 2 — wait, that\'s only 1 step. Actually: increment [0,3] by 1 then increment [3] by 1. 2 operations total.',
    },
    {
      input: 'nums = [1,3,2], target = [2,1,4]',
      output: '5',
      explanation: 'diff = [1,-2,2]. Need 5 operations total: 1 increment (rising from 0 to 1 at pos 0) + 1 increment (rising from -2 to 2 at pos 2) + ... specifically +1+3+1=5 total operations from the height transitions.',
    },
    {
      input: 'nums = [1,2,4], target = [2,1,4]',
      output: '2',
      explanation: 'diff = [1,-1,0]. 1 operation to increment [0], 1 operation to decrement [1]. Total = 2.',
    },
  ],
  hints: [
    'Compute diff[i] = target[i] - nums[i]. Think of diff as a height profile that needs to be flattened to 0.',
    'Each operation is equivalent to adding a horizontal "layer" (+1 or -1 rectangle) on a subarray of diff. The minimum number of layers = number of new "levels" introduced when scanning diff left to right.',
    '```js\nfunction minimumOperations(nums, target) {\n  let ans = 0, prev = 0;\n  for (let i = 0; i < nums.length; i++) {\n    const d = target[i] - nums[i];\n    if (d > prev) ans += d - prev;\n    prev = d;\n  }\n  if (prev < 0) ans += -prev;\n  return ans;\n}\n```',
  ],
  functionName: 'minimumOperations',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function minimumOperations(nums, target) {

}`,
    typescript: `function minimumOperations(nums: number[], target: number[]): number {

}`,
    python: `def minimumOperations(nums, target):
    pass`,
  },
  visibleTests: [
    { args: [[3, 5, 1, 2], [4, 6, 2, 4]], expected: 2 },
    { args: [[1, 3, 2], [2, 1, 4]], expected: 5 },
    { args: [[1, 2, 4], [2, 1, 4]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], [3]], expected: 2 },
    { args: [[1, 1, 1, 1], [3, 2, 3, 2]], expected: 3 },
    { args: [[5, 5, 5], [1, 1, 1]], expected: 4 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 4 },
    { args: [[3, 5], [4, 6]], expected: 1 },
  ],
};
