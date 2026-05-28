import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-performing-multiplication',
  title: 'Maximum Score from Performing Multiplication Operations',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given two integer arrays \`nums\` and \`multipliers\` of size \`n\` and \`m\` respectively, where \`n >= m\`.

You want to perform exactly \`m\` operations. In the \`i\`th operation (**1-indexed**) you will:

- Choose one integer \`x\` from **either** the start **or** the end of the array \`nums\`.
- Add \`multipliers[i] * x\` to your score.
- Remove \`x\` from \`nums\`.

Return the **maximum** score after performing \`m\` operations.`,
  constraints: [
    'n == nums.length',
    'm == multipliers.length',
    '1 <= m <= nums.length <= 300',
    '-1000 <= nums[i], multipliers[i] <= 1000',
  ],
  examples: [
    { input: 'nums = [1,2,3], multipliers = [3,2,1]', output: '14', explanation: 'Take from right: 3*3=9, right: 2*2=4, left: 1*1=1. Total=14.' },
    { input: 'nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3]', output: '68', explanation: 'Take left: (-5)*(-10)=50, left: (-3)*(-5)=15, right: 1*3=3. Total=68.' },
  ],
  hints: [
    'Define dp[i][j] = max score when i elements have been taken from the left and j from the right.',
    'At each step k = i+j, we can either take nums[i] from left (and move to dp[i+1][j]) or take nums[n-1-j] from right (move to dp[i][j+1]).',
    'Use memoization or bottom-up DP. Final answer is max over all (i,j) where i+j = m.',
  ],
  functionName: 'maximumScore',
  params: ['nums', 'multipliers'],
  starterCode: {
    javascript: 'function maximumScore(nums, multipliers) {\n\n}\n',
    python: 'def maximumScore(nums, multipliers):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3], [3, 2, 1]], expected: 14 },
    { args: [[-5, -3, -3, -2, 7, 1], [-10, -5, 3]], expected: 68 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[2, 3], [5, 2]], expected: 19 },
    { args: [[1, 2, 3, 4, 5], [1, 2, 3]], expected: 23 },
  ],
};
