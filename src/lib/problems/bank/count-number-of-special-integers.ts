import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-special-integers',
  title: 'Count Number of Special Integers',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `We call a positive integer **special** if all of its digits are **distinct**.

Given a **positive** integer \`n\`, return *the number of special integers that belong to the interval* \`[1, n]\`.`,
  constraints: [
    '1 <= n <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'n = 20',
      output: '19',
      explanation: 'All integers from 1 to 20 are special except 11. There are 19 special integers.',
    },
    {
      input: 'n = 5',
      output: '5',
      explanation: '1, 2, 3, 4, 5 are all special.',
    },
    {
      input: 'n = 135',
      output: '110',
      explanation: 'There are 110 special integers in [1, 135].',
    },
  ],
  hints: [
    'Count special integers by number of digits: 1-digit (9), 2-digit (9×9=81), etc. Sum for lengths < len(n).',
    'For numbers with the same number of digits as n, use digit DP: fix each digit position and count valid completions using permutations P(remaining_digits, remaining_positions).',
    'Track which digits are used via a bitmask or set; at each position choose a digit < n[pos] then count freely, or match n[pos] and continue.',
  ],
  functionName: 'countSpecialNumbers',
  params: ['n'],
  starterCode: {
    javascript: `function countSpecialNumbers(n) {
  const digits = String(n).split('').map(Number);
  const len = digits.length;

  // P(available, places) = number of permutations
  function perm(avail, places) {
    let result = 1;
    for (let i = 0; i < places; i++) result *= (avail - i);
    return result;
  }

  let count = 0;
  // Count all special numbers with fewer digits than n
  for (let d = 1; d < len; d++) {
    // d-digit numbers: first digit 1-9, rest from remaining 9 digits
    count += 9 * perm(9, d - 1);
  }

  // Count special numbers with same digit length as n, digit by digit
  const used = new Set();
  for (let i = 0; i < len; i++) {
    const lo = i === 0 ? 1 : 0;
    const hi = digits[i];
    // Count numbers where position i has a digit in [lo, hi-1] and rest freely
    for (let d = lo; d < hi; d++) {
      if (!used.has(d)) {
        count += perm(10 - i - 1, len - i - 1);
      }
    }
    // Tight: must use digits[i] at position i
    if (used.has(hi)) break;
    used.add(hi);
    if (i === len - 1) count++; // n itself is special
  }

  return count;
}`,
    typescript: `function countSpecialNumbers(n: number): number {
  const digits = String(n).split('').map(Number);
  const len = digits.length;

  function perm(avail: number, places: number): number {
    let result = 1;
    for (let i = 0; i < places; i++) result *= (avail - i);
    return result;
  }

  let count = 0;
  for (let d = 1; d < len; d++) {
    count += 9 * perm(9, d - 1);
  }

  const used = new Set<number>();
  for (let i = 0; i < len; i++) {
    const lo = i === 0 ? 1 : 0;
    const hi = digits[i]!;
    for (let d = lo; d < hi; d++) {
      if (!used.has(d)) {
        count += perm(10 - i - 1, len - i - 1);
      }
    }
    if (used.has(hi)) break;
    used.add(hi);
    if (i === len - 1) count++;
  }

  return count;
}`,
    python: `def countSpecialNumbers(n):
    digits = [int(d) for d in str(n)]
    length = len(digits)

    def perm(avail, places):
        result = 1
        for i in range(places):
            result *= (avail - i)
        return result

    count = 0
    for d in range(1, length):
        count += 9 * perm(9, d - 1)

    used = set()
    for i, hi in enumerate(digits):
        lo = 1 if i == 0 else 0
        for d in range(lo, hi):
            if d not in used:
                count += perm(10 - i - 1, length - i - 1)
        if hi in used:
            break
        used.add(hi)
        if i == length - 1:
            count += 1

    return count
`,
  },
  visibleTests: [
    { args: [20], expected: 19 },
    { args: [5], expected: 5 },
    { args: [135], expected: 110 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 10 },
    { args: [100], expected: 90 },
    { args: [1000], expected: 738 },
    { args: [2000000000], expected: 5974650 },
  ],
};
