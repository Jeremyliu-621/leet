import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-rounds-complete-tasks',
  title: 'Minimum Rounds to Complete All Tasks',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`tasks\`, where \`tasks[i]\` represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the **same difficulty level**.

Return the **minimum** rounds required to complete all the tasks, or \`-1\` if it is not possible to complete all the tasks.`,
  constraints: [
    '`1 <= tasks.length <= 10^5`',
    '`1 <= tasks[i] <= 10^9`',
  ],
  examples: [
    { input: 'tasks = [2,2,3,3,2,4,4,4,4,4]', output: '4', explanation: '3 rounds of difficulty 2 (not possible: use 1+2 rounds = 3 tasks takes ceil(3/3)=1+0=? Actually: 3 tasks → 1 round of 3. 4 tasks → 2 rounds of 2. Total=4.' },
    { input: 'tasks = [2,3,3]', output: '-1', explanation: 'Only one task of difficulty 2 — cannot complete.' },
  ],
  hints: [
    'Count frequency of each difficulty.',
    'For frequency f: if f == 1, return -1. Otherwise ceil(f/3) rounds suffice (use greedy: prefer 3s, then 2s).',
    'Mathematically: f % 3 == 0 → f/3 rounds; f % 3 == 1 → (f-4)/3 + 2 rounds = (f+2)/3 rounds; f % 3 == 2 → (f+1)/3 rounds. All simplify to Math.ceil(f/3).',
  ],
  functionName: 'minimumRounds',
  params: ['tasks'],
  starterCode: {
    javascript: 'function minimumRounds(tasks) {\n  \n}\n',
    python: 'def minimumRounds(tasks):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 2, 3, 3, 2, 4, 4, 4, 4, 4]], expected: 4 },
    { args: [[2, 3, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1]], expected: -1 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1, 1, 1, 2, 2, 2, 2]], expected: 3 },
    { args: [[5, 5, 5, 5, 5]], expected: 2 },
  ],
};
