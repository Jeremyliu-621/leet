import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-a-number-container-system',
  title: 'Design a Number Container System',
  difficulty: 'medium',
  tags: ['hash-map', 'heap'],
  description: `Design a number container system that can:

- **Insert** or **Replace** a number at a given index.
- **Return** the smallest index that stores a given number.

Implement \`NumberContainers\`:

- \`NumberContainers()\` — initializes the system.
- \`void change(int index, int number)\` — stores \`number\` at \`index\`. Replaces any existing value.
- \`int find(int number)\` — returns the smallest index currently storing \`number\`, or \`-1\` if none.

The problem is presented in the **operations/args** format used for class-based designs. The function receives an array of operation names and a parallel array of argument lists, and returns an array of return values (\`null\` for void operations).`,
  constraints: [
    '1 <= index, number <= 10^9',
    'At most 10^5 calls in total to change and find.',
  ],
  examples: [
    {
      input:
        'ops = ["NumberContainers","find","change","change","change","change","find","change","find"]\n' +
        'args = [[],[10],[2,10],[1,10],[3,5],[5,10],[10],[1,10],[10]]',
      output: '[null,-1,null,null,null,null,1,null,1]',
      explanation:
        'After the four changes, indices {1,2,5} hold 10 and index 3 holds 5. find(10) returns 1 (smallest). change(1,10) is a no-op since index 1 already holds 10.',
    },
  ],
  hints: [
    'Keep a map from index → current number.',
    'Keep a map from number → sorted list of indices (min at front).',
    'On change: remove the index from the old number\'s list, then insert it into the new number\'s list (maintaining sorted order).',
    'On find: return the first element of the sorted list, or -1 if empty.',
  ],
  functionName: 'numberContainers',
  params: ['operations', 'args'],
  starterCode: {
    javascript: 'function numberContainers(operations, args) {\n  \n}\n',
    python: 'def numberContainers(operations, args):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['NumberContainers', 'find', 'change', 'change', 'change', 'change', 'find', 'change', 'find'],
        [[], [10], [2, 10], [1, 10], [3, 5], [5, 10], [10], [1, 10], [10]],
      ],
      expected: [null, -1, null, null, null, null, 1, null, 1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'change', 'find', 'find'],
        [[], [1, 2], [3, 2], [2], [10]],
      ],
      expected: [null, null, null, 1, -1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'change', 'change', 'find', 'change', 'find'],
        [[], [1, 1], [2, 2], [3, 1], [1], [2, 1], [1]],
      ],
      expected: [null, null, null, null, 1, null, 1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['NumberContainers', 'find'],
        [[], [5]],
      ],
      expected: [null, -1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'find', 'change', 'find'],
        [[], [1, 5], [5], [1, 7], [5]],
      ],
      expected: [null, null, 1, null, -1],
    },
    {
      args: [
        ['NumberContainers', 'change', 'change', 'change', 'change', 'find', 'find', 'find'],
        [[], [5, 10], [2, 10], [8, 10], [3, 10], [10], [5], [20]],
      ],
      expected: [null, null, null, null, null, 2, -1, -1],
    },
  ],
};
