import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zigzag-iterator',
  title: 'Zigzag Iterator',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given two arrays \`v1\` and \`v2\`, design an iterator that alternates elements from each array.

When one array is exhausted, continue yielding from the remaining array.

Return a flat array of all elements in zigzag (interleaved) order.

**Example:**

\`v1 = [1,2]\`, \`v2 = [3,4,5,6]\`

Zigzag order: \`1, 3, 2, 4, 5, 6\`

Explanation: alternate between v1 and v2. After v1 runs out at index 2, continue with the remaining elements of v2.`,
  constraints: [
    '0 <= v1.length, v2.length <= 1000',
    '-2^31 <= v1[i], v2[i] <= 2^31 - 1',
    'At least one of v1, v2 is non-empty.',
  ],
  examples: [
    {
      input: 'v1 = [1,2], v2 = [3,4,5,6]',
      output: '[1,3,2,4,5,6]',
      explanation: 'Alternate: 1 (v1), 3 (v2), 2 (v1), 4 (v2), then v1 exhausted, continue: 5, 6.',
    },
    {
      input: 'v1 = [1], v2 = [2,3,4]',
      output: '[1,2,3,4]',
      explanation: 'After yielding 1 from v1, v1 is empty; continue with v2.',
    },
    {
      input: 'v1 = [], v2 = [1,2,3]',
      output: '[1,2,3]',
      explanation: 'v1 is empty, so output is just v2.',
    },
  ],
  functionName: 'zigzagIterator',
  params: ['v1', 'v2'],
  starterCode: {
    javascript: `function zigzagIterator(v1, v2) {
  // Return a flat array of all elements from v1 and v2 in zigzag (alternating) order.

}`,
    python: `def zigzagIterator(v1: list, v2: list) -> list:
    # Return a flat list of all elements from v1 and v2 in zigzag order.
    pass
`,
  },
  visibleTests: [
    { args: [[1,2], [3,4,5,6]], expected: [1,3,2,4,5,6] },
    { args: [[1], [2,3,4]], expected: [1,2,3,4] },
    { args: [[], [1,2,3]], expected: [1,2,3] },
  ],
  hiddenTests: [
    { args: [[1,2,3], []], expected: [1,2,3] },
    { args: [[1,2,3], [4,5,6]], expected: [1,4,2,5,3,6] },
    { args: [[1], [2]], expected: [1,2] },
    { args: [[], []], expected: [] },
    { args: [[10,20,30,40], [1,2]], expected: [10,1,20,2,30,40] },
    { args: [[-1,-2], [0,1,2,3]], expected: [-1,0,-2,1,2,3] },
  ],
  hints: [
    'Use two pointers, one for each array, and alternate which you advance.',
    'After advancing one pointer, switch to the other. When a pointer reaches the end of its array, stop alternating and flush the remaining elements from the other.',
    'Think of it as a queue of iterators: enqueue v1 and v2, then on each step dequeue one, yield its next element, and if it has more, re-enqueue it.',
  ],
};
