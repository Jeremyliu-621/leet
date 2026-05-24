import type { Problem } from '../types';

export const problem: Problem = {
  id: 'process-tasks-using-servers',
  title: 'Process Tasks Using Servers',
  difficulty: 'medium',
  tags: ['heap'],
  description: `You are given two 0-indexed integer arrays \`servers\` and \`tasks\` of lengths \`n\` and \`m\` respectively. \`servers[i]\` is the **weight** of the i-th server. Task \`j\` arrives at second \`j\` and takes \`tasks[j]\` seconds to process.

Tasks are assigned as follows:
- Assign to the **available server with the smallest weight** (ties broken by smallest index).
- If no server is available when a task arrives, the task **waits** and is assigned as soon as a server becomes free (following the same tie-breaking).

Return an array \`ans\` of length \`m\` where \`ans[j]\` is the index of the server assigned to task \`j\`.`,
  constraints: [
    '1 <= servers.length, tasks.length <= 2 × 10^5',
    '1 <= servers[i], tasks[j] <= 2 × 10^5',
  ],
  examples: [
    {
      input: 'servers = [3,3,2], tasks = [1,2,3,2,1,2]',
      output: '[2,2,0,2,1,2]',
      explanation:
        'Server 2 (weight 2) handles tasks 0, 1, 3, 5. Servers 0 and 1 handle tasks 2 and 4.',
    },
    {
      input: 'servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]',
      output: '[1,4,1,4,1,3,2]',
    },
  ],
  hints: [
    'Use two heaps: a min-heap of available servers (sorted by weight then index) and a min-heap of busy servers (sorted by free time, then weight, then index).',
    'For each task at time t: first move all servers with freeTime ≤ t from the busy heap to the available heap. Then pick the best available server.',
    'If no server is free, jump time forward to the earliest free time (top of busy heap), release all servers free at that time, then assign.',
  ],
  functionName: 'assignTasks',
  params: ['servers', 'tasks'],
  starterCode: {
    javascript: `function assignTasks(servers, tasks) {\n\n}`,
    python: `def assignTasks(servers, tasks):\n    pass`,
  },
  visibleTests: [
    { args: [[3, 3, 2], [1, 2, 3, 2, 1, 2]], expected: [2, 2, 0, 2, 1, 2] },
    { args: [[5, 1, 4, 3, 2], [2, 1, 2, 4, 5, 2, 1]], expected: [1, 4, 1, 4, 1, 3, 2] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [0] },
    { args: [[2, 1], [2, 1, 2]], expected: [1, 0, 1] },
    { args: [[3, 3, 2], [1, 2, 3, 2, 1, 2]], expected: [2, 2, 0, 2, 1, 2] },
    { args: [[5, 1, 4, 3, 2], [2, 1, 2, 4, 5, 2, 1]], expected: [1, 4, 1, 4, 1, 3, 2] },
  ],
};
