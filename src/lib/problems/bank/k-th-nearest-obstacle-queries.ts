import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-th-nearest-obstacle-queries',
  title: 'K-th Nearest Obstacle Queries',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `There is an infinite 2D plane. You are given a 2D array \`queries\` where \`queries[i] = [x, y]\` and a positive integer \`k\`.

After the \`i\`-th query, a new obstacle is placed at coordinates \`(x, y)\`. The **distance** from the origin to any obstacle is its **Manhattan distance**: \`|x| + |y|\`.

After each query, return the **k-th nearest obstacle** to the origin. If there are fewer than \`k\` obstacles, return \`-1\`.

Return an integer array \`results\` where \`results[i]\` is the k-th nearest obstacle after the \`(i+1)\`-th query.`,
  constraints: [
    '`1 <= queries.length <= 2 * 10^5`',
    '`-10^9 <= queries[i][0], queries[i][1] <= 10^9`',
    '`1 <= k <= queries.length`',
  ],
  examples: [
    {
      input: 'queries = [[1,2],[3,4],[2,3],[-3,0]], k = 2',
      output: '[-1,7,5,3]',
      explanation: 'Distances after each query: [3], [3,7], [3,5,7] (k=2 → 5), [3,3,5,7] (k=2 → 3).',
    },
    {
      input: 'queries = [[5,5],[4,4],[3,3]], k = 1',
      output: '[10,8,6]',
      explanation: 'k=1 means the nearest obstacle each time.',
    },
  ],
  hints: [
    'The k-th smallest element in a dynamic set can be tracked with a max-heap of size k.',
    'For each new obstacle at (x, y), compute its distance |x| + |y|.',
    'If the heap has fewer than k elements, add the distance.',
    'If the heap has k elements and the new distance is smaller than the max, pop the max and add the new one.',
    'The top of the max-heap is the k-th smallest (k-th nearest) distance.',
  ],
  functionName: 'resultsArray',
  params: ['queries', 'k'],
  starterCode: {
    javascript: `function resultsArray(queries, k) {

}`,
    typescript: `function resultsArray(queries: number[][], k: number): number[] {

}`,
    python: `def resultsArray(queries, k):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4], [2, 3], [-3, 0]], 2], expected: [-1, 7, 5, 3] },
    { args: [[[5, 5], [4, 4], [3, 3]], 1], expected: [10, 8, 6] },
  ],
  hiddenTests: [
    { args: [[[0, 0]], 1], expected: [0] },
    { args: [[[1, 0], [0, 1]], 2], expected: [-1, 1] },
    { args: [[[1, 0], [0, 1], [2, 0]], 2], expected: [-1, 1, 1] },
    { args: [[[3, 4], [1, 0], [0, 1]], 2], expected: [-1, 7, 1] },
    { args: [[[1, 1], [2, 2], [3, 3], [4, 4]], 3], expected: [-1, -1, 6, 6] },
  ],
};
