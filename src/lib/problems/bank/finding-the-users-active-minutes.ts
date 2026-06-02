import type { Problem } from '../types';

export const problem: Problem = {
  id: 'finding-the-users-active-minutes',
  title: 'Finding the Users Active Minutes',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given the logs for users' actions on LeetCode, and an integer \`k\`. The logs are represented by a 2D integer array \`logs\` where each \`logs[i] = [IDi, timei]\` indicates that the user with \`IDi\` performed an action at the minute \`timei\`.

**Multiple users** can perform actions simultaneously, and a single user can perform **multiple actions** in the same minute. The **User Active Minutes (UAM)** for a given user is defined as the **number of unique minutes** in which the user performed at least one action. A minute in which **multiple actions** are performed counts as a **single** minute.

You are to calculate a **1-indexed** answer array \`answer\` of size \`k\` such that, for each \`j\` (\`1 <= j <= k\`), \`answer[j - 1]\` is the **number of users** whose UAM equals \`j\`.

Return the answer array.`,
  constraints: [
    '`1 <= logs.length <= 10^4`',
    '`0 <= IDi <= 10^9`',
    '`1 <= timei <= 10^5`',
    '`k` is in the range `[the maximum UAM for a user, 10^5]`.',
  ],
  examples: [
    {
      input: 'logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5',
      output: '[0,2,0,0,0]',
      explanation: 'User 0: unique minutes = {5,2} → UAM=2. User 1: unique minutes = {2,3} → UAM=2. answer[1]=2.',
    },
    {
      input: 'logs = [[1,1],[2,2],[2,3]], k = 4',
      output: '[1,1,0,0]',
      explanation: 'User 1: UAM=1 → answer[0]++. User 2: UAM=2 → answer[1]++.',
    },
  ],
  hints: [
    'Use a Map from userId to a Set of unique minute values.',
    'After processing all logs, iterate over each user\'s Set and increment answer[set.size - 1].',
    'Initialize the answer array of length k with zeros. If a user\'s UAM is out of range [1,k], skip them (the problem guarantees this won\'t happen, but it\'s good defensive practice).',
  ],
  functionName: 'findingUsersActiveMinutes',
  params: ['logs', 'k'],
  starterCode: {
    javascript: `function findingUsersActiveMinutes(logs, k) {
  const uam = new Map();
  for (const [id, t] of logs) {
    if (!uam.has(id)) uam.set(id, new Set());
    uam.get(id).add(t);
  }
  const ans = new Array(k).fill(0);
  for (const s of uam.values()) if (s.size <= k) ans[s.size - 1]++;
  return ans;
}`,
    typescript: `function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const uam = new Map<number, Set<number>>();
  for (const [id, t] of logs) {
    if (!uam.has(id)) uam.set(id, new Set());
    uam.get(id)!.add(t);
  }
  const ans = new Array(k).fill(0);
  for (const s of uam.values()) if (s.size <= k) ans[s.size - 1]++;
  return ans;
}`,
    python: `def findingUsersActiveMinutes(logs, k):
    from collections import defaultdict
    uam = defaultdict(set)
    for uid, t in logs: uam[uid].add(t)
    ans = [0] * k
    for s in uam.values():
        if len(s) <= k: ans[len(s) - 1] += 1
    return ans`,
  },
  visibleTests: [
    { args: [[[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], 5], expected: [0, 2, 0, 0, 0] },
    { args: [[[1, 1], [2, 2], [2, 3]], 4], expected: [1, 1, 0, 0] },
  ],
  hiddenTests: [
    { args: [[[1, 1]], 1], expected: [1] },
    { args: [[[1, 1], [1, 1]], 1], expected: [1] },
    { args: [[[1, 1], [1, 2]], 2], expected: [0, 1] },
    { args: [[[1, 1], [2, 1]], 1], expected: [2] },
    { args: [[[1, 1], [2, 2], [3, 3]], 3], expected: [3, 0, 0] },
    { args: [[[1, 1], [1, 2], [1, 3]], 3], expected: [0, 0, 1] },
  ],
};
