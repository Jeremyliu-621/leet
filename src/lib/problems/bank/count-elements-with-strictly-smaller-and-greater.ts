import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-with-strictly-smaller-and-greater',
  title: 'Count Elements With Strictly Smaller and Greater Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the number of elements that have **both** a strictly smaller and a strictly greater element in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [11,7,2,15]',
      output: '2',
      explanation: '7 and 11 have both a smaller (2) and larger (15) element.',
    },
    {
      input: 'nums = [-3,3,3,90]',
      output: '2',
      explanation: 'Both 3s have -3 smaller and 90 larger.',
    },
    {
      input: 'nums = [3,3,3,3]',
      output: '0',
      explanation: 'No element can be strictly smaller AND strictly larger than the same value.',
    },
  ],
  hints: [
    'Find the minimum and maximum of the array.',
    'Count elements strictly between min and max.',
    `\`\`\`js
function countElements(nums) {
  const mn = Math.min(...nums), mx = Math.max(...nums);
  return nums.filter(n => n > mn && n < mx).length;
}\`\`\``,
  ],
  functionName: 'countElements',
  params: ['nums'],
  starterCode: {
    javascript: `function countElements(nums) {

}`,
    typescript: "function countElements(nums: number[]): number {\n\n}",

    python: `def countElements(nums):
    pass`,
  },
  visibleTests: [
    { args: [[11, 7, 2, 15]], expected: 2 },
    { args: [[-3, 3, 3, 90]], expected: 2 },
    { args: [[3, 3, 3, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1]], expected: 0 },
    { args: [[1, 1, 2, 3, 3]], expected: 1 },
    { args: [[-5, 0, 5]], expected: 1 },
  ],
};
