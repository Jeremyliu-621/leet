import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-element-after-replacement-with-digit-sum',
  title: 'Minimum Element After Replacement With Digit Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`. You replace every element in \`nums\` with the **sum of its digits**.

Return the **minimum** element in \`nums\` after all replacements.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [10,12,13,14]',
      output: '1',
      explanation: 'Digit sums: 1, 3, 4, 5. Minimum is 1.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation: 'Single-digit numbers stay the same. Minimum is 1.',
    },
  ],
  hints: [
    'For each number, compute the sum of its digits by repeatedly taking mod 10 and dividing by 10.',
    'Return the minimum digit sum across all elements.',
    `\`\`\`js
function minElement(nums) {
  return Math.min(...nums.map(n => String(n).split("").reduce((a,c)=>a+Number(c),0)));
}\`\`\``,
  ],
  functionName: 'minElement',
  params: ['nums'],
  starterCode: {
    javascript: `function minElement(nums) {

}`,
    python: `def minElement(nums):
    pass`,
  },
  visibleTests: [
    { args: [[10, 12, 13, 14]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[9999]], expected: 36 },
    { args: [[99, 101]], expected: 2 },
    { args: [[100, 200, 300]], expected: 1 },
    { args: [[19, 28, 37]], expected: 10 },
  ],
};
