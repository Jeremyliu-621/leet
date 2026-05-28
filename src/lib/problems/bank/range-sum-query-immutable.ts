import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query-immutable',
  title: 'Range Sum Query — Immutable',
  difficulty: 'easy',
  tags: ['arrays', 'dynamic-programming'],
  description: `Design a class that handles **multiple sum queries** on an integer array.

Implement the \`NumArray\` class:
- \`NumArray(nums)\` — initializes the object with the integer array \`nums\`.
- \`sumRange(left, right)\` — returns the **sum** of elements in \`nums\` between indices \`left\` and \`right\` **inclusive**.

> **Note:** The runner passes an \`ops\` array of \`["method", [args]]\` pairs. Return an array of results — \`null\` for the constructor, a number for each \`sumRange\` call.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^5 <= nums[i] <= 10^5',
    '0 <= left <= right < nums.length',
    'At most 10^4 calls to sumRange.',
  ],
  examples: [
    {
      input: 'ops = [["NumArray",[[-2,0,3,-5,2,-1]]],["sumRange",[0,2]],["sumRange",[2,5]],["sumRange",[0,5]]]',
      output: '[null,1,-1,-3]',
      explanation: 'sumRange(0,2) = -2+0+3 = 1. sumRange(2,5) = 3-5+2-1 = -1. sumRange(0,5) = -2+0+3-5+2-1 = -3.',
    },
  ],
  hints: [
    'Naively recomputing the sum for each query is O(n) — unacceptably slow for many queries. Think about pre-processing.',
    'Build a prefix sum array where `prefix[i] = nums[0] + nums[1] + ... + nums[i-1]`. Then `sumRange(l, r) = prefix[r+1] - prefix[l]`.',
    'Initialize `prefix` of length n+1 with zeros. Fill with `for (let i = 0; i < n; i++) prefix[i+1] = prefix[i] + nums[i]`. Then queries are O(1).',
  ],
  functionName: 'numArrayOps',
  params: ['ops'],
  starterCode: {
    javascript: `function numArrayOps(ops) {
  // ops: [["NumArray",[nums]], ["sumRange",[left,right]], ...]
  // Return results array: null for NumArray, number for sumRange

}`,
    python: `def numArrayOps(ops):
    # ops: [["NumArray",[nums]], ["sumRange",[left,right]], ...]
    # Return results list: None for NumArray, number for sumRange
    pass`,
  },
  visibleTests: [
    {
      args: [[['NumArray', [[-2, 0, 3, -5, 2, -1]]], ['sumRange', [0, 2]], ['sumRange', [2, 5]], ['sumRange', [0, 5]]]],
      expected: [null, 1, -1, -3],
    },
  ],
  hiddenTests: [
    {
      args: [[['NumArray', [[1]]], ['sumRange', [0, 0]]]],
      expected: [null, 1],
    },
    {
      args: [[['NumArray', [[1, 2, 3, 4, 5]]], ['sumRange', [0, 4]], ['sumRange', [1, 3]], ['sumRange', [2, 2]]]],
      expected: [null, 15, 9, 3],
    },
    {
      args: [[['NumArray', [[-5, 10, -3, 7]]], ['sumRange', [0, 3]], ['sumRange', [1, 2]], ['sumRange', [0, 1]]]],
      expected: [null, 9, 7, 5],
    },
    {
      args: [[['NumArray', [[0, 0, 0]]], ['sumRange', [0, 2]], ['sumRange', [1, 1]]]],
      expected: [null, 0, 0],
    },
    {
      args: [[['NumArray', [[100]]], ['sumRange', [0, 0]], ['sumRange', [0, 0]]]],
      expected: [null, 100, 100],
    },
  ],
};
