import type { Problem } from '../types';

export const problem: Problem = {
  id: 'finding-users-active-minutes',
  title: 'Finding the Users Active Minutes',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given the logs for users' actions on LeetCode, and an integer \`k\`. The logs are represented by a 2D integer array \`logs\` where each \`logs[i] = [ID_i, time_i]\` indicates that the user with \`ID_i\` performed an action at minute \`time_i\`.

**Multiple** users can act in the same minute. A user can act multiple times in the same minute.

The **User Active Minutes (UAM)** for a given user is defined as the number of **unique** minutes in which the user performed at least one action. Actions performed in the same minute are only counted once.

You are to calculate a **1-indexed** array \`answer\` of size \`k\` such that, for each \`j\` (1-indexed), \`answer[j]\` is the number of users whose UAM equals \`j\`.

**Approach:** Use a hash map to collect unique minutes per user. Count UAM values and aggregate into the result array.`,
  constraints: [
    '1 <= logs.length <= 10^4',
    '0 <= ID_i <= 10^9',
    '1 <= time_i <= 10^5',
    'k is in the range [The maximum UAM for a user, 10^5].',
  ],
  examples: [
    {
      input: 'logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5',
      output: '[0,2,0,0,0]',
      explanation: 'User 0: actions at minutes 5,2,5 → UAM=2 (unique: {2,5}). User 1: actions at 2,3 → UAM=2. Both have UAM=2, so answer[2]=2.',
    },
    {
      input: 'logs = [[1,1],[2,2],[2,3]], k = 4',
      output: '[1,1,0,0]',
      explanation: 'User 1: UAM=1. User 2: UAM=2. answer[1]=1, answer[2]=1.',
    },
  ],
  hints: [
    'Use a Map from user ID to a Set of unique minutes.',
    'Count how many users have each UAM value, then fill the answer array.',
    '```js\nfunction findingUsersActiveMinutes(logs, k) {\n  const uam = new Map();\n  for (const [id, t] of logs) {\n    if (!uam.has(id)) uam.set(id, new Set());\n    uam.get(id).add(t);\n  }\n  const ans = new Array(k).fill(0);\n  for (const s of uam.values()) if (s.size <= k) ans[s.size - 1]++;\n  return ans;\n}\n```',
  ],
  functionName: 'findingUsersActiveMinutes',
  params: ['logs', 'k'],
  starterCode: {
    javascript: `function findingUsersActiveMinutes(logs, k) {
  // return 1-indexed array of size k

}`,
    typescript: "function findingUsersActiveMinutes(logs: number[][], k: number): number[] {\n  // return 1-indexed array of size k\n\n}",

    python: `def findingUsersActiveMinutes(logs: list, k: int) -> list:
    # return 1-indexed array of size k
    pass
`,
  },
  visibleTests: [
    { args: [[[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], 5], expected: [0, 2, 0, 0, 0] },
    { args: [[[1, 1], [2, 2], [2, 3]], 4], expected: [1, 1, 0, 0] },
  ],
  hiddenTests: [
    { args: [[[1, 1]], 1], expected: [1] },
    { args: [[[1, 1], [1, 1], [1, 1]], 3], expected: [1, 0, 0] },
    { args: [[[1, 1], [2, 1], [3, 1]], 3], expected: [3, 0, 0] },
    { args: [[[1, 1], [1, 2], [1, 3]], 3], expected: [0, 0, 1] },
    { args: [[[1, 1], [2, 2], [3, 3], [4, 1], [4, 2], [4, 3]], 3], expected: [3, 0, 1] },
    { args: [[[0, 1], [0, 2], [1, 1], [1, 3], [2, 1]], 5], expected: [1, 2, 0, 0, 0] },
  ],
};
