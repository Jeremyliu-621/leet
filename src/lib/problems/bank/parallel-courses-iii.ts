import type { Problem } from '../types';

export const problem: Problem = {
  id: 'parallel-courses-iii',
  title: 'Parallel Courses III',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming'],
  description: `You are given an integer \`n\`, which indicates that there are \`n\` courses labeled from \`1\` to \`n\`. You are also given a 2D integer array \`relations\` where \`relations[j] = [prevCourse_j, nextCourse_j]\` denotes that course \`prevCourse_j\` has to be completed **before** course \`nextCourse_j\` (a prerequisite relationship). Furthermore, you are given a **0-indexed** integer array \`time\` where \`time[i]\` denotes how many **months** it takes to complete the \`(i+1)\`th course.

You must find the **minimum** number of months needed to complete all the courses. Note that you can take multiple courses simultaneously.

Return the minimum number of months needed to complete all the courses.`,
  constraints: [
    '`1 <= n <= 5 * 10^4`',
    '`0 <= relations.length <= min(n * (n - 1) / 2, 5 * 10^4)`',
    '`relations[j].length == 2`',
    '`1 <= prevCourse_j, nextCourse_j <= n`',
    '`prevCourse_j != nextCourse_j`',
    'All the pairs `[prevCourse_j, nextCourse_j]` are **unique**.',
    '`time.length == n`',
    '`1 <= time[i] <= 10^4`',
    'The given graph is a directed acyclic graph.',
  ],
  examples: [
    {
      input: 'n = 3, relations = [[1,3],[2,3]], time = [3,2,5]',
      output: '8',
      explanation: 'Courses 1 and 2 can be taken in parallel (no prerequisites). Course 1 finishes at month 3, course 2 at month 2. Course 3 can start at month 3 (when both are done) and takes 5 months, finishing at month 8.',
    },
    {
      input: 'n = 5, relations = [[1,5],[2,5],[3,5],[3,4],[4,5]], time = [1,2,3,4,5]',
      output: '12',
      explanation: 'Course 3 takes 3 months. Course 4 needs course 3 first: 3+4=7 months. Course 5 needs courses 1, 2, and 4: max(1,2,7)+5=12 months.',
    },
  ],
  hints: [
    'Model the problem as a longest-path problem in a DAG (directed acyclic graph).',
    'Use topological sort (BFS/Kahn\'s algorithm). Maintain dp[i] = the earliest finish time for course i.',
    'When processing course u, dp[u] += time[u-1]. For each successor v of u, update dp[v] = max(dp[v], dp[u]). Enqueue v when its in-degree reaches 0.',
    'The answer is max(dp[1..n]).',
  ],
  functionName: 'minimumTime',
  params: ['n', 'relations', 'time'],
  starterCode: {
    javascript: `function minimumTime(n, relations, time) {

}`,
    python: `def minimumTime(n, relations, time):
    pass`,
  },
  visibleTests: [
    { args: [3, [[1, 3], [2, 3]], [3, 2, 5]], expected: 8 },
    { args: [5, [[1, 5], [2, 5], [3, 5], [3, 4], [4, 5]], [1, 2, 3, 4, 5]], expected: 12 },
  ],
  hiddenTests: [
    { args: [1, [], [5]], expected: 5 },
    { args: [2, [[1, 2]], [1, 2]], expected: 3 },
    { args: [3, [[1, 2], [2, 3]], [1, 2, 3]], expected: 6 },
    { args: [4, [[1, 4], [2, 4], [3, 4]], [1, 1, 1, 10]], expected: 11 },
    { args: [3, [], [4, 5, 6]], expected: 6 },
  ],
};
