import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ugly-number-ii',
  title: 'Ugly Number II',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming', 'heap'],
  description: `An **ugly number** is a positive integer whose prime factors are limited to \`2\`, \`3\`, and \`5\`.

Given an integer \`n\`, return the \`n\`th **ugly number**.`,
  constraints: [
    '1 <= n <= 1690',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '12',
      explanation: 'The first 10 ugly numbers are [1, 2, 3, 4, 5, 6, 8, 9, 10, 12]. The 10th is 12.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: '1 has no prime factors, so it is trivially an ugly number.',
    },
  ],
  hints: [
    'Level 1: Use a DP array. The next ugly number is always the minimum of the current candidates: ugly[p2]*2, ugly[p3]*3, and ugly[p5]*5, where p2, p3, p5 are pointers tracking which ugly number to multiply next.',
    'Level 2: Maintain three pointers i2, i3, i5 starting at 0. The next ugly = min(dp[i2]*2, dp[i3]*3, dp[i5]*5). Advance any pointer whose product equals the chosen next ugly (handle ties).',
    'Level 3: const dp=[1];let i2=0,i3=0,i5=0;for(let i=1;i<n;i++){const nx=Math.min(dp[i2]!*2,dp[i3]!*3,dp[i5]!*5);dp.push(nx);if(nx===dp[i2]!*2)i2++;if(nx===dp[i3]!*3)i3++;if(nx===dp[i5]!*5)i5++;}return dp[n-1]!;',
  ],
  functionName: 'nthUglyNumber',
  params: ['n'],
  starterCode: {
    javascript: `function nthUglyNumber(n) {
  const dp = [1]; let i2 = 0, i3 = 0, i5 = 0;
  for (let i = 1; i < n; i++) {
    const nx = Math.min(dp[i2]*2, dp[i3]*3, dp[i5]*5);
    dp.push(nx);
    if (nx === dp[i2]*2) i2++;
    if (nx === dp[i3]*3) i3++;
    if (nx === dp[i5]*5) i5++;
  }
  return dp[n-1];
}`,
    typescript: `function nthUglyNumber(n: number): number {
  const dp = [1]; let i2 = 0, i3 = 0, i5 = 0;
  for (let i = 1; i < n; i++) {
    const nx = Math.min(dp[i2]!*2, dp[i3]!*3, dp[i5]!*5);
    dp.push(nx);
    if (nx === dp[i2]!*2) i2++;
    if (nx === dp[i3]!*3) i3++;
    if (nx === dp[i5]!*5) i5++;
  }
  return dp[n-1]!;
}`,
    python: `def nthUglyNumber(n):
    if hasattr(n, 'to_py'): n = n.to_py()
    n = int(n)
    dp = [1]; i2 = i3 = i5 = 0
    for _ in range(1, n):
        nx = min(dp[i2]*2, dp[i3]*3, dp[i5]*5)
        dp.append(nx)
        if nx == dp[i2]*2: i2 += 1
        if nx == dp[i3]*3: i3 += 1
        if nx == dp[i5]*5: i5 += 1
    return dp[n-1]`,
  },
  visibleTests: [
    { args: [10], expected: 12 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [7], expected: 8 },
    { args: [11], expected: 15 },
    { args: [15], expected: 24 },
    { args: [20], expected: 36 },
  ],
};
