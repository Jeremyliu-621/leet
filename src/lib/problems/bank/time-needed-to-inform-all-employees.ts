import type { Problem } from '../types';

export const problem: Problem = {
  id: 'time-needed-to-inform-all-employees',
  title: 'Time Needed to Inform All Employees',
  difficulty: 'medium',
  tags: ['graph', 'tree'],
  description: `A company has \`n\` employees with unique IDs from \`0\` to \`n - 1\`. The head of the company is the employee with ID \`headID\`.

Each employee has one direct manager. The manager of employee \`i\` is given by \`manager[i]\` (\`manager[headID] == -1\` since the head has no manager). Also \`informTime[i]\` is the time it takes employee \`i\` to inform all their direct subordinates.

The head of the company is the first to be informed and immediately begins informing the direct subordinates. The process continues until all employees are informed.

Return the **number of minutes needed to inform all the employees**.`,
  constraints: [
    '1 <= n <= 10⁵',
    '0 <= headID < n',
    'manager.length == n',
    '0 <= manager[i] < n',
    'manager[headID] == -1',
    'informTime.length == n',
    '0 <= informTime[i] <= 1000',
    'It is guaranteed all employees can be reached by the head.',
  ],
  examples: [
    {
      input: 'n = 1, headID = 0, manager = [-1], informTime = [0]',
      output: '0',
      explanation: 'The head is the only employee. No time needed.',
    },
    {
      input: 'n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]',
      output: '1',
      explanation: 'Employee 2 is the head and informs all direct subordinates (0,1,3,4,5) in 1 minute.',
    },
    {
      input: 'n = 7, headID = 6, manager = [1,2,3,4,5,6,-1], informTime = [0,6,5,4,3,2,1]',
      output: '21',
      explanation: 'The chain is 6→5→4→3→2→1→0. Total: 1+2+3+4+5+6 = 21.',
    },
  ],
  hints: [
    'Build an adjacency list from manager to subordinates. Then do a DFS/BFS starting from `headID`, accumulating the time along each path.',
    'For each node, the time to inform all employees in its subtree is `informTime[node] + max(time for each child subtree)`.',
    'Use a recursive DFS: `dfs(node) = informTime[node] + max(dfs(child) for each child)`. The answer is `dfs(headID)`.',
  ],
  functionName: 'numTimeToInform',
  params: ['n', 'headID', 'manager', 'informTime'],
  starterCode: {
    javascript: `function numTimeToInform(n, headID, manager, informTime) {

}`,
    python: `def numTimeToInform(n: int, headID: int, manager: list[int], informTime: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [1, 0, [-1], [0]], expected: 0 },
    { args: [6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]], expected: 1 },
    { args: [7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]], expected: 21 },
  ],
  hiddenTests: [
    { args: [4, 2, [3, 3, -1, 2], [0, 0, 162, 914]], expected: 1076 },
    { args: [2, 0, [-1, 0], [5, 0]], expected: 5 },
    { args: [3, 0, [-1, 0, 0], [3, 1, 2]], expected: 5 },
    { args: [5, 0, [-1, 0, 1, 2, 3], [1, 2, 3, 4, 0]], expected: 10 },
    { args: [3, 0, [-1, 0, 1], [2, 3, 0]], expected: 5 },
  ],
};
