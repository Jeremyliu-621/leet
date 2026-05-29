import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-most-recently-used-queue',
  title: 'Design Most Recently Used Queue',
  difficulty: 'medium',
  tags: ['design', 'arrays'],
  description: `Design a queue-like data structure that moves the most recently used element to the end of the queue.

Implement the \`MRUQueue\` class:

- \`MRUQueue(n)\` — Constructs the \`MRUQueue\` with \`n\` elements: \`[1, 2, 3, ..., n]\`.
- \`fetch(k)\` — Moves the \`k\`th element **(1-indexed)** to the end of the queue and returns it.

**For testing purposes**, the function receives:
- \`n\`: the initial size (integer)
- \`ops\`: array of fetch operations, each an integer \`k\`

Return an array of results from all \`fetch\` calls (in order).`,
  constraints: [
    '1 <= n <= 2000',
    '1 <= k <= current queue size',
    'At most 2000 calls will be made to fetch.',
  ],
  examples: [
    {
      input: 'n = 8, ops = [3, 5, 2, 8]',
      output: '[3, 6, 2, 2]',
      explanation: `Initial: [1,2,3,4,5,6,7,8]
fetch(3) → returns 3, queue becomes [1,2,4,5,6,7,8,3]
fetch(5) → returns 6, queue becomes [1,2,4,5,7,8,3,6]
fetch(2) → returns 2, queue becomes [1,4,5,7,8,3,6,2]
fetch(8) → returns 2, queue becomes [1,4,5,7,8,3,6,2]`,
    },
  ],
  hints: [
    'Maintain the queue as an array. For fetch(k), remove element at index k-1, append it to the end, and return it.',
    'Splice at index k-1 runs in O(n) time. For n, ops <= 2000, this is acceptable.',
    'For a more efficient solution, consider a Fenwick Tree (BIT) to find the kth element in O(log n).',
  ],
  functionName: 'mruQueue',
  params: ['n', 'ops'],
  starterCode: {
    javascript: `function mruQueue(n, ops) {
  // Build initial queue [1..n], then process each fetch operation
}`,
    typescript: `function mruQueue(n: number, ops: number[]): number[] {
  // Build initial queue [1..n], then process each fetch operation
}`,
    python: `def mruQueue(n, ops):
    # Build initial queue [1..n], then process each fetch operation
    pass`,
  },
  visibleTests: [
    { args: [8, [3, 5, 2, 8]], expected: [3, 6, 2, 2] },
  ],
  hiddenTests: [
    { args: [1, [1]], expected: [1] },
    { args: [3, [1, 1, 1]], expected: [1, 2, 3] },
    { args: [5, [5, 4, 3, 2, 1]], expected: [5, 4, 3, 2, 1] },
    { args: [4, [2, 2, 2]], expected: [2, 3, 4] },
    { args: [6, [1, 6, 3]], expected: [1, 1, 4] },
  ],
};
