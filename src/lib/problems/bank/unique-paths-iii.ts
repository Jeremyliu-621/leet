import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-paths-iii',
  title: 'Unique Paths III',
  difficulty: 'hard',
  tags: ['backtracking'],
  description: `You are given an \`m × n\` integer array \`grid\` where:
- \`grid[i][j] == 1\`: the starting square (exactly one)
- \`grid[i][j] == 2\`: the ending square (exactly one)
- \`grid[i][j] == 0\`: empty squares we can walk over
- \`grid[i][j] == -1\`: obstacles we cannot walk over

Return the number of **4-directional walks** from the starting square to the ending square that walk over every non-obstacle square **exactly once**.

**Example 1:**
\`\`\`
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
\`\`\`

**Constraints:**
- \`1 ≤ m, n ≤ 20\`
- \`1 ≤ m * n ≤ 20\`
- Exactly one start (1) and one end (2)`,
  constraints: [
    '1 ≤ m, n ≤ 20',
    '1 ≤ m * n ≤ 20',
    'Exactly one starting square (1) and one ending square (2)',
  ],
  examples: [
    { input: 'grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]', output: '2' },
    { input: 'grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]', output: '4' },
    { input: 'grid = [[1,0,2]]', output: '1' },
  ],
  hints: [
    'DFS/backtracking from the start. Count total non-obstacle cells upfront.',
    'At the end cell, check if remaining == 1 (only the end itself was left to visit).',
    'Mark visited by temporarily setting grid[r][c] = -1; restore on backtrack.',
  ],
  functionName: 'uniquePathsIII',
  params: ['grid'],
  starterCode: {
    javascript: 'function uniquePathsIII(grid) {\n\n}\n',
    typescript: "function uniquePathsIII(grid: number[][]): number {\n\n}",

    python: 'def uniquePathsIII(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]]], expected: 2 },
    { args: [[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]]], expected: 4 },
    { args: [[[1, 0, 2]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2]]], expected: 1 },
    { args: [[[1, -1], [2, 0]]], expected: 0 },
    { args: [[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]]], expected: 4 },
  ],
};
