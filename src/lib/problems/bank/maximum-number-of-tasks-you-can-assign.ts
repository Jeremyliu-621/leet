import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-tasks-you-can-assign',
  title: 'Maximum Number of Tasks You Can Assign',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays', 'sliding-window'],
  description: `You have \`n\` tasks and \`m\` workers. Each task has a strength requirement stored in a **0-indexed** integer array \`tasks\`, with the \`i\`-th task requiring \`tasks[i]\` strength to complete. Each worker has a strength stored in a **0-indexed** integer array \`workers\`, with the \`j\`-th worker having \`workers[j]\` strength.

Each worker can only be assigned to a **single** task and can complete only tasks whose strength requirements do not exceed their own strength. However, there are \`pills\` magical pills that will **increase a worker's strength** by \`strength\` for one task. At most **one** pill can be administered to a worker.

Given the four integers \`n\`, \`m\`, \`pills\`, and \`strength\`, and the arrays \`tasks\` and \`workers\`, return the **maximum number of tasks** that can be assigned to the workers.`,
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
      explanation:
        'Assign task 0 to worker 0 (with pill: 0+1=1 < 3, no... use pill for task 2): assign task 2 (strength 1) to worker 0 with pill (0+1=1≥1), task 1 (strength 2) to worker 1 (3≥2), task 0 (strength 3) to worker 2 (3≥3).',
    },
    {
      input: 'tasks = [5,4], workers = [0,0,0], pills = 1, strength = 5',
      output: '1',
      explanation:
        'With only one pill (adding 5), one worker can handle a task of strength up to 5. Only 1 task can be completed.',
    },
  ],
  hints: [
    'Binary search on the answer k (0 to min(n,m)). For a given k, always take the k easiest tasks and pair them with the k strongest workers.',
    'To check feasibility for k: iterate through the k hardest tasks (descending). Maintain a sorted window of available workers. For each task, if the strongest available worker can do it without a pill, use them; otherwise use a pill with the weakest worker who can handle the task.',
    'A worker can handle a task with a pill if worker_strength + pill_strength >= task_strength. Use a deque or sorted structure to efficiently find the weakest eligible worker for each task.',
  ],
  functionName: 'maxTaskAssign',
  params: ['tasks', 'workers', 'pills', 'strength'],
  starterCode: {
    javascript: 'function maxTaskAssign(tasks, workers, pills, strength) {\n  \n}\n',
    typescript: "function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {\n  \n}",

    python: 'def maxTaskAssign(tasks, workers, pills, strength):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,2,1], [0,3,3], 1, 1], expected: 3 },
    { args: [[5,4], [0,0,0], 1, 5], expected: 1 },
  ],
  hiddenTests: [
    // All workers strong enough, no pills needed
    { args: [[1,2,3], [3,3,3], 0, 0], expected: 3 },
    // No workers strong enough without pills and no pills available
    { args: [[10,10], [1,1], 0, 5], expected: 0 },
    // Exactly enough pills to cover all tasks
    // tasks=[10,15,30], workers=[0,10,10,10,10], pills=3, strength=10
    // Only tasks ≤ 20 (10+10=20) reachable with pill → task 30 impossible. Max=2.
    { args: [[10,15,30], [0,10,10,10,10], 3, 10], expected: 2 },
    // tasks=[5,9,8,5,9], workers=[1,6,4,2,6], pills=1, strength=5 → 3
    { args: [[5,9,8,5,9], [1,6,4,2,6], 1, 5], expected: 3 },
    // All tasks can be done without pills
    { args: [[1,1,1], [2,2,2], 0, 100], expected: 3 },
    // Only one worker, one task, no pill, worker too weak
    { args: [[5], [3], 0, 1], expected: 0 },
  ],
};
