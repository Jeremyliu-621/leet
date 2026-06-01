import type { Problem } from '../types';

export const problem: Problem = {
  id: 'move-zeroes',
  title: 'Move Zeroes',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, move all \`0\`s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place. Return the modified array.`,
  constraints: [
    '`1 <= nums.length <= 10^4`',
    '`-2^31 <= nums[i] <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'nums = [0,1,0,3,12]',
      output: '[1,3,12,0,0]',
    },
    {
      input: 'nums = [0]',
      output: '[0]',
    },
  ],
  hints: [
    'Use two pointers: one to track the position to place the next non-zero element, one to scan.',
    'First pass: copy all non-zero elements to the front. Second pass: fill the rest with zeros.',
    `\`\`\`js
function moveZeroes(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) if(nums[i]!==0) nums[k++]=nums[i];
  while (k < nums.length) nums[k++] = 0;
  // return nums; (in-place)
}\`\`\``,
  ],
  functionName: 'moveZeroes',
  params: ['nums'],
  starterCode: {
    javascript: `function moveZeroes(nums) {
  let pos = 0;
  for (const n of nums) { if (n !== 0) nums[pos++] = n; }
  while (pos < nums.length) nums[pos++] = 0;
  return nums;
}`,
    typescript: `function moveZeroes(nums: number[]): number[] {
  let pos = 0;
  for (const n of nums) { if (n !== 0) nums[pos++] = n; }
  while (pos < nums.length) nums[pos++] = 0;
  return nums;
}`,
    python: `def moveZeroes(nums):
    pos = 0
    for n in nums:
        if n != 0:
            nums[pos] = n
            pos += 1
    while pos < len(nums):
        nums[pos] = 0
        pos += 1
    return nums`,
  },
  visibleTests: [
    { args: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
    { args: [[0]], expected: [0] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[0, 0, 1]], expected: [1, 0, 0] },
    { args: [[1, 2, 0, 0, 3]], expected: [1, 2, 3, 0, 0] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
};
