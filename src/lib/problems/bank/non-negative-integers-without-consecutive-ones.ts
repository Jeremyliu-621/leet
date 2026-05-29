import type { Problem } from '../types';

export const problem: Problem = {
  id: 'non-negative-integers-without-consecutive-ones',
  title: 'Non-negative Integers without Consecutive Ones',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'math'],
  description: `Given a positive integer \`n\`, return the number of non-negative integers in the range \`[0, n]\` whose **binary representation does not contain consecutive ones**.

**Example:** n = \`5\` (binary \`101\`)

Valid integers: 0 (\`0\`), 1 (\`1\`), 2 (\`10\`), 4 (\`100\`), 5 (\`101\`) — all have no consecutive ones.
Invalid: 3 (\`11\`), 7 (\`111\`) — these are > n or contain consecutive 1s.

Answer: **5**.

**Key insight:** The count of valid binary strings of length \`k\` follows the Fibonacci sequence. Walk through the bits of \`n\` from the most significant bit, summing counts of valid numbers below each prefix.`,
  constraints: [
    '1 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '2',
      explanation: 'Valid: 0 (binary 0) and 1 (binary 1).',
    },
    {
      input: 'n = 5',
      output: '5',
      explanation: 'Valid in [0,5]: 0 (0), 1 (1), 2 (10), 4 (100), 5 (101). Invalid: 3 (11 has consecutive ones).',
    },
    {
      input: 'n = 10',
      output: '8',
      explanation: 'Valid in [0,10]: 0,1,2,4,5,8,9,10. All others (3,6,7) have consecutive ones.',
    },
  ],
  hints: [
    'Count valid binary strings of length k — the count follows the Fibonacci recurrence (a valid string of length k ending in 0 can extend any valid k-1 string; ending in 1 can only extend strings ending in 0).',
    'Walk the bits of n from most significant to least. Each time you see a 1-bit, you can contribute all valid numbers that share the same prefix up to (but not including) this bit, then continue if the previous bit was 0, or stop (the number itself already exceeds any valid completion).',
    'Maintain a dp array fib[i] = count of valid binary strings of length i. At each 1-bit at position i from the end, add fib[i] to the answer.',
  ],
  functionName: 'findIntegers',
  params: ['n'],
  starterCode: {
    javascript: `function findIntegers(n) {
  // Extract bits of n; use Fibonacci counts for valid binary strings.
}`,
    typescript: `function findIntegers(n: number): number {
  // Extract bits of n; use Fibonacci counts for valid binary strings.
}`,
    python: `def findIntegers(n):
    # Extract bits of n; use Fibonacci counts for valid binary strings.
    pass
`,
  },
  visibleTests: [
    { args: [1], expected: 2 },
    { args: [5], expected: 5 },
    { args: [10], expected: 8 },
  ],
  hiddenTests: [
    { args: [2], expected: 3 },
    { args: [7], expected: 5 },
    { args: [100], expected: 34 },
    { args: [1000000000], expected: 2178309 },
    { args: [3], expected: 3 },
    { args: [6], expected: 5 },
    { args: [21], expected: 13 },
  ],
};
