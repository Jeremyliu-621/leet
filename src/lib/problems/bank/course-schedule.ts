import type { Problem } from '../types';

export const problem: Problem = {
  id: 'course-schedule',
  title: 'Course Schedule',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`numCourses\` courses labeled \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [a, b]\` means course \`b\` must be taken before course \`a\`.

Return \`true\` if you can finish all courses, or \`false\` if it is impossible (a cycle exists in the prerequisites).`,
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
      output: 'true',
      explanation: 'Take course 0 then course 1. No cycle.',
    },
    {
      input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
      output: 'false',
      explanation: 'Courses 0 and 1 depend on each other — impossible.',
    },
    {
      input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
      output: 'true',
    },
  ],
  params: ['numCourses', 'prerequisites'],
  functionName: 'canFinish',
  starterCode: {
    javascript: `function canFinish(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) adj[b].push(a);
  // state: 0 = unvisited, 1 = in-progress, 2 = done
  const state = new Array(numCourses).fill(0);
  function dfs(node) {
    if (state[node] === 1) return false; // cycle found
    if (state[node] === 2) return true;
    state[node] = 1;
    for (const nb of adj[node]) { if (!dfs(nb)) return false; }
    state[node] = 2;
    return true;
  }
  for (let i = 0; i < numCourses; i++) { if (!dfs(i)) return false; }
  return true;
}`,
    typescript: `function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adj: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) adj[b!]!.push(a!);
  // state: 0 = unvisited, 1 = in-progress, 2 = done
  const state = new Array<number>(numCourses).fill(0);
  function dfs(node: number): boolean {
    if (state[node] === 1) return false; // cycle found
    if (state[node] === 2) return true;
    state[node] = 1;
    for (const nb of adj[node]!) { if (!dfs(nb)) return false; }
    state[node] = 2;
    return true;
  }
  for (let i = 0; i < numCourses; i++) { if (!dfs(i)) return false; }
  return true;
}`,

    python: `def canFinish(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    for a, b in prerequisites:
        adj[b].append(a)
    # state: 0 = unvisited, 1 = in-progress, 2 = done
    state = [0] * numCourses
    def dfs(node):
        if state[node] == 1:
            return False  # cycle found
        if state[node] == 2:
            return True
        state[node] = 1
        for nb in adj[node]:
            if not dfs(nb):
                return False
        state[node] = 2
        return True
    return all(dfs(i) for i in range(numCourses))`,
  },
  hints: [
    'Model courses as nodes and prerequisites as directed edges (b → a). The problem reduces to: "does this directed graph contain a cycle?"',
    'DFS with three states: unvisited (0), in-progress (1), completed (2). If you visit a node with state 1, you found a back edge — a cycle.',
    'Alternatively use Kahn\'s algorithm (BFS topological sort): repeatedly remove nodes with in-degree 0. If all nodes are eventually removed, no cycle exists.',
  ],
  visibleTests: [
    { args: [2, [[1,0]]], expected: true },
    { args: [2, [[1,0],[0,1]]], expected: false },
    { args: [4, [[1,0],[2,0],[3,1],[3,2]]], expected: true },
  ],
  hiddenTests: [
    { args: [1, []], expected: true },
    { args: [3, [[0,1],[0,2],[1,2]]], expected: true },
    { args: [3, [[0,1],[1,2],[2,0]]], expected: false },
    { args: [5, [[1,4],[2,4],[3,1],[3,2]]], expected: true },
    { args: [20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]], expected: false },
  ],
};
