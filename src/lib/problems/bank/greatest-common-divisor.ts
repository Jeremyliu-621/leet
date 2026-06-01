import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greatest-common-divisor',
  title: 'Greatest Common Divisor',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two positive integers \`a\` and \`b\`, return their **greatest common divisor**: the largest integer that divides both \`a\` and \`b\` without leaving a remainder.

The *Euclidean algorithm* computes this quickly by repeatedly replacing the larger number with the remainder of dividing it by the smaller, until one becomes zero.

The other number at that point is the greatest common divisor.`,
  constraints: [
    '1 <= a <= 1000000',
    '1 <= b <= 1000000',
    'a and b are integers.',
  ],
  examples: [
    {
      input: 'a = 12, b = 18',
      output: '6',
      explanation: '6 is the largest number that divides both 12 and 18.',
    },
    {
      input: 'a = 7, b = 5',
      output: '1',
      explanation: '7 and 5 share no divisor larger than 1.',
    },
    {
      input: 'a = 20, b = 20',
      output: '20',
    },
  ],
  functionName: 'greatestCommonDivisor',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function greatestCommonDivisor(a, b) {
  while (b !== 0) { [a, b] = [b, a % b]; }
  return a;
}`,
    typescript: `function greatestCommonDivisor(a: number, b: number): number {
  while (b !== 0) { [a, b] = [b, a % b]; }
  return a;
}`,
    python: `def greatestCommonDivisor(a, b):
    while b:
        a, b = b, a % b
    return a`,
  },
  visibleTests: [
    { args: [12, 18], expected: 6 },
    { args: [7, 5], expected: 1 },
    { args: [20, 20], expected: 20 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 999], expected: 1 },
    { args: [100, 80], expected: 20 },
    { args: [48, 36], expected: 12 },
    { args: [1000000, 500000], expected: 500000 },
    { args: [17, 34], expected: 17 },
  ],
  hints: [
    'Trying every candidate from `1` up to `min(a, b)` works, but it is far slower than necessary on large inputs like `1000000`.',
    'Use the key identity behind the Euclidean algorithm: `gcd(a, b) = gcd(b, a % b)`. The remainder strictly shrinks each step until it hits `0`.',
    'Loop while `b !== 0`: set `[a, b] = [b, a % b]`. When `b` becomes `0`, return `a`. This runs in `O(log(min(a, b)))` steps — trivially fast even at the constraint maximum.',
  ],
};
