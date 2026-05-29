import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bit-prefix-sum-updates',
  title: 'BIT Prefix Sum with Point Updates',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `You are given an integer array \`nums\` (1-indexed) and a list of operations \`ops\` where each operation is one of:

- \`["update", i, delta]\` — add \`delta\` to \`nums[i]\` (1-indexed).
- \`["query", l, r]\` — return the sum of \`nums[l..r]\` (inclusive, 1-indexed).

Process all operations in order and return an array of results for each \`"query"\` operation.

**Use a Binary Indexed Tree (Fenwick Tree)** to achieve O(log n) per update and query.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '1 <= ops.length <= 10^4',
    'ops[i][0] is "update" or "query"',
    'For "update": 1 <= i <= nums.length, -10^4 <= delta <= 10^4',
    'For "query": 1 <= l <= r <= nums.length',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,7,9], ops = [["query",1,3],["update",2,4],["query",1,3]]',
      output: '[9,13]',
      explanation: 'First query: 1+3+5=9. After update(2,+4): nums[2] becomes 7. Second query: 1+7+5=13.',
    },
    {
      input: 'nums = [2,4,6], ops = [["query",1,3],["update",1,-2],["query",1,1]]',
      output: '[12,0]',
      explanation: 'First query: 2+4+6=12. Update index 1 by -2 → nums[1]=0. Second query: 0.',
    },
  ],
  hints: [
    'A BIT stores partial sums. `update(i, delta)`: add delta to all BIT positions covering index i (walk up: i += i & -i). `query(i)`: sum from 1 to i (walk down: i -= i & -i).',
    'Initialize the BIT by calling `update(i, nums[i])` for each index. For a range query [l, r], compute `prefixSum(r) - prefixSum(l-1)`.',
    'For "update" ops you need to store the current value to compute the delta for the BIT: `bit_update(i, new_val - old_val)` then update stored value.',
  ],
  functionName: 'bitPrefixSumUpdates',
  params: ['nums', 'ops'],
  starterCode: {
    javascript: `function bitPrefixSumUpdates(nums, ops) {
  // Build a Binary Indexed Tree over nums (1-indexed).
  // Process "update" and "query" ops; return results of "query" ops.
}`,
    typescript: `function bitPrefixSumUpdates(nums: number[], ops: (string | number)[][]): number[] {
  // Build a Binary Indexed Tree over nums (1-indexed).
  // Process "update" and "query" ops; return results of "query" ops.
}`,
    python: `def bitPrefixSumUpdates(nums, ops):
    # Build a Binary Indexed Tree over nums (1-indexed).
    # Process "update" and "query" ops; return results of "query" ops.
    pass`,
  },
  visibleTests: [
    { args: [[1,3,5,7,9], [['query',1,3],['update',2,4],['query',1,3]]], expected: [9,13] },
    { args: [[2,4,6], [['query',1,3],['update',1,-2],['query',1,1]]], expected: [12,0] },
  ],
  hiddenTests: [
    { args: [[1], [['query',1,1]]], expected: [1] },
    { args: [[1], [['update',1,5],['query',1,1]]], expected: [6] },
    { args: [[10,20,30,40,50], [['query',2,4],['update',3,10],['query',2,4]]], expected: [90,100] },
    { args: [[1,2,3,4,5], [['query',1,5],['update',3,-3],['query',1,5]]], expected: [15,12] },
    { args: [[5,5,5,5], [['query',1,4],['update',2,5],['query',2,3]]], expected: [20,15] },
    { args: [[0,0,0], [['update',1,3],['update',2,4],['update',3,5],['query',1,3]]], expected: [12] },
    { args: [[100], [['query',1,1],['update',1,-100],['query',1,1]]], expected: [100,0] },
    { args: [[1,2,3,4,5,6,7,8], [['query',1,8],['update',4,2],['query',3,6]]], expected: [36,20] },
  ],
};
