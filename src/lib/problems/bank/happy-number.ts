import type { Problem } from '../types';

export const problem: Problem = {
  id: 'happy-number',
  title: 'Happy Number',
  difficulty: 'medium',
  tags: ['math', 'hash-map'],
  description: `A **happy number** is defined by the following process:

1. Start with any positive integer \`n\`.
2. Replace \`n\` with the **sum of the squares of its digits**.
3. Repeat until the number equals **1** (happy) or enters a **cycle** that does not include 1 (not happy).

Return \`true\` if \`n\` is a happy number, otherwise return \`false\`.

**Key insight:** All unhappy numbers eventually cycle through **4**. You can detect a cycle with a Set, or simply stop when you reach 1 or 4.`,
  constraints: [
    '1 <= n <= 10^6',
  ],
  examples: [
    {
      input: 'n = 19',
      output: 'true',
      explanation: '1²+9²=82 → 8²+2²=68 → 6²+8²=100 → 1²+0²+0²=1. Reached 1, so 19 is happy.',
    },
    {
      input: 'n = 2',
      output: 'false',
      explanation: '2→4→16→37→58→89→145→42→20→4 (cycle). Never reaches 1.',
    },
    {
      input: 'n = 1',
      output: 'true',
      explanation: '1 is already 1, so it is trivially happy.',
    },
  ],
  hints: [
    'Simulate the process. The challenge is detecting an infinite cycle. Use a Set to track numbers you have seen before — if you see a repeat, it will never reach 1.',
    'Compute the sum of squares of digits with a helper: extract each digit using modulo and integer division. Repeat until the result is 1 (return true) or appears in your seen-set (return false).',
    '```js\nfunction digitSquareSum(n) {\n  let sum = 0;\n  while (n > 0) { const d = n % 10; sum += d * d; n = Math.floor(n / 10); }\n  return sum;\n}\nfunction isHappyNumber(n) {\n  const seen = new Set();\n  while (n !== 1) {\n    if (seen.has(n)) return false;\n    seen.add(n);\n    n = digitSquareSum(n);\n  }\n  return true;\n}\n```',
  ],
  functionName: 'isHappyNumber',
  params: ['n'],
  starterCode: {
    javascript: 'function isHappyNumber(n) {\n  // your code here\n}\n',
    typescript: "function isHappyNumber(n: number): boolean {\n  // your code here\n}",

    python: 'def isHappyNumber(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [19], expected: true },
    { args: [2], expected: false },
    { args: [1], expected: true },
  ],
  hiddenTests: [
    { args: [7], expected: true },
    { args: [4], expected: false },
    { args: [10], expected: true },
    { args: [100], expected: true },
    { args: [3], expected: false },
    { args: [13], expected: true },
    { args: [116], expected: false },
  ],
};
