import type { Problem } from '../types';

export const problem: Problem = {
  id: 'final-value-operations',
  title: 'Final Value of Variable After Performing Operations',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `There is a programming language with only four operations and one variable \`X\`:

- \`++X\` and \`X++\` increments the value of the variable \`X\` by 1.
- \`--X\` and \`X--\` decrements the value of the variable \`X\` by 1.

Initially, the value of \`X\` is \`0\`.

Given an array of strings \`operations\` containing a list of operations, return the **final value of** \`X\` after performing all the operations.`,
  constraints: [
    '1 <= operations.length <= 100',
    'operations[i] will be either "++X", "X++", "--X", or "X--".',
  ],
  examples: [
    { input: 'operations = ["--X","X++","X++"]', output: '1', explanation: '-1+1+1=1.' },
    { input: 'operations = ["++X","++X","X++"]', output: '3' },
    { input: 'operations = ["X++","++X","--X","X--"]', output: '0' },
  ],
  hints: [
    'Level 1: For each operation, check if it contains "+" (increment) or "-" (decrement).',
    'Level 2: Count "++" occurrences minus "--" occurrences.',
    'Level 3: return operations.reduce((x,op)=>op.includes("++")?x+1:x-1,0);',
  ],
  functionName: 'finalValueAfterOperations',
  params: ['operations'],
  starterCode: {
    javascript: 'function finalValueAfterOperations(operations) {\n  // your code here\n}\n',
    python: 'def finalValueAfterOperations(operations):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['--X', 'X++', 'X++']], expected: 1 },
    { args: [['++X', '++X', 'X++']], expected: 3 },
    { args: [['X++', '++X', '--X', 'X--']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['++X']], expected: 1 },
    { args: [['--X']], expected: -1 },
    { args: [['X++', 'X++', 'X++', 'X--']], expected: 2 },
  ],
};
