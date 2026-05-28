import type { Problem } from '../types';

export const problem: Problem = {
  id: 'third-maximum-number',
  title: 'Third Maximum Number',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the **third distinct maximum** number in this array. If the third maximum does not exist, return the **maximum** number.`,
  constraints: [
    '`1 <= nums.length <= 10^4`',
    '`-2^31 <= nums[i] <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'nums = [3,2,1]',
      output: '1',
    },
    {
      input: 'nums = [1,2]',
      output: '2',
      explanation: 'The third maximum does not exist, so return the maximum (2).',
    },
    {
      input: 'nums = [2,2,3,1]',
      output: '1',
      explanation: 'The third maximum is 1 (the distinct values are [1,2,3]).',
    },
  ],
  hints: [
    'Use a set to get distinct values, then sort descending. Return the third element if it exists, or the first element otherwise.',
    'Use a Set to get distinct values, then sort descending. If fewer than 3 distinct values exist, return the maximum.',
    `\`\`\`js
const sorted = [...new Set(nums)].sort((a,b)=>b-a);
return sorted.length >= 3 ? sorted[2] : sorted[0];\`\`\``
  ],
  functionName: 'thirdMax',
  params: ['nums'],
  starterCode: {
    javascript: `function thirdMax(nums) {

}`,
    python: `def thirdMax(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 2, 3, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 2 },
    { args: [[-1, -2, -3]], expected: -3 },
    { args: [[1, 2, 2, 5, 3, 5]], expected: 2 },
  ],
};
