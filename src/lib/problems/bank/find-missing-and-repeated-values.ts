import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-missing-and-repeated-values',
  title: 'Find Missing and Repeated Values',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** 2D integer matrix \`grid\` of size \`n × n\` with values in the range \`[1, n²]\`. Each integer appears exactly once except \`a\`, which appears **twice**, and \`b\`, which is **missing**. The task is to find the repeating integer \`a\` and the missing integer \`b\`.

Return a **0-indexed** integer array \`ans\` of size \`2\` where \`ans[0]\` equals \`a\` and \`ans[1]\` equals \`b\`.`,
  constraints: [
    '2 <= n == grid.length == grid[i].length <= 50',
    '1 <= grid[i][j] <= n²',
    'For all (i, j₁), (i, j₂) where j₁ != j₂: grid[i][j₁] != grid[i][j₂]',
  ],
  examples: [
    {
      input: 'grid = [[1,3],[2,2]]',
      output: '[2,4]',
      explanation: '2 appears twice. 4 is missing.',
    },
    {
      input: 'grid = [[9,1,7],[8,9,2],[3,4,6]]',
      output: '[9,5]',
      explanation: '9 appears twice. 5 is missing.',
    },
  ],
  hints: [
    'Level 1: Flatten the grid and count occurrences of each number from 1 to n².',
    'Level 2: The number with count 2 is a; the number with count 0 is b.',
    'Level 3: const flat=grid.flat();const n2=flat.length;const cnt=new Array(n2+1).fill(0);for(const v of flat)cnt[v]++;let a=0,b=0;for(let i=1;i<=n2;i++){if(cnt[i]===2)a=i;if(cnt[i]===0)b=i;}return[a,b];',
  ],
  functionName: 'findMissingAndRepeatedValues',
  params: ['grid'],
  starterCode: {
    javascript: 'function findMissingAndRepeatedValues(grid) {\n  // your code here\n}\n',
    typescript: "function findMissingAndRepeatedValues(grid: number[][]): number[] {\n  // your code here\n}",

    python: 'def findMissingAndRepeatedValues(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 3], [2, 2]]], expected: [2, 4] },
    { args: [[[9, 1, 7], [8, 9, 2], [3, 4, 6]]], expected: [9, 5] },
  ],
  hiddenTests: [
    { args: [[[1, 1], [3, 4]]], expected: [1, 2] },
    { args: [[[2, 3], [1, 3]]], expected: [3, 4] },
    { args: [[[1, 2], [2, 3]]], expected: [2, 4] },
    { args: [[[2, 2], [3, 4]]], expected: [2, 1] },
    { args: [[[4, 3], [4, 1]]], expected: [4, 2] },
  ],
};
