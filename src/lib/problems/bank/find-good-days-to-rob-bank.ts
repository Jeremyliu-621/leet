import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-good-days-to-rob-bank',
  title: 'Find Good Days to Rob the Bank',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You and a gang of thieves are planning on robbing a bank. You are given a **0-indexed** integer array \`security\`, where \`security[i]\` is the number of guards on duty on the \`i\`th day. The days are numbered starting from \`0\`. You are also given an integer \`time\`.

The \`i\`th day is a good day to rob the bank if:
- There are at least \`time\` days before it and there are at least \`time\` days after it.
- The number of guards is **non-increasing** for \`time\` days before day \`i\`.
- The number of guards is **non-decreasing** for \`time\` days after day \`i\`.

Return *a list of all days (0-indexed) that are good days to rob the bank*. The order that the days are returned in does **not** matter.`,
  constraints: [
    '1 <= security.length <= 10^5',
    '0 <= security[i] <= 10^5',
    '0 <= time <= 10^5',
  ],
  examples: [
    {
      input: 'security = [5,3,3,3,5,6,2], time = 2',
      output: '[2,3]',
      explanation: 'Day 2: guards are [5,3,3] non-increasing before, [3,5,6] non-decreasing after. Day 3: guards [3,3,3] non-increasing before, [3,6,2] — wait, 6>2 after day 3 by 2 days: [3,5,6]? Let\'s verify directly: security[1]=3≥security[2]=3≥security[3]=3, security[3]=3≤security[4]=5≤security[5]=6 → day 3 is good too.',
    },
    {
      input: 'security = [1,1,1,1,1], time = 0',
      output: '[0,1,2,3,4]',
      explanation: 'time=0 means no guards need to be checked before or after; every day qualifies.',
    },
    {
      input: 'security = [1,2,3,4,5,6], time = 2',
      output: '[]',
      explanation: 'Guards are strictly increasing, so no day has non-increasing guards before it.',
    },
  ],
  hints: [
    'Level 1: Precompute dec[i] = length of non-increasing run ending at i (how many consecutive days ≤ previous before i). Similarly inc[i] = length of non-decreasing run starting at i.',
    'Level 2: dec[i] = dec[i-1]+1 if security[i] ≤ security[i-1], else 0. inc[i] = inc[i+1]+1 if security[i] ≤ security[i+1], else 0.',
    'Level 3: Day i is good iff dec[i] >= time AND inc[i] >= time. Collect all such i. O(n) time, O(n) space.',
  ],
  functionName: 'goodDaysToRobBank',
  params: ['security', 'time'],
  starterCode: {
    javascript: `function goodDaysToRobBank(security, time) {
  const n = security.length;
  const dec = new Array(n).fill(0);
  const inc = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) dec[i] = dec[i - 1] + 1;
  }
  for (let i = n - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) inc[i] = inc[i + 1] + 1;
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    if (dec[i] >= time && inc[i] >= time) result.push(i);
  }
  return result;
}`,
    typescript: `function goodDaysToRobBank(security: number[], time: number): number[] {
  const n = security.length;
  const dec = new Array<number>(n).fill(0);
  const inc = new Array<number>(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (security[i]! <= security[i - 1]!) dec[i] = dec[i - 1]! + 1;
  }
  for (let i = n - 2; i >= 0; i--) {
    if (security[i]! <= security[i + 1]!) inc[i] = inc[i + 1]! + 1;
  }
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (dec[i]! >= time && inc[i]! >= time) result.push(i);
  }
  return result;
}`,
    python: `def goodDaysToRobBank(security, time):
    n = len(security)
    dec = [0] * n
    inc = [0] * n
    for i in range(1, n):
        if security[i] <= security[i - 1]:
            dec[i] = dec[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if security[i] <= security[i + 1]:
            inc[i] = inc[i + 1] + 1
    return [i for i in range(n) if dec[i] >= time and inc[i] >= time]`,
  },
  visibleTests: [
    { args: [[5, 3, 3, 3, 5, 6, 2], 2], expected: [2, 3] },
    { args: [[1, 1, 1, 1, 1], 0], expected: [0, 1, 2, 3, 4] },
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: [] },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: [0] },
    { args: [[1], 1], expected: [] },
    { args: [[5, 5, 5, 5, 5], 2], expected: [2] },
    { args: [[3, 3, 3, 2, 2, 2, 2, 3, 3, 3], 2], expected: [3, 4, 5, 6] },
    { args: [[1, 2, 1, 2, 1], 1], expected: [2] },
  ],
};
