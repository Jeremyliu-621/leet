import type { Problem } from '../types';

export const problem: Problem = {
  id: 'final-value-of-variable-after-performing-operations',
  title: 'Final Value of Variable After Performing Operations',
  difficulty: 'easy',
  tags: ['simulation'],
  description: `There is a programming language with only **four** operations and **one** variable \`X\`:

- \`++X\` and \`X++\` increments the value of the variable \`X\` by \`1\`.
- \`--X\` and \`X--\` decrements the value of the variable \`X\` by \`1\`.

Initially, the value of \`X\` is \`0\`.

Given an array of strings \`operations\` containing a list of operations, return the **final value of** \`X\` **after performing all the operations**.`,
  constraints: [
    '`1 <= operations.length <= 100`',
    '`operations[i]` will be either `"++X"`, `"X++"`, `"--X"`, or `"X--"`.',
  ],
  examples: [
    {
      input: 'operations = ["--X","X++","X++"]',
      output: '1',
      explanation: '--X: X=−1. X++: X=0. X++: X=1.',
    },
    {
      input: 'operations = ["++X","++X","X++"]',
      output: '3',
      explanation: 'Three increments. X=3.',
    },
    {
      input: 'operations = ["X++","++X","--X","X--"]',
      output: '0',
      explanation: 'Two increments and two decrements cancel out.',
    },
  ],
  hints: [
    'Each operation contains either \'+\' or \'-\'. Check which character is present to determine increment or decrement.',
    'X += op.includes(\'+\') ? 1 : -1 works for all four variants since only increment operations contain \'+\'.',
    'Alternatively, count the number of \'++\' substrings minus the number of \'--\' substrings.',
  ],
  functionName: 'finalValueAfterOperations',
  params: ['operations'],
  starterCode: {
    javascript: `function finalValueAfterOperations(operations) {
  return operations.reduce((x, op) => x + (op.includes('+') ? 1 : -1), 0);
}`,
    typescript: `function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((x, op) => x + (op.includes('+') ? 1 : -1), 0);
}`,
    python: `def finalValueAfterOperations(operations):
    return sum(1 if '+' in op else -1 for op in operations)`,
  },
  visibleTests: [
    { args: [['--X', 'X++', 'X++']], expected: 1 },
    { args: [['++X', '++X', 'X++']], expected: 3 },
    { args: [['X++', '++X', '--X', 'X--']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['X++']], expected: 1 },
    { args: [['X--']], expected: -1 },
    { args: [['++X', '++X']], expected: 2 },
    { args: [['--X', '--X']], expected: -2 },
    { args: [['++X', 'X--', '++X']], expected: 1 },
  ],
};
