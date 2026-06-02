import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-divisible-digit-product-i',
  title: 'Smallest Number With Digit Product Divisible by Target',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given two positive integers \`n\` and \`t\`.

Return the **smallest** integer \`x\` such that \`x >= n\` and the **digit product** of \`x\` is divisible by \`t\`.

The **digit product** of a positive integer is the product of all its digits.`,
  constraints: ['1 <= n <= 100', '1 <= t <= 10'],
  examples: [
    {
      input: 'n = 10, t = 2',
      output: '10',
      explanation: 'The digit product of 10 is 1 × 0 = 0. Since 0 is divisible by 2, the answer is 10.',
    },
    {
      input: 'n = 15, t = 3',
      output: '16',
      explanation:
        'The digit product of 15 is 1 × 5 = 5 (not divisible by 3). The digit product of 16 is 1 × 6 = 6, which is divisible by 3.',
    },
    {
      input: 'n = 22, t = 4',
      output: '22',
      explanation: 'The digit product of 22 is 2 × 2 = 4, which is divisible by 4.',
    },
  ],
  hints: [
    'Because n ≤ 100 and any multiple of 10 has digit product 0, the answer is always ≤ 100. A simple linear scan from n upward works.',
    'Compute the digit product by iterating over each character of String(x) and multiplying. The product of 0 with anything is 0, and 0 % t === 0 for every t.',
    'Check divisibility with `product % t === 0`. Return the first x ≥ n that satisfies this.',
  ],
  functionName: 'smallestDivisibleDigitProductI',
  params: ['n', 't'],
  starterCode: {
    javascript: `function smallestDivisibleDigitProductI(n, t) {
  for (let x = n; ; x++) {
    let prod = 1;
    for (const d of String(x)) prod *= parseInt(d);
    if (prod % t === 0) return x;
  }
}`,
    typescript: `function smallestDivisibleDigitProductI(n: number, t: number): number {
  for (let x = n; ; x++) {
    let prod = 1;
    for (const d of String(x)) prod *= parseInt(d, 10);
    if (prod % t === 0) return x;
  }
}`,
    python: `def smallestDivisibleDigitProductI(n, t):
    if hasattr(n, 'to_py'): n = n.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    n = int(n); t = int(t)
    x = n
    while True:
        prod = 1
        for d in str(x): prod *= int(d)
        if prod % t == 0: return x
        x += 1`,
  },
  visibleTests: [
    { args: [10, 2], expected: 10 },
    { args: [15, 3], expected: 16 },
    { args: [22, 4], expected: 22 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [99, 5], expected: 100 },
    { args: [11, 4], expected: 14 },
    { args: [25, 6], expected: 26 },
    { args: [100, 7], expected: 100 },
    { args: [17, 9], expected: 19 },
    { args: [50, 8], expected: 50 },
  ],
};
