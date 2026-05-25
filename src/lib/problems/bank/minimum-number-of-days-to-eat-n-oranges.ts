import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-days-to-eat-n-oranges',
  title: 'Minimum Number of Days to Eat N Oranges',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There are \`n\` oranges in the kitchen and you decided to eat some oranges each day as follows:

- Eat **one** orange.
- If the number of remaining oranges (\`n\`) is **divisible by 2**, you can eat **n/2** oranges.
- If the number of remaining oranges (\`n\`) is **divisible by 3**, you can eat **2*(n/3)** oranges.

Return the minimum number of days to eat all \`n\` oranges.

**Memoized DP:** \`f(n) = 1 + min(n%2 + f(n//2), n%3 + f(n//3))\`. The key insight: to reach a state divisible by 2 or 3, first eat the remainder (1 or 2 oranges). Since \`n\` grows exponentially in reverse, this has only \`O(log^2 n)\` unique states.`,
  constraints: [
    '1 <= n <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '4',
      explanation: 'Day 1: eat 1 → 9. Day 2: eat 6 (2*9/3) → 3. Day 3: eat 2 (2*3/3) → 1. Day 4: eat 1 → 0.',
    },
    {
      input: 'n = 6',
      output: '3',
      explanation: 'Day 1: eat 4 (2*6/3) → 2. Day 2: eat 1 (2/2) → 1. Day 3: eat 1 → 0.',
    },
  ],
  hints: [
    'Use memoized recursion: f(n) = 1 + min(n%2 + f(n//2), n%3 + f(n//3)).',
    'Base cases: f(0) = 0, f(1) = 1.',
    'The number of unique states is O(log^2 n) since n quickly halves or thirds.',
  ],
  functionName: 'minDays',
  params: ['n'],
  starterCode: {
    javascript: 'function minDays(n) {\n\n}\n',
    python: 'def minDays(n: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [6], expected: 3 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [56], expected: 6 },
    { args: [1000000000], expected: 31 },
  ],
};
