import type { Problem } from '../types';

export const problem: Problem = {
  id: 'confusing-number-ii',
  title: 'Confusing Number II',
  difficulty: 'hard',
  tags: ['math', 'backtracking'],
  description: `A **confusing number** is a number that, when rotated 180 degrees, becomes a **different** valid number (with no leading zeros).

When rotated 180 degrees, the digits transform as follows:
- \`0 → 0\`, \`1 → 1\`, \`6 → 9\`, \`8 → 8\`, \`9 → 6\`

The digits \`2\`, \`3\`, \`4\`, \`5\`, and \`7\` are invalid when rotated (not considered).

A number is confusing if:
1. All its digits are valid (only \`0\`, \`1\`, \`6\`, \`8\`, \`9\`).
2. After rotating 180° (reversing digit order and applying the mapping), the result is a **different** number.

For example, \`6\` rotates to \`9\` (confusing), but \`69\` rotates to itself (not confusing).

Given an integer \`n\`, return the count of confusing numbers in the range \`[1, n]\`.`,
  constraints: [
    '1 <= n <= 10^7',
  ],
  examples: [
    {
      input: 'n = 20',
      output: '6',
      explanation: 'Confusing numbers ≤ 20: 6, 9, 10, 16, 18, 19. Total = 6.',
    },
    {
      input: 'n = 100',
      output: '19',
      explanation: 'There are 19 confusing numbers in [1, 100].',
    },
  ],
  hints: [
    'Only digits 0, 1, 6, 8, 9 are valid after rotation. Use DFS/backtracking to generate all numbers using only these digits up to n.',
    'For each generated number, check if its 180° rotation (reverse digits, apply mapping) produces a different number.',
    'Avoid leading zeros: the first digit chosen must be non-zero.',
  ],
  functionName: 'confusingNumberII',
  params: ['n'],
  starterCode: {
    javascript: `function confusingNumberII(n) {
  const rot = {0:0,1:1,6:9,8:8,9:6};
  const digits = [0,1,6,8,9];
  let count = 0;
  function isConfusing(num) {
    let orig = num, r = 0, tmp = num;
    while (tmp > 0) { r = r * 10 + rot[tmp % 10]; tmp = Math.floor(tmp / 10); }
    return r !== orig;
  }
  function dfs(cur) {
    if (cur !== 0 && isConfusing(cur)) count++;
    for (const d of digits) {
      if (cur === 0 && d === 0) continue;
      const next = cur * 10 + d;
      if (next > n) break;
      dfs(next);
    }
  }
  dfs(0);
  return count;
}`,
    typescript: `function confusingNumberII(n: number): number {
  const rot: Record<number, number> = {0:0,1:1,6:9,8:8,9:6};
  const digits = [0,1,6,8,9];
  let count = 0;
  function isConfusing(num: number): boolean {
    let orig = num, r = 0, tmp = num;
    while (tmp > 0) { r = r * 10 + rot[tmp % 10]!; tmp = Math.floor(tmp / 10); }
    return r !== orig;
  }
  function dfs(cur: number): void {
    if (cur !== 0 && isConfusing(cur)) count++;
    for (const d of digits) {
      if (cur === 0 && d === 0) continue;
      const next = cur * 10 + d;
      if (next > n) break;
      dfs(next);
    }
  }
  dfs(0);
  return count;
}`,
    python: `def confusingNumberII(n):
    if hasattr(n, 'to_py'): n = n.to_py()
    n = int(n)
    rot = {0:0,1:1,6:9,8:8,9:6}
    digits = [0,1,6,8,9]
    count = [0]
    def is_confusing(num):
        orig, r, tmp = num, 0, num
        while tmp > 0: r = r * 10 + rot[tmp % 10]; tmp //= 10
        return r != orig
    def dfs(cur):
        if cur != 0 and is_confusing(cur): count[0] += 1
        for d in digits:
            if cur == 0 and d == 0: continue
            nxt = cur * 10 + d
            if nxt > n: break
            dfs(nxt)
    dfs(0)
    return count[0]`,
  },
  visibleTests: [
    { args: [20], expected: 6 },
    { args: [100], expected: 19 },
    { args: [1], expected: 0 },
    { args: [9], expected: 2 },
    { args: [6], expected: 1 },
  ],
  hiddenTests: [
    { args: [25], expected: 6 },
    { args: [10], expected: 3 },
    { args: [9999999], expected: 77626 },
    { args: [1000000], expected: 15427 },
    { args: [50], expected: 6 },
    { args: [200], expected: 40 },
    { args: [100000], expected: 3027 },
    { args: [19], expected: 6 },
    { args: [1000], expected: 107 },
    { args: [60], expected: 7 },
  ],
};
