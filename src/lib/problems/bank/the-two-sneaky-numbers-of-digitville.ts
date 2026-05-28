import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-two-sneaky-numbers-of-digitville',
  title: 'The Two Sneaky Numbers of Digitville',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `In Digitville, there was an array \`nums\` containing integers from \`0\` to \`n - 1\`, where each number was supposed to appear **exactly once**. However, two mischievous numbers sneaked in an extra time, making the array length \`n + 2\`.

You are given the array \`nums\`. Return the two numbers that appear **twice** in the array, sorted in **ascending order**.`,
  constraints: [
    '`2 <= n <= 100`',
    '`nums.length == n + 2`',
    '`0 <= nums[i] < n`',
    'Exactly two values appear twice.',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,2,4,3]',
      output: '[2,3]',
      explanation: '2 and 3 each appear twice.',
    },
    {
      input: 'nums = [0,0,1,2,2]',
      output: '[0,2]',
    },
    {
      input: 'nums = [1,0,1,0,2]',
      output: '[0,1]',
    },
  ],
  hints: [
    'Build a frequency map and return the keys with count greater than 1.',
    'Since values are in range 0..n-1, you can also use a boolean visited array — mark each value, and the second time you see it, add it to the result.',
    `\`\`\`js
function getSneakyNumbers(nums) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  return [...freq.entries()].filter(([, c]) => c > 1).map(([k]) => k).sort((a, b) => a - b);
}\`\`\``,
  ],
  functionName: 'getSneakyNumbers',
  params: ['nums'],
  starterCode: {
    javascript: `function getSneakyNumbers(nums) {

}`,
    typescript: 'function getSneakyNumbers(nums: number[]): number[] {\n\n}',
    python: `def getSneakyNumbers(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 2, 4, 3]], expected: [2, 3] },
    { args: [[0, 0, 1, 2, 2]], expected: [0, 2] },
    { args: [[1, 0, 1, 0, 2]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[0, 1, 0, 1]], expected: [0, 1] },
    { args: [[0, 0, 1, 2, 3, 1]], expected: [0, 1] },
    { args: [[2, 0, 1, 2, 1, 3]], expected: [1, 2] },
    { args: [[0, 1, 2, 3, 4, 3, 4]], expected: [3, 4] },
    { args: [[5, 0, 5, 1, 2, 3, 0, 4]], expected: [0, 5] },
    { args: [[3, 0, 1, 2, 3, 0]], expected: [0, 3] },
  ],
};
