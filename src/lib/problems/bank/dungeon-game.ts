import type { Problem } from '../types';

export const problem: Problem = {
  id: 'dungeon-game',
  title: 'Dungeon Game',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `The demons have captured a princess and imprisoned her in the **bottom-right room** of a \`m x n\` dungeon. A knight starts in the **top-left room** and moves only right or down.

The dungeon has rooms filled with values (positive or negative). The knight's health decreases by the absolute value of negative cells and increases by positive cells. The knight dies if his health **drops to 0 or below** at any point.

Return the **minimum initial health** the knight must start with to rescue the princess. The minimum health is always **at least 1**.`,
  constraints: [
    'm == dungeon.length',
    'n == dungeon[i].length',
    '1 <= m, n <= 200',
    '-1000 <= dungeon[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]',
      output: '7',
      explanation: 'The optimal path is right → right → down → down with minimum health 7.',
    },
    {
      input: 'dungeon = [[0]]',
      output: '1',
    },
  ],
  hints: [
    'Work backwards from the princess\'s cell. Define `dp[i][j]` = minimum health needed to enter cell `(i,j)` and reach the exit. At the princess\'s cell: `dp[m-1][n-1] = Math.max(1, 1 - dungeon[m-1][n-1])`.',
    'For interior cells, the knight chooses to go right or down. The minimum health at `(i,j)` is: `Math.max(1, Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j])`. The `Math.max(1,...)` ensures health never drops to 0.',
    '`const dp=Array.from({length:m+1},()=>new Array(n+1).fill(Infinity)); dp[m][n-1]=dp[m-1][n]=1; for(let i=m-1;i>=0;i--) for(let j=n-1;j>=0;j--) dp[i][j]=Math.max(1,Math.min(dp[i+1][j],dp[i][j+1])-dungeon[i][j]); return dp[0][0];`',
  ],
  functionName: 'calculateMinimumHP',
  params: ['dungeon'],
  starterCode: {
    javascript: 'function calculateMinimumHP(dungeon) {\n  \n}\n',
    python: 'def calculateMinimumHP(dungeon: list[list[int]]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]], expected: 7 },
    { args: [[[0]]], expected: 1 },
    { args: [[[1]]], expected: 1 },
    { args: [[[-1]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[-2, -3], [-5, 1]]], expected: 6 },
    { args: [[[1, -3, 3], [-3, 5, 1]]], expected: 3 },
    { args: [[[3, -20, 30], [-3, 4, 0]]], expected: 1 },
    { args: [[[0, 0], [1, 0]]], expected: 1 },
    { args: [[[-5]]], expected: 6 },
  ],
};
