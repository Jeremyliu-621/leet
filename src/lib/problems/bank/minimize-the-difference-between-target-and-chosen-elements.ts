import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-the-difference-between-target-and-chosen-elements',
  title: 'Minimize the Difference Between Target and Chosen Elements',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`m x n\` integer matrix \`mat\` and an integer \`target\`.

Choose one integer from **each row** in the matrix such that the **absolute difference** between \`target\` and the **sum** of the chosen elements is **minimized**.

Return the **minimum absolute difference**.`,
  constraints: [
    '`m == mat.length`',
    '`n == mat[i].length`',
    '`1 <= m, n <= 70`',
    '`1 <= mat[i][j] <= 70`',
    '`1 <= target <= 800`',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]], target = 13',
      output: '0',
      explanation: 'Choose 1, 5, and 7. The sum is 13 with absolute difference 0.',
    },
    {
      input: 'mat = [[1],[2],[3]], target = 100',
      output: '94',
      explanation: 'The best sum is 1+2+3=6, absolute difference is |6-100|=94.',
    },
    {
      input: 'mat = [[1,2,3]], target = 2',
      output: '0',
      explanation: 'Choose element 2. Sum is 2 with absolute difference 0.',
    },
  ],
  hints: [
    'Use dynamic programming: maintain a set of all reachable sums after processing each row.',
    'Start with the set {0}. For each row, create a new set by adding each row element to each existing sum.',
    'To keep the DP tractable, prune sums that can no longer beat the current best. Specifically, after computing new sums, keep only those ≤ min_sum_≥_target (the smallest sum that meets or exceeds target) to avoid redundant states.',
    'After all rows, the answer is min(|s - target|) over all reachable sums.',
  ],
  functionName: 'minimizeTheDifference',
  params: ['mat', 'target'],
  starterCode: {
    javascript: `/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
function minimizeTheDifference(mat, target) {

}`,
    typescript: `function minimizeTheDifference(mat: number[][], target: number): number {

}`,
    python: `def minimizeTheDifference(mat: list[list[int]], target: int) -> int:
    `,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 13], expected: 0 },
    { args: [[[1], [2], [3]], 100], expected: 94 },
    { args: [[[1, 2, 3]], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 10], [2, 5]], 8], expected: 2 },
    { args: [[[5, 10, 15], [1, 2, 3]], 12], expected: 0 },
    { args: [[[1, 2, 3], [1, 2, 3], [1, 2, 3]], 3], expected: 0 },
    { args: [[[100], [100], [100]], 50], expected: 250 },
    { args: [[[1]], 1], expected: 0 },
    { args: [[[2, 3], [1, 4]], 5], expected: 1 },
  ],
};
