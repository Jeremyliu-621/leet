import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-remoteness-of-all-cells',
  title: 'Sum of Remoteness of All Cells',
  difficulty: 'medium',
  tags: ['arrays', 'graph'],
  description: `You are given a **0-indexed** matrix \`grid\` of size \`n x n\`, where each cell is either a positive integer or \`-1\` representing a blocked cell.

You can move from a cell \`(r, c)\` to another cell \`(r', c')\` if they are adjacent (share an edge) and neither is \`-1\`.

The **remoteness** of a non-blocked cell \`C\` is the sum of all non-blocked cells that are **not reachable** from \`C\`.

Return the **sum of remoteness** of all non-blocked cells.`,
  constraints: [
    '1 <= n <= 300',
    '1 <= grid[i][j] <= 10^6 or grid[i][j] == -1',
  ],
  examples: [
    {
      input: 'grid = [[-1,1,-1],[5,-1,4],[-1,3,-1]]',
      output: '39',
      explanation: 'Three isolated components: {1}, {5}, {4}, {3} wait — actually {1},{5},{4},{3} are all isolated. total=13. remoteness(1)=12, remoteness(5)=8, remoteness(4)=9, remoteness(3)=10. Sum=39.',
    },
    {
      input: 'grid = [[-1,3,4],[-1,-1,-1],[3,-1,-1]]',
      output: '13',
      explanation: 'Component {3,4} (sum 7) and isolated {3} (sum 3). total=10. remoteness of each cell in {3,4}: 3 each (2×3=6). remoteness of {3}: 7. Total=13.',
    },
  ],
  hints: [
    'Level 1: Find all connected components using BFS or DFS, ignoring -1 cells. Each component has a sum. Total = sum of all non-blocked cells.',
    'Level 2: For a cell in a component with sum S, its remoteness is total - S (all cells not in its component).',
    'Level 3: For each component of size sz and sum S, it contributes sz × (total - S) to the answer.',
  ],
  functionName: 'sumRemoteness',
  params: ['grid'],
  starterCode: {
    javascript: `function sumRemoteness(grid) {

}`,
    typescript: `function sumRemoteness(grid: number[][]): number {

}`,
    python: `def sumRemoteness(grid: list[list[int]]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[[-1,1,-1],[5,-1,4],[-1,3,-1]]], expected: 39 },
    { args: [[[-1,3,4],[-1,-1,-1],[3,-1,-1]]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[-1,2,-1],[-1,-1,-1],[-1,3,-1]]], expected: 5 },
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: 0 },
    { args: [[[1,-1,2],[-1,-1,-1],[3,-1,4]]], expected: 30 },
    { args: [[[-1,-1,-1],[-1,5,-1],[-1,-1,-1]]], expected: 0 },
    { args: [[[-1,2,-1],[2,-1,2],[-1,2,-1]]], expected: 24 },
  ],
};
