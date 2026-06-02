import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-good-pairs-ii',
  title: 'Find the Number of Good Pairs II',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two **0-indexed** integer arrays \`nums1\` and \`nums2\` of lengths \`n\` and \`m\` respectively. You are also given a positive integer \`k\`.

A pair \`(i, j)\` where \`0 <= i <= n - 1\` and \`0 <= j <= m - 1\` is called **good** if \`nums1[i]\` is divisible by \`nums2[j] * k\`.

Return the total number of **good pairs**.`,
  constraints: [
    '`1 <= n, m <= 10^5`',
    '`1 <= nums1[i] <= 10^6`',
    '`1 <= nums2[j] <= 10^6`',
    '`1 <= k <= 10^3`',
  ],
  examples: [
    {
      input: 'nums1 = [1,3,4], nums2 = [1,3,4], k = 1',
      output: '5',
      explanation: '(0,0)=1%1, (1,0)=3%1, (1,1)=3%3, (2,0)=4%1, (2,2)=4%4 are all 0.',
    },
    {
      input: 'nums1 = [1,2,4,12], nums2 = [2,4], k = 3',
      output: '2',
      explanation: '12 is divisible by 2*3=6 and by 4*3=12.',
    },
  ],
  hints: [
    'Build a frequency map of `nums1` values.',
    'For each `nums2[j]`, compute `v = nums2[j] * k`. Iterate over multiples of `v` up to `max(nums1)` and add their frequencies.',
    'This runs in O(max(nums1)/k * m / avg(nums2)) time, which is efficient enough for the given constraints.',
    `\`\`\`js
function numberOfPairs(nums1, nums2, k) {
  const freq = new Map();
  for (const x of nums1) freq.set(x, (freq.get(x) ?? 0) + 1);
  const maxN1 = Math.max(...nums1);
  let ans = 0;
  for (const x of nums2) {
    const v = x * k;
    for (let mult = v; mult <= maxN1; mult += v) {
      ans += freq.get(mult) ?? 0;
    }
  }
  return ans;
}\`\`\``,
  ],
  functionName: 'numberOfPairs',
  params: ['nums1', 'nums2', 'k'],
  starterCode: {
    javascript: `function numberOfPairs(nums1, nums2, k) {
  const freq = new Map();
  for (const x of nums1) freq.set(x, (freq.get(x) ?? 0) + 1);
  const maxN1 = Math.max(...nums1);
  let ans = 0;
  for (const x of nums2) {
    const v = x * k;
    for (let mult = v; mult <= maxN1; mult += v) ans += freq.get(mult) ?? 0;
  }
  return ans;
}`,
    typescript: `function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  const freq = new Map<number, number>();
  for (const x of nums1) freq.set(x, (freq.get(x) ?? 0) + 1);
  const maxN1 = Math.max(...nums1);
  let ans = 0;
  for (const x of nums2) {
    const v = x * k;
    for (let mult = v; mult <= maxN1; mult += v) ans += freq.get(mult) ?? 0;
  }
  return ans;
}`,
    python: `def numberOfPairs(nums1, nums2, k):
    from collections import Counter
    freq = Counter(nums1)
    max_n1 = max(nums1)
    ans = 0
    for x in nums2:
        v = x * k
        mult = v
        while mult <= max_n1:
            ans += freq.get(mult, 0)
            mult += v
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 4], [1, 3, 4], 1], expected: 5 },
    { args: [[1, 2, 4, 12], [2, 4], 3], expected: 2 },
    { args: [[1], [1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[6, 12, 18], [2, 3], 2], expected: 4 },
    { args: [[5, 10, 15], [5], 3], expected: 1 },
    { args: [[1, 2, 3], [4, 5], 1], expected: 0 },
    { args: [[12, 24, 36], [1, 2, 3], 4], expected: 7 },
    { args: [[100], [10], 10], expected: 1 },
  ],
};
