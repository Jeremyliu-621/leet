import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-of-length-three-with-a-condition',
  title: 'Count Subarrays of Length Three With a Condition',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the number of subarrays of length 3 such that the sum of the **first** and **third** numbers equals **exactly half** of the **second** number.

Formally, count the number of indices \`i\` where:
\`\`\`
nums[i] + nums[i+2] == nums[i+1] / 2
\`\`\``,
  constraints: [
    '3 <= nums.length <= 100',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,4,1]',
      output: '1',
      explanation: 'Only the subarray [1,4,1] (at index 2) satisfies the condition: 1 + 1 = 2 = 4/2.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
      explanation: '1 + 1 = 2, but 1/2 = 0.5. Not equal.',
    },
    {
      input: 'nums = [3,12,3,5,20,5]',
      output: '2',
      explanation: '[3,12,3]: 3+3=6=12/2 ✓. [5,20,5]: 5+5=10=20/2 ✓.',
    },
  ],
  hints: [
    'Iterate through all possible starting indices i (from 0 to nums.length - 3).',
    'For each triplet (nums[i], nums[i+1], nums[i+2]), check if nums[i] + nums[i+2] equals nums[i+1] / 2.',
    'Avoid floating-point issues: check 2 * (nums[i] + nums[i+2]) === nums[i+1] instead.',
  ],
  functionName: 'countSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: 'function countSubarrays(nums) {\n  // your code here\n}\n',
    python: 'def countSubarrays(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1, 4, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[3, 12, 3, 5, 20, 5]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 1 },
    { args: [[1, 4, 1]], expected: 1 },
    { args: [[-1, -4, -1]], expected: 1 },
    { args: [[1, 8, 3]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 4, 1, 2, 8, 2]], expected: 2 },
  ],
};
