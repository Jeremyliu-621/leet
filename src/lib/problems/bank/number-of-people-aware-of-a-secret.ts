import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-people-aware-of-a-secret',
  title: 'Number of People Aware of a Secret',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `On day 1, one person discovers a secret.

You are given an integer \`n\` and two integers \`delay\` and \`forget\`:
- A person who learns the secret **starts sharing it** starting \`delay\` days after learning it.
- A person who learns the secret **forgets it** after \`forget\` days from learning it (i.e., they know it on days \`learn\` through \`learn + forget - 1\` inclusive).

Every day, each person who currently knows the secret and is in their sharing window shares it with exactly one new person.

Return the number of people who know the secret at the end of day \`n\` modulo \`10^9 + 7\`.`,
  constraints: [
    '`2 <= n <= 1000`',
    '`1 <= delay < forget <= n`',
  ],
  examples: [
    {
      input: 'n = 6, delay = 2, forget = 4',
      output: '5',
      explanation:
        'Let dp[i] = people newly learning on day i. dp[1]=1. Sharing window for someone who learned on day i is days i+delay through i+forget-1. dp[3]=1, dp[4]=1, dp[5]=1, dp[6]=2. People still knowing on day 6 are those who learned from day 3 to 6: 1+1+1+2=5.',
    },
    {
      input: 'n = 4, delay = 1, forget = 3',
      output: '6',
      explanation:
        'dp[1]=1, dp[2]=1, dp[3]=2, dp[4]=3. People knowing on day 4 (learned day 2 through 4): 1+2+3=6.',
    },
  ],
  hints: [
    'Define `dp[i]` as the number of people who newly learn the secret on day `i`. `dp[1] = 1`.',
    'On day `i`, anyone who learned on days `i - forget + 1` through `i - delay` (inclusive) is currently both knowing and sharing. Each of them teaches one new person, so `dp[i] = sum(dp[j])` for `j` in that range (clamped to valid indices).',
    'Use a running prefix sum to compute each day\'s sum in O(1) instead of O(n). The answer is the sum of `dp[n - forget + 1]` through `dp[n]`.',
    `\`\`\`js
function peopleAwareOfSecret(n, delay, forget) {
  const MOD = 1_000_000_007n;
  const dp = new Array(n + 1).fill(0n);
  dp[1] = 1n;
  // prefix[i] = dp[1] + ... + dp[i]
  const prefix = new Array(n + 2).fill(0n);
  prefix[1] = 1n;
  for (let i = 2; i <= n; i++) {
    const lo = Math.max(1, i - forget + 1);
    const hi = i - delay;
    if (hi >= lo) {
      dp[i] = ((prefix[hi] - prefix[lo - 1]) % MOD + MOD) % MOD;
    }
    prefix[i] = (prefix[i - 1] + dp[i]) % MOD;
  }
  const lo = Math.max(1, n - forget + 1);
  return Number(((prefix[n] - prefix[lo - 1]) % MOD + MOD) % MOD);
}\`\`\``,
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
    { args: [5, 4, 5], expected: 2 },
  ],
  hiddenTests: [
    { args: [2, 1, 2], expected: 2 },
    { args: [3, 2, 3], expected: 2 },
    { args: [5, 1, 4], expected: 14 },
    { args: [7, 2, 3], expected: 2 },
    { args: [10, 3, 5], expected: 5 },
  ],
};
