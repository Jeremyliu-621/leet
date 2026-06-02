import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-lonely-numbers-in-the-array',
  title: 'Find All Lonely Numbers in the Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. A number \`x\` is **lonely** when it appears only **once**, and no **adjacent** values (i.e., \`x - 1\` and \`x + 1\`) appear in the array.

Return **all** lonely numbers in \`nums\`. You may return the answer in **any order**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [10,6,5,8]',
      output: '[10,8]',
      explanation: '10 appears once with no 9 or 11 → lonely. 8 appears once with no 7 or 9 → lonely. 6 has adjacent 5, 5 has adjacent 6 → neither is lonely.',
    },
    {
      input: 'nums = [1,3,5,3]',
      output: '[1,5]',
      explanation: '1 appears once, no 0 or 2 → lonely. 5 appears once, no 4 or 6 → lonely. 3 appears twice → not lonely.',
    },
  ],
  hints: [
    'Build a frequency map: count[x] = number of occurrences of x in nums.',
    'A number x is lonely if count[x] == 1 AND count[x-1] == 0 AND count[x+1] == 0.',
    'Iterate through the unique keys and collect all lonely numbers.',
  ],
  functionName: 'findLonely',
  params: ['nums'],
  starterCode: {
    javascript: `function findLonely(nums) {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);
  const result = [];
  for (const [n, c] of count) {
    if (c === 1 && !count.has(n - 1) && !count.has(n + 1)) result.push(n);
  }
  return result;
}`,
    typescript: `function findLonely(nums: number[]): number[] {
  const count = new Map<number, number>();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);
  const result: number[] = [];
  for (const [n, c] of count) {
    if (c === 1 && !count.has(n - 1) && !count.has(n + 1)) result.push(n);
  }
  return result;
}`,
    python: `def findLonely(nums):
    from collections import Counter
    count = Counter(nums)
    return [x for x, c in count.items() if c == 1 and x - 1 not in count and x + 1 not in count]`,
  },
  visibleTests: [
    { args: [[10, 6, 5, 8]], expected: [8, 10] },
    { args: [[1, 3, 5, 3]], expected: [1, 5] },
    { args: [[1, 2, 3]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [] },
    { args: [[1, 3]], expected: [1, 3] },
    { args: [[1, 5, 10]], expected: [1, 5, 10] },
    { args: [[1, 1, 5, 10]], expected: [5, 10] },
    { args: [[2, 2, 2, 2]], expected: [] },
    { args: [[3, 7, 5]], expected: [3, 5, 7] },
    { args: [[0, 2, 4, 6]], expected: [0, 2, 4, 6] },
  ],
};
