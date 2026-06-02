import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-good-days-to-rob-bank',
  title: 'Find the Good Days to Rob the Bank',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a 0-indexed integer array \`security\` of length \`n\` and a non-negative integer \`time\`.

Day \`i\` is a **good day** to rob the bank if:

- There are at least \`time\` days before day \`i\` with non-increasing values (i.e., \`security[i - time] >= security[i - time + 1] >= ... >= security[i - 1] >= security[i]\`), AND
- There are at least \`time\` days after day \`i\` with non-decreasing values (i.e., \`security[i] <= security[i + 1] <= ... <= security[i + time]\`).

Return a list of all days (0-indexed) that are good days to rob the bank. The answer must be sorted in **increasing order**.

**Note:** If \`time == 0\`, every day is a good day.`,
  constraints: [
    '`1 <= security.length <= 10^5`',
    '`0 <= security[i] <= 10^5`',
    '`0 <= time <= 10^5`',
  ],
  examples: [
    {
      input: 'security = [5,4,3,3,4,5,5], time = 2',
      output: '[2,3]',
      explanation: 'Day 2: security[0] >= security[1] >= security[2] (5 >= 4 >= 3) and security[2] <= security[3] <= security[4] (3 <= 3 <= 4). Day 3: security[1] >= security[2] >= security[3] (4 >= 3 >= 3) and security[3] <= security[4] <= security[5] (3 <= 4 <= 5).',
    },
    {
      input: 'security = [1,1,1,1,1], time = 0',
      output: '[0,1,2,3,4]',
      explanation: 'Since time = 0, every day is a good day.',
    },
    {
      input: 'security = [1,2,3,4,5,6], time = 2',
      output: '[]',
      explanation: 'No day satisfies the non-increasing condition before it.',
    },
  ],
  hints: [
    'Build a prefix array `dec` where `dec[i]` = the number of consecutive non-increasing days ending at day `i`.',
    'Build a suffix array `inc` where `inc[i]` = the number of consecutive non-decreasing days starting at day `i`.',
    'Day `i` is good if `dec[i] >= time && inc[i] >= time`.',
  ],
  functionName: 'goodDaysToRobBank',
  params: ['security', 'time'],
  starterCode: {
    javascript: `function goodDaysToRobBank(security, time) {
  const n = security.length;
  const dec = new Array(n).fill(0), inc = new Array(n).fill(0);
  for (let i = 1; i < n; i++) if (security[i] <= security[i - 1]) dec[i] = dec[i - 1] + 1;
  for (let i = n - 2; i >= 0; i--) if (security[i] <= security[i + 1]) inc[i] = inc[i + 1] + 1;
  const result = [];
  for (let i = 0; i < n; i++) if (dec[i] >= time && inc[i] >= time) result.push(i);
  return result;
}`,
    typescript: `function goodDaysToRobBank(security: number[], time: number): number[] {
  const n = security.length;
  const dec = new Array<number>(n).fill(0), inc = new Array<number>(n).fill(0);
  for (let i = 1; i < n; i++) if (security[i]! <= security[i - 1]!) dec[i] = dec[i - 1]! + 1;
  for (let i = n - 2; i >= 0; i--) if (security[i]! <= security[i + 1]!) inc[i] = inc[i + 1]! + 1;
  const result: number[] = [];
  for (let i = 0; i < n; i++) if (dec[i]! >= time && inc[i]! >= time) result.push(i);
  return result;
}`,
    python: `def goodDaysToRobBank(security: list[int], time: int) -> list[int]:
    n = len(security)
    dec, inc = [0] * n, [0] * n
    for i in range(1, n):
        if security[i] <= security[i-1]: dec[i] = dec[i-1] + 1
    for i in range(n-2, -1, -1):
        if security[i] <= security[i+1]: inc[i] = inc[i+1] + 1
    return [i for i in range(n) if dec[i] >= time and inc[i] >= time]`,
  },
  visibleTests: [
    { args: [[5, 4, 3, 3, 4, 5, 5], 2], expected: [2, 3] },
    { args: [[1, 1, 1, 1, 1], 0], expected: [0, 1, 2, 3, 4] },
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: [] },
  ],
  hiddenTests: [
    { args: [[], 2], expected: [] },
    { args: [[5], 0], expected: [0] },
    { args: [[2, 1, 3], 1], expected: [1] },
    { args: [[2, 1, 1, 1, 2], 1], expected: [1, 2, 3] },
  ],
};
