import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-keys-keyboard',
  title: 'Two Keys Keyboard',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `There is only one character \`'A'\` on the screen of a notepad. You can perform one of two operations on each step:

- **Copy All**: Copy all the characters present on the screen (a partial copy is not allowed).
- **Paste**: Paste the characters that were last copied.

Given an integer \`n\`, return the **minimum** number of operations to get the character \`'A'\` exactly \`n\` times on the screen.

**Approach:** The optimal strategy corresponds to the prime factorization of \`n\`. For each prime factor \`p\`, you need \`p\` steps (1 Copy + (p−1) Pastes). The answer is the sum of all prime factors (with multiplicity).`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '3',
      explanation: 'Start with "A". Copy All (1 op). Paste (2 ops). Paste (3 ops). Now you have "AAA".',
    },
    {
      input: 'n = 1',
      output: '0',
      explanation: 'Already have 1 "A". No operations needed.',
    },
  ],
  hints: [
    'Think about what the optimal sequence of Copy/Paste looks like. Each "Copy All + k Pastes" multiplies the count by (k+1).',
    'The minimum total operations equals the sum of prime factors of n (with multiplicity).',
    '```js\nfunction minSteps(n) {\n  let res = 0;\n  for (let p = 2; p <= n; p++) {\n    while (n % p === 0) { res += p; n = Math.floor(n / p); }\n  }\n  return res;\n}\n```',
  ],
  functionName: 'minSteps',
  params: ['n'],
  starterCode: {
    javascript: `function minSteps(n) {
  // return minimum operations to get exactly n 'A's

}`,
    typescript: "function minSteps(n: number): number {\n  // return minimum operations to get exactly n 'A's\n\n}",

    python: `def minSteps(n: int) -> int:
    # return minimum operations to get exactly n 'A's
    pass
`,
  },
  visibleTests: [
    { args: [3], expected: 3 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [4], expected: 4 },
    { args: [6], expected: 5 },
    { args: [8], expected: 6 },
    { args: [9], expected: 6 },
    { args: [12], expected: 7 },
    { args: [24], expected: 9 },
  ],
};
