import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sqrtx',
  title: 'Sqrt(x)',
  difficulty: 'easy',
  tags: ['math', 'binary-search'],
  description: `Given a non-negative integer \`x\`, return the **floor** of its square root (i.e., the largest integer \`r\` such that \`r * r <= x\`).

Do not use the built-in exponent function or operator.`,
  constraints: [
    '0 <= x <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'x = 4',
      output: '2',
      explanation: 'sqrt(4) = 2.',
    },
    {
      input: 'x = 8',
      output: '2',
      explanation: 'sqrt(8) ≈ 2.828..., floor is 2.',
    },
  ],
  hints: [
    'Binary search on the answer in range [0, x].',
    'For mid = (lo + hi) / 2, check if mid * mid <= x. Move lo up if true, hi down if false.',
    'Use Math.floor(x / 2) as initial upper bound to avoid overflow concerns.',
  ],
  functionName: 'mySqrt',
  params: ['x'],
  starterCode: {
    javascript: `function mySqrt(x) {
  if (x < 2) return x;
  let lo = 1, hi = 46341; // floor(sqrt(2^31-1)) < 46341
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (mid * mid <= x) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function mySqrt(x: number): number {
  if (x < 2) return x;
  let lo = 1, hi = 46341;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (mid * mid <= x) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
    python: `def mySqrt(x):
    lo, hi = 0, x
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if mid * mid <= x:
            lo = mid
        else:
            hi = mid - 1
    return lo
`,
  },
  visibleTests: [
    { args: [4], expected: 2 },
    { args: [8], expected: 2 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [9], expected: 3 },
    { args: [2147395600], expected: 46340 },
    { args: [2147483647], expected: 46340 },
    { args: [100], expected: 10 },
  ],
};
