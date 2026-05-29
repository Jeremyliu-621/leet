import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-linked-list',
  title: 'Design Linked List',
  difficulty: 'medium',
  tags: ['design', 'linked-list', 'arrays'],
  description: `Design your implementation of the linked list. You can choose to use a singly or doubly linked list.

A node in a singly linked list should have two attributes: \`val\` and \`next\`. For a doubly linked list, you need one more attribute \`prev\`.

Implement the \`MyLinkedList\` class:
- \`MyLinkedList()\` Initializes the linked list.
- \`int get(int index)\` Get the value of the \`index\`-th node (0-indexed). Return \`-1\` if invalid.
- \`void addAtHead(int val)\` Add a node with value \`val\` before the head.
- \`void addAtTail(int val)\` Append a node with value \`val\` at the tail.
- \`void addAtIndex(int index, int val)\` Add a node before the \`index\`-th node. If index == length, append. If index > length, do nothing. If index <= 0, prepend.
- \`void deleteAtIndex(int index)\` Delete the \`index\`-th node. No-op if invalid.

**Input format:** A list of operations as \`["addAtHead", "addAtTail", "get", "deleteAtIndex", ...]\` and a corresponding list of argument arrays. Return the outputs of all \`get\` calls (non-get operations return \`null\`).`,
  constraints: [
    '0 <= index, val <= 1000',
    'Please do not use the built-in LinkedList library',
    'At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex',
  ],
  examples: [
    {
      input: 'ops = ["addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"], args = [[1],[3],[1,2],[1],[1],[1]]',
      output: '[null,null,null,2,null,3]',
      explanation: 'add 1 at head → [1]; add 3 at tail → [1,3]; insert 2 at index 1 → [1,2,3]; get(1)=2; delete index 1 → [1,3]; get(1)=3.',
    },
  ],
  hints: [
    'Use a singly linked list with a sentinel head node to simplify edge cases. Track the list size.',
    'For `get(i)` and `deleteAtIndex(i)`, traverse to the (i-1)-th node from the sentinel head. For `addAtIndex(i, val)`, also traverse to position i-1.',
    'Always validate that indices are within bounds before operating.',
  ],
  functionName: 'simulateLinkedList',
  params: ['ops', 'args'],
  starterCode: {
    javascript:
      'function simulateLinkedList(ops, args) {\n  // Implement MyLinkedList here, then simulate\n}\n',
    typescript: "function simulateLinkedList(ops: string[], args: number[][]): (null | number)[] {\n  // Implement MyLinkedList here, then simulate\n}",

    python:
      'def simulateLinkedList(ops: list, args: list) -> list:\n    # Implement MyLinkedList here, then simulate\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['addAtHead','addAtTail','addAtIndex','get','deleteAtIndex','get'],
        [[1],[3],[1,2],[1],[1],[1]],
      ],
      expected: [null,null,null,2,null,3],
    },
  ],
  hiddenTests: [
    {
      args: [['addAtHead','get','addAtTail','get','addAtIndex','get'], [[1],[0],[2],[1],[1,3],[1]]],
      expected: [null,1,null,2,null,3],
    },
    {
      args: [['addAtHead','deleteAtIndex','get'], [[1],[0],[0]]],
      expected: [null,null,-1],
    },
    {
      args: [['addAtHead','addAtHead','addAtHead','addAtIndex','deleteAtIndex','addAtTail','get'],
             [[7],[2],[1],[3,0],[2],[5],[3]]],
      expected: [null,null,null,null,null,null,5],
    },
  ],
};
