import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-frequency-after-operations-i',
  title: 'Maximum Frequency of an Element After Performing Operations I',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'binary-search'],
  description: `You are given a 0-indexed integer array \`nums\` and two integers \`k\` and \`numOperations\`.

You must perform at most \`numOperations\` operations on \`nums\`. In each operation you choose a previously unchosen index \`i\` and add an integer in the range \`[-k, k]\` to \`nums[i]\`.

Return the **maximum possible frequency** of any element value in \`nums\` after performing the operations.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '0 <= k <= 10^6',
    '0 <= numOperations <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,4,5], k = 1, numOperations = 2',
      output: '2',
      explanation:
        'Targeting value 5: nums[1]=4 can reach 5 (|4−5|=1 ≤ 1). nums[2]=5 is already 5. Use 1 operation. Frequency of 5 = 2.',
    },
    {
      input: 'nums = [1,2,4], k = 1, numOperations = 1',
      output: '2',
      explanation:
        'Targeting value 2: nums[1]=2 already equals 2 (no op needed). nums[0]=1 can reach 2 (|1−2|=1 ≤ 1, 1 op). Frequency = 2.',
    },
    {
      input: 'nums = [5], k = 1, numOperations = 1',
      output: '1',
      explanation: 'Only one element; its frequency is always 1.',
    },
  ],
  hints: [
    'For a fixed target value t, the maximum achievable frequency equals: (elements already equal to t) + min(elements reachable, numOperations). An element x is reachable if |x − t| ≤ k.',
    'Every optimal target lies at one of the O(n) values: nums[i], nums[i]+k, or nums[i]−k. Collect all these as candidates.',
    'Sort nums and use binary search (or a two-pointer sweep) to quickly count elements equal to t and elements in [t−k, t+k] for each candidate target.',
  ],
  functionName: 'maxFrequency',
  params: ['nums', 'k', 'numOperations'],
  starterCode: {
    javascript: `function maxFrequency(nums, k, numOperations) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  function bisectLeft(t) {
    let lo = 0, hi = n;
    while (lo < hi) { const mid = (lo+hi)>>1; if (nums[mid] < t) lo = mid+1; else hi = mid; }
    return lo;
  }
  function bisectRight(t) {
    let lo = 0, hi = n;
    while (lo < hi) { const mid = (lo+hi)>>1; if (nums[mid] <= t) lo = mid+1; else hi = mid; }
    return lo;
  }
  const candidates = new Set();
  for (const v of nums) { candidates.add(v); candidates.add(v + k); candidates.add(v - k); }
  let ans = 0;
  for (const t of candidates) {
    const eq = bisectRight(t) - bisectLeft(t);
    const reach = bisectRight(t + k) - bisectLeft(t - k) - eq;
    ans = Math.max(ans, eq + Math.min(reach, numOperations));
  }
  return ans;
}`,
    typescript: `function maxFrequency(nums: number[], k: number, numOperations: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  function bisectLeft(t: number): number {
    let lo = 0, hi = n;
    while (lo < hi) { const mid = (lo+hi)>>1; if (nums[mid]! < t) lo = mid+1; else hi = mid; }
    return lo;
  }
  function bisectRight(t: number): number {
    let lo = 0, hi = n;
    while (lo < hi) { const mid = (lo+hi)>>1; if (nums[mid]! <= t) lo = mid+1; else hi = mid; }
    return lo;
  }
  const candidates = new Set<number>();
  for (const v of nums) { candidates.add(v); candidates.add(v + k); candidates.add(v - k); }
  let ans = 0;
  for (const t of candidates) {
    const eq = bisectRight(t) - bisectLeft(t);
    const reach = bisectRight(t + k) - bisectLeft(t - k) - eq;
    ans = Math.max(ans, eq + Math.min(reach, numOperations));
  }
  return ans;
}`,
    python: `def maxFrequency(nums, k, numOperations):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    if hasattr(numOperations, 'to_py'): numOperations = numOperations.to_py()
    nums = sorted(int(x) for x in nums); k = int(k); numOperations = int(numOperations)
    import bisect
    candidates = set()
    for v in nums: candidates.add(v); candidates.add(v+k); candidates.add(v-k)
    ans = 0
    for t in candidates:
        eq = bisect.bisect_right(nums, t) - bisect.bisect_left(nums, t)
        reach = bisect.bisect_right(nums, t+k) - bisect.bisect_left(nums, t-k) - eq
        ans = max(ans, eq + min(reach, numOperations))
    return ans`,
  },
  visibleTests: [
    { args: [[1, 4, 5], 1, 2], expected: 2 },
    { args: [[1, 2, 4], 1, 1], expected: 2 },
    { args: [[5], 1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 0, 0], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 1, 2], expected: 3 },
    { args: [[1, 1, 2, 2, 3], 1, 2], expected: 4 },
    { args: [[10, 10, 20, 20], 5, 1], expected: 2 },
    { args: [[3, 9, 6], 3, 2], expected: 3 },
  ],
};
