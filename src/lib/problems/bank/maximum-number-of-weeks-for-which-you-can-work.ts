import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-weeks-for-which-you-can-work',
  title: 'Maximum Number of Weeks for Which You Can Work',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There are \`n\` projects numbered from \`0\` to \`n - 1\`. You are given an integer array \`milestones\` where each \`milestones[i]\` denotes the number of milestones the \`i-th\` project has.

You can work on the projects following these two rules:

1. Every week, you will finish **exactly one** milestone of **one** project.
2. You **must** work every week.
3. You **cannot** work on the same project for two **consecutive** weeks.

Once all the milestones of all the projects are finished, or if the only milestones left are all from the same project and the rule is violated, you stop working. Return the **maximum** number of weeks you would be able to work without violating the rules.`,
  constraints: [
    'n == milestones.length',
    '1 <= n <= 10^5',
    '1 <= milestones[i] <= 10^9',
  ],
  examples: [
    {
      input: 'milestones = [1,2,3]',
      output: '6',
      explanation: 'All 6 milestones can be completed: e.g., projects 2,1,2,0,2,1.',
    },
    {
      input: 'milestones = [5,2,1]',
      output: '7',
      explanation: 'max=5, rest=3. Since max > rest+1, answer is 2*rest+1 = 7.',
    },
  ],
  hints: [
    'Let max be the largest milestone count and rest = sum - max.',
    'If max <= rest + 1, we can finish all milestones: answer is sum.',
    'Otherwise the answer is 2 * rest + 1.',
  ],
  functionName: 'numberOfWeeks',
  params: ['milestones'],
  starterCode: {
    javascript: `function numberOfWeeks(milestones) {

}`,
    python: `def numberOfWeeks(milestones):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[5, 2, 1]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[10, 1]], expected: 3 },
    { args: [[3, 3, 3]], expected: 9 },
    { args: [[1000000000, 1]], expected: 3 },
  ],
};
