import type { Problem } from '../types';

export const problem: Problem = {
  id: 'second-maximum-number-in-array',
  title: 'Second Maximum Number in Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the **second largest distinct integer** in the array. If no such value exists, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`-10^6 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '4',
      explanation: 'The largest is 5, so the second largest distinct integer is 4.',
    },
    {
      input: 'nums = [1,1,2]',
      output: '1',
      explanation: 'The largest is 2, so the second largest distinct integer is 1.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '-1',
      explanation: 'There is only one distinct integer, so there is no second largest.',
    },
  ],
  hints: [
    'Find the maximum value first, then find the maximum of all elements that are strictly less than the maximum.',
    'If no element is strictly less than the maximum, return -1.',
    `\`\`\`js
function secondMax(nums) {
  const max = Math.max(...nums);
  const candidates = nums.filter(n => n < max);
  return candidates.length > 0 ? Math.max(...candidates) : -1;
}
\`\`\``,
  ],
  functionName: 'secondMax',
  params: ['nums'],
  starterCode: {
    javascript: `function secondMax(nums) {

}`,
    typescript: `function secondMax(nums: number[]): number {

}`,
    python: `def secondMax(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[1, 1, 2]], expected: 1 },
    { args: [[1, 1, 1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[5]], expected: -1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[-1, -2, -3]], expected: -2 },
    { args: [[0, 0, 0]], expected: -1 },
    { args: [[3, 3, 3, 3, 2]], expected: 2 },
    { args: [[-1000000, 1000000]], expected: -1000000 },
    { args: [[7, 7, 5, 5, 3]], expected: 5 },
    { args: [[1, 2, 2, 3, 3]], expected: 2 },
  ],
};
