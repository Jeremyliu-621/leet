import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-greatest-value-in-each-row',
  title: 'Delete Greatest Value in Each Row',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an \`m x n\` matrix \`grid\` consisting of positive integers.

Perform the following operation until \`grid\` becomes empty:
- Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
- Add the maximum of the deleted elements to the answer.

Return the answer after performing the operations.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 50',
    '1 <= grid[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[1,2,4],[3,3,1]]',
      output: '8',
      explanation:
        'Sort each row: [[1,2,4],[1,3,3]]. Step 1: delete max from each row → {4,3}, add max(4,3)=4. Step 2: delete {2,3}, add 3. Step 3: delete {1,1}, add 1. Total = 4+3+1 = 8.',
    },
    {
      input: 'grid = [[10]]',
      output: '10',
      explanation: 'Single element; delete 10, total = 10.',
    },
  ],
  hints: [
    'Sort each row in ascending order.',
    'For each column (from right to left in sorted rows), take the maximum across all rows and add it to the answer.',
    `\`\`\`js
function deleteGreatestValue(grid) {
  for (const row of grid) row.sort((a,b)=>a-b);
  let ans = 0;
  for (let j = grid[0].length-1; j >= 0; j--) {
    let colMax = 0;
    for (const row of grid) colMax = Math.max(colMax, row[j]);
    ans += colMax;
  }
  return ans;
}\`\`\``,
  ],
  functionName: 'deleteGreatestValue',
  params: ['grid'],
  starterCode: {
    javascript: 'function deleteGreatestValue(grid) {\n  \n}\n',
    python: 'def deleteGreatestValue(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 2, 4], [3, 3, 1]]], expected: 8 },
    { args: [[[10]]], expected: 10 },
    { args: [[[7, 3], [2, 8]]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [1, 2]]], expected: 3 },
    { args: [[[1, 1], [1, 1]]], expected: 2 },
    { args: [[[3, 1, 2], [2, 3, 1]]], expected: 6 },
    { args: [[[1, 1, 1, 1]]], expected: 4 },
    { args: [[[5, 1], [3, 4], [2, 6]]], expected: 9 },
  ],
};
