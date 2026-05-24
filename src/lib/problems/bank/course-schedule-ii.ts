import type { Problem } from '../types';

export const problem: Problem = {
  id: 'course-schedule-ii',
  title: 'Course Schedule II',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`numCourses\` courses labeled \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [a, b]\` means course \`b\` must be taken before course \`a\`.

Return **a valid ordering** to finish all courses. If it is impossible (a cycle exists), return an empty array \`[]\`.

If multiple valid orderings exist, any one of them is accepted.`,
  constraints: [
    '`1 <= numCourses <= 2000`',
    '`0 <= prerequisites.length <= 5000`',
    '`prerequisites[i].length == 2`',
    '`0 <= a, b < numCourses`',
    'All prerequisite pairs are unique',
  ],
  examples: [
    {
      input: 'numCourses = 2, prerequisites = [[1,0]]',
      output: '[0,1]',
      explanation: 'Take course 0 first, then course 1.',
    },
    {
      input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
      output: '[0,1,2,3]',
      explanation: 'One valid ordering: take 0, then 1 and 2 (in any order), then 3.',
    },
    {
      input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
      output: '[]',
      explanation: 'Courses 0 and 1 depend on each other — impossible.',
    },
  ],
  hints: [
    "Use Kahn's algorithm (BFS topological sort): build an in-degree table, start with all nodes with in-degree 0, and process them in a queue — appending each to the result and reducing the in-degrees of their neighbors.",
    'If the result array ends up shorter than numCourses, a cycle exists — return [].',
    'DFS also works: post-order DFS reverses to a valid topological order. Track three states (unvisited, in-progress, done) to detect cycles.',
  ],
  params: ['numCourses', 'prerequisites'],
  functionName: 'findOrder',
  starterCode: {
    javascript: `function findOrder(numCourses, prerequisites) {
  // Return a valid topological order, or [] if a cycle exists
}`,
    python: `def findOrder(numCourses, prerequisites):
    # Return a valid topological order, or [] if a cycle exists
    pass`,
  },
  visibleTests: [
    { args: [2, [[1, 0]]], expected: [0, 1] },
    { args: [2, [[1, 0], [0, 1]]], expected: [] },
    { args: [1, []], expected: [0] },
  ],
  hiddenTests: [
    { args: [3, [[1, 0], [2, 1]]], expected: [0, 1, 2] },
    { args: [3, [[0, 1], [0, 2], [1, 2]]], expected: [2, 1, 0] },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
    { args: [4, [[1, 0], [2, 1], [3, 2]]], expected: [0, 1, 2, 3] },
  ],
};
