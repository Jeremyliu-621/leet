import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-exponentiation',
  title: 'Matrix Exponentiation for Linear Recurrences',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `Compute the **n-th term** of a linear recurrence using **matrix exponentiation** (O(k³ log n) where k is the recurrence order).

You are given a recurrence of the form: \`f(n) = c[0]*f(n-1) + c[1]*f(n-2) + ... + c[k-1]*f(n-k)\`

With initial values \`f(0), f(1), ..., f(k-1)\` provided in \`init\`.

The companion matrix approach: define state vector [f(n), f(n-1), ..., f(n-k+1)]. Multiplying by the k×k companion matrix \`M\` advances the state by one step. So computing \`M^n * init\` yields \`f(n)\`.

Return \`f(n) mod (10^9 + 7)\`.`,
  constraints: [
    '1 <= k <= 10 (order of recurrence)',
    '0 <= n <= 10^18',
    '0 <= coefficients[i], init[i] <= 10^9',
    'If n < k, return init[n] mod (10^9+7).',
  ],
  examples: [
    {
      input: 'coefficients = [1,1], init = [0,1], n = 10',
      output: '55',
      explanation: 'Fibonacci sequence: f(n)=f(n-1)+f(n-2), f(0)=0, f(1)=1. f(10)=55.',
    },
    {
      input: 'coefficients = [2,-1], init = [1,2], n = 5',
      output: '6',
      explanation: 'f(n)=2*f(n-1)-f(n-2), f(0)=1, f(1)=2. Arithmetic sequence: 1,2,3,4,5,6. f(5)=6.',
    },
    {
      input: 'coefficients = [1,1,1], init = [0,0,1], n = 6',
      output: '7',
      explanation: 'Tribonacci: f(n)=f(n-1)+f(n-2)+f(n-3). f(0..5)=0,0,1,1,2,4,7. f(6)=7.',
    },
  ],
  hints: [
    'Build the k×k companion matrix M: row 0 = [c0, c1, ..., c_{k-1}]; for row i (1..k-1): M[i][i-1]=1, all others 0.',
    'Implement matrix multiplication mod p. Implement matrix power via fast exponentiation: matpow(M, n) = if n==0 → identity; if n%2==1 → M * matpow(M,n-1); else → matpow(M,n/2)^2.',
    'Initial state vector v = [f(k-1), f(k-2), ..., f(0)]. After multiplying M^(n-k+1) * v, the top element of the result gives f(n). Handle n < k by returning init[n] directly.',
  ],
  functionName: 'matrixExponentiation',
  params: ['coefficients', 'init', 'n'],
  starterCode: {
    javascript: `function matrixExponentiation(coefficients, init, n) {\n\n}`,
    typescript: `function matrixExponentiation(coefficients: number[], init: number[], n: number): number {\n\n}`,
    python: `def matrixExponentiation(coefficients: list[int], init: list[int], n: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 1], [0, 1], 10], expected: 55 },
    { args: [[2, -1], [1, 2], 5], expected: 6 },
    { args: [[1, 1, 1], [0, 0, 1], 6], expected: 7 },
    { args: [[1, 1], [0, 1], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1], [0, 1], 50], expected: 12586269025 % 1000000007 },
    { args: [[1, 1], [0, 1], 1], expected: 1 },
    { args: [[2], [1], 10], expected: 1024 },
    { args: [[3, -3, 1], [0, 0, 1], 5], expected: 10 },
    { args: [[1, 1], [0, 1], 100], expected: 687995182 },
  ],
};
