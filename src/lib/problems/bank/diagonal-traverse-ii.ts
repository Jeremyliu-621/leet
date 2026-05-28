import type { Problem } from '../types';

export const problem: Problem = {
  id: 'diagonal-traverse-ii',
  title: 'Diagonal Traverse II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a 2D integer array \`nums\` where rows may have **different lengths**, return all elements of \`nums\` in **diagonal order**.

Elements on the same anti-diagonal share the same sum \`row + col\`. Within each diagonal, visit elements from **bottom row to top row** (larger row index first).

**Example:**

\`\`\`
nums = [[1,2,3],
        [4,5,6],
        [7,8,9]]
\`\`\`

Diagonal 0 (r+c=0): (0,0)=1
Diagonal 1 (r+c=1): (1,0)=4, (0,1)=2
Diagonal 2 (r+c=2): (2,0)=7, (1,1)=5, (0,2)=3
Diagonal 3 (r+c=3): (2,1)=8, (1,2)=6
Diagonal 4 (r+c=4): (2,2)=9

Output: \`[1,4,2,7,5,3,8,6,9]\``,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i].length <= 10^5',
    '1 <= sum of nums[i].length <= 10^5',
    '1 <= nums[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[1,4,2,7,5,3,8,6,9]',
      explanation: 'Elements grouped by anti-diagonal (r+c), visited from bottom row to top.',
    },
    {
      input: 'nums = [[1,2],[3],[4,5,6]]',
      output: '[1,3,2,4,5,6]',
    },
    {
      input: 'nums = [[1,2,3,4,5]]',
      output: '[1,2,3,4,5]',
      explanation: 'Single row: each element is its own diagonal.',
    },
  ],
  hints: [
    'Group elements by their anti-diagonal index d = row + col. Use an array of arrays indexed by d.',
    'Iterate rows in order. For each row r, iterate cols 0..nums[r].length-1. Append nums[r][c] to bucket[r+c].',
    'Since we process rows from top to bottom within each bucket, reversing each bucket gives bottom-to-top order. Then flatten all buckets in order.',
  ],
  functionName: 'findDiagonalOrder',
  params: ['nums'],
  starterCode: {
    javascript: `function findDiagonalOrder(nums) {

}`,
    typescript: "function findDiagonalOrder(nums: number[][]): number[] {\n\n}",

    python: `def findDiagonalOrder(nums):
    pass
`,
  },
  visibleTests: [
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [1,4,2,7,5,3,8,6,9] },
    { args: [[[1,2],[3],[4,5,6]]], expected: [1,3,2,4,5,6] },
    { args: [[[1,2,3,4,5]]], expected: [1,2,3,4,5] },
  ],
  hiddenTests: [
    { args: [[[1],[2],[3]]], expected: [1,2,3] },
    { args: [[[1,2],[3,4]]], expected: [1,3,2,4] },
    { args: [[[1],[2,3],[4,5,6]]], expected: [1,2,4,3,5,6] },
    { args: [[[1,2,3],[4],[5,6]]], expected: [1,4,2,5,3,6] },
    { args: [[[1]]], expected: [1] },
    { args: [[[1,2],[3,4],[5,6]]], expected: [1,3,2,5,4,6] },
  ],
};
