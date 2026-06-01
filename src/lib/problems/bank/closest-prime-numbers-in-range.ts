import type { Problem } from '../types';

export const problem: Problem = {
  id: 'closest-prime-numbers-in-range',
  title: 'Closest Prime Numbers in Range',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given two positive integers \`left\` and \`right\`, find the two integers \`num1\` and \`num2\` such that:
- \`left <= num1 < num2 <= right\`
- Both \`num1\` and \`num2\` are **prime** numbers.
- \`num2 - num1\` is the **minimum** amongst all other pairs satisfying the above conditions.

Return the positive integer array \`ans = [num1, num2]\`. If there are multiple pairs with the same minimum difference, return the one with the smallest \`num1\`. If no such numbers exist, return \`[-1, -1]\`.`,
  constraints: [
    '1 <= left <= right <= 10^6',
  ],
  examples: [
    {
      input: 'left = 10, right = 19',
      output: '[11, 13]',
      explanation: 'Primes in [10,19]: 11, 13, 17, 19. Closest pair is [11,13] with gap 2.',
    },
    {
      input: 'left = 4, right = 6',
      output: '[-1, -1]',
      explanation: 'Only prime in range is 5; cannot form a pair.',
    },
  ],
  hints: [
    'Use a sieve to find all primes up to right.',
    'Collect primes in [left, right] and scan adjacent pairs for the minimum gap.',
    `\`\`\`js
function closestPrimes(left, right) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i*i <= n; i++) if (n%i===0) return false;
    return true;
  }
  let prev = -1, best = [-1,-1], gap = Infinity;
  for (let n = left; n <= right; n++) {
    if (isPrime(n)) {
      if (prev !== -1 && n-prev < gap) { gap = n-prev; best = [prev,n]; }
      prev = n;
    }
  }
  return best;
}\`\`\``,
  ],
  functionName: 'closestPrimes',
  params: ['left', 'right'],
  starterCode: {
    javascript: 'function closestPrimes(left, right) {\n  const sieve = new Uint8Array(right + 1).fill(1);\n  sieve[0] = sieve[1] = 0;\n  for (let i = 2; i * i <= right; i++) {\n    if (sieve[i]) for (let j = i * i; j <= right; j += i) sieve[j] = 0;\n  }\n  let prev = -1, best = [-1, -1], gap = Infinity;\n  for (let n = left; n <= right; n++) {\n    if (sieve[n]) {\n      if (prev !== -1 && n - prev < gap) { gap = n - prev; best = [prev, n]; }\n      prev = n;\n    }\n  }\n  return best;\n}\n',
    typescript: "function closestPrimes(left: number, right: number): number[] {\n  const sieve = new Uint8Array(right + 1).fill(1);\n  sieve[0] = sieve[1] = 0;\n  for (let i = 2; i * i <= right; i++) {\n    if (sieve[i]) for (let j = i * i; j <= right; j += i) sieve[j] = 0;\n  }\n  let prev = -1, best = [-1, -1], gap = Infinity;\n  for (let n = left; n <= right; n++) {\n    if (sieve[n]) {\n      if (prev !== -1 && n - prev < gap) { gap = n - prev; best = [prev, n]; }\n      prev = n;\n    }\n  }\n  return best;\n}",

    python: 'def closestPrimes(left, right):\n    sieve = [True] * (right + 1)\n    sieve[0] = sieve[1] = False\n    i = 2\n    while i * i <= right:\n        if sieve[i]:\n            for j in range(i * i, right + 1, i):\n                sieve[j] = False\n        i += 1\n    prev, best, gap = -1, [-1, -1], float("inf")\n    for n in range(left, right + 1):\n        if sieve[n]:\n            if prev != -1 and n - prev < gap:\n                gap = n - prev\n                best = [prev, n]\n            prev = n\n    return best\n',
  },
  visibleTests: [
    { args: [10, 19], expected: [11, 13] },
    { args: [4, 6], expected: [-1, -1] },
  ],
  hiddenTests: [
    { args: [1, 10], expected: [2, 3] },
    { args: [19, 31], expected: [29, 31] },
    { args: [2, 2], expected: [-1, -1] },
    { args: [2, 3], expected: [2, 3] },
  ],
};
