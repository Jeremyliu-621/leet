import type { Problem } from '../types';

export const problem: Problem = {
  id: '132-pattern',
  title: '132 Pattern',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Given an array of \`n\` integers \`nums\`, return \`true\` *if there is a **132 pattern** in* \`nums\`, *otherwise return* \`false\`.

A **132 pattern** is a subsequence of three integers \`nums[i]\`, \`nums[j]\` and \`nums[k]\` such that \`i < j < k\` and \`nums[i] < nums[k] < nums[j]\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 2 * 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'No 132 pattern.' },
    { input: 'nums = [3,1,4,2]', output: 'true', explanation: '(1,4,2) is a 132 pattern.' },
    { input: 'nums = [-1,3,2,0]', output: 'true', explanation: '(-1,3,0) and (-1,3,2) are valid.' },
  ],
  hints: [
    'Iterate from right to left maintaining a monotone decreasing stack.',
    'Track `min3` — the most recently popped value, which is the best candidate for the "2" in 132.',
    'If the current element is less than `min3`, a valid pattern exists.',
  ],
  functionName: 'find132pattern',
  params: ['nums'],
  starterCode: {
    javascript: `function find132pattern(nums) {

}`,
    python: `def find132pattern(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[3, 1, 4, 2]], expected: true },
    { args: [[-1, 3, 2, 0]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1, 2, 3]], expected: false },
    { args: [[1, 2, 3, 4, 0]], expected: false },
    { args: [[3, 5, 0, 3, 4]], expected: true },
    { args: [[2, 4, 3, 1]], expected: true },
  ],
};
