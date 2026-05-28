import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-array',
  title: 'Apply Operations to an Array',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** array \`nums\` of size \`n\` consisting of **non-negative** integers.

Apply \`n - 1\` operations to this array where, in the \`i\`th operation (0-indexed), you apply the following on the \`i\`th element of \`nums\`:

- If \`nums[i] == nums[i + 1]\`, multiply \`nums[i]\` by \`2\` and set \`nums[i + 1]\` to \`0\`. Otherwise, skip this operation.

After performing **all** the operations, shift all the \`0\`s to the **end** of the array.

Return the resulting array.

**Note** that the operations are applied sequentially, not simultaneously.`,
  constraints: [
    '`2 <= nums.length <= 2000`',
    '`0 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1,1,0]',
      output: '[1,4,2,0,0,0]',
      explanation:
        'i=1: nums[1]==nums[2] → nums=[1,4,0,1,1,0]. i=3: nums[3]==nums[4] → nums=[1,4,0,2,0,0]. i=4: nums[4]==nums[5]=0 → nums=[1,4,0,2,0,0]. Shift zeros to end: [1,4,2,0,0,0].',
    },
    {
      input: 'nums = [0,1]',
      output: '[1,0]',
      explanation: 'No equal adjacent pair, but 0 is shifted to the end.',
    },
  ],
  hints: [
    'First pass: iterate from index 0 to n-2. If `nums[i] === nums[i+1]`, double `nums[i]` and set `nums[i+1] = 0`.',
    'Second pass: collect all non-zero elements into a new array, then pad with zeros at the end.',
    '```js\nfunction applyOperations(nums) {\n  for (let i = 0; i < nums.length - 1; i++) {\n    if (nums[i] === nums[i + 1]) {\n      nums[i] *= 2;\n      nums[i + 1] = 0;\n    }\n  }\n  const result = nums.filter(x => x !== 0);\n  while (result.length < nums.length) result.push(0);\n  return result;\n}\n```',
  ],
  functionName: 'applyOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function applyOperations(nums) {

}`,
    python: `def applyOperations(nums: list[int]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1, 1, 0]], expected: [1, 4, 2, 0, 0, 0] },
    { args: [[0, 1]], expected: [1, 0] },
  ],
  hiddenTests: [
    { args: [[1, 1, 2, 1, 1, 1]], expected: [2, 2, 2, 1, 0, 0] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1]], expected: [1] },
    { args: [[2, 2, 4, 4]], expected: [4, 8, 0, 0] },
  ],
};
