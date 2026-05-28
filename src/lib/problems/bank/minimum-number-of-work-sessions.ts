import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-work-sessions',
  title: 'Minimum Number of Work Sessions to Finish the Tasks',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'backtracking'],
  description: `There are \`n\` tasks you need to do. Given a non-negative integer array \`tasks\` and an integer \`sessionTime\`, you can start a new work session whenever you want. You finish all tasks in a session if the sum of task durations in that session is at most \`sessionTime\`. Return the **minimum** number of work sessions needed.`,
  constraints: [
    '`n == tasks.length`',
    '`1 <= n <= 14`',
    '`1 <= tasks[i] <= 10`',
    '`max(tasks) <= sessionTime <= 15`',
  ],
  examples: [
    {
      input: 'tasks = [1,2,3], sessionTime = 3',
      output: '2',
      explanation: 'First session: [1,2]. Second session: [3].',
    },
    {
      input: 'tasks = [3,1,3,1,1], sessionTime = 8',
      output: '2',
      explanation: 'First session: [3,3,1]. Second session: [1,1].',
    },
    {
      input: 'tasks = [1,2,3,4,5], sessionTime = 15',
      output: '1',
      explanation: 'All tasks fit in one session.',
    },
  ],
  hints: [
    'Bitmask DP: dp[mask] = minimum (sessions_needed, remaining_time_in_current_session) to finish tasks in mask.',
    'Sort tasks in descending order to prune branches earlier. Try adding each unfinished task to the current session or starting a new one.',
    'State: (done_mask, remaining). Memoize using (done_mask, remaining) as key. Answer is 1 + dp(0, sessionTime).',
  ],
  functionName: 'minSessions',
  params: ['tasks', 'sessionTime'],
  starterCode: {
    javascript: `function minSessions(tasks, sessionTime) {

}`,
    python: `def minSessions(tasks, sessionTime):
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3], 3], expected: 2 },
    { args: [[3,1,3,1,1], 8], expected: 2 },
    { args: [[1,2,3,4,5], 15], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5,5,5], 10], expected: 2 },
    { args: [[3,3,3,3,3], 9], expected: 2 },
    { args: [[1,1,1,1,1,1], 3], expected: 2 },
    { args: [[2,3,3,4,4,4], 8], expected: 3 },
  ],
};
