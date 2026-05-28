import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-rounds-to-complete-all-tasks',
  title: 'Minimum Rounds to Complete All Tasks',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** integer array \`tasks\`, where \`tasks[i]\` represents the difficulty level of a task. In each round, you can complete either **2 or 3** tasks of the **same difficulty level**.

Return the **minimum rounds** required to complete all the tasks, or \`-1\` if it is not possible to complete all the tasks.`,
  constraints: [
    '1 <= tasks.length <= 10^5',
    '1 <= tasks[i] <= 10^9',
  ],
  examples: [
    {
      input: 'tasks = [2,2,3,3,2,4,4,4,4,4]',
      output: '4',
      explanation: 'Difficulty 2 appears 3 times: 1 round of 3. Difficulty 3 appears 2 times: 1 round of 2. Difficulty 4 appears 5 times: 1 round of 3 + 1 round of 2. Total = 4 rounds.',
    },
    {
      input: 'tasks = [2,3,3]',
      output: '-1',
      explanation: 'Difficulty 2 appears only once. It is impossible to complete it in any round.',
    },
  ],
  hints: [
    'Count the frequency of each distinct task difficulty.',
    'If any difficulty appears exactly once, it is impossible (return -1). For frequency f ≥ 2, you can always express it as a sum of 2s and 3s.',
    'For frequency f, the minimum rounds is ceil(f / 3): use as many 3-task rounds as possible, then use 2-task rounds for the remainder.',
  ],
  functionName: 'minimumRounds',
  params: ['tasks'],
  starterCode: {
    javascript: 'function minimumRounds(tasks) {\n\n}\n',
    python: 'def minimumRounds(tasks: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[2,2,3,3,2,4,4,4,4,4]], expected: 4 },
    { args: [[2,3,3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[5,5,5]], expected: 1 },
    { args: [[1,1,2,2]], expected: 2 },
    { args: [[1,1,1,1,1,1,1]], expected: 3 },
    { args: [[3,3,3,3,3,3]], expected: 2 },
  ],
};
