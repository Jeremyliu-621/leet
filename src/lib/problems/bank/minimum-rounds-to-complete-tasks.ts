import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-rounds-to-complete-tasks',
  title: 'Minimum Rounds to Complete All Tasks',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `You are given a **0-indexed** integer array \`tasks\`, where \`tasks[i]\` represents the difficulty level of a task. In each round, you can complete either **2 or 3** tasks of the **same difficulty level**.

Return *the **minimum** rounds required to complete all the tasks, or* \`-1\` *if any task cannot be completed*.`,
  constraints: [
    '1 <= tasks.length <= 10^5',
    '1 <= tasks[i] <= 10^9',
  ],
  examples: [
    {
      input: 'tasks = [2,2,3,3,2,4,4,4,4,4]',
      output: '4',
      explanation: 'Complete 3 tasks of difficulty 2 (1 round), 2 tasks of difficulty 3 (1 round), complete 3+2 or 2+3 tasks of difficulty 4 (2 rounds). Total: 4.',
    },
    {
      input: 'tasks = [2,3,3]',
      output: '-1',
      explanation: 'Only 1 task of difficulty 2 exists. A single task cannot be completed in any round.',
    },
  ],
  hints: [
    'Count the frequency of each difficulty level.',
    'If any frequency is 1, return -1 (impossible).',
    'For frequency f: use ceil(f/3) rounds — batch into groups of 3 (using 2 when f % 3 == 1 or f % 3 == 2).',
  ],
  functionName: 'minimumRounds',
  params: ['tasks'],
  starterCode: {
    javascript: `function minimumRounds(tasks) {

}`,
    python: `def minimumRounds(tasks):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 3, 3, 2, 4, 4, 4, 4, 4]], expected: 4 },
    { args: [[2, 3, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1]], expected: -1 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 2 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 3 },
  ],
};
