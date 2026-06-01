import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-prime-number',
  title: 'Prime Number Check',
  difficulty: 'easy',
  tags: ['math'],
  description:
    'A prime number is an integer greater than 1 whose only positive divisors are 1 and itself.\n\nGiven an integer n, return true if n is prime and false otherwise. Numbers less than 2, such as 0, 1, and all negatives, are not prime.\n\nChecking divisors only up to the square root of n is enough to decide primality.',
  constraints: [
    '-1000 <= n <= 1000000',
    'n is an integer.',
  ],
  examples: [
    {
      input: 'n = 7',
      output: 'true',
      explanation: '7 is divisible only by 1 and 7.',
    },
    {
      input: 'n = 12',
      output: 'false',
      explanation: '12 is divisible by 2, 3, 4, and 6.',
    },
    {
      input: 'n = 1',
      output: 'false',
      explanation: '1 is not considered prime.',
    },
  ],
  hints: [
    'Handle edge cases first: any number less than 2 is *not* prime. For the main check, think about what range of divisors you actually need to test.',
    'If `n` has a factor `d > 1`, it also has `n/d`. The smaller of the two is always ≤ √n. So testing divisors from 2 up to `Math.floor(Math.sqrt(n))` is sufficient — you don\'t need to go further.',
    '`if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return true;` — works correctly for 2 (returns true) and 4 (caught by i=2).',
  ],
  functionName: 'isPrime',
  params: ['n'],
  starterCode: {
    javascript: `function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
    typescript: `function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}`,
    python: `def isPrime(n):
    if n < 2: return False
    i = 2
    while i * i <= n:
        if n % i == 0: return False
        i += 1
    return True`,
  },
  visibleTests: [
    { args: [7], expected: true },
    { args: [12], expected: false },
    { args: [1], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [-5], expected: false },
    { args: [2], expected: true },
    { args: [97], expected: true },
    { args: [100], expected: false },
    { args: [7919], expected: true },
  ],
};
