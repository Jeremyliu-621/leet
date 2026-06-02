import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-array-pairs-divisible-by-k',
  title: 'Count Array Pairs Divisible by K',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`k\`, return *the **number of pairs*** \`(i, j)\` such that:

- \`0 <= i < j <= n - 1\`, and
- \`nums[i] * nums[j]\` is divisible by \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i], k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 2',
      output: '7',
      explanation: 'The 7 pairs are (1,2),(1,4),(2,3),(2,4),(2,5),(3,4),(4,5) (1-indexed).',
    },
    {
      input: 'nums = [1,2,3,4], k = 5',
      output: '0',
      explanation: 'No pair has a product divisible by 5.',
    },
  ],
  hints: [
    'Level 1: For a pair (nums[i], nums[j]) to have product divisible by k, we need: k / gcd(k, nums[i]) divides nums[j].',
    'Level 2: Compute d = gcd(nums[i], k) for each element. Group elements by their d value and count each divisor of k.',
    'Level 3: For each pair of divisors (d1, d2) of k where (d1 * d2) % k == 0, add count[d1] * count[d2] (halved for same-divisor pairs) to the answer.',
  ],
  functionName: 'countPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairs(nums, k) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const cnt = new Map();
  for (const n of nums) {
    const d = gcd(n, k);
    cnt.set(d, (cnt.get(d) || 0) + 1);
  }
  let ans = 0;
  const divs = [...cnt.keys()];
  for (let i = 0; i < divs.length; i++) {
    for (let j = i; j < divs.length; j++) {
      const d1 = divs[i], d2 = divs[j];
      if ((d1 * d2) % k === 0) {
        const c1 = cnt.get(d1), c2 = cnt.get(d2);
        if (i === j) ans += c1 * (c1 - 1) / 2;
        else ans += c1 * c2;
      }
    }
  }
  return ans;
}`,
    typescript: `function countPairs(nums: number[], k: number): number {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const cnt = new Map<number, number>();
  for (const n of nums) {
    const d = gcd(n, k);
    cnt.set(d, (cnt.get(d) ?? 0) + 1);
  }
  let ans = 0;
  const divs = [...cnt.keys()];
  for (let i = 0; i < divs.length; i++) {
    for (let j = i; j < divs.length; j++) {
      const d1 = divs[i]!, d2 = divs[j]!;
      if ((d1 * d2) % k === 0) {
        const c1 = cnt.get(d1)!, c2 = cnt.get(d2)!;
        if (i === j) ans += c1 * (c1 - 1) / 2;
        else ans += c1 * c2;
      }
    }
  }
  return ans;
}`,
    python: `def countPairs(nums, k):
    from math import gcd
    nums = [int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums)]
    k = int(k)
    cnt = {}
    for n in nums:
        d = gcd(n, k)
        cnt[d] = cnt.get(d, 0) + 1
    ans = 0
    divs = list(cnt.keys())
    for i in range(len(divs)):
        for j in range(i, len(divs)):
            d1, d2 = divs[i], divs[j]
            if (d1 * d2) % k == 0:
                c1, c2 = cnt[d1], cnt[d2]
                if i == j:
                    ans += c1 * (c1 - 1) // 2
                else:
                    ans += c1 * c2
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 7 },
    { args: [[1, 2, 3, 4], 5], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 10, 15], 5], expected: 3 },
    { args: [[1, 3], 6], expected: 0 },
    { args: [[3, 3, 3, 3], 9], expected: 6 },
    { args: [[2, 3, 4, 6], 6], expected: 5 },
  ],
};
