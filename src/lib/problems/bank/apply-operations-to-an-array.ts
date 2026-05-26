import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-an-array',
  title: 'Apply Operations to an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`nums\` of size \`n\` consisting of **non-negative** integers.

You need to apply \`n - 1\` operations to this array where, in the \`i\`th operation (\`0-indexed\`), you will apply the following on the \`i\`th element of \`nums\`:
- If \`nums[i] == nums[i + 1]\`, multiply \`nums[i]\` by \`2\` and set \`nums[i + 1]\` to \`0\`. Otherwise, you skip this operation.

After performing **all** the operations, **shift** all the \`0\`'s to the **end** of the array.

Return the resulting array.`,
  constraints: [
    '2 <= nums.length <= 2000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1,1,0]',
      output: '[1,4,2,0,0,0]',
      explanation: 'Apply ops: [1,4,0,2,0,0] → shift zeros: [1,4,2,0,0,0].',
    },
    {
      input: 'nums = [0,1]',
      output: '[1,0]',
      explanation: '0 != 1, no op. Shift zero to end: [1,0].',
    },
  ],
  hints: [
    'Apply operations left to right first.',
    'Then collect non-zero elements, append the zeros at the end.',
    `\`\`\`js
function applyOperations(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i+1]) { nums[i] *= 2; nums[i+1] = 0; }
  }
  // move zeros to end (two-pointer stable)
  let k = 0;
  for (const v of nums) if (v !== 0) nums[k++] = v;
  while (k < nums.length) nums[k++] = 0;
  return nums;
}\`\`\``,
  ],
  functionName: 'applyOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function applyOperations(nums) {

}`,
    python: `def applyOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1, 1, 0]], expected: [1, 4, 2, 0, 0, 0] },
    { args: [[0, 1]], expected: [1, 0] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [2, 0] },
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[2, 2, 2, 2]], expected: [4, 4, 0, 0] },
  ],
};
