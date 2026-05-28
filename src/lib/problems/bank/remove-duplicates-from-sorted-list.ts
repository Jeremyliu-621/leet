import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicates-from-sorted-list',
  title: 'Remove Duplicates from Sorted List',
  difficulty: 'easy',
  tags: ['linked-list'],
  description: `Given a sorted array representing the values of a linked list \`head\`, delete all **duplicate** values so each element appears only **once**. Return the result as a sorted array.

Because the list is sorted, all duplicates appear consecutively. You only need to keep the first occurrence of each value.`,
  constraints: [
    '0 <= head.length <= 300',
    '-100 <= head[i] <= 100',
    'head is sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'head = [1,1,2]',
      output: '[1,2]',
      explanation: 'The second 1 is a duplicate; remove it.',
    },
    {
      input: 'head = [1,1,2,3,3]',
      output: '[1,2,3]',
      explanation: 'Remove the extra 1 and extra 3.',
    },
  ],
  hints: [
    'Iterate through the list. For each node, skip its "next" pointer over all consecutive duplicates.',
    'Keep a pointer to the last unique node seen. If the next value equals the current, advance next; otherwise, link and advance.',
    'Since the input is sorted, duplicates are always adjacent — one pass suffices.',
  ],
  functionName: 'deleteDuplicates',
  params: ['head'],
  starterCode: {
    javascript: `function deleteDuplicates(head) {
  // head: sorted number array (represents linked list values)
  // Return array with duplicates removed
}`,
    typescript: "function deleteDuplicates(head: number[]): number[] {\n  // head: sorted number array (represents linked list values)\n  // Return array with duplicates removed\n}",

    python: `def deleteDuplicates(head: list[int]) -> list[int]:
    # Your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 2]], expected: [1, 2] },
    { args: [[1, 1, 2, 3, 3]], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 1, 1]], expected: [1] },
    { args: [[-3, -1, -1, 0, 0, 0, 2]], expected: [-3, -1, 0, 2] },
    { args: [[1, 1, 2, 2, 3, 3]], expected: [1, 2, 3] },
  ],
};
