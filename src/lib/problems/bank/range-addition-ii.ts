import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-addition-ii',
  title: 'Range Addition II',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an \`m x n\` matrix \`M\` initialized with all **zeros** and an array of operations \`ops\`, where \`ops[i] = [a_i, b_i]\` means \`M[r][c]\` should be incremented by **1** for all \`0 <= r < a_i\` and \`0 <= c < b_i\`.

Count and return the number of **maximum integers** in the matrix after performing all operations.

**Constraints:**
- \`1 ≤ m, n ≤ 4 × 10^4\`
- \`0 ≤ ops.length ≤ 10^4\`
- \`ops[i].length == 2\`
- \`1 ≤ a_i ≤ m\`, \`1 ≤ b_i ≤ n\``,
  examples: [
    {
      input: 'm = 3, n = 3, ops = [[2,2],[3,3]]',
      output: '4',
      explanation: 'The maximum value is 2, achieved in the top-left 2×2 = 4 cells.',
    },
    {
      input: 'm = 3, n = 3, ops = []',
      output: '9',
      explanation: 'No operations: all cells remain 0 (the maximum), so all 9 cells count.',
    },
  ],
  constraints: ['Every operation increments from (0,0). The cells with maximum value are the intersection of all rectangles: min(a_i) × min(b_i).'],
  hints: [
    'Every operation covers the top-left rectangle. The cells incremented by ALL operations are exactly those in the intersection of every [a_i × b_i] rectangle.',
    'The intersection is a [min(a_i) × min(b_i)] rectangle.',
    'If ops is empty, every cell has value 0 (the max), so return m*n.',
  ],
  params: ['m', 'n', 'ops'],
  starterCode: {
    javascript: `function maxCount(m, n, ops) {

}`,
    typescript: `function maxCount(m: number, n: number, ops: number[][]): number {

}`,
    python: `def maxCount(m: int, n: int, ops: list[list[int]]) -> int:
    pass`,
  },
  functionName: 'maxCount',
  visibleTests: [
    { args: [3, 3, [[2, 2], [3, 3]]], expected: 4 },
    { args: [3, 3, []], expected: 9 },
    { args: [2, 5, [[1, 4]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [1, 1, [[1, 1]]], expected: 1 },
    { args: [5, 4, [[2, 3], [3, 2], [1, 4], [4, 2]]], expected: 2 },
    { args: [3, 3, [[2, 2]]], expected: 4 },
    { args: [3, 3, [[1, 1], [2, 2], [3, 3]]], expected: 1 },
    { args: [4, 4, [[3, 3], [3, 3]]], expected: 9 },
    { args: [2, 2, [[2, 2], [2, 1]]], expected: 2 },
  ],
};
