import type { Problem } from '../types';

export const problem: Problem = {
  id: 'equal-row-column-pairs',
  title: 'Equal Row and Column Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** \`n x n\` integer matrix \`grid\`, return the number of pairs \`(r, c)\` such that row \`r\` and column \`c\` are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 200',
    '1 <= grid[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[3,2,1],[1,7,6],[2,7,7]]',
      output: '1',
      explanation: 'Row 2 [2,7,7] equals column 1 [2,7,7]. 1 pair.',
    },
    {
      input: 'grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]',
      output: '3',
      explanation: 'Row 0 == col 0, row 2 == col 2, row 3 == col 2. 3 pairs.',
    },
  ],
  hints: [
    'Level 1: Serialize each row as a string key and count frequencies. Then for each column, serialize it the same way and add the row count for that key.',
    'Level 2: Build rowCount map: key = row.join(",") → count. For each column j, build colKey = grid[0][j]+","+grid[1][j]+... and add rowCount.get(colKey) ?? 0 to the answer.',
    "Level 3: const rowMap=new Map();for(const row of grid){const k=row.join(',');rowMap.set(k,(rowMap.get(k)??0)+1);}let ans=0;const n=grid.length;for(let j=0;j<n;j++){const k=grid.map(r=>r[j]).join(',');ans+=rowMap.get(k)??0;}return ans;",
  ],
  functionName: 'equalPairs',
  params: ['grid'],
  starterCode: {
    javascript: 'function equalPairs(grid) {\n  // your code here\n}\n',
    typescript: "function equalPairs(grid: number[][]): number {\n  // your code here\n}",

    python: 'def equalPairs(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[3, 2, 1], [1, 7, 6], [2, 7, 7]]], expected: 1 },
    { args: [[[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 1], [1, 1]]], expected: 4 },
    { args: [[[1, 2], [3, 4]]], expected: 0 },
    { args: [[[1, 0, 0], [0, 0, 1], [0, 1, 0]]], expected: 3 },
    { args: [[[1, 2], [2, 1]]], expected: 2 },
  ],
};
