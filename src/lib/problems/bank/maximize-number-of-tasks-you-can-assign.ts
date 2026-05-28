import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-number-of-tasks-you-can-assign',
  title: 'Maximize Number of Tasks You Can Assign',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You have \`n\` tasks and \`m\` workers. Each task has a strength requirement stored in a **0-indexed** integer array \`tasks\`, with the \`i\`th task requiring \`tasks[i]\` strength to complete. Each worker has a strength stored in a **0-indexed** integer array \`workers\`, where the \`j\`th worker has strength \`workers[j]\`. Each worker can complete at most one task, and a task can be assigned to at most one worker. A worker can take a **magic pill** (at most one) that increases strength by \`strength\` for one task. You have \`pills\` magic pills.

Return the **maximum** number of tasks that can be assigned to workers.`,
  constraints: [
    'n == tasks.length',
    'm == workers.length',
    '1 <= n, m <= 5 * 10^4',
    '0 <= pills <= m',
    '0 <= tasks[i], workers[j], strength <= 10^9',
  ],
  examples: [
    {
      input: 'tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1',
      output: '3',
      explanation: 'Worker 0 takes pill (0+1=1 >= task 1). Worker 1 takes task 2. Worker 2 takes task 3.',
    },
    {
      input: 'tasks = [5,4], workers = [0,0,0], pills = 1, strength = 5',
      output: '1',
    },
  ],
  hints: [
    'Binary search on the answer k (how many tasks to complete).',
    'For a given k: take the k easiest tasks and k strongest workers.',
    'Greedily assign: for each task (hardest first), try the strongest non-pill worker; if not enough, give the weakest eligible pill-worker.',
  ],
  functionName: 'maxTaskAssign',
  params: ['tasks', 'workers', 'pills', 'strength'],
  starterCode: {
    javascript: 'function maxTaskAssign(tasks, workers, pills, strength) {\n\n}\n',
    typescript: "function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {\n\n}",

    python: 'def maxTaskAssign(tasks, workers, pills, strength):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,2,1], [0,3,3], 1, 1], expected: 3 },
    { args: [[5,4], [0,0,0], 1, 5], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1,2,3], [3,2,1], 0, 0], expected: 3 },
    { args: [[10], [5], 1, 4], expected: 0 },
    { args: [[10], [5], 1, 5], expected: 1 },
    { args: [[3,2,1], [0,0,0], 3, 3], expected: 3 },
  ],
};
