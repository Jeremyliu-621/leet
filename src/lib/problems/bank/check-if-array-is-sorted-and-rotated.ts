import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-array-is-sorted-and-rotated',
  title: 'Check if Array Is Sorted and Rotated',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\`, return \`true\` if the array was originally sorted in **non-decreasing order**, then rotated **some number of positions** (including zero). Otherwise, return \`false\`.

There may be **duplicates** in the original array.

**Note:** An array \`A\` rotated by \`x\` positions results in an array \`B\` of the same length such that \`A[i] == B[(i+x) % A.length]\`.

**Approach:** Count the number of "drops" (positions where nums[i] > nums[i+1], wrapping around). A sorted-and-rotated array has at most one drop.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: 'true',
      explanation: '[1,2,3,4,5] rotated by 3 positions.',
    },
    {
      input: 'nums = [2,1,3,4]',
      output: 'false',
      explanation: 'Cannot be obtained by rotating a sorted array.',
    },
    {
      input: 'nums = [1,2,3]',
      output: 'true',
      explanation: 'Already sorted (rotated by 0).',
    },
  ],
  hints: [
    'Count "drops" where nums[i] > nums[(i+1) % n]. A valid rotated sorted array has at most 1 drop.',
    '```js\nfunction check(nums) {\n  const n = nums.length;\n  let drops = 0;\n  for (let i = 0; i < n; i++)\n    if (nums[i] > nums[(i + 1) % n]) drops++;\n  return drops <= 1;\n}\n```',
    `\`\`\`js
function check(nums) {
  let drops = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++)
    if (nums[i] > nums[(i+1)%n]) drops++;
  return drops <= 1;
}\`\`\``,
  ],
  functionName: 'check',
  params: ['nums'],
  starterCode: {
    javascript: `function check(nums) {
  // return true if array is sorted and rotated

}`,
    typescript: "function check(nums: number[]): boolean {\n  // return true if array is sorted and rotated\n\n}",

    python: `def check(nums: list) -> bool:
    # return true if array is sorted and rotated
    pass
`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: true },
    { args: [[2, 1, 3, 4]], expected: false },
    { args: [[1, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 1, 1]], expected: true },
    { args: [[2, 1]], expected: true },
    { args: [[1, 3, 2]], expected: false },
    { args: [[3, 3, 3, 1, 2, 3]], expected: true },
    { args: [[2, 2, 1, 1]], expected: true },
    { args: [[1, 2, 1, 2]], expected: false },
  ],
};
