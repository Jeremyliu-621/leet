import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-three-digit-even-numbers',
  title: 'Find All Three-Digit Even Numbers',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array of digits \`digits\` (0–9). Each element in \`digits\` can be used **at most as many times as it appears** in the array.

Return a **sorted** array of all **unique** three-digit even numbers that can be formed using elements from \`digits\`.

A **three-digit even number** is an integer between 100 and 998 (inclusive) that is even and whose leading digit is not 0.`,
  constraints: ['3 <= digits.length <= 100', '0 <= digits[i] <= 9'],
  examples: [
    {
      input: 'digits = [2,1,3,0]',
      output: '[102,120,130,132,210,230,302,310,312,320]',
      explanation: 'All three-digit even numbers formed from {2,1,3,0} where each digit is used at most once.',
    },
    {
      input: 'digits = [2,2,8,8,2]',
      output: '[222,228,282,288,822,828,882]',
      explanation: 'The pool has three 2s and two 8s. 222 uses three 2s (available). 888 would need three 8s (only two available).',
    },
    {
      input: 'digits = [3,7,5]',
      output: '[]',
      explanation: 'All digits are odd so no even three-digit number can be formed.',
    },
  ],
  hints: [
    'Iterate through all candidate three-digit even numbers (100, 102, 104, ..., 998). For each, extract its three digits and check if they can be formed from the pool.',
    'Build a frequency map of the available digits. For each candidate number, build a frequency map of its three digits and verify no digit count exceeds the available count.',
    'Because you iterate in increasing order, the result is already sorted when you collect valid candidates.',
  ],
  functionName: 'findEvenNumbers',
  params: ['digits'],
  starterCode: {
    javascript: `function findEvenNumbers(digits) {
  const cnt = new Array(10).fill(0);
  for (const d of digits) cnt[d]++;
  const result = [];
  for (let n = 100; n < 1000; n += 2) {
    const d0 = Math.floor(n / 100), d1 = Math.floor(n / 10) % 10, d2 = n % 10;
    const used = [0,0,0,0,0,0,0,0,0,0];
    used[d0]++; used[d1]++; used[d2]++;
    if (used[d0] <= cnt[d0] && used[d1] <= cnt[d1] && used[d2] <= cnt[d2]) result.push(n);
  }
  return result;
}`,
    typescript: `function findEvenNumbers(digits: number[]): number[] {
  const cnt = new Array<number>(10).fill(0);
  for (const d of digits) cnt[d]!++;
  const result: number[] = [];
  for (let n = 100; n < 1000; n += 2) {
    const d0 = Math.floor(n / 100), d1 = Math.floor(n / 10) % 10, d2 = n % 10;
    const used = new Array<number>(10).fill(0);
    used[d0]!++; used[d1]!++; used[d2]!++;
    if (used[d0]! <= cnt[d0]! && used[d1]! <= cnt[d1]! && used[d2]! <= cnt[d2]!) result.push(n);
  }
  return result;
}`,
    python: `def findEvenNumbers(digits):
    digits = list(digits.to_py()) if hasattr(digits, 'to_py') else list(digits)
    from collections import Counter
    cnt = Counter(digits)
    result = []
    for n in range(100, 1000, 2):
        d0, d1, d2 = n // 100, (n // 10) % 10, n % 10
        used = Counter([d0, d1, d2])
        if all(used[d] <= cnt[d] for d in used):
            result.append(n)
    return result`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 0]], expected: [102, 120, 130, 132, 210, 230, 302, 310, 312, 320] },
    { args: [[2, 2, 8, 8, 2]], expected: [222, 228, 282, 288, 822, 828, 882] },
    { args: [[3, 7, 5]], expected: [] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: [] },
    { args: [[1, 0, 2]], expected: [102, 120, 210] },
    { args: [[4, 4, 4]], expected: [444] },
    { args: [[1, 2, 3, 4]], expected: [124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, 432] },
    { args: [[0, 2, 4]], expected: [204, 240, 402, 420] },
  ],
};
