import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-distinct-prime-factors-of-array',
  title: 'Count Distinct Prime Factors of Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of positive integers \`nums\`, return the number of **distinct prime factors** in the product of all elements of \`nums\`.

A **prime factor** of an integer \`n\` is a prime number that divides \`n\` evenly. Two prime factors from different elements are still counted only once if they are equal.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '2 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,4,3,7,10,6]',
      output: '4',
      explanation: 'Distinct primes: 2 (from 2,4,10), 3 (from 3,6), 5 (from 10), 7 (from 7). Total = 4.',
    },
    {
      input: 'nums = [2,4,6,8,16]',
      output: '2',
      explanation: 'Only primes 2 and 3 appear (6 = 2×3). Total = 2.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
      explanation: '1 has no prime factors.',
    },
  ],
  hints: [
    'Level 1: For each number in nums, find all its prime factors by trial division. Collect them in a set.',
    'Level 2: For each n in nums, iterate p from 2 while p*p <= n. Whenever p divides n, add p to the set and divide n by p until it no longer divides. If n > 1 after the loop, add n as a prime factor.',
    'Level 3: Use a Set<number> to deduplicate. Return set.size.',
  ],
  functionName: 'countDistinctPrimeFactors',
  params: ['nums'],
  starterCode: {
    javascript: `function countDistinctPrimeFactors(nums) {
  const primes = new Set();
  for (let n of nums) {
    for (let p = 2; p * p <= n; p++) {
      if (n % p === 0) { primes.add(p); while (n % p === 0) n = Math.floor(n / p); }
    }
    if (n > 1) primes.add(n);
  }
  return primes.size;
}`,
    typescript: `function countDistinctPrimeFactors(nums: number[]): number {
  const primes = new Set<number>();
  for (let n of nums) {
    for (let p = 2; p * p <= n; p++) {
      if (n % p === 0) { primes.add(p); while (n % p === 0) n = Math.floor(n / p); }
    }
    if (n > 1) primes.add(n);
  }
  return primes.size;
}`,
    python: `def countDistinctPrimeFactors(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    primes = set()
    for n in nums:
        p = 2
        while p * p <= n:
            if n % p == 0:
                primes.add(p)
                while n % p == 0: n //= p
            p += 1
        if n > 1: primes.add(n)
    return len(primes)`,
  },
  visibleTests: [
    {
      args: [[2,4,3,7,10,6]],
      expected: 4,
    },
    {
      args: [[2,4,6,8,16]],
      expected: 2,
    },
    {
      args: [[1,1,1]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[2]],
      expected: 1,
    },
    {
      args: [[12,15]],
      expected: 3,
    },
    {
      args: [[2,3,5,7,11,13]],
      expected: 6,
    },
    {
      args: [[100]],
      expected: 2,
    },
    {
      args: [[997]],
      expected: 1,
    },
  ],
};
