import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-zero-filled-subarrays',
  title: 'Number of Zero-Filled Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the number of **subarrays** filled with \`0\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,3,0,0,2,0,0,4]',
      output: '6',
      explanation: 'Zero-filled subarrays: [0],[0],[0,0],[0],[0],[0,0] → 6.',
    },
    {
      input: 'nums = [0,0,0,2,0,0]',
      output: '9',
      explanation: 'Three zeros: 6 subarrays. Two zeros: 3 subarrays. Total = 9.',
    },
    {
      input: 'nums = [2,10,2019]',
      output: '0',
      explanation: 'No zeros in the array.',
    },
  ],
  hints: [
    'Track the current run of consecutive zeros. A run of length k contributes k*(k+1)/2 subarrays.',
    'Scan left to right: when you see a 0, increment the run counter; otherwise reset it to 0.',
    `\`\`\`js
function zeroFilledSubarray(nums) {
  let res=0,run=0;
  for(const n of nums){run=n===0?run+1:0;res+=run;}
  return res;
}\`\`\``,
  ],
  functionName: 'zeroFilledSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function zeroFilledSubarray(nums) {

}`,
    typescript: "function zeroFilledSubarray(nums: number[]): number {\n\n}",

    python: `def zeroFilledSubarray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 0, 0, 2, 0, 0, 4]], expected: 6 },
    { args: [[0, 0, 0, 2, 0, 0]], expected: 9 },
    { args: [[2, 10, 2019]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[0, 0]], expected: 3 },
    { args: [[0, 0, 0]], expected: 6 },
    { args: [[1, 0, 1, 0, 1]], expected: 2 },
    { args: [[0, 0, 0, 0]], expected: 10 },
  ],
};
