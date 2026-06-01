import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-reduce-an-integer-to-0',
  title: 'Minimum Operations to Reduce an Integer to 0',
  difficulty: 'medium',
  tags: ['math', 'bit-manipulation'],
  description: `You are given a positive integer \`n\`. In one operation, you can:

- If \`n\` is **even**, divide it by \`2\`.
- If \`n\` is **odd**, either add \`1\` or subtract \`1\`.

Return the minimum number of operations needed to reduce \`n\` to \`0\`.`,
  constraints: ['1 <= n <= 10^9'],
  examples: [
    {
      input: 'n = 7',
      output: '5',
      explanation: '7 → 8 → 4 → 2 → 1 → 0 (add 1, then divide three times, then subtract 1).',
    },
    {
      input: 'n = 6',
      output: '4',
      explanation: '6 → 3 → 2 → 1 → 0.',
    },
  ],
  hints: [
    'When n is odd, you must add or subtract 1 before dividing. Choose the option that results in fewer remaining 1-bits.',
    'If the last two bits are "01", subtracting 1 clears a bit immediately. If they are "11", adding 1 triggers a carry that clears multiple bits.',
    'Special case: n = 3 is the only odd number where subtracting is better despite having "11" bits.',
  ],
  functionName: 'minOperations',
  params: ['n'],
  starterCode: {
    javascript: `function minOperations(n) {
  let ops = 0;
  while (n > 0) {
    if (n % 2 === 0) n >>= 1;
    else if (n === 1 || (n & 3) === 1) n--;
    else n++;
    ops++;
  }
  return ops;
}`,
    typescript: `function minOperations(n: number): number {
  let ops = 0;
  while (n > 0) {
    if (n % 2 === 0) n >>= 1;
    else if (n === 1 || (n & 3) === 1) n--;
    else n++;
    ops++;
  }
  return ops;
}`,
    python: `def minOperations(n):
    ops = 0
    while n > 0:
        if n % 2 == 0: n >>= 1
        elif n == 1 or (n & 3) == 1: n -= 1
        else: n += 1
        ops += 1
    return ops`,
  },
  visibleTests: [
    { args: [7], expected: 5 },
    { args: [6], expected: 4 },
    { args: [1], expected: 1 },
    { args: [15], expected: 6 },
    { args: [100], expected: 9 },
  ],
  hiddenTests: [
    { args: [4], expected: 3 },
    { args: [10], expected: 5 },
    { args: [3], expected: 3 },
    { args: [12], expected: 5 },
    { args: [11], expected: 6 },
  ],
};
