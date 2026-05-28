import type { Problem } from '../types';

export const problem: Problem = {
  id: 'task-scheduler-ii',
  title: 'Task Scheduler II',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`tasks\` representing a list of tasks where each task is of a specific type (identified by an integer). You can complete the tasks in any order, but for two tasks of the **same type**, there must be at least \`space\` days between them.

You complete exactly **one task per day** (no skipping days). Return the **minimum number of days** needed to finish all tasks.

\`\`\`
Input: tasks = [1,2,1,2,3,1], space = 3
Output: 9
\`\`\`

Day 1: task[0]=1 · Day 2: task[1]=2 · Day 3–4: idle · Day 5: task[2]=1 · Day 6: task[3]=2 · Day 7: task[4]=3 · Day 8: idle · Day 9: task[5]=1`,
  constraints: [
    '1 <= tasks.length <= 10^5',
    '1 <= tasks[i] <= 10^9',
    '0 <= space <= 10^9',
  ],
  examples: [
    {
      input: 'tasks = [1,2,1,2,3,1], space = 3',
      output: '9',
      explanation:
        'Day 1: type-1, Day 2: type-2, Days 3–4: idle, Day 5: type-1, Day 6: type-2, Day 7: type-3, Day 8: idle, Day 9: type-1.',
    },
    {
      input: 'tasks = [1,1], space = 0',
      output: '2',
      explanation: 'With space = 0, consecutive same-type tasks are allowed. Complete on days 1 and 2.',
    },
    {
      input: 'tasks = [1,2,3], space = 10',
      output: '3',
      explanation: 'All task types are distinct — no waiting needed regardless of space.',
    },
  ],
  hints: [
    'Process tasks in the given order. Track the last day each task type was completed. For each new task, advance the current day by 1, then check if the same type was done too recently.',
    'For task type `t`, the earliest allowed day is `lastDay[t] + space + 1`. So `day = Math.max(day + 1, lastDay[t] + space + 1)`.',
    'Use a Map to store the last completion day for each task type. The answer is the final value of `day` after processing all tasks.',
  ],
  functionName: 'taskSchedulerII',
  params: ['tasks', 'space'],
  starterCode: {
    javascript: `function taskSchedulerII(tasks, space) {

}`,
    python: `def taskSchedulerII(tasks, space):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 3, 1], 3], expected: 9 },
    { args: [[1, 1], 0], expected: 2 },
    { args: [[1, 2, 3], 10], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1000000], expected: 1 },
    { args: [[1, 1, 1], 2], expected: 7 },
    { args: [[1, 2, 1, 3, 1, 4, 1], 3], expected: 13 },
    { args: [[1, 2, 1, 2], 3], expected: 6 },
    { args: [[1, 1, 1, 1], 0], expected: 4 },
    { args: [[5, 5, 5], 1], expected: 5 },
    { args: [[1, 2, 3, 1, 2, 3], 2], expected: 6 },
    { args: [[1, 1, 2, 1], 2], expected: 7 },
  ],
};
