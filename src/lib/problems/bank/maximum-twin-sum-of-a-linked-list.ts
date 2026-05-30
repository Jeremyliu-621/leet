import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-twin-sum-of-a-linked-list',
  title: 'Maximum Twin Sum of a Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `In a linked list of size \`n\` (**even**), the \`i\`-th node (**0-indexed**) of the linked list is known as the **twin** of the \`(n-1-i)\`-th node.

- For example, if \`n = 4\`, then node 0 is the twin of node 3, and node 1 is the twin of node 2.

The **twin sum** is defined as the sum of a node and its twin.

Given the \`head\` of a linked list with even length, return the **maximum twin sum** of the linked list.

In this problem, the linked list is represented as an **array**.`,
  constraints: [
    '\`2 <= head.length <= 10^5\`',
    '\`head.length\` is even',
    '\`1 <= head[i] <= 10^5\`',
  ],
  examples: [
    {
      input: 'head = [5,4,2,1]',
      output: '6',
      explanation: 'Twins: (5,1) sum=6 and (4,2) sum=6. Max twin sum = 6.',
    },
    {
      input: 'head = [4,2,2,3]',
      output: '7',
      explanation: 'Twins: (4,3) sum=7 and (2,2) sum=4. Max twin sum = 7.',
    },
    {
      input: 'head = [1,100000]',
      output: '100001',
      explanation: 'Only one pair: (1, 100000), sum = 100001.',
    },
  ],
  hints: [
    'Since the list is given as an array, the twin of index \`i\` is index \`n - 1 - i\`.',
    'Compute \`head[i] + head[n-1-i]\` for \`i\` in \`[0, n/2)\` and return the maximum.',
    'For a true linked list: find the middle with slow/fast pointers, reverse the second half, then walk both halves together.',
  ],
  functionName: 'pairSum',
  params: ['head'],
  starterCode: {
    javascript: `function pairSum(head) {\n\n}`,
    typescript: `function pairSum(head: number[]): number {\n\n}`,
    python: `def pairSum(head):\n    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 2, 1]], expected: 6 },
    { args: [[4, 2, 2, 3]], expected: 7 },
    { args: [[1, 100000]], expected: 100001 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 5 },
    { args: [[5, 5, 5, 5]], expected: 10 },
    { args: [[100000, 1, 1, 100000]], expected: 200000 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 7 },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 13 },
  ],
};
