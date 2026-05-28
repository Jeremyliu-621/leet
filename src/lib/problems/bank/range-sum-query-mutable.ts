import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query-mutable',
  title: 'Range Sum Query — Mutable',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`nums\`, handle multiple queries of the following types:

1. **Update**: Update the value of \`nums[index]\` to be \`val\`.
2. **SumRange**: Return the sum of the elements of \`nums\` between indices \`left\` and \`right\` **inclusive** (i.e. \`nums[left] + nums[left + 1] + ... + nums[right]\`).

Implement the \`NumArray\` class:
- \`NumArray(nums)\` — Initializes the object with the integer array \`nums\`.
- \`update(index, val)\` — Updates the value of \`nums[index]\` to be \`val\`.
- \`sumRange(left, right)\` — Returns the sum of the elements between indices \`left\` and \`right\` inclusive.

The input is given as an array of operations. Each operation is one of:
- \`["NumArray", [nums]]\`
- \`["update", [index, val]]\`
- \`["sumRange", [left, right]]\`

Return an array of results (null for constructor and update; sum for sumRange).`,
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-100 <= nums[i] <= 100',
    '0 <= index < nums.length',
    '-100 <= val <= 100',
    '0 <= left <= right < nums.length',
    'At most 3 * 10^4 calls will be made to update and sumRange',
  ],
  examples: [
    {
      input: 'ops = [["NumArray",[[1,3,5]]],["sumRange",[0,2]],["update",[1,2]],["sumRange",[0,2]]]',
      output: '[null,9,null,8]',
      explanation: 'Initial array [1,3,5]. sumRange(0,2)=1+3+5=9. After update(1,2): [1,2,5]. sumRange(0,2)=1+2+5=8.',
    },
  ],
  hints: [
    'Use a Binary Indexed Tree (BIT / Fenwick Tree). The BIT supports O(log n) point updates and O(log n) prefix sum queries.',
    'Build the BIT by calling update(i, nums[i]) for each element. For sumRange(l, r), return prefixSum(r) − prefixSum(l−1).',
    'BIT indexing: node i stores the sum of elements in a range ending at i. To get prefix sum, repeatedly subtract the lowest set bit (i &= i−1). To update, repeatedly add the lowest set bit (i += i & −i).',
  ],
  functionName: 'numArrayOps',
  params: ['ops'],
  starterCode: {
    javascript: `function numArrayOps(ops) {
  // ops is an array like [["NumArray",[nums]], ["update",[i,v]], ["sumRange",[l,r]], ...]
  // Return results array (null for NumArray/update, number for sumRange)

}`,
    python: `def numArrayOps(ops):
    # ops is a list like [["NumArray",[nums]], ["update",[i,v]], ["sumRange",[l,r]], ...]
    # Return results list (None for NumArray/update, number for sumRange)
    pass`,
  },
  visibleTests: [
    {
      args: [[['NumArray',[[1,3,5]]],['sumRange',[0,2]],['update',[1,2]],['sumRange',[0,2]]]],
      expected: [null,9,null,8],
    },
  ],
  hiddenTests: [
    {
      args: [[['NumArray',[[0]]],['sumRange',[0,0]],['update',[0,5]],['sumRange',[0,0]]]],
      expected: [null,0,null,5],
    },
    {
      args: [[['NumArray',[[1,2,3,4,5]]],['sumRange',[0,4]],['update',[2,10]],['sumRange',[1,3]]]],
      expected: [null,15,null,16],
    },
    {
      args: [[['NumArray',[[9,5,7,3]]],['sumRange',[1,3]],['update',[0,1]],['sumRange',[0,3]],['update',[3,2]],['sumRange',[0,3]]]],
      expected: [null,15,null,16,null,15],
    },
    {
      args: [[['NumArray',[[-1]]],['update',[0,1]],['sumRange',[0,0]]]],
      expected: [null,null,1],
    },
  ],
};
