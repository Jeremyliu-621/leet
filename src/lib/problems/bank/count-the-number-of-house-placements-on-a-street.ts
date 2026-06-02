import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-house-placements-on-a-street',
  title: 'Count the Number of House Placements on a Street',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `A perfectly straight street is represented by a number line. The street has \`n * 2\` **plots**, where there are \`n\` plots on each side of the street. The plots on each side are numbered from \`1\` to \`n\`. On each side, any two adjacent plots are next to each other.

You are allowed to place houses on plots. Return the **number of ways** you can place houses such that no two houses are adjacent to each other on the same side of the street. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Note that if a house is placed on the \`i\`-th plot on one side of the street, it does **not** impact the plots on the other side.`,
  constraints: [
    '1 <= n <= 10^4',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '4',
      explanation:
        'Each side has 1 plot. Each side independently: place a house or leave empty (2 choices). Total: 2 × 2 = 4.',
    },
    {
      input: 'n = 2',
      output: '9',
      explanation:
        'Each side with 2 plots: 3 valid arrangements (__, _H, H_). Total: 3 × 3 = 9.',
    },
    {
      input: 'n = 3',
      output: '25',
      explanation:
        'Each side with 3 plots: 5 valid arrangements (___, __H, _H_, H__, H_H). Total: 5 × 5 = 25.',
    },
  ],
  hints: [
    'Level 1: The two sides are independent — count arrangements for one side, then square.',
    'Level 2: f(n) = number of valid arrangements for n plots (no two adjacent houses). f(n) = f(n-1) + f(n-2) with f(0)=1, f(1)=2.',
    'Level 3: Answer = f(n)^2 mod 10^9+7. This is equivalent to (Fibonacci(n+2))^2 mod 10^9+7.',
  ],
  functionName: 'countHousePlacements',
  params: ['n'],
  starterCode: {
    javascript: `function countHousePlacements(n) {
  const MOD = 1_000_000_007n;
  let a = 1n, b = 2n;
  for (let i = 2; i <= n; i++) { const c = (a + b) % MOD; a = b; b = c; }
  const f = n === 0 ? a : b;
  return Number(f * f % MOD);
}`,
    typescript: `function countHousePlacements(n: number): number {
  const MOD = 1_000_000_007n;
  let a = 1n, b = 2n;
  for (let i = 2; i <= n; i++) { const c = (a + b) % MOD; a = b; b = c; }
  const f = n === 0 ? a : b;
  return Number(f * f % MOD);
}`,
    python: `def countHousePlacements(n):
    if hasattr(n, 'to_py'): n = n.to_py()
    n = int(n)
    MOD = 10**9 + 7
    a, b = 1, 2
    for _ in range(2, n + 1):
        a, b = b, (a + b) % MOD
    f = b if n >= 1 else a
    return (f * f) % MOD`,
  },
  visibleTests: [
    { args: [1], expected: 4 },
    { args: [2], expected: 9 },
    { args: [3], expected: 25 },
  ],
  hiddenTests: [
    { args: [4], expected: 64 },
    { args: [5], expected: 169 },
    { args: [6], expected: 441 },
    { args: [10], expected: 20736 },
  ],
};
