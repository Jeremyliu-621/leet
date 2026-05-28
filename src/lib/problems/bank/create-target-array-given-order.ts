import type { Problem } from '../types';

export const problem: Problem = {
  id: 'create-target-array-given-order',
  title: 'Create Target Array in the Given Order',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given two arrays of integers \`nums\` and \`index\`, create a **target** array under the following rules:

- Initially the target array is empty.
- From left to right, read \`nums[i]\` and \`index[i]\`, insert at index \`index[i]\` the value \`nums[i]\` in the target array.
- Repeat the previous step until there are no elements to read in \`nums\` and \`index\`.

Return the target array.

It is guaranteed that the insertion operations will be valid.`,
  constraints: [
    '`1 <= nums.length, index.length <= 100`',
    '`nums.length == index.length`',
    '`0 <= index[i] <= i`',
    '`-100 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4], index = [0,1,2,2,1]',
      output: '[0,4,1,3,2]',
      explanation: 'Insert 0 at 0→[0], 1 at 1→[0,1], 2 at 2→[0,1,2], 3 at 2→[0,1,3,2], 4 at 1→[0,4,1,3,2].',
    },
    {
      input: 'nums = [1,2,3,4,0], index = [0,1,2,3,0]',
      output: '[0,1,2,3,4]',
    },
  ],
  hints: [
    'Simulate the process directly using array splice.',
    'Process each `(nums[i], index[i])` pair in order. Insert `nums[i]` at position `index[i]` in the result array.',
    `\`\`\`js
const res = [];
for (let i = 0; i < nums.length; i++) res.splice(index[i], 0, nums[i]);
return res;\`\`\``
  ],
  functionName: 'createTargetArray',
  params: ['nums', 'index'],
  starterCode: {
    javascript: 'function createTargetArray(nums, index) {\n  \n}\n',
    typescript: "function createTargetArray(nums: number[], index: number[]): number[] {\n  \n}",

    python: 'def createTargetArray(nums, index):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4], [0, 1, 2, 2, 1]], expected: [0, 4, 1, 3, 2] },
    { args: [[1, 2, 3, 4, 0], [0, 1, 2, 3, 0]], expected: [0, 1, 2, 3, 4] },
    { args: [[1], [0]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[0, 0], [0, 1]], expected: [0, 0] },
    { args: [[0, 0], [0, 0]], expected: [0, 0] },
    { args: [[1, 2, 3], [0, 0, 0]], expected: [3, 2, 1] },
  ],
};
