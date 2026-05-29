import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-tree-from-leaf-values',
  title: 'Minimum Cost Tree From Leaf Values',
  difficulty: 'medium',
  tags: ['arrays', 'stack', 'dynamic-programming'],
  description: `Given an array \`arr\` of positive integers, consider all binary trees such that:
- Each node has either \`0\` or \`2\` children.
- The values of \`arr\` correspond to the values of each **leaf** in an **in-order** traversal of the tree.
- The value of each **non-leaf** node is equal to the **product** of the largest leaf value in its left and right subtree, respectively.

Among all possible binary trees considered, return the **smallest possible sum** of the values of each non-leaf node. It is guaranteed this sum fits into a **32-bit** integer.`,
  constraints: [
    '`2 <= arr.length <= 40`',
    '`1 <= arr[i] <= 15`',
    'It is guaranteed that the answer fits into a **32-bit** signed integer (i.e., it is less than `2^31 - 1`).',
  ],
  examples: [
    {
      input: 'arr = [6,2,4]',
      output: '32',
      explanation: 'Optimal: one non-leaf for [2,4] with value 2×4=8, root for [6,{2,4}] with value 6×4=24. Total=32.',
    },
    {
      input: 'arr = [4,11]',
      output: '44',
      explanation: 'Only one non-leaf (root) with value 4×11=44.',
    },
  ],
  hints: [
    'Greedy with a monotone stack: maintain a decreasing stack of leaf values.',
    'When the current value is greater than or equal to the stack top, pop the top (call it mid). Its merge cost is mid × min(stack.top(), current).',
    'After processing all elements, merge remaining stack pairs right-to-left: cost += stack.pop() × new_top.',
  ],
  functionName: 'mctFromLeafValues',
  params: ['arr'],
  starterCode: {
    javascript: `function mctFromLeafValues(arr) {

}`,
    typescript: `function mctFromLeafValues(arr: number[]): number {

}`,
    python: `def mctFromLeafValues(arr):
    pass`,
  },
  visibleTests: [
    { args: [[6, 2, 4]], expected: 32 },
    { args: [[4, 11]], expected: 44 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 1, 5]], expected: 18 },
    { args: [[2, 1, 3, 1, 2]], expected: 16 },
    { args: [[1, 2, 3, 4]], expected: 20 },
    { args: [[5, 4, 3, 2, 1]], expected: 40 },
  ],
};
