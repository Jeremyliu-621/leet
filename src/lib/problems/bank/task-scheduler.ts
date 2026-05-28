import type { Problem } from '../types';

export const problem: Problem = {
  id: 'task-scheduler',
  title: 'Task Scheduler',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given a list of CPU \`tasks\`, each labeled with a letter from A to Z, and a non-negative integer \`n\` representing the cooldown interval between two same tasks.

Return the **minimum number of intervals** the CPU will take to finish all tasks. During each interval the CPU does one task or idles.`,
  constraints: [
    '`1 <= tasks.length <= 10⁴`',
    '`tasks[i]` is an uppercase English letter',
    '`0 <= n <= 100`',
  ],
  examples: [
    {
      input: 'tasks = ["A","A","A","B","B","B"], n = 2',
      output: '8',
      explanation: 'A schedule like A→B→idle→A→B→idle→A→B takes 8 intervals.',
    },
    {
      input: 'tasks = ["A","A","A","B","B","B"], n = 0',
      output: '6',
      explanation: 'With no cooldown, just execute them sequentially.',
    },
    {
      input: 'tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2',
      output: '16',
    },
  ],
  hints: [
    'Count the frequency of each task. Let `maxFreq` be the highest frequency and `maxCount` be how many tasks share that frequency.',
    'The answer is `max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount)`.',
    'The formula arises because the most-frequent task creates "frames" of size `(n+1)`. If we have enough other tasks to fill all idles, no idle is needed (answer = tasks.length).',
  ],
  functionName: 'leastInterval',
  params: ['tasks', 'n'],
  starterCode: {
    javascript: `function leastInterval(tasks, n) {

}`,
    typescript: "function leastInterval(tasks: string[], n: number): number {\n\n}",

    python: `def leastInterval(tasks, n):
    pass`,
  },
  visibleTests: [
    { args: [['A', 'A', 'A', 'B', 'B', 'B'], 2], expected: 8 },
    { args: [['A', 'A', 'A', 'B', 'B', 'B'], 0], expected: 6 },
    { args: [['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2], expected: 16 },
  ],
  hiddenTests: [
    { args: [['A'], 10], expected: 1 },
    { args: [['A', 'B', 'C', 'D', 'E', 'F'], 2], expected: 6 },
    { args: [['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2], expected: 12 },
  ],
};
