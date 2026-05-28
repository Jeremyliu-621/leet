import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decrease-elements-to-make-array-zigzag',
  title: 'Decrease Elements To Make Array Zigzag',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array \`nums\` of integers, a **zigzag array** is one where \`nums[0] > nums[1] < nums[2] > nums[3] < nums[4] > ...\` or \`nums[0] < nums[1] > nums[2] < nums[3] > nums[4] < ...\`

In one operation, choose any element and **decrease** it by 1.

Return the **minimum number of operations** to make \`nums\` a zigzag array.

**Example 1:**
\`\`\`
Input: nums = [1,2,3]
Output: 2
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [9,6,1,6,2]
Output: 4
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 1000\`
- \`1 <= nums[i] <= 1000\``,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    { input: 'nums = [1,2,3]', output: '2' },
    { input: 'nums = [9,6,1,6,2]', output: '4' },
  ],
  hints: [
    'Try two strategies: decrease even-indexed elements, or decrease odd-indexed elements.',
    'For each strategy, the cost to decrease element at index i is: max(0, nums[i] - min(neighbors) + 1).',
    'Return the minimum of the two strategy costs.',
  ],
  functionName: 'movesToMakeZigzag',
  params: ['nums'],
  starterCode: {
    javascript: 'function movesToMakeZigzag(nums) {\n  // your code here\n}\n',
    typescript: "function movesToMakeZigzag(nums: number[]): number {\n  // your code here\n}",

    python: 'def movesToMakeZigzag(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,3]], expected: 2 },
    { args: [[9,6,1,6,2]], expected: 4 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[4,1,3,2]], expected: 0 },
    { args: [[5,5,5,5]], expected: 2 },
    { args: [[1,1,1]], expected: 1 },
    { args: [[10,4,3,2,8]], expected: 2 },
  ],
};
