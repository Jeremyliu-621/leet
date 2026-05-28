import type { Problem } from '../types';

export const problem: Problem = {
  id: 'monotonic-array',
  title: 'Monotonic Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `An array is **monotonic** if it is either monotone increasing or monotone decreasing.

An array \`nums\` is monotone increasing if for all \`i <= j\`, \`nums[i] <= nums[j]\`. An array \`nums\` is monotone decreasing if for all \`i <= j\`, \`nums[i] >= nums[j]\`.

Given an integer array \`nums\`, return \`true\` if the given array is monotonic, or \`false\` otherwise.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^5 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3]',
      output: 'true',
    },
    {
      input: 'nums = [6,5,4,4]',
      output: 'true',
    },
    {
      input: 'nums = [1,3,2]',
      output: 'false',
    },
  ],
  hints: [
    'Track whether the array is increasing and decreasing separately. If both flags become false, return false.',
    'An array is monotonic if it is entirely non-increasing OR non-decreasing. Check both properties in a single pass.',
    `\`\`\`js
let inc = true, dec = true;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > nums[i-1]) dec = false;
  if (nums[i] < nums[i-1]) inc = false;
}
return inc || dec;\`\`\``
  ],
  functionName: 'isMonotonic',
  params: ['nums'],
  starterCode: {
    javascript: `function isMonotonic(nums) {

}`,
    typescript: "function isMonotonic(nums: number[]): boolean {\n\n}",

    python: `def isMonotonic(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3]], expected: true },
    { args: [[6, 5, 4, 4]], expected: true },
    { args: [[1, 3, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 1, 1]], expected: true },
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[5, 4, 3, 2, 1]], expected: true },
    { args: [[1, 2, 1]], expected: false },
    { args: [[-3, -5, -6]], expected: true },
  ],
};
