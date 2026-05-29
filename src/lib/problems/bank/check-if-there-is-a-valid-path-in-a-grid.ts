import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-there-is-a-valid-path-in-a-grid',
  title: 'Check if There Is a Valid Path in a Grid',
  difficulty: 'medium',
  tags: ['graph', 'arrays', 'union-find'],
  description: `You have a grid of size \`m x n\`. Each cell of the grid represents a street. The street of \`grid[i][j]\` can be:

- \`1\`: connecting the **left** cell and the **right** cell.
- \`2\`: connecting the **upper** cell and the **lower** cell.
- \`3\`: connecting the **left** cell and the **lower** cell.
- \`4\`: connecting the **right** cell and the **lower** cell.
- \`5\`: connecting the **left** cell and the **upper** cell.
- \`6\`: connecting the **right** cell and the **upper** cell.

Return \`true\` *if there is a valid path in the grid starting from the upper left cell (0, 0) to the lower right cell (m - 1, n - 1)*.`,
  constraints: [
    '`m == grid.length`',
    '`n == grid[i].length`',
    '`1 <= m, n <= 300`',
    '`1 <= grid[i][j] <= 6`',
  ],
  examples: [
    {
      input: 'grid = [[2,4,3],[6,5,2]]',
      output: 'true',
      explanation: 'There is a valid path from (0,0) to (1,2).',
    },
    {
      input: 'grid = [[1,2,1],[1,2,1]]',
      output: 'false',
      explanation: 'No valid path exists.',
    },
    {
      input: 'grid = [[1,1,2]]',
      output: 'false',
      explanation: 'Street 2 at end connects up/down but there\'s no cell below or above to connect to.',
    },
  ],
  hints: [
    'For each street type, define which directions it connects. Use BFS from (0,0).',
    'When moving from cell (r,c) to neighbor (nr,nc), check both that the current cell connects toward the neighbor AND the neighbor connects back.',
    '```js\nfunction hasValidPath(grid) {\n  const m=grid.length,n=grid[0].length;\n  const conn=[[],[[0,-1,[1,4,6]],[0,1,[1,3,5]]],[[-1,0,[2,3,4]],[1,0,[2,5,6]]],\n    [[0,-1,[1,4,6]],[1,0,[2,5,6]]],[[0,1,[1,3,5]],[1,0,[2,5,6]]],\n    [[0,-1,[1,4,6]],[-1,0,[2,3,4]]],[[0,1,[1,3,5]],[-1,0,[2,3,4]]]];\n  const vis=Array.from({length:m},()=>new Array(n).fill(false));\n  const q=[[0,0]];vis[0][0]=true;\n  while(q.length){const[r,c]=q.shift();\n    if(r===m-1&&c===n-1)return true;\n    for(const[dr,dc,valid]of conn[grid[r][c]]){\n      const nr=r+dr,nc=c+dc;\n      if(nr<0||nr>=m||nc<0||nc>=n||vis[nr][nc]||!valid.includes(grid[nr][nc]))continue;\n      vis[nr][nc]=true;q.push([nr,nc]);}}\n  return vis[m-1][n-1];}\n```',
  ],
  functionName: 'hasValidPath',
  params: ['grid'],
  starterCode: {
    javascript: `function hasValidPath(grid) {

}`,
    typescript: `function hasValidPath(grid: number[][]): boolean {

}`,
    python: `def hasValidPath(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 4, 3], [6, 5, 2]]], expected: true },
    { args: [[[1, 2, 1], [1, 2, 1]]], expected: false },
    { args: [[[1, 1, 2]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[4]]], expected: true },
    { args: [[[1]]], expected: true },
    { args: [[[1, 1]]], expected: true },
    { args: [[[2], [2]]], expected: true },
    { args: [[[3, 4], [6, 5]]], expected: true },
    { args: [[[6, 3], [4, 5]]], expected: true },
    { args: [[[4, 1, 3]]], expected: true },
    { args: [[[4, 3], [3, 4]]], expected: false },
  ],
};
