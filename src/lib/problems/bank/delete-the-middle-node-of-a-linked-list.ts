import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-the-middle-node-of-a-linked-list',
  title: 'Delete the Middle Node of a Linked List',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `You are given the head of a linked list. **Delete** the **middle node**, and return the head of the modified linked list.

The **middle node** of a linked list of size \`n\` is the \`⌊n / 2⌋\`th node (**0-indexed**).

- For \`n = 1\`, the middle is index 0.
- For \`n = 2\`, the middle is index 1.
- For \`n = 3\`, the middle is index 1.
- For \`n = 4\`, the middle is index 2.

In this problem, the linked list is given as an **array** and you should return an **array**.`,
  constraints: [
    '`1 <= head.length <= 100000`',
    '`1 <= head[i] <= 100000`',
  ],
  examples: [
    {
      input: 'head = [1,3,4,7,1,2,6]',
      output: '[1,3,4,1,2,6]',
      explanation: 'The list has 7 nodes. The middle is index ⌊7/2⌋ = 3 (value 7). Remove it.',
    },
    {
      input: 'head = [1,2,3,4]',
      output: '[1,2,4]',
      explanation: 'The list has 4 nodes. The middle is index ⌊4/2⌋ = 2 (value 3). Remove it.',
    },
  ],
  hints: [
    'Since the list is represented as an array, compute the middle index as `Math.floor(n / 2)` where `n` is the length.',
    'Use the slow/fast pointer technique on a real linked list, or simply splice out the middle index from the array.',
    '```js\nfunction deleteMiddle(head) {\n  const mid = Math.floor(head.length / 2);\n  return [...head.slice(0, mid), ...head.slice(mid + 1)];\n}\n```',
  ],
  functionName: 'deleteMiddle',
  params: ['head'],
  starterCode: {
    javascript: `function deleteMiddle(head) {
  const mid = Math.floor(head.length / 2);
  return [...head.slice(0, mid), ...head.slice(mid + 1)];
}`,
    typescript: `function deleteMiddle(head: number[]): number[] {
  const mid = Math.floor(head.length / 2);
  return [...head.slice(0, mid), ...head.slice(mid + 1)];
}`,
    python: `def deleteMiddle(head):
    mid = len(head) // 2
    return head[:mid] + head[mid + 1:]`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 7, 1, 2, 6]], expected: [1, 3, 4, 1, 2, 6] },
    { args: [[1, 2, 3, 4]], expected: [1, 2, 4] },
  ],
  hiddenTests: [
    { args: [[2, 1]], expected: [2] },
    { args: [[1]], expected: [] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 4, 5] },
    { args: [[1, 2, 3]], expected: [1, 3] },
  ],
};
