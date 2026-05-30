import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-people-aware-of-secret',
  title: 'Number of People Aware of a Secret',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'simulation'],
  description: `On day \`1\`, one person discovers a secret.

You are given an integer \`delay\`, which means that each person will **share** the secret with a new person every day, for all days from the day **\`delay\`** after discovering it until **the day before** they forget it. You are also given an integer \`forget\`, which means that each person will **forget** the secret \`forget\` days after discovering it. A person **cannot** share a secret on the same day they forgot it.

Given an integer \`n\`, return the number of people who know the secret at the end of day \`n\`. Since the answer may be very large, return it **modulo \`10^9 + 7\`**.`,
  constraints: [
    '`2 <= n <= 1000`',
    '`1 <= delay < forget <= n`',
  ],
  examples: [
    {
      input: 'n = 6, delay = 2, forget = 4',
      output: '5',
    },
    {
      input: 'n = 4, delay = 1, forget = 3',
      output: '6',
    },
  ],
  hints: [
    'Let `dp[d]` = number of people who first discover the secret on day `d`. Initialize `dp[1] = 1`.',
    'On day `d`, the number of new people learning the secret = sum of `dp[L]` for all `L` where the person is still sharing: `d - forget + 1 <= L <= d - delay`.',
    'At the end of day `n`, count all people who have not yet forgotten: sum `dp[L]` for `L` in `[n - forget + 1, n]`.',
  ],
  functionName: 'peopleAwareOfSecret',
  params: ['n', 'delay', 'forget'],
  starterCode: {
    javascript: `function peopleAwareOfSecret(n, delay, forget) {

}`,
    typescript: `function peopleAwareOfSecret(n: number, delay: number, forget: number): number {

}`,
    python: `def peopleAwareOfSecret(n, delay, forget):
    pass`,
  },
  visibleTests: [
    { args: [6, 2, 4], expected: 5 },
    { args: [4, 1, 3], expected: 6 },
  ],
  hiddenTests: [
    { args: [1, 1, 1], expected: 1 },
    { args: [4, 1, 4], expected: 8 },
    { args: [7, 2, 5], expected: 10 },
    { args: [3, 1, 2], expected: 2 },
    { args: [5, 2, 3], expected: 2 },
    { args: [10, 3, 7], expected: 15 },
  ],
};
