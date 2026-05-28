import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-valid-obstacle-course-at-each-position',
  title: 'Find the Longest Valid Obstacle Course at Each Position',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You want to build some obstacle courses. You are given a **0-indexed** integer array \`obstacles\` of length \`n\`. For every index \`i\` between \`0\` and \`n - 1\` (inclusive), choose one of the following options:

- Take all the obstacles whose indices are in the range \`[0, i]\` with heights considered in their original order.
- Take some subset of the obstacles whose indices are in the range \`[0, i]\`.

Return an array \`ans\` of length \`n\`, where \`ans[i]\` is the length of the **longest obstacle course** in \`obstacles[0..i].\` A valid obstacle course must have heights in **non-decreasing** order.`,
  constraints: [
    'n == obstacles.length',
    '1 <= n <= 10^5',
    '1 <= obstacles[i] <= 10^7',
  ],
  examples: [
    {
      input: 'obstacles = [3,1,5,6,4,2]',
      output: '[1,1,2,3,2,2]',
      explanation: 'ans[0]=1 ([3]), ans[1]=1 ([1]), ans[2]=2 ([3,5]), ans[3]=3 ([3,5,6]), ans[4]=2 ([1,4] or [3,4]), ans[5]=2 ([1,2]).',
    },
    {
      input: 'obstacles = [2,2,1]',
      output: '[1,2,1]',
      explanation: 'ans[0]=1 ([2]), ans[1]=2 ([2,2]), ans[2]=1 ([1]).',
    },
    {
      input: 'obstacles = [3,3,3,3]',
      output: '[1,2,3,4]',
      explanation: 'All equal, so the entire prefix is always valid.',
    },
  ],
  hints: [
    'This is like longest non-decreasing subsequence (LNDS) ending at each position.',
    'Maintain a patience-sorting tails array. For each obstacle, find the rightmost position where tails[j] <= obstacle using binary search.',
    'Insert/update at that position and record the length.',
  ],
  functionName: 'longestObstacleCourseAtEachPosition',
  params: ['obstacles'],
  starterCode: {
    javascript: 'function longestObstacleCourseAtEachPosition(obstacles) {\n  \n}\n',
    python: 'def longestObstacleCourseAtEachPosition(obstacles):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 5, 6, 4, 2]], expected: [1, 1, 2, 3, 2, 2] },
    { args: [[2, 2, 1]], expected: [1, 2, 1] },
    { args: [[3, 3, 3, 3]], expected: [1, 2, 3, 4] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[5, 1, 5, 5, 1, 3]], expected: [1, 1, 2, 3, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[5, 4, 3, 2, 1]], expected: [1, 1, 1, 1, 1] },
    { args: [[2, 1, 4, 3, 4]], expected: [1, 1, 2, 2, 3] },
  ],
};
