import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-integers-to-choose-from-a-range-ii',
  title: 'Maximum Number of Integers to Choose From a Range II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an integer array \`banned\`, two integers \`n\` and \`maxSum\`.

Choose some integers from the range \`[1, n]\` following these rules:
- The chosen integers are **not** in the \`banned\` array.
- The sum of the chosen integers does **not** exceed \`maxSum\`.

Return the **maximum** number of integers you can choose following the rules.

**Note:** Unlike Part I (where \`n ≤ 10^4\`), here \`n ≤ 10^9\`, so an efficient O(b log n) approach is required.`,
  constraints: [
    '`1 <= banned.length <= 10^4`',
    '`1 <= banned[i] <= n`',
    '`1 <= n <= 10^9`',
    '`1 <= maxSum <= 10^15`',
  ],
  examples: [
    {
      input: 'banned = [1,4,6], n = 6, maxSum = 5',
      output: '2',
      explanation: 'Available: [2,3,5]. Choose 2 and 3 (sum=5 ≤ 5). Can\'t add 5 (sum=10 > 5).',
    },
    {
      input: 'banned = [4,3,5,6], n = 7, maxSum = 18',
      output: '3',
      explanation: 'Available: [1,2,7]. Choose all 3 (sum=10 ≤ 18).',
    },
  ],
  hints: [
    'Sort the banned set; iterate over valid "gap" intervals between consecutive banned values.',
    'For each gap [lo, hi], binary search for the maximum k integers 1..k starting at lo that still fit in the remaining budget.',
    'Sum of k integers starting at lo = k*lo + k*(k-1)/2.',
    `\`\`\`js
function maxCount(banned, n, maxSum) {
  const bannedSet = new Set(banned);
  const sorted = [...bannedSet].filter(x => x <= n).sort((a, b) => a - b);
  let count = 0, sum = 0, prev = 0;
  const takeFrom = (lo, hi) => {
    let lo2 = 0, hi2 = hi - lo + 1;
    while (lo2 < hi2) {
      const mid = Math.floor((lo2 + hi2 + 1) / 2);
      if (sum + mid * lo + mid * (mid - 1) / 2 <= maxSum) lo2 = mid;
      else hi2 = mid - 1;
    }
    sum += lo2 * lo + lo2 * (lo2 - 1) / 2;
    count += lo2;
  };
  for (const b of sorted) {
    if (b > prev + 1) takeFrom(prev + 1, b - 1);
    prev = b;
  }
  if (prev < n) takeFrom(prev + 1, n);
  return count;
}\`\`\``,
  ],
  functionName: 'maxCount',
  params: ['banned', 'n', 'maxSum'],
  starterCode: {
    javascript: `function maxCount(banned, n, maxSum) {

}`,
    typescript: 'function maxCount(banned: number[], n: number, maxSum: number): number {\n\n}',
    python: `def maxCount(banned, n, maxSum):
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 6], 6, 5], expected: 2 },
    { args: [[4, 3, 5, 6], 7, 18], expected: 3 },
    { args: [[11], 7, 50], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 10, 100], expected: 5 },
    { args: [[], 5, 15], expected: 5 },
    { args: [[1], 1000000000, 1000000000], expected: 44719 },
    { args: [[2], 10, 30], expected: 6 },
    { args: [[5, 10], 100, 500], expected: 29 },
  ],
};
