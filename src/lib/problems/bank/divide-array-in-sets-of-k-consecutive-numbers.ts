import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-array-in-sets-of-k-consecutive-numbers',
  title: 'Divide Array in Sets of K Consecutive Numbers',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`nums\` and a positive integer \`k\`, check whether it is possible to divide this array into groups of \`k\` consecutive integers.

Each integer in \`nums\` must be in **exactly one** group. A group must contain \`k\` consecutive integers.

Return \`true\` if it is possible, or \`false\` otherwise.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,3,4,4,5,6], k = 4',
      output: 'true',
      explanation: 'Groups: [1,2,3,4] and [3,4,5,6].',
    },
    {
      input: 'nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3',
      output: 'true',
      explanation: 'Groups: [1,2,3],[2,3,4],[3,4,5],[9,10,11].',
    },
    {
      input: 'nums = [1,2,3,4], k = 3',
      output: 'false',
      explanation: 'Array length 4 is not divisible by k=3.',
    },
  ],
  hints: [
    'Level 1: If nums.length % k != 0, return false immediately. Build a frequency map.',
    'Level 2: Sort the unique values. Process from smallest: for each value n with frequency f, it must start f groups of [n, n+1, ..., n+k-1]. Deduct f from the counts of all k consecutive values.',
    'Level 3: If at any point a required value has insufficient count, return false. O(n log n) overall.',
  ],
  functionName: 'isPossibleDivide',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function isPossibleDivide(nums, k) {
  if (nums.length % k !== 0) return false;
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  for (const n of sorted) {
    const cnt = freq.get(n) ?? 0;
    if (cnt === 0) continue;
    for (let i = 0; i < k; i++) {
      const cur = freq.get(n + i) ?? 0;
      if (cur < cnt) return false;
      freq.set(n + i, cur - cnt);
    }
  }
  return true;
}`,
    typescript: `function isPossibleDivide(nums: number[], k: number): boolean {
  if (nums.length % k !== 0) return false;
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  for (const n of sorted) {
    const cnt = freq.get(n) ?? 0;
    if (cnt === 0) continue;
    for (let i = 0; i < k; i++) {
      const cur = freq.get(n + i) ?? 0;
      if (cur < cnt) return false;
      freq.set(n + i, cur - cnt);
    }
  }
  return true;
}`,
    python: `def isPossibleDivide(nums, k):
    if len(nums) % k != 0:
        return False
    from collections import Counter
    freq = Counter(nums)
    for n in sorted(freq):
        cnt = freq[n]
        if cnt == 0:
            continue
        for i in range(k):
            if freq[n + i] < cnt:
                return False
            freq[n + i] -= cnt
    return True`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 3, 4, 4, 5, 6], 4], expected: true },
    { args: [[3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3], expected: true },
    { args: [[1, 2, 3, 4], 3], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: true },
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: true },
    { args: [[1, 1, 2, 2, 3, 3], 2], expected: false },
    { args: [[1, 1, 2, 2, 3, 3], 3], expected: true },
    { args: [[1, 2, 3, 4, 5], 1], expected: true },
    { args: [[10, 11, 12], 3], expected: true },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 3], expected: true },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8], 4], expected: true },
  ],
};
