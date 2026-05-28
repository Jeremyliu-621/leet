import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-people-aware-of-secret',
  title: 'Number of People Aware of a Secret',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `On day \`1\`, one person discovers a secret.

You are given an integer \`n\`. There is a social media app where users can post \`n\` days long stories. Anyone with a secret **must** share it with a new person the next \`delay\` days and can do so for the next \`forget\` days after learning the secret.

More formally, on each day \`i\` that a person knows the secret:
- If \`i + delay <= n\`, they will share it on days \`i + delay\` through \`min(i + forget - 1, n)\`.
- On day \`i + forget\`, they forget the secret.

Given integers \`n\`, \`delay\`, and \`forget\`, return the **number of people** who know the secret at the end of day \`n\`. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '2 <= n <= 1000',
    '1 <= delay < forget <= n',
  ],
  examples: [
    {
      input: 'n = 6, delay = 2, forget = 4',
      output: '5',
      explanation: 'Day 1: [1]. Day 3: person 1 shares → [1,2]. Day 4: [1,2,3]. Day 5: person 1 forgets, [2,3,4]. Day 6: [3,4,5]. 5 people.',
    },
    {
      input: 'n = 4, delay = 1, forget = 3',
      output: '6',
    },
  ],
  hints: [
    'Let dp[i] = number of people who first learn the secret on day i. dp[1] = 1.',
    'For each day i, each person who learned on day i will share on days i+delay to min(i+forget-1, n). Add dp[i] to each of those days.',
    'The answer is sum(dp[i]) for all i where i + forget > n (people who haven\'t forgotten by day n). Take mod 10^9+7.',
  ],
  functionName: 'peopleAwareOfSecret',
  params: ['n', 'delay', 'forget'],
  starterCode: {
    javascript: `function peopleAwareOfSecret(n, delay, forget) {

}`,
    python: `def peopleAwareOfSecret(n, delay, forget):
    pass`,
  },
  visibleTests: [
    { args: [6, 2, 4], expected: 5 },
    { args: [4, 1, 3], expected: 6 },
  ],
  hiddenTests: [
    { args: [2, 1, 2], expected: 2 },
    { args: [3, 1, 2], expected: 2 },
    { args: [5, 1, 5], expected: 16 },
    { args: [6, 3, 5], expected: 2 },
  ],
};
