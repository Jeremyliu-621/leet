import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-distinct-colors-among-the-balls',
  title: 'Find the Number of Distinct Colors Among the Balls',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `There are \`limit + 1\` balls labeled \`0\` to \`limit\`, all initially **uncolored**.

You are given a 2D array \`queries\` where \`queries[i] = [x, y]\`: paint ball \`x\` with color \`y\`. After each query, append to the result array the **number of distinct colors** among all currently painted balls.

Return the result array. Uncolored balls do not count toward any color.`,
  constraints: [
    '1 <= limit <= 10^9',
    '1 <= queries.length <= 10^5',
    '0 <= queries[i][0] <= limit',
    '1 <= queries[i][1] <= 10^9',
  ],
  examples: [
    {
      input: 'limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]',
      output: '[1,2,2,3]',
      explanation: 'After [1,4]: ball 1 is color 4 → 1 distinct. After [2,5]: ball 2 is color 5 → 2. After [1,3]: ball 1 recolored to 3, color 4 disappears → 2. After [3,4]: ball 3 is color 4 → 3.',
    },
    {
      input: 'limit = 4, queries = [[0,1],[1,1],[2,1],[2,2]]',
      output: '[1,1,1,2]',
      explanation: 'Balls 0, 1, 2 all get color 1 (still 1 distinct). Then ball 2 is recolored to 2 → 2 distinct.',
    },
  ],
  hints: [
    'Use a hash map `ballColor` to track the current color of each ball, and a hash map `colorCount` to track how many balls currently have each color.',
    'When painting ball x with color y: if x already has a different color c, decrement colorCount[c]. If it drops to 0, remove c from colorCount and decrement the distinct count.',
    'Then set ballColor[x] = y and increment colorCount[y]. If colorCount[y] was 0 before, increment distinct. Skip the update if ball x already has color y.',
  ],
  functionName: 'queryResults',
  params: ['limit', 'queries'],
  starterCode: {
    javascript: `function queryResults(limit, queries) {
  const ballColor = new Map();   // ball → current color
  const colorCount = new Map();  // color → number of balls with this color
  let distinct = 0;
  // Process each query and record distinct count after each.
}`,
    typescript: "function queryResults(limit: number, queries: number[][]): number[] {\n  const ballColor = new Map();   // ball → current color\n  const colorCount = new Map();  // color → number of balls with this color\n  let distinct = 0;\n  // Process each query and record distinct count after each.\n}",

    python: `def queryResults(limit, queries):
    ball_color = {}   # ball -> current color
    color_count = {}  # color -> number of balls with this color
    distinct = 0
    result = []
    # Process each query and record distinct count after each.
    return result`,
  },
  visibleTests: [
    { args: [4, [[1, 4], [2, 5], [1, 3], [3, 4]]], expected: [1, 2, 2, 3] },
    { args: [4, [[0, 1], [1, 1], [2, 1], [2, 2]]], expected: [1, 1, 1, 2] },
  ],
  hiddenTests: [
    { args: [1, [[0, 1], [1, 1], [0, 2], [1, 2]]], expected: [1, 1, 2, 1] },
    { args: [5, [[0, 1], [0, 1], [0, 2]]], expected: [1, 1, 1] },
    { args: [10, [[3, 5], [7, 5], [3, 9]]], expected: [1, 1, 2] },
    { args: [100, [[0, 1], [1, 2], [2, 3], [0, 3]]], expected: [1, 2, 3, 2] },
    { args: [1000000000, [[0, 1000000000], [0, 999999999]]], expected: [1, 1] },
  ],
};
