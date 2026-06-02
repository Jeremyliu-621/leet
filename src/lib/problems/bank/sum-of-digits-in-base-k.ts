import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-digits-in-base-k',
  title: 'Sum of Digits in Base K',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`n\` (in base \`10\`) and a base \`k\`, return the **sum of the digits** of \`n\` after converting \`n\` from base \`10\` to base \`k\`.

After converting, each digit of \`n\` in base \`k\` should be summed and the sum returned in base \`10\`.

**Example:** If \`n = 34\` and \`k = 6\`, then \`34\` in base 6 is \`54\` (5*6 + 4 = 34), so the digit sum is \`5 + 4 = 9\`.`,
  constraints: [
    '1 <= n <= 100',
    '2 <= k <= 10',
  ],
  examples: [
    {
      input: 'n = 34, k = 6',
      output: '9',
      explanation: '34 in base 6 is "54" (5*6 + 4 = 34). Digit sum = 5 + 4 = 9.',
    },
    {
      input: 'n = 10, k = 10',
      output: '1',
      explanation: '10 in base 10 is "10". Digit sum = 1 + 0 = 1.',
    },
    {
      input: 'n = 7, k = 2',
      output: '3',
      explanation: '7 in base 2 is "111" (4+2+1=7). Digit sum = 1 + 1 + 1 = 3.',
    },
  ],
  hints: [
    'Repeatedly divide n by k: the remainder is the next digit (least significant first). Accumulate the remainders.',
    'While n > 0, add n % k to a running sum, then set n = Math.floor(n / k).',
    'let s=0; while(n>0){s+=n%k;n=Math.floor(n/k);}return s;',
  ],
  functionName: 'sumBase',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function sumBase(n, k) {
  let s = 0; while (n > 0) { s += n % k; n = Math.floor(n / k); } return s;
}`,
    typescript: `function sumBase(n: number, k: number): number {
  let s = 0; while (n > 0) { s += n % k; n = Math.floor(n / k); } return s;
}`,
    python: `def sumBase(n, k):
    if hasattr(n, 'to_py'): n = n.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    n, k = int(n), int(k)
    s = 0
    while n > 0: s += n % k; n //= k
    return s`,
  },
  visibleTests: [
    { args: [34, 6], expected: 9 },
    { args: [10, 10], expected: 1 },
    { args: [7, 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, 2], expected: 1 },
    { args: [8, 2], expected: 1 },
    { args: [15, 2], expected: 4 },
    { args: [100, 10], expected: 1 },
    { args: [25, 5], expected: 1 },
    { args: [50, 7], expected: 2 },
    { args: [99, 3], expected: 3 },
  ],
};
