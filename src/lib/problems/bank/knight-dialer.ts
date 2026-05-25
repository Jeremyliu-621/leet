import type { Problem } from '../types';

export const problem: Problem = {
  id: 'knight-dialer',
  title: 'Knight Dialer',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `The chess knight has a **unique movement**, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an **L**).

We have a phone keypad as below, and the knight can move from any key to any other key that the knight can reach:

\`\`\`
1 2 3
4 5 6
7 8 9
* 0 #
\`\`\`

The knight **cannot** land on the \`*\` or \`#\` cells.

Given an integer \`n\`, return **how many distinct phone numbers of length \`n\` we can dial**.

You are allowed to place the knight **on any numeric cell** initially, then apply \`n - 1\` hops.

Since the answer may be very large, return it **modulo \`10^9 + 7\`**.`,
  constraints: ['1 <= n <= 5000'],
  examples: [
    {
      input: 'n = 1',
      output: '10',
      explanation: 'We can place the knight on any of the 10 numeric cells.',
    },
    {
      input: 'n = 2',
      output: '20',
    },
    {
      input: 'n = 3131',
      output: '136006598',
    },
  ],
  hints: [
    'Map each digit 0-9 to the digits a knight can reach. E.g., from 0 → [4,6], from 1 → [6,8].',
    'DP: dp[step][digit] = number of sequences of length step ending at digit. Initialize dp[1][d] = 1 for all d.',
    'For each step, sum over all predecessors. Return sum of dp[n][0..9] mod 10^9+7.',
  ],
  functionName: 'knightDialer',
  params: ['n'],
  starterCode: {
    javascript: 'function knightDialer(n) {\n\n}\n',
    python: 'def knightDialer(n):\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: 10 },
    { args: [2], expected: 20 },
    { args: [3131], expected: 136006598 },
  ],
  hiddenTests: [
    { args: [3], expected: 46 },
    { args: [4], expected: 104 },
    { args: [10], expected: 14912 },
    { args: [100], expected: 540641702 },
  ],
};
