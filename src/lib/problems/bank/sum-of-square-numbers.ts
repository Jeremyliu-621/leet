import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-square-numbers',
  title: 'Sum of Square Numbers',
  difficulty: 'easy',
  tags: ['math', 'binary-search'],
  description: `Given a non-negative integer \`c\`, decide whether there exist two integers \`a\` and \`b\` such that \`a² + b² = c\`.

**Examples:**
- \`c = 5\` → \`true\` (1² + 2² = 1 + 4 = 5)
- \`c = 3\` → \`false\` (no two non-negative integers square to 3)
- \`c = 0\` → \`true\` (0² + 0² = 0)
- \`c = 4\` → \`true\` (0² + 2² = 4)

**Constraints:**
- \`0 ≤ c ≤ 2³¹ - 1\`

**Hint:** Iterate \`a\` from \`0\` to \`√c\`. For each \`a\`, check whether \`c − a²\` is a perfect square (i.e., Math.floor(√(c − a²))² === c − a²). Use \`Math.round\` carefully for floating-point precision.`,
  constraints: [
    '0 ≤ c ≤ 2³¹ - 1',
  ],
  examples: [
    { input: 'c = 5', output: 'true', explanation: '1² + 2² = 1 + 4 = 5' },
    { input: 'c = 3', output: 'false' },
  ],
  hints: [
    'Iterate `a` from 0 to floor(sqrt(c)). For each value of `a`, you need to check whether `b² = c - a²` has an integer solution for `b`.',
    'To check if a value `v` is a perfect square, compute `b = Math.round(Math.sqrt(v))` and verify `b * b === v`. Be careful with floating-point: `Math.sqrt` can return slightly off results for large numbers.',
    'The loop runs only O(√c) iterations. Early return `true` as soon as you find a valid (a, b) pair.',
  ],
  functionName: 'judgeSquareSum',
  params: ['c'],
  starterCode: {
    javascript: `function judgeSquareSum(c) {
  // Return true if there exist a, b >= 0 with a*a + b*b === c
}`,
    python: `def judgeSquareSum(c: int) -> bool:
    # Return True if there exist a, b >= 0 with a*a + b*b == c
    pass`,
  },
  visibleTests: [
    { args: [5], expected: true },
    { args: [3], expected: false },
    { args: [4], expected: true },
    { args: [0], expected: true },
  ],
  hiddenTests: [
    { args: [1], expected: true },
    { args: [2], expected: true },
    { args: [6], expected: false },
    { args: [25], expected: true },
    { args: [100], expected: true },
    { args: [7], expected: false },
    { args: [8], expected: true },
    { args: [13], expected: true },
    { args: [2147483647], expected: false },
    { args: [999999937], expected: true },
  ],
};
