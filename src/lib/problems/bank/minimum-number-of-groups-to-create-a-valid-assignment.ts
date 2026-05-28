import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-groups-to-create-a-valid-assignment',
  title: 'Minimum Number of Groups to Create a Valid Assignment',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You have \`n\` balls labeled \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`balls\` where \`balls[i]\` is the label of the \`i\`th ball.

You can arrange the balls into groups and assign each group a **distinct** number from \`0\` to \`m - 1\`, where \`m\` is the number of groups. However, the assignment must satisfy the following requirements:

- All balls in the same group must have the same label.
- All groups must have either \`x\` or \`x + 1\` balls for some positive integer \`x\`.

Return *the **minimum** number of groups required.*`,
  constraints: [
    '1 <= balls.length <= 10^5',
    '1 <= balls[i] <= 10^9',
  ],
  examples: [
    {
      input: 'balls = [3,2,3,2,3]',
      output: '2',
      explanation: 'Group 1 has 2 balls with label 2, group 2 has 3 balls with label 3. All groups have size 2 or 3 (x=2). Minimum 2 groups.',
    },
    {
      input: 'balls = [2,1,1]',
      output: '2',
      explanation: 'Group 1: one ball with label 2. Group 2: two balls with label 1. All groups have size 1 or 2 (x=1). 2 groups.',
    },
  ],
  hints: [
    'Count the frequency of each distinct label. We need to split each frequency into chunks of size x or x+1.',
    'Try each candidate x from 1 upward. For frequency f and group size x, we need ceil(f/(x+1)) groups (using x+1 greedily) and check if f % x remainder works.',
    'The answer is the minimum total groups over all valid x. The minimum possible x is 1, and we can stop when x equals the minimum frequency.',
  ],
  functionName: 'minGroupsForValidAssignment',
  params: ['balls'],
  starterCode: {
    javascript: 'function minGroupsForValidAssignment(balls) {\n\n}',
    typescript: "function minGroupsForValidAssignment(balls: number[]): number {\n\n}",

    python: 'def minGroupsForValidAssignment(balls):\n    pass',
  },
  visibleTests: [
    { args: [[3, 2, 3, 2, 3]], expected: 2 },
    { args: [[2, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[1, 1, 1, 2, 2, 2, 3, 3, 3]], expected: 3 },
  ],
};
