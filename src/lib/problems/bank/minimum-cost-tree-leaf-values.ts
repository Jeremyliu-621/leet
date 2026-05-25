import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-tree-leaf-values',
  title: 'Minimum Cost Tree From Leaf Values',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'stack'],
  description: `Given an array \`arr\` of positive integers, consider all binary trees such that:

- Each node has either \`0\` or \`2\` children.
- The values of \`arr\` correspond to the values of each **leaf** in an in-order traversal of the tree.
- The value of each non-leaf node is equal to the **product of the largest leaf value in its left and right subtrees**.

Return the **smallest possible sum** of the values of each non-leaf node.`,
  constraints: ['2 <= arr.length <= 40', '1 <= arr[i] <= 15', 'It is guaranteed that the answer fits into a 32-bit signed integer (i.e., it is less than 2^31 - 1).'],
  examples: [
    {
      input: 'arr = [6,2,4]',
      output: '32',
      explanation: 'Best: combine 2 and 4 (internal node = 2*4=8), giving root = 6*4=24. Total = 8+24=32.',
    },
    { input: 'arr = [4,11]', output: '44', explanation: 'Only one way: 4*11=44.' },
  ],
  hints: [
    'Greedy: at each step, find the smallest element. Its contribution is minimized by pairing it with the smaller of its two neighbors.',
    'Remove the smallest element after pairing. Repeat until only one element remains.',
    'Alternatively, use a monotonic stack: maintain a decreasing stack; when a larger element arrives, pop elements to form pairs.',
  ],
  functionName: 'mctFromLeafValues',
  params: ['arr'],
  starterCode: {
    javascript: 'function mctFromLeafValues(arr) {\n\n}\n',
    python: 'def mctFromLeafValues(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[6, 2, 4]], expected: 32 },
    { args: [[4, 11]], expected: 44 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[5, 3, 7]], expected: 50 },
    { args: [[6, 2, 4, 3]], expected: 44 },
    { args: [[15, 13, 5, 3, 15]], expected: 500 },
  ],
};
