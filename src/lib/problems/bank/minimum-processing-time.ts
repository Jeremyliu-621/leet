import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-processing-time',
  title: 'Minimum Processing Time',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You have \`n\` processors each having 4 cores and \`n * 4\` tasks that need to be executed such that each core should perform only one task.

Given a **0-indexed** integer array \`processorTime\` representing the time at which each processor becomes available for the first time and a **0-indexed** integer array \`tasks\` representing the time it takes to execute each task, return the **minimum** time when all of the tasks have been executed.

**Note:** Each core executes the task independently of the others.`,
  constraints: [
    '1 <= n == processorTime.length <= 25000',
    'tasks.length == 4 * n',
    '1 <= processorTime[i] <= 10^9',
    '1 <= tasks[i] <= 10^9',
  ],
  examples: [
    {
      input: 'processorTime = [8,10], tasks = [2,2,3,1,8,7,4,5]',
      output: '16',
      explanation: 'Assign the 4 longest tasks to the processor available earliest (index 0, time 8). Completion = max(8+8, 8+7, 8+5, 8+4, 10+3, 10+2, 10+2, 10+1) = max(16,15,13,12,13,12,12,11) = 16.',
    },
    {
      input: 'processorTime = [10,20], tasks = [2,3,1,2,5,8,4,3]',
      output: '23',
      explanation: 'Assign 4 longest tasks to earliest processor. Sorted tasks desc: [8,5,4,3,3,2,2,1]. Proc0=10: 10+8=18,10+5=15,10+4=14,10+3=13. Proc1=20: 20+3=23. Max=23.',
    },
  ],
  hints: [
    'Sort processors by available time (ascending) and tasks by duration (descending).',
    'Assign the 4 longest remaining tasks to the processor that becomes available earliest.',
    'For processor i (0-indexed after sorting), its completion time is processorTime[i] + tasks[4*i] (largest task assigned to it).',
    'The answer is the maximum completion time across all processors.',
  ],
  functionName: 'minProcessingTime',
  params: ['processorTime', 'tasks'],
  starterCode: {
    javascript: `function minProcessingTime(processorTime, tasks) {

}`,
    typescript: `function minProcessingTime(processorTime: number[], tasks: number[]): number {

}`,
    python: `def minProcessingTime(processorTime: list[int], tasks: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[8, 10], [2, 2, 3, 1, 8, 7, 4, 5]], expected: 16 },
    { args: [[10, 20], [2, 3, 1, 2, 5, 8, 4, 3]], expected: 23 },
  ],
  hiddenTests: [
    { args: [[1], [1, 2, 3, 4]], expected: 5 },
    { args: [[5], [1, 1, 1, 1]], expected: 6 },
    { args: [[0], [3, 3, 3, 3]], expected: 3 },
    { args: [[1, 2], [1, 1, 1, 1, 1, 1, 1, 1]], expected: 3 },
    { args: [[3, 1], [10, 8, 6, 4, 2, 2, 2, 2]], expected: 11 },
    { args: [[1, 5], [5, 5, 5, 5, 1, 1, 1, 1]], expected: 6 },
    { args: [[10, 1], [1, 2, 3, 4, 5, 6, 7, 8]], expected: 14 },
    { args: [[1, 1, 1], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]], expected: 5 },
  ],
};
