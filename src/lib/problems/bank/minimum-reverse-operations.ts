import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-reverse-operations',
  title: 'Minimum Reverse Operations',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `You are given an integer \`n\` and an integer \`p\` which is the initial position (0-indexed) of a ball. You are also given a **0-indexed** integer array \`banned\` which contains positions where the ball **cannot** go.

For each step, you can select a subarray of size \`k\` from the valid positions (positions not in \`banned\`) that **contains** the ball's current position, and **reverse** it. The ball moves to its new position after the reversal.

Find the **minimum** number of steps to reach each position \`i\` from position \`p\`. The answer for position \`p\` is \`0\`. If reaching position \`i\` is impossible, the answer is \`-1\`.

Return an array \`ans\` of length \`n\` where \`ans[i]\` is the minimum number of steps to reach position \`i\` from position \`p\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '0 <= p <= n - 1',
    '0 <= banned.length <= n - 1',
    '0 <= banned[i] <= n - 1',
    '1 <= k <= n',
    'banned[i] != p',
    'All values in banned are unique.',
  ],
  examples: [
    {
      input: 'n = 4, p = 0, banned = [1,2], k = 4',
      output: '[0,-1,-1,1]',
      explanation: 'Ball starts at 0. After one reversal of [0,1,2,3], ball moves to position 3. Positions 1 and 2 are banned.',
    },
    {
      input: 'n = 5, p = 0, banned = [2,4], k = 1',
      output: '[0,-1,-1,-1,-1]',
      explanation: 'k=1 reversals don\'t move the ball. Only position 0 is reachable.',
    },
  ],
  hints: [
    'Level 1: BFS from p. From current position cur, a reversal of window [l, l+k-1] containing cur maps cur to l+k-1-cur+l = 2l+k-1-cur. So the reachable positions in one step are {2l+k-1-cur : l in [max(0,cur-k+1), min(n-k,cur)]}.',
    'Level 2: The set of new positions forms a contiguous range of same parity as cur (step by 2). Use two sorted sets (one for even, one for odd positions) of unvisited, non-banned positions. For each BFS step, extract the entire range at once.',
    'Level 3: Initialize two TreeSet-like structures (sorted sets) with all non-banned positions. From cur, compute lo = 2*max(0,cur-k+1)+k-1-cur and hi = 2*min(n-k,cur)+k-1-cur. All positions in [lo,hi] with same parity as lo are reachable in one step — collect and remove them from the set.',
  ],
  functionName: 'minReverseOperations',
  params: ['n', 'p', 'banned', 'k'],
  starterCode: {
    javascript: `function minReverseOperations(n, p, banned, k) {
  const bannedSet = new Set(banned);
  const available = new Array(n).fill(true);
  available[p] = false;
  for (const b of bannedSet) available[b] = false;
  const ans = new Array(n).fill(-1);
  ans[p] = 0;
  const queue = [p];
  let qi = 0;
  while (qi < queue.length) {
    const cur = queue[qi++];
    const lo = 2 * Math.max(0, cur - k + 1) + k - 1 - cur;
    const hi = 2 * Math.min(n - k, cur) + k - 1 - cur;
    for (let pos = lo; pos <= hi; pos += 2) {
      if (available[pos]) {
        available[pos] = false;
        ans[pos] = ans[cur] + 1;
        queue.push(pos);
      }
    }
  }
  return ans;
}`,
    typescript: `function minReverseOperations(n: number, p: number, banned: number[], k: number): number[] {
  const bannedSet = new Set(banned);
  const available = new Array<boolean>(n).fill(true);
  available[p] = false;
  for (const b of bannedSet) available[b] = false;
  const ans = new Array<number>(n).fill(-1);
  ans[p] = 0;
  const queue: number[] = [p];
  let qi = 0;
  while (qi < queue.length) {
    const cur = queue[qi++]!;
    const lo = 2 * Math.max(0, cur - k + 1) + k - 1 - cur;
    const hi = 2 * Math.min(n - k, cur) + k - 1 - cur;
    for (let pos = lo; pos <= hi; pos += 2) {
      if (available[pos]) {
        available[pos] = false;
        ans[pos] = ans[cur]! + 1;
        queue.push(pos);
      }
    }
  }
  return ans;
}`,
    python: `def minReverseOperations(n, p, banned, k):
    banned = list(banned.to_py()) if hasattr(banned, 'to_py') else list(banned)
    banned_set = set(banned)
    available = [True] * n
    available[p] = False
    for b in banned_set: available[b] = False
    ans = [-1] * n; ans[p] = 0
    from collections import deque
    queue = deque([p])
    while queue:
        cur = queue.popleft()
        lo = 2 * max(0, cur - k + 1) + k - 1 - cur
        hi = 2 * min(n - k, cur) + k - 1 - cur
        pos = lo
        while pos <= hi:
            if available[pos]:
                available[pos] = False
                ans[pos] = ans[cur] + 1
                queue.append(pos)
            pos += 2
    return ans`,
  },
  visibleTests: [
    {
      args: [4, 0, [1,2], 4],
      expected: [0,-1,-1,1],
    },
    {
      args: [5, 0, [2,4], 1],
      expected: [0,-1,-1,-1,-1],
    },
  ],
  hiddenTests: [
    {
      args: [4, 0, [], 2],
      expected: [0,1,2,3],
    },
    {
      args: [4, 2, [], 3],
      expected: [1,-1,0,-1],
    },
    {
      args: [3, 1, [], 2],
      expected: [1,0,1],
    },
    {
      args: [1, 0, [], 1],
      expected: [0],
    },
  ],
};
