import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-adjacent-elements-with-the-same-color',
  title: 'Number of Adjacent Elements With the Same Color',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There is a **0-indexed** array \`nums\` of length \`n\`. Initially, all elements are uncolored (has a value of \`0\`).

You are given a 2D integer array \`queries\` where \`queries[i] = [indexi, colori]\`.

For each query, you color the position \`indexi\` with the color \`colori\`.

After each query, you need to find the number of **adjacent elements** with the **same color**.

More formally, find the number of indices \`j\` such that \`0 <= j < n - 1\` and \`nums[j] == nums[j + 1]\` and \`nums[j] != 0\`.

Return an array \`answer\` of the same length as \`queries\` where \`answer[i]\` is the answer after the \`i\`th query.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= queries.length <= 10^5',
    '0 <= queries[i][0] < n',
    '1 <= queries[i][1] <= 10^5',
  ],
  examples: [
    {
      input: 'n = 5, queries = [[0,1],[1,1],[0,1],[1,0],[2,1],[2,2]]',
      output: '[0,1,1,0,0,0]',
      explanation:
        'After each query, track adjacent same-color pairs. Colors 0 (uncolored) do not form pairs.',
    },
    {
      input: 'n = 3, queries = [[0,1],[1,2],[2,2],[2,1]]',
      output: '[0,0,1,0]',
      explanation:
        'After setting index 2 to color 2 and index 1 to color 2, indices 1 and 2 match → 1 pair. After setting index 2 to 1, they differ → 0 pairs.',
    },
  ],
  hints: [
    'Maintain a running count of adjacent same-color pairs.',
    'When updating nums[index] from old_color to new_color, decrement count for any same-color pair involving old_color and increment for new_color.',
    'Check left neighbor (index-1) and right neighbor (index+1) before and after the update.',
  ],
  functionName: 'colorTheArray',
  params: ['n', 'queries'],
  starterCode: {
    javascript: `function colorTheArray(n, queries) {

}`,
    typescript: `function colorTheArray(n: number, queries: number[][]): number[] {

}`,
    python: `def colorTheArray(n, queries):
    pass`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 1], [0, 1], [1, 0], [2, 1], [2, 2]]], expected: [0, 1, 1, 0, 0, 0] },
    { args: [3, [[0, 1], [1, 2], [2, 2], [2, 1]]], expected: [0, 0, 1, 0] },
  ],
  hiddenTests: [
    { args: [1, [[0, 1]]], expected: [0] },
    { args: [2, [[0, 1], [1, 1]]], expected: [0, 1] },
    { args: [2, [[0, 1], [1, 1], [0, 2]]], expected: [0, 1, 0] },
    { args: [4, [[1, 2], [2, 2], [0, 2], [3, 2]]], expected: [0, 1, 2, 3] },
    { args: [3, [[0, 1], [2, 1], [1, 1]]], expected: [0, 0, 2] },
    { args: [3, [[1, 1], [0, 1], [2, 1], [1, 2]]], expected: [0, 1, 2, 0] },
  ],
};
