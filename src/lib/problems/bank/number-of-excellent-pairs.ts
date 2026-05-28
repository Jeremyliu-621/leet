import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-excellent-pairs',
  title: 'Number of Excellent Pairs',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** positive integer array \`nums\` and a positive integer \`k\`.

A pair of numbers \`(num1, num2)\` is called **excellent** if the following condition is satisfied:

- The number of **set bits** in \`num1 OR num2\` plus the number of **set bits** in \`num1 AND num2\` is greater than or equal to \`k\`.

Return the number of **distinct** excellent pairs.

**Note** that \`(a, b)\` and \`(b, a)\` are considered the same pair, and both \`a\` and \`b\` can be equal. A pair is formed by choosing one value from the array (possibly the same value twice).`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= k <= 60`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1], k = 3',
      output: '3',
      explanation: 'Unique values: {1,2,3}. popcount(1)=1, popcount(2)=1, popcount(3)=2. Pairs with sum≥3: (1,3)→1+2=3✓, (2,3)→1+2=3✓, (3,3)→2+2=4✓.',
    },
    {
      input: 'nums = [5,1,1], k = 10',
      output: '0',
      explanation: 'Unique values: {1,5}. popcount(1)=1, popcount(5)=2. Max pair sum=2+2=4<10.',
    },
  ],
  hints: [
    'Key identity: `popcount(a OR b) + popcount(a AND b) = popcount(a) + popcount(b)`. This reduces the condition to `popcount(num1) + popcount(num2) >= k`.',
    'Deduplicate `nums` and compute the popcount of each unique value. Sort by popcount.',
    'For each element with popcount `p`, count elements (including itself) with popcount `>= k - p` using binary search on the sorted popcounts.',
    `\`\`\`js
function countExcellentPairs(nums, k) {
  const popcount = (n) => n.toString(2).split('').filter(c => c === '1').length;
  const counts = [...new Set(nums)].map(popcount).sort((a, b) => a - b);
  const m = counts.length;
  let ans = 0;
  for (let i = 0; i < m; i++) {
    const need = k - counts[i];
    let lo = i, hi = m;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (counts[mid] >= need) hi = mid;
      else lo = mid + 1;
    }
    ans += m - lo;
  }
  return ans;
}\`\`\``,
  ],
  functionName: 'countExcellentPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countExcellentPairs(nums, k) {

}`,
    typescript: 'function countExcellentPairs(nums: number[], k: number): number {\n\n}',
    python: `def countExcellentPairs(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 1], 3], expected: 3 },
    { args: [[5, 1, 1], 10], expected: 0 },
    { args: [[1], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 4], 2], expected: 6 },
    { args: [[7, 3, 5], 4], expected: 6 },
    { args: [[1, 3, 7, 15], 5], expected: 6 },
    { args: [[1, 2, 4, 8], 3], expected: 0 },
    { args: [[3, 5, 6], 3], expected: 6 },
  ],
};
