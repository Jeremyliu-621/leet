import type { Problem } from '../types';

export const problem: Problem = {
  id: 'intersection-of-multiple-arrays',
  title: 'Intersection of Multiple Arrays',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a 2D integer array \`nums\` where \`nums[i]\` is a non-empty array of **distinct** positive integers, return the list of integers that are present in **each array** of \`nums\` sorted in **ascending order**.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= sum(nums[i].length) <= 1000',
    '1 <= nums[i][j] <= 1000',
    'All the values of nums[i] are unique.',
  ],
  examples: [
    {
      input: 'nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]',
      output: '[3,4]',
      explanation: '3 and 4 appear in all three arrays. Result sorted: [3,4].',
    },
    {
      input: 'nums = [[1,2,3],[4,5,6]]',
      output: '[]',
      explanation: 'No integer appears in both arrays.',
    },
    {
      input: 'nums = [[1,2,3],[1,2],[1]]',
      output: '[1]',
      explanation: 'Only 1 appears in all three arrays.',
    },
  ],
  hints: [
    'Level 1: Count how many arrays each number appears in using a frequency map.',
    'Level 2: An integer is in the intersection if its count equals nums.length.',
    'Level 3: Collect those integers, sort ascending, and return.',
  ],
  functionName: 'intersection',
  params: ['nums'],
  starterCode: {
    javascript: `function intersection(nums) {
  const freq = new Map();
  const n = nums.length;
  for (const row of nums) {
    for (const x of row) freq.set(x, (freq.get(x) ?? 0) + 1);
  }
  const result = [];
  for (const [x, count] of freq) {
    if (count === n) result.push(x);
  }
  return result.sort((a, b) => a - b);
}`,
    typescript: `function intersection(nums: number[][]): number[] {
  const freq = new Map<number, number>();
  const n = nums.length;
  for (const row of nums) {
    for (const x of row) freq.set(x, (freq.get(x) ?? 0) + 1);
  }
  const result: number[] = [];
  for (const [x, count] of freq) {
    if (count === n) result.push(x);
  }
  return result.sort((a, b) => a - b);
}`,
    python: `def intersection(nums):
    from collections import Counter
    freq = Counter()
    n = len(nums)
    for row in nums:
        for x in row:
            freq[x] += 1
    return sorted(x for x, cnt in freq.items() if cnt == n)`,
  },
  visibleTests: [
    { args: [[[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]], expected: [3, 4] },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [] },
    { args: [[[1, 2, 3], [1, 2], [1]]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [1] },
    { args: [[[1, 2], [1, 2], [1, 2]]], expected: [1, 2] },
    { args: [[[7, 34, 45, 10, 12, 27, 13]]], expected: [7, 10, 12, 13, 27, 34, 45] },
    { args: [[[5, 1, 2], [5, 3, 4], [5, 6]]], expected: [5] },
    { args: [[[1, 2, 3], [1, 3], [2, 3]]], expected: [3] },
  ],
};
