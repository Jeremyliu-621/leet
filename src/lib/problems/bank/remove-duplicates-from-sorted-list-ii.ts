import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicates-from-sorted-list-ii',
  title: 'Remove Duplicates from Sorted List II',
  difficulty: 'medium',
  tags: ['linked-list', 'two-pointers'],
  description: `Given a sorted array representing the values of a linked list \`head\`, delete all elements that have **duplicate numbers**, leaving only the values that appear exactly once in the original list. Return the result as a sorted array.`,
  constraints: [
    '0 <= head.length <= 300',
    '-100 <= head[i] <= 100',
    'head is sorted in ascending order',
  ],
  examples: [
    {
      input: 'head = [1,2,3,3,4,4,5]',
      output: '[1,2,5]',
      explanation: '3 and 4 each appear more than once, so they are removed.',
    },
    {
      input: 'head = [1,1,1,2,3]',
      output: '[2,3]',
      explanation: '1 appears three times and is removed entirely.',
    },
  ],
  hints: [
    'Count the occurrences of each value (one pass through the sorted list).',
    'Keep only the values whose count is exactly 1.',
    'Alternatively, use two pointers: skip runs of duplicate values, only emit a value if the run length is 1.',
  ],
  functionName: 'deleteDuplicatesII',
  params: ['head'],
  starterCode: {
    javascript: `function deleteDuplicatesII(head) {

}`,
    typescript: "function deleteDuplicatesII(head: number[]): number[] {\n\n}",

    python: `def deleteDuplicatesII(head):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 3, 4, 4, 5]], expected: [1, 2, 5] },
    { args: [[1, 1, 1, 2, 3]], expected: [2, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 1]], expected: [] },
    { args: [[1, 2, 2, 3]], expected: [1, 3] },
    { args: [[1, 1, 2, 2, 3, 3]], expected: [] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
};
