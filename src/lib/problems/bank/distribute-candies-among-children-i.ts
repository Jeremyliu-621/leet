import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distribute-candies-among-children-i',
  title: 'Distribute Candies Among Children I',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `You are given two positive integers \`n\` and \`limit\`.

Return the number of ways to distribute \`n\` candies among **3** children such that no child gets more than \`limit\` candies.`,
  constraints: [
    '1 <= n <= 50',
    '1 <= limit <= 50',
  ],
  examples: [
    {
      input: 'n = 5, limit = 2',
      output: '3',
      explanation: 'There are 3 ways to distribute 5 candies with each child getting at most 2: (1,2,2), (2,1,2), (2,2,1).',
    },
    {
      input: 'n = 3, limit = 3',
      output: '10',
      explanation: 'There are 10 ways to distribute 3 candies with each child getting at most 3.',
    },
  ],
  hints: [
    'Brute-force over all possibilities: let child 1 get i candies and child 2 get j candies, then child 3 gets n − i − j.',
    'Check that n − i − j is in [0, limit].',
    '```js\nlet count = 0;\nfor (let i = 0; i <= Math.min(n, limit); i++) {\n  for (let j = 0; j <= Math.min(n - i, limit); j++) {\n    const k = n - i - j;\n    if (k >= 0 && k <= limit) count++;\n  }\n}\nreturn count;\n```',
  ],
  functionName: 'distributeCandies',
  params: ['n', 'limit'],
  starterCode: {
    javascript: `function distributeCandies(n, limit) {\n  \n}`,
    typescript: `function distributeCandies(n: number, limit: number): number {\n  \n}`,
    python: `def distributeCandies(n: int, limit: int) -> int:\n    `,
  },
  visibleTests: [
    { args: [5, 2], expected: 3 },
    { args: [3, 3], expected: 10 },
    { args: [1, 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [10, 5], expected: 21 },
    { args: [0, 50], expected: 1 },
    { args: [50, 50], expected: 1326 },
    { args: [6, 2], expected: 1 },
    { args: [2, 1], expected: 3 },
    { args: [4, 4], expected: 15 },
  ],
};
