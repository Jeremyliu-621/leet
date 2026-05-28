import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-longest-valid-obstacle-course',
  title: 'Find the Longest Valid Obstacle Course at Each Position',
  difficulty: 'hard',
  tags: ['binary-search', 'dynamic-programming'],
  description: `You want to build some obstacle courses. Given an integer array \`obstacles\`, return an array \`ans\` where \`ans[i]\` is the length of the **longest obstacle course** in \`obstacles[0..i]\` that ends with \`obstacles[i]\` and has **non-decreasing** obstacle heights.`,
  constraints: [
    '`n == obstacles.length`',
    '`1 <= n <= 10^5`',
    '`1 <= obstacles[i] <= 10^7`',
  ],
  examples: [
    {
      input: 'obstacles = [1,2,3,2]',
      output: '[1,2,3,3]',
      explanation: 'At index 3, the longest non-decreasing subsequence ending at 2 is [1,2,2] (length 3).',
    },
    {
      input: 'obstacles = [2,2,1]',
      output: '[1,2,1]',
    },
    {
      input: 'obstacles = [3,1,5,6,4,2]',
      output: '[1,1,2,3,2,2]',
    },
  ],
  hints: [
    'This is the LIS (Longest Increasing Subsequence) problem variant allowing equal elements (non-decreasing).',
    'Maintain a "patience sorting" tails array. For each obstacle x, use binary search to find the rightmost position where tails[pos] <= x (bisect_right). Place x there.',
    'If pos == len(tails), append x (new longest); otherwise set tails[pos] = x. The answer for position i is pos+1.',
  ],
  functionName: 'longestObstacleCourseAtEachPosition',
  params: ['obstacles'],
  starterCode: {
    javascript: `function longestObstacleCourseAtEachPosition(obstacles) {

}`,
    python: `def longestObstacleCourseAtEachPosition(obstacles):
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3,2]], expected: [1,2,3,3] },
    { args: [[2,2,1]], expected: [1,2,1] },
    { args: [[3,1,5,6,4,2]], expected: [1,1,2,3,2,2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[5,1,5,5,1,3,4,5,1,4]], expected: [1,1,2,3,2,3,4,5,3,5] },
    { args: [[1,2,3,4,5]], expected: [1,2,3,4,5] },
    { args: [[5,4,3,2,1]], expected: [1,1,1,1,1] },
  ],
};
