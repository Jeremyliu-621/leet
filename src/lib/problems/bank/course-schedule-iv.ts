import type { Problem } from '../types';

export const problem: Problem = {
  id: 'course-schedule-iv',
  title: 'Course Schedule IV',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`numCourses\` courses labeled \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [a, b]\` means course \`a\` must be taken before course \`b\`.

Given a list of \`queries\` where \`queries[j] = [u, v]\`, for each query return \`true\` if course \`u\` is a direct or indirect prerequisite of course \`v\`, or \`false\` otherwise.

**Approach:** Floyd-Warshall transitive closure. Initialize a reachability matrix from prerequisites, then propagate: if \`reach[i][k]\` and \`reach[k][j]\`, then \`reach[i][j] = true\`.`,
  constraints: [
    '2 <= numCourses <= 100',
    '0 <= prerequisites.length <= (numCourses * (numCourses - 1) / 2)',
    'prerequisites[i].length == 2',
    '0 <= a, b < numCourses, a != b',
    'All prerequisite pairs are unique.',
    '1 <= queries.length <= 10^4',
    'queries[j].length == 2',
    '0 <= u, v < numCourses, u != v',
  ],
  examples: [
    {
      input: 'numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]',
      output: '[false,true]',
      explanation: 'Course 1 must be taken before course 0, so 1 is a prerequisite of 0 (reach[1][0]=true). 0 is not a prerequisite of 1.',
    },
    {
      input: 'numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]',
      output: '[false,false]',
      explanation: 'No prerequisites, so no course is a prerequisite of any other.',
    },
    {
      input: 'numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]',
      output: '[true,true]',
      explanation: '1→2 and 1→0 directly; 1→2→0 so 1 is also an indirect prerequisite of 0.',
    },
  ],
  hints: [
    'Build a boolean reachability matrix `reach[i][j]` initialized from the prerequisites.',
    'Run Floyd-Warshall: for each intermediate node k, if reach[i][k] and reach[k][j], set reach[i][j] = true.',
    'Answer each query in O(1) by looking up reach[u][v].',
  ],
  functionName: 'checkIfPrerequisite',
  params: ['numCourses', 'prerequisites', 'queries'],
  starterCode: {
    javascript: `function checkIfPrerequisite(numCourses, prerequisites, queries) {
  // Build reachability matrix and use Floyd-Warshall

}`,
    python: `def checkIfPrerequisite(numCourses, prerequisites, queries):
    # Build reachability matrix and use Floyd-Warshall
    pass
`,
  },
  visibleTests: [
    { args: [2, [[1, 0]], [[0, 1], [1, 0]]], expected: [false, true] },
    { args: [2, [], [[1, 0], [0, 1]]], expected: [false, false] },
    { args: [3, [[1, 2], [1, 0], [2, 0]], [[1, 0], [1, 2]]], expected: [true, true] },
  ],
  hiddenTests: [
    { args: [4, [[0, 1], [1, 2], [2, 3]], [[0, 3], [3, 0], [0, 2], [2, 0]]], expected: [true, false, true, false] },
    { args: [3, [[1, 2], [0, 1]], [[0, 2], [2, 0]]], expected: [true, false] },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], [[0, 4], [4, 0], [1, 3]]], expected: [true, false, true] },
  ],
};
