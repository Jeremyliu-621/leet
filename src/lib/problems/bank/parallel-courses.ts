import type { Problem } from '../types';

export const problem: Problem = {
  id: 'parallel-courses',
  title: 'Parallel Courses',
  difficulty: 'medium',
  tags: ['graph', 'dynamic-programming'],
  description: `You have \`n\` courses labeled from \`1\` to \`n\` and an array \`relations\` where \`relations[i] = [prevCourse, nextCourse]\` means you must finish \`prevCourse\` before starting \`nextCourse\`.

Each semester you can take **any number** of courses as long as all prerequisites are satisfied. Return the **minimum number of semesters** needed to complete all courses.

If it is **impossible** to finish all courses (due to a cycle), return **-1**.

**Example:**
- n = 3, relations = [[1,3],[2,3]]
- Semester 1: take courses 1 and 2
- Semester 2: take course 3
- Answer: **2**`,
  constraints: [
    '1 <= n <= 5000',
    '1 <= relations.length <= 5000',
    '1 <= prevCourse, nextCourse <= n',
    'prevCourse != nextCourse',
    'No duplicate relations',
  ],
  examples: [
    {
      input: 'n = 3, relations = [[1,3],[2,3]]',
      output: '2',
      explanation: 'Take courses 1 and 2 in semester 1, then course 3 in semester 2.',
    },
    {
      input: 'n = 3, relations = [[1,2],[2,3]]',
      output: '3',
      explanation: 'Chain dependency: course 1 first, then 2, then 3 — requires 3 semesters.',
    },
    {
      input: 'n = 4, relations = [[1,2],[3,4]]',
      output: '2',
      explanation: 'Two independent chains, each needing 2 semesters, running in parallel.',
    },
  ],
  hints: [
    'Model as a DAG. The minimum semesters equals the length of the **longest path** in the DAG (counting nodes). Use topological sort (Kahn\'s BFS algorithm) to process nodes level by level.',
    'Track in-degrees. Start BFS with all nodes of in-degree 0. Each BFS "wave" is one semester. Count the total waves and the total processed nodes.',
    'If not all n nodes are processed after BFS completes, a cycle exists — return -1. Otherwise return the number of BFS rounds (semesters).',
  ],
  functionName: 'minimumSemesters',
  params: ['n', 'relations'],
  starterCode: {
    javascript: `function minimumSemesters(n, relations) {
  // Return minimum semesters to complete all courses, or -1 if impossible
}`,
    python: `def minimumSemesters(n: int, relations: list[list[int]]) -> int:
    # Return minimum semesters to complete all courses, or -1 if impossible
    pass`,
  },
  visibleTests: [
    { args: [3, [[1, 3], [2, 3]]], expected: 2 },
    { args: [3, [[1, 2], [2, 3]]], expected: 3 },
    { args: [4, [[1, 2], [3, 4]]], expected: 2 },
    { args: [1, []], expected: 1 },
  ],
  hiddenTests: [
    { args: [2, [[1, 2]]], expected: 2 },
    { args: [2, [[1, 2], [2, 1]]], expected: -1 },
    { args: [5, [[1, 3], [2, 3], [3, 4], [3, 5]]], expected: 3 },
    { args: [4, [[1, 2], [2, 3], [3, 1]]], expected: -1 },
    { args: [6, [[1, 4], [2, 4], [3, 5], [4, 6], [5, 6]]], expected: 3 },
    { args: [3, []], expected: 1 },
  ],
};
