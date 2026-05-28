import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-array-zero-by-subtracting-equal-amounts',
  title: 'Make Array Zero by Subtracting Equal Amounts',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a non-negative integer array \`nums\`. In one operation, choose a **positive** integer \`x\` and subtract \`x\` from **every positive** element in the array. This is done simultaneously.

Return the **minimum** number of operations to make every element equal to \`0\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,5,0,3,5]',
      output: '3',
      explanation: 'Distinct positive values are {1,3,5}. Each requires one operation to eliminate.',
    },
    {
      input: 'nums = [0]',
      output: '0',
      explanation: 'Already zero, no operations needed.',
    },
  ],
  hints: [
    'Each operation removes the current minimum positive value.',
    'The answer equals the number of distinct positive values.',
    `\`\`\`js
function minimumOperations(nums) {
  return new Set(nums.filter(n=>n>0)).size;
}\`\`\``,
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {

}`,
    python: `def minimumOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 5, 0, 3, 5]], expected: 3 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[5]], expected: 1 },
    { args: [[100, 100, 100, 1]], expected: 2 },
  ],
};
