import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-groups-entering-next-round',
  title: 'Maximum Number of Groups Entering a Competition',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'binary-search'],
  description: `You are given a positive integer array \`grades\` which represents the grades of students in a university. You want to enter all the students into a competition in ordered non-empty groups, such that the ordering meets the following criteria:

- The sum of grades of students in the \`i\`-th group is **less than** the sum of grades of students in the \`(i+1)\`-th group.
- The total number of students in the \`i\`-th group is **less than** the total number of students in the \`(i+1)\`-th group.

Return the **maximum** number of groups that can be formed.`,
  constraints: [
    '`1 <= grades.length <= 10^5`',
    '`1 <= grades[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'grades = [10,6,12,7,3,5]',
      output: '3',
      explanation: 'One valid grouping: {3}, {5,6}, {7,10,12}. Group sizes 1 < 2 < 3 and sums 3 < 11 < 29.',
    },
    {
      input: 'grades = [8,8]',
      output: '1',
      explanation: 'There are only 2 students with equal grades. We can only form one group.',
    },
    {
      input: 'grades = [1,2,3,4,5,6]',
      output: '3',
      explanation: 'One valid grouping: {1}, {2,3}, {4,5,6}. Group sizes 1 < 2 < 3 and sums 1 < 5 < 15.',
    },
  ],
  hints: [
    'Sort grades in descending order. If we pick greedily — taking the k*(k+1)/2 smallest distinct-enough students into k groups — we can binary search on k.',
    'For a given k, check if we can form k groups of sizes 1, 2, …, k using a greedy scan: for each group g (size g), skip any students tied with the previous group\'s minimum, then take the next g students.',
    '```js\nfunction numberOfGroups(grades) {\n  grades.sort((a, b) => b - a);\n  const n = grades.length;\n  function canForm(k) {\n    let i = 0, prevMax = Infinity;\n    for (let g = 1; g <= k; g++) {\n      while (i < n && grades[i] >= prevMax) i++;\n      if (i + g > n) return false;\n      prevMax = grades[i + g - 1];\n      i += g;\n    }\n    return true;\n  }\n  let lo = 0, hi = Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);\n  while (lo < hi) {\n    const mid = (lo + hi + 1) >> 1;\n    if (canForm(mid)) lo = mid; else hi = mid - 1;\n  }\n  return lo;\n}\n```',
  ],
  functionName: 'numberOfGroups',
  params: ['grades'],
  starterCode: {
    javascript: `function numberOfGroups(grades) {
  grades.sort((a, b) => b - a);
  const n = grades.length;
  const canForm = (k) => {
    let i = 0, prevMax = Infinity;
    for (let g = 1; g <= k; g++) {
      while (i < n && grades[i] >= prevMax) i++;
      if (i + g > n) return false;
      prevMax = grades[i + g - 1];
      i += g;
    }
    return true;
  };
  let lo = 0, hi = Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canForm(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    typescript: `function numberOfGroups(grades: number[]): number {
  grades.sort((a, b) => b - a);
  const n = grades.length;
  const canForm = (k: number): boolean => {
    let i = 0, prevMax = Infinity;
    for (let g = 1; g <= k; g++) {
      while (i < n && grades[i]! >= prevMax) i++;
      if (i + g > n) return false;
      prevMax = grades[i + g - 1]!;
      i += g;
    }
    return true;
  };
  let lo = 0, hi = Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canForm(mid)) lo = mid; else hi = mid - 1;
  }
  return lo;
}`,
    python: `def numberOfGroups(grades):
    if hasattr(grades, 'to_py'): grades = list(grades.to_py())
    import math
    grades.sort(reverse=True)
    n = len(grades)
    def can_form(k):
        i, prev_max = 0, float('inf')
        for g in range(1, k + 1):
            while i < n and grades[i] >= prev_max: i += 1
            if i + g > n: return False
            prev_max = grades[i + g - 1]
            i += g
        return True
    lo, hi = 0, int((-1 + math.sqrt(1 + 8 * n)) / 2)
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if can_form(mid): lo = mid
        else: hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [[10, 6, 12, 7, 3, 5]], expected: 3 },
    { args: [[8, 8]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5, 4, 3, 2, 1]], expected: 2 },
    { args: [[5, 5, 5, 5, 5]], expected: 1 },
    { args: [[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]], expected: 4 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 2 },
  ],
};
