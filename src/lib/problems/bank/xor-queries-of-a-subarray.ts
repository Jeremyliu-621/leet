import type { Problem } from '../types';

export const problem: Problem = {
  id: 'xor-queries-of-a-subarray',
  title: 'XOR Queries of a Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an array \`arr\` of positive integers. You are also given the array \`queries\` where \`queries[i] = [left_i, right_i]\`.

For each query \`i\`, compute the **XOR** of elements \`arr[left_i], arr[left_i + 1], ..., arr[right_i]\` — i.e., the XOR of elements with indices from \`left_i\` to \`right_i\` (**inclusive**).

Return an array \`answer\` where \`answer[i]\` is the answer to the \`i\`th query.

**Key insight:** Build a prefix XOR array \`pre\` where \`pre[i] = arr[0] XOR arr[1] XOR ... XOR arr[i-1]\`. Then the XOR of \`arr[l..r]\` is \`pre[r+1] XOR pre[l]\`, since XOR-ing the same value twice cancels out.`,
  constraints: [
    '`1 <= arr.length, queries.length <= 3 * 10^4`',
    '`1 <= arr[i] <= 10^9`',
    '`queries[i].length == 2`',
    '`0 <= left_i <= right_i < arr.length`',
  ],
  examples: [
    {
      input: 'arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]',
      output: '[2,7,14,8]',
      explanation:
        'XOR(1,3)=2. XOR(3,4)=7. XOR(1,3,4,8)=14. XOR(8)=8.',
    },
    {
      input: 'arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]',
      output: '[8,0,4,4]',
      explanation:
        'XOR(2,10)=8. XOR(8,2,10)=0. XOR(4)=4. XOR(4,8,2,10)=4.',
    },
  ],
  hints: [
    'Precompute a prefix XOR array: `pre[0] = 0`, `pre[i] = pre[i-1] XOR arr[i-1]`.',
    'Then `XOR(arr[l..r]) = pre[r+1] XOR pre[l]`, answering each query in O(1).',
    'This works because XOR is its own inverse: `a XOR a = 0` and `a XOR 0 = a`.',
  ],
  functionName: 'xorQueries',
  params: ['arr', 'queries'],
  starterCode: {
    javascript: `function xorQueries(arr, queries) {

}`,
    typescript: `function xorQueries(arr: number[], queries: number[][]): number[] {

}`,
    python: `def xorQueries(arr, queries):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]], expected: [2, 7, 14, 8] },
    { args: [[4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]], expected: [8, 0, 4, 4] },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0]]], expected: [1] },
    { args: [[1, 2, 3], [[0, 2]]], expected: [0] },
    { args: [[5, 5], [[0, 0], [1, 1], [0, 1]]], expected: [5, 5, 0] },
    { args: [[1, 2, 4, 8, 16], [[0, 4], [1, 3], [2, 2]]], expected: [31, 14, 4] },
    { args: [[1000000000, 1000000000], [[0, 1]]], expected: [0] },
    { args: [[7, 3, 5], [[0, 0], [0, 1], [0, 2], [1, 2]]], expected: [7, 4, 1, 6] },
  ],
};
