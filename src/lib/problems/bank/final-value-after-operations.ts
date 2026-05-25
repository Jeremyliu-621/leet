import type { Problem } from '../types';

export const problem: Problem = {
  id: 'final-value-after-operations',
  title: 'Final Value of Variable After Performing Operations',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `There is a programming language with only **four** operations and **one** variable \`X\`:

- \`++X\` and \`X++\` increment the value of \`X\` by 1.
- \`--X\` and \`X--\` decrement the value of \`X\` by 1.

Given an array of operations \`ops\`, where \`ops[i]\` is one of the four operations, return the **final value** of \`X\` after performing all the operations.`,
  constraints: [
    '1 <= ops.length <= 100',
    'ops[i] is one of "++X", "X++", "--X", or "X--".',
  ],
  examples: [
    {
      input: 'ops = ["--X","X++","X++"]',
      output: '1',
      explanation: 'Start 0: --X → -1, X++ → 0, X++ → 1.',
    },
    {
      input: 'ops = ["++X","++X","X++"]',
      output: '3',
      explanation: 'All three increment.',
    },
    {
      input: 'ops = ["X++","++X","--X","X--"]',
      output: '0',
      explanation: '+2 then -2 = 0.',
    },
  ],
  hints: [
    'Check if each operation contains "+" or "-".',
    'Count the increments minus the decrements.',
  ],
  functionName: 'finalValueAfterOperations',
  params: ['ops'],
  starterCode: {
    javascript: 'function finalValueAfterOperations(ops) {\n  \n}\n',
    python: 'def finalValueAfterOperations(ops):\n    pass\n',
  },
  visibleTests: [
    { args: [['--X', 'X++', 'X++']], expected: 1 },
    { args: [['++X', '++X', 'X++']], expected: 3 },
    { args: [['X++', '++X', '--X', 'X--']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['X++']], expected: 1 },
    { args: [['X--']], expected: -1 },
    { args: [['++X', '--X', '++X', '--X']], expected: 0 },
    { args: [['X++', 'X++', 'X++', '--X', '--X']], expected: 1 },
    { args: [['--X', '--X', '--X']], expected: -3 },
  ],
};
