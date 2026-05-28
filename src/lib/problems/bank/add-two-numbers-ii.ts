import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-two-numbers-ii',
  title: 'Add Two Numbers II',
  difficulty: 'medium',
  tags: ['linked-list', 'stack', 'math'],
  description: `You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not have leading zeros, except for the number \`0\` itself.

**Approach:** Use two stacks to reverse the digits without reversing the lists. Pop from both stacks simultaneously, adding digits and the carry. Build the result list from the front.

> **Note:** Lists are given as arrays of digits (most-significant first). Return an array of digits (most-significant first).`,
  constraints: [
    'The number of nodes in each linked list is in the range [1, 100]',
    '0 <= Node.val <= 9',
    'It is guaranteed that the list represents a number that does not have leading zeros',
  ],
  examples: [
    {
      input: 'l1 = [7,2,4,3], l2 = [5,6,4]',
      output: '[7,8,0,7]',
      explanation: '7243 + 564 = 7807',
    },
    {
      input: 'l1 = [2,4,3], l2 = [5,6,4]',
      output: '[8,0,7]',
      explanation: '243 + 564 = 807',
    },
    {
      input: 'l1 = [0], l2 = [0]',
      output: '[0]',
    },
  ],
  hints: [
    'Push all digits from both lists onto separate stacks so you can process from least-significant to most-significant.',
    'Pop from both stacks simultaneously. Add the digits plus a carry. Build the result list by prepending new nodes (build from the back to the front).',
    'After the stacks are empty, if carry is still non-zero, prepend one more node with value 1.',
  ],
  functionName: 'addTwoNumbers',
  params: ['l1', 'l2'],
  starterCode: {
    javascript: 'function addTwoNumbers(l1, l2) {\n\n}\n',
    python: 'def addTwoNumbers(l1: list, l2: list) -> list:\n    pass\n',
  },
  visibleTests: [
    { args: [[7,2,4,3], [5,6,4]], expected: [7,8,0,7] },
    { args: [[2,4,3], [5,6,4]], expected: [8,0,7] },
    { args: [[0], [0]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[9,9,9,9,9], [9,9,9,9]], expected: [1,0,9,9,9,8] },
    { args: [[5], [5]], expected: [1,0] },
    { args: [[1], [9,9,9]], expected: [1,0,0,0] },
    { args: [[9,9,9,9,9,9,9], [9,9,9,9]], expected: [1,0,0,0,9,9,9,8] },
    { args: [[1,2,3], [4,5,6]], expected: [5,7,9] },
  ],
};
