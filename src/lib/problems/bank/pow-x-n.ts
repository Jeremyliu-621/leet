import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pow-x-n',
  title: 'Fast Power (x to the n)',
  difficulty: 'medium',
  tags: ['math', 'binary-search'],
  description: `Implement \`x^n\` — \`x\` raised to the power \`n\` — without using \`Math.pow\`.

\`n\` may be **negative**, in which case \`x^n = 1 / x^(-n)\`.

Use **fast exponentiation** (also called binary exponentiation or exponentiation by squaring):
- \`x^0 = 1\`
- \`x^n = (x^(n/2))^2\` when \`n\` is even
- \`x^n = x × (x^(n/2))^2\` when \`n\` is odd

This runs in **O(log n)** time instead of O(n).`,
  constraints: [
    '-100.0 <= x <= 100.0',
    '-100 <= n <= 100',
    'n is an integer.',
    'x != 0 when n < 0.',
  ],
  examples: [
    {
      input: 'x = 2, n = 10',
      output: '1024',
      explanation: '2^10 = 1024.',
    },
    {
      input: 'x = 2, n = -2',
      output: '0.25',
      explanation: '2^(-2) = 1/(2^2) = 1/4 = 0.25.',
    },
    {
      input: 'x = 3, n = 0',
      output: '1',
      explanation: 'Any number raised to the power 0 is 1.',
    },
  ],
  hints: [
    'Handle the negative-exponent case first: if `n < 0`, compute `(1/x)^(-n)`. Then focus on a non-negative exponent.',
    'Use divide and conquer: recursively compute `half = fastPow(x, Math.floor(n/2))`. If `n` is even, return `half * half`. If odd, return `x * half * half`. Base case: `n === 0` returns `1`.',
    '```js\nfunction fastPow(x, n) {\n  if (n === 0) return 1;\n  if (n < 0) return fastPow(1 / x, -n);\n  const half = fastPow(x, Math.floor(n / 2));\n  return n % 2 === 0 ? half * half : x * half * half;\n}\n```',
  ],
  functionName: 'fastPow',
  params: ['x', 'n'],
  starterCode: {
    javascript: 'function fastPow(x, n) {\n  if (n === 0) return 1;\n  if (n < 0) return fastPow(1 / x, -n);\n  const half = fastPow(x, Math.floor(n / 2));\n  return n % 2 === 0 ? half * half : x * half * half;\n}\n',
    typescript: "function fastPow(x: number, n: number): number {\n  if (n === 0) return 1;\n  if (n < 0) return fastPow(1 / x, -n);\n  const half = fastPow(x, Math.floor(n / 2));\n  return n % 2 === 0 ? half * half : x * half * half;\n}",

    python: 'def fastPow(x, n):\n    if hasattr(x, \'to_py\'): x = x.to_py()\n    x = float(x); n = int(n)\n    if n == 0: return 1.0\n    if n < 0: return fastPow(1/x, -n)\n    half = fastPow(x, n//2)\n    return half*half if n%2==0 else x*half*half\n',
  },
  visibleTests: [
    { args: [2, 10], expected: 1024 },
    { args: [2, -2], expected: 0.25 },
    { args: [3, 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [2, 0], expected: 1 },
    { args: [2, 1], expected: 2 },
    { args: [3, 3], expected: 27 },
    { args: [5, 2], expected: 25 },
    { args: [2, 8], expected: 256 },
    { args: [4, -1], expected: 0.25 },
    { args: [10, 3], expected: 1000 },
  ],
};
