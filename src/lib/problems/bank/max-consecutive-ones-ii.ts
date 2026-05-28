import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-consecutive-ones-ii',
  title: 'Max Consecutive Ones II',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given a binary array \`nums\`, return the maximum number of consecutive \`1\`'s in the array if you can flip at most one \`0\`.

**Example 1:**
\`\`\`
Input: nums = [1,0,1,1,0]
Output: 4
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [1,0,1,1,0,1]
Output: 6
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 10^5\`
- \`nums[i]\` is either \`0\` or \`1\`.`,
  constraints: ['1 <= nums.length <= 10^5', 'nums[i] is either 0 or 1.'],
  examples: [
    { input: 'nums = [1,0,1,1,0]', output: '4' },
    { input: 'nums = [1,0,1,1,0,1]', output: '6' },
  ],
  hints: [
    'Use a sliding window with at most one zero allowed.',
    'Track the position of the last zero seen. When you encounter a second zero, shrink the window from the left past the previous zero.',
    'Maintain `left`, `lastZero` (index of the most recent 0 in window), and expand `right` for each element. If `nums[right] === 0`, set `left = lastZero + 1` before updating `lastZero`.',
  ],
  functionName: 'findMaxConsecutiveOnes',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMaxConsecutiveOnes(nums) {\n  // your code here\n}\n',
    typescript: "function findMaxConsecutiveOnes(nums: number[]): number {\n  // your code here\n}",

    python: 'def findMaxConsecutiveOnes(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0, 1, 1, 0]], expected: 4 },
    { args: [[1, 0, 1, 1, 0, 1]], expected: 4 },
    { args: [[1, 1, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1]], expected: 1 },
    { args: [[0, 0]], expected: 1 },
    { args: [[1, 0, 0, 1]], expected: 2 },
    { args: [[0, 1, 1, 0, 1]], expected: 4 },
    { args: [[1, 1, 0, 1, 1, 0, 1, 1]], expected: 5 },
  ],
};
