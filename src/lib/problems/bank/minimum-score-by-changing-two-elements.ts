import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-score-by-changing-two-elements',
  title: 'Minimum Score by Changing Two Elements',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`.

- The **low score** of \`nums\` is the minimum absolute difference between any two integers.
- The **high score** of \`nums\` is the maximum absolute difference between any two integers.
- The **score** of \`nums\` is the sum of its high score and low score.

You can change the value of **two** elements of \`nums\` to any value (you can also change the same element twice). Return the **minimum score** after changing the values of **exactly two** elements.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,4,3]',
      output: '0',
      explanation: 'Change nums[1] and nums[2] to 1. nums = [1,1,1]. Low = 0, High = 0. Score = 0.',
    },
    {
      input: 'nums = [1,4,7,8,5]',
      output: '3',
      explanation: 'Change nums[0] and nums[1] to 5. nums = [5,5,7,8,5]. Low = 0, High = 3. Score = 3.',
    },
  ],
  hints: [
    'The low score can always be made 0 by setting two elements equal, so focus on minimizing the high score.',
    'Sort the array. The high score (max − min after 2 changes) is minimized by removing extremes.',
    'Sort and try: skip 2 from left (3rd smallest to max), skip 1 from each side, or skip 2 from right (min to 3rd largest). Take the minimum.',
  ],
  functionName: 'minimizeSum',
  params: ['nums'],
  starterCode: {
    javascript: `function minimizeSum(nums) {

}`,
    typescript: "function minimizeSum(nums: number[]): number {\n\n}",

    python: `def minimizeSum(nums):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 4, 3]], expected: 0 },
    { args: [[1, 4, 7, 8, 5]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 2 },
    { args: [[10, 1, 5, 3, 7]], expected: 4 },
    { args: [[1, 100]], expected: 0 },
    { args: [[2, 9, 4, 1, 5]], expected: 3 },
  ],
};
