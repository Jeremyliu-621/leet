import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarray-sum-divisible-by-k',
  title: 'Subarray Sums Divisible by K',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of non-empty subarrays** that have a sum divisible by \`k\`.

A **subarray** is a contiguous part of an array.

**Example:** \`nums = [4,5,0,-2,-3,1]\`, \`k = 5\` → \`7\`

The subarrays with sums divisible by 5 are: [4,5,0,-2,-3,1], [5], [5,0], [5,0,-2,-3], [0], [0,-2,-3], [-2,-3].`,
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '2 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [4,5,0,-2,-3,1], k = 5',
      output: '7',
      explanation: 'Seven subarrays have sums divisible by 5.',
    },
    {
      input: 'nums = [5], k = 9',
      output: '0',
      explanation: 'No subarray sum is divisible by 9.',
    },
  ],
  hints: [
    'Use prefix sums. If prefix[j] - prefix[i] is divisible by k, then (prefix[j] mod k) == (prefix[i] mod k).',
    'Keep a count of how many times each remainder value has appeared so far.',
    'For each position, add count[prefix_sum mod k] to the answer, then increment count[prefix_sum mod k].',
    'Handle negative remainders by taking ((prefix_sum % k) + k) % k.',
  ],
  functionName: 'subarraysDivByK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarraysDivByK(nums, k) {
  const count = new Array(k).fill(0);
  count[0] = 1;
  let sum = 0, ans = 0;
  for (const n of nums) {
    sum = ((sum + n) % k + k) % k;
    ans += count[sum];
    count[sum]++;
  }
  return ans;
}`,
    typescript: `function subarraysDivByK(nums: number[], k: number): number {
  const count = new Array<number>(k).fill(0);
  count[0] = 1;
  let sum = 0, ans = 0;
  for (const n of nums) {
    sum = ((sum + n) % k + k) % k;
    ans += count[sum]!;
    count[sum]!++;
  }
  return ans;
}`,
    python: `def subarraysDivByK(nums, k):
    from collections import defaultdict
    count = defaultdict(int)
    count[0] = 1
    prefix = 0
    ans = 0
    for n in nums:
        prefix = (prefix + n) % k
        ans += count[prefix]
        count[prefix] += 1
    return ans
`,
  },
  visibleTests: [
    { args: [[4,5,0,-2,-3,1], 5], expected: 7 },
    { args: [[5], 9], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2,3], 3], expected: 3 },
    { args: [[0,0,0], 2], expected: 6 },
    { args: [[-1,-2,-3,-4,-5], 5], expected: 4 },
    { args: [[1,-1,1,-1], 2], expected: 4 },
    { args: [[7,3,6], 5], expected: 1 },
    { args: [[5,10,15], 5], expected: 6 },
  ],
};
