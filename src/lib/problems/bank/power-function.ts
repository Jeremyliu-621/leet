import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-function',
  title: 'Pow(x, n)',
  difficulty: 'medium',
  tags: ['math', 'binary-search'],
  description: `Implement \`pow(x, n)\`, which calculates \`x\` raised to the power \`n\` (i.e., \`x^n\`).

Return the result as a floating point number. For this problem, use JavaScript's standard floating-point arithmetic (no BigInt needed).`,
  examples: [
    { input: 'x = 2.00000, n = 10', output: '1024.00000' },
    { input: 'x = 2.10000, n = 3', output: '9.26100' },
    { input: 'x = 2.00000, n = -2', output: '0.25000', explanation: '1/2^2 = 0.25.' },
  ],
  constraints: [
    '-100.0 < x < 100.0',
    '-2^31 <= n <= 2^31 - 1',
    'n is an integer.',
    'The result is guaranteed to fit in a 64-bit float.',
  ],
  functionName: 'myPow',
  params: ['x', 'n'],
  starterCode: {
    javascript: 'function myPow(x, n) {\n  // your code here\n}\n',
    python: 'def myPow(x, n):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use fast exponentiation (binary exponentiation): pow(x, n) = pow(x*x, n/2) when n is even; x * pow(x*x, (n-1)/2) when n is odd.',
    'Handle negative n: pow(x, -n) = pow(1/x, n). Be careful with the minimum integer (n = -2^31 overflows on negation).',
    'Base cases: pow(x, 0) = 1, pow(x, 1) = x.',
  ],
  visibleTests: [
    { args: [2.0, 10], expected: 1024.0 },
    { args: [2.0, -2], expected: 0.25 },
    { args: [2.0, 0], expected: 1.0 },
  ],
  hiddenTests: [
    { args: [1.0, 100], expected: 1.0 },
    { args: [-2.0, 3], expected: -8.0 },
    { args: [0.5, 4], expected: 0.0625 },
    { args: [2.0, 1], expected: 2.0 },
  ],
};
