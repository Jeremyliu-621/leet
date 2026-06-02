import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prime-pairs-with-target-sum',
  title: 'Prime Pairs With Target Sum',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer \`n\`. We call a pair of integers \`[x, y]\` **prime pairs** if:

- \`1 <= x <= y <= n\`
- \`x + y == n\`
- Both \`x\` and \`y\` are prime numbers.

Return the 2D sorted list of all prime pairs \`[x, y]\`. The list should be sorted in **increasing** order of \`x\`. If there are no prime pairs, return an empty array.`,
  constraints: [
    '1 <= n <= 10^6',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '[[3,7],[5,5]]',
      explanation: '3+7=10 (both prime), 5+5=10 (both prime). 2+8: 8 is not prime. So [[3,7],[5,5]].',
    },
    {
      input: 'n = 2',
      output: '[]',
      explanation: 'The only pair would be [1,1] but 1 is not prime.',
    },
  ],
  hints: [
    'Level 1: Use a sieve to find all primes up to n. Then iterate x from 2 to n/2, and check if both x and n-x are prime.',
    'Level 2: Sieve of Eratosthenes: mark composites starting at p² for each prime p. Then collect [x, n-x] pairs where both values are prime and x ≤ n-x.',
    'Level 3: `const sieve = Array(n+1).fill(true); sieve[0]=sieve[1]=false; for(let p=2;p*p<=n;p++) if(sieve[p]) for(let i=p*p;i<=n;i+=p) sieve[i]=false;` Then loop x from 2 to Math.floor(n/2).',
  ],
  functionName: 'findPrimePairs',
  params: ['n'],
  starterCode: {
    javascript: 'function findPrimePairs(n) {\n  const sieve = Array(n + 1).fill(true);\n  sieve[0] = sieve[1] = false;\n  for (let p = 2; p * p <= n; p++) if (sieve[p]) for (let i = p * p; i <= n; i += p) sieve[i] = false;\n  const result = [];\n  for (let x = 2; x <= Math.floor(n / 2); x++) if (sieve[x] && sieve[n - x]) result.push([x, n - x]);\n  return result;\n}\n',
    typescript: 'function findPrimePairs(n: number): number[][] {\n  const sieve = Array(n + 1).fill(true) as boolean[];\n  sieve[0] = sieve[1] = false;\n  for (let p = 2; p * p <= n; p++) if (sieve[p]) for (let i = p * p; i <= n; i += p) sieve[i] = false;\n  const result: number[][] = [];\n  for (let x = 2; x <= Math.floor(n / 2); x++) if (sieve[x] && sieve[n - x]) result.push([x, n - x]);\n  return result;\n}\n',
    python: 'def findPrimePairs(n):\n    n = int(n)\n    sieve = [True] * (n + 1)\n    sieve[0] = sieve[1] = False\n    p = 2\n    while p * p <= n:\n        if sieve[p]:\n            for i in range(p*p, n+1, p): sieve[i] = False\n        p += 1\n    return [[x, n-x] for x in range(2, n//2+1) if sieve[x] and sieve[n-x]]\n',
  },
  visibleTests: [
    {
      args: [10],
      expected: [[3,7],[5,5]],
    },
    {
      args: [2],
      expected: [],
    },
  ],
  hiddenTests: [
    {
      args: [4],
      expected: [[2,2]],
    },
    {
      args: [5],
      expected: [[2,3]],
    },
    {
      args: [7],
      expected: [[2,5]],
    },
    {
      args: [9],
      expected: [[2,7]],
    },
    {
      args: [20],
      expected: [[3,17],[7,13]],
    },
  ],
};
