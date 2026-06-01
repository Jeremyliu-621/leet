import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-perfect-square',
  title: 'Valid Perfect Square',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `Given a positive integer \`n\`, return \`true\` if \`n\` is a **perfect square**, and \`false\` otherwise.

A perfect square is an integer that is the square of another integer: \`1, 4, 9, 16, 25, …\`

Do **not** use the built-in square root function (\`Math.sqrt\`). Use binary search instead.`,
  constraints: [
    '1 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 16',
      output: 'true',
      explanation: '4 × 4 = 16',
    },
    {
      input: 'n = 14',
      output: 'false',
      explanation: '14 is not a perfect square.',
    },
    {
      input: 'n = 1',
      output: 'true',
      explanation: '1 × 1 = 1',
    },
  ],
  hints: [
    'Binary search over the range `[1, n]`. At each midpoint, check if `mid * mid` equals `n`.',
    'If `mid * mid < n`, the answer is in the right half (`lo = mid + 1`). If `mid * mid > n`, the answer is in the left half (`hi = mid - 1`). If equal, return `true`.',
    '`let lo = 1, hi = n; while (lo <= hi) { const mid = Math.floor((lo + hi) / 2); const sq = mid * mid; if (sq === n) return true; if (sq < n) lo = mid + 1; else hi = mid - 1; } return false;`',
  ],
  functionName: 'isPerfectSquare',
  params: ['n'],
  starterCode: {
    javascript: `function isPerfectSquare(n) {
  let lo = 1, hi = n;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const sq = mid * mid;
    if (sq === n) return true;
    if (sq < n) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}`,
    typescript: `function isPerfectSquare(n: number): boolean {
  let lo = 1, hi = n;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const sq = mid * mid;
    if (sq === n) return true;
    if (sq < n) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}`,
    python: `def isPerfectSquare(n):
    lo, hi = 1, n
    while lo <= hi:
        mid = (lo + hi) // 2
        sq = mid * mid
        if sq == n: return True
        if sq < n: lo = mid + 1
        else: hi = mid - 1
    return False`,
  },
  visibleTests: [
    { args: [16], expected: true },
    { args: [14], expected: false },
    { args: [1], expected: true },
  ],
  hiddenTests: [
    { args: [4], expected: true },
    { args: [9], expected: true },
    { args: [2], expected: false },
    { args: [25], expected: true },
    { args: [26], expected: false },
    { args: [100], expected: true },
  ],
};
