import type { Problem } from '../types';

export const problem: Problem = {
  id: 'insertion-sort-list',
  title: 'Insertion Sort List',
  difficulty: 'medium',
  tags: ['linked-list'],
  description: `Given the \`head\` of a singly linked list, sort the list using **insertion sort**, and return the sorted list's head.

**Steps of the insertion sort algorithm:**

1. Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
3. It repeats until no input elements remain.`,
  constraints: [
    'The number of nodes in the list is in the range `[1, 5000]`.',
    '`-5000 <= Node.val <= 5000`',
  ],
  examples: [
    {
      input: 'head = [4,2,1,3]',
      output: '[1,2,3,4]',
    },
    {
      input: 'head = [-1,5,3,4,0]',
      output: '[-1,0,3,4,5]',
    },
  ],
  hints: [
    'Use a dummy head node pointing to the sorted portion. For each incoming node, scan from the dummy to find the correct insertion position (the first node whose next value exceeds the incoming value).',
    'When inserting node `curr` at position after `prev`: `curr.next = prev.next; prev.next = curr`. Detach `curr` from the unsorted portion before inserting.',
    'If the current node\'s value is ≥ the last sorted value, no scan is needed — append directly to save time on nearly-sorted input.',
  ],
  functionName: 'insertionSortList',
  params: ['head'],
  starterCode: {
    javascript: `function insertionSortList(head) {
  // head is provided as an array; return a sorted array
}`,
    typescript: "function insertionSortList(head: number[]): number[] {\n  // head is provided as an array; return a sorted array\n}",

    python: `def insertionSortList(head):
    # head is provided as a list; return a sorted list
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 1, 3]], expected: [1, 2, 3, 4] },
    { args: [[-1, 5, 3, 4, 0]], expected: [-1, 0, 3, 4, 5] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[5, 4, 3, 2, 1]], expected: [1, 2, 3, 4, 5] },
    { args: [[-5000, 5000]], expected: [-5000, 5000] },
    { args: [[3, 3, 3]], expected: [3, 3, 3] },
    { args: [[2, 1]], expected: [1, 2] },
    { args: [[-1, -1, -1]], expected: [-1, -1, -1] },
    { args: [[0, -1, 2, -2, 1]], expected: [-2, -1, 0, 1, 2] },
    { args: [[10, 5, 8, 3, 7]], expected: [3, 5, 7, 8, 10] },
  ],
};
