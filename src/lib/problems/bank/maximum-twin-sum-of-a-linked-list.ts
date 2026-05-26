import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-twin-sum-of-a-linked-list',
  title: 'Maximum Twin Sum of a Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `In a linked list of size \`n\` (where \`n\` is **even**), the \`i\`th node (**0-indexed**) of the linked list is known as the **twin** of the \`(n-1-i)\`th node, for all \`0 <= i <= (n / 2) - 1\`.

- For example, if \`n = 4\`, node \`0\` is the twin of node \`3\`, and node \`1\` is the twin of node \`2\`.

The **twin sum** is defined as the **sum** of a node and its twin.

Given the head of a linked list (as an **array**) with an even number of nodes, return the **maximum twin sum** of the linked list.`,
  constraints: [
    '`2 <= head.length <= 100000`',
    '`head.length` is even.',
    '`1 <= head[i] <= 100000`',
  ],
  examples: [
    {
      input: 'head = [5,4,2,1]',
      output: '6',
      explanation: 'Twins: (5,1) sum=6, (4,2) sum=6. Max twin sum = 6.',
    },
    {
      input: 'head = [4,2,2,3]',
      output: '7',
      explanation: 'Twins: (4,3) sum=7, (2,2) sum=4. Max twin sum = 7.',
    },
  ],
  hints: [
    'Since the list is given as an array, use two pointers: one starting at index 0 and one at index `n-1`, moving toward each other, computing the sum at each step.',
    'The twin sum for index `i` is `head[i] + head[n - 1 - i]` for `0 <= i < n/2`.',
    '```js\nfunction pairSum(head) {\n  let max = 0;\n  const n = head.length;\n  for (let i = 0; i < n / 2; i++) {\n    max = Math.max(max, head[i] + head[n - 1 - i]);\n  }\n  return max;\n}\n```',
  ],
  functionName: 'pairSum',
  params: ['head'],
  starterCode: {
    javascript: `function pairSum(head) {

}`,
    python: `def pairSum(head: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[5, 4, 2, 1]], expected: 6 },
    { args: [[4, 2, 2, 3]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 100000]], expected: 100001 },
    { args: [[2, 1, 3, 2]], expected: 4 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 7 },
    { args: [[5, 1, 1, 5]], expected: 10 },
  ],
};
