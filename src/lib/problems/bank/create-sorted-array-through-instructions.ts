import type { Problem } from '../types';

export const problem: Problem = {
  id: 'create-sorted-array-through-instructions',
  title: 'Create Sorted Array through Instructions',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`instructions\`, you are asked to create a sorted array from the elements in \`instructions\`. You start with an empty container \`nums\`. For each element from left to right in \`instructions\`, insert it into \`nums\`. The **cost** of each insertion is the **minimum** of:
- The number of elements currently in \`nums\` that are **strictly less** than \`instructions[i]\`.
- The number of elements currently in \`nums\` that are **strictly greater** than \`instructions[i]\`.

Return the **total cost** to insert all elements from \`instructions\` into \`nums\`. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= instructions.length <= 10^5',
    '1 <= instructions[i] <= 10^5',
  ],
  examples: [
    {
      input: 'instructions = [1,5,6,4,1,2,7]',
      output: '3',
      explanation: 'Costs: 0+0+0+1+0+2+0=3. Insert 4 into [1,5,6]: min(less=1, greater=2)=1. Insert 2 into [1,1,4,5,6]: min(less=2, greater=3)=2. All others have cost 0.',
    },
    {
      input: 'instructions = [1,2,3,6,5,4]',
      output: '3',
      explanation: 'Costs: 0+0+0+0+1+2=3.',
    },
    {
      input: 'instructions = [1,3,3,3,2,4,2,1,2]',
      output: '4',
    },
  ],
  hints: [
    'Use a Binary Indexed Tree (BIT/Fenwick Tree) over the value range [1, max_val]. For each instruction value `v`, query the BIT for count of elements < v (prefix sum up to v-1) and count of elements > v (total − prefix sum up to v).',
    'After computing the cost `min(less, greater)`, update the BIT at position `v` with +1 to record inserting `v`.',
    'The BIT supports O(log max_val) updates and queries. Initialize with all zeros. prefixSum(x) gives count of elements ≤ x in the current array.',
  ],
  functionName: 'createSortedArray',
  params: ['instructions'],
  starterCode: {
    javascript: 'function createSortedArray(instructions) {\n  \n}\n',
    python: 'def createSortedArray(instructions):\n    pass\n',
  },
  visibleTests: [
    { args: [[1,5,6,4,1,2,7]], expected: 3 },
    { args: [[1,2,3,6,5,4]], expected: 3 },
    { args: [[1,3,3,3,2,4,2,1,2]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1,1]], expected: 0 },
    { args: [[1,2]], expected: 0 },
    { args: [[2,1]], expected: 0 },
    { args: [[3,1,2]], expected: 1 },
    { args: [[1,2,3,4,5]], expected: 0 },
    { args: [[5,4,3,2,1]], expected: 0 },
  ],
};
