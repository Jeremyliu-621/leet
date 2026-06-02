import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-total-set-bits',
  title: 'Count Total Set Bits from 1 to N',
  difficulty: 'medium',
  tags: ['math', 'bit-manipulation'],
  description: `Given a positive integer \`n\`, return the **total number of 1-bits** (set bits) across the binary representations of all integers from **1 to n** (inclusive).

For example, with n = 5:
- 1 = 001 → 1 set bit
- 2 = 010 → 1 set bit
- 3 = 011 → 2 set bits
- 4 = 100 → 1 set bit
- 5 = 101 → 2 set bits
- Total = **7**

The naive O(n log n) approach iterates and counts bits per number. Aim for **O(log n)** by processing one bit position at a time.`,
  constraints: [
    '1 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 5',
      output: '7',
      explanation: '1+1+2+1+2 = 7.',
    },
    {
      input: 'n = 7',
      output: '12',
      explanation: '1+1+2+1+2+2+3 = 12.',
    },
    {
      input: 'n = 1',
      output: '1',
      explanation: 'Only the number 1, which has one set bit.',
    },
  ],
  hints: [
    'For each bit position b (0, 1, 2, …): the pattern of bit b among integers repeats with period 2^(b+1) — the first half of each period has the bit clear, the second half has it set.',
    'Count of numbers in [1..n] with bit b set = fullPeriods * 2^b + max(0, remainder − 2^b), where fullPeriods = floor((n+1) / 2^(b+1)) and remainder = (n+1) % 2^(b+1).',
    'Sum contributions across all bit positions b = 0, 1, … until 2^b > n. This runs in O(log n).',
  ],
  functionName: 'countTotalSetBits',
  params: ['n'],
  starterCode: {
    javascript: `function countTotalSetBits(n) {
  let total = 0;
  for (let b = 1; b <= n; b <<= 1) {
    const period = b << 1;
    total += Math.floor((n + 1) / period) * b + Math.max(0, (n + 1) % period - b);
  }
  return total;
}`,
    typescript: `function countTotalSetBits(n: number): number {
  let total = 0;
  for (let b = 1; b <= n; b <<= 1) {
    const period = b << 1;
    total += Math.floor((n + 1) / period) * b + Math.max(0, (n + 1) % period - b);
  }
  return total;
}`,
    python: `def countTotalSetBits(n):
    total = 0
    b = 1
    while b <= n:
        period = b << 1
        total += (n + 1) // period * b + max(0, (n + 1) % period - b)
        b <<= 1
    return total`,
  },
  visibleTests: [
    { args: [5], expected: 7 },
    { args: [7], expected: 12 },
    { args: [1], expected: 1 },
    { args: [4], expected: 5 },
  ],
  hiddenTests: [
    { args: [10], expected: 17 },
    { args: [15], expected: 32 },
    { args: [16], expected: 33 },
    { args: [2], expected: 2 },
    { args: [3], expected: 4 },
    { args: [8], expected: 13 },
    { args: [100], expected: 319 },
  ],
};
