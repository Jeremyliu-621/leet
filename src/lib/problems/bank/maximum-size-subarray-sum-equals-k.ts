import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-size-subarray-sum-equals-k',
  title: 'Maximum Size Subarray Sum Equals K',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **maximum length** of a subarray that sums to \`k\`. If no such subarray exists, return \`0\`.

**Examples:**
- \`nums = [1, -1, 5, -2, 3]\`, \`k = 3\` → **4** (subarray \`[1,-1,5,-2]\`)
- \`nums = [-2, -1, 2, 1]\`, \`k = 1\` → **2** (subarray \`[-1, 2]\`)
- \`nums = [1, 2, 3]\`, \`k = 6\` → **3** (entire array)

**Constraints:**
- \`1 ≤ nums.length ≤ 2 × 10⁵\`
- \`-10⁴ ≤ nums[i] ≤ 10⁴\`
- \`-10⁹ ≤ k ≤ 10⁹\``,
  constraints: [
    '1 ≤ nums.length ≤ 2 × 10⁵',
    '-10⁴ ≤ nums[i] ≤ 10⁴',
    '-10⁹ ≤ k ≤ 10⁹',
  ],
  examples: [
    {
      input: 'nums = [1,-1,5,-2,3], k = 3',
      output: '4',
      explanation: 'Subarray [1,-1,5,-2] sums to 3 and has length 4.',
    },
    { input: 'nums = [-2,-1,2,1], k = 1', output: '2', explanation: 'Subarray [-1,2] sums to 1.' },
  ],
  hints: [
    'Use prefix sums. If `prefix[j] - prefix[i] = k`, then the subarray from index `i` to `j-1` sums to `k`. Its length is `j - i`.',
    'Store the **first** occurrence of each prefix sum in a hash map. For each index `j`, check if `prefix[j] - k` is already in the map. If so, the subarray from `map[prefix[j]-k]+1` to `j` has sum `k`.',
    'Start with `map = {0: -1}` (prefix sum of 0 at index -1 accounts for subarrays starting at index 0). Only insert a prefix sum the first time you see it — you want the **earliest** start for the longest subarray.',
  ],
  functionName: 'maxSubArrayLen',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxSubArrayLen(nums, k) {
  // Return maximum length of a subarray summing to k
}`,
    python: `def maxSubArrayLen(nums: list[int], k: int) -> int:
    # Return maximum length of a subarray summing to k
    pass`,
  },
  visibleTests: [
    { args: [[1, -1, 5, -2, 3], 3], expected: 4 },
    { args: [[-2, -1, 2, 1], 1], expected: 2 },
    { args: [[1, 2, 3], 6], expected: 3 },
    { args: [[1, 2, 3], 7], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[0, 0, 0, 0], 0], expected: 4 },
    { args: [[1, 0, 0, 1], 1], expected: 3 },
    { args: [[-1, -1, 1, 1, 1], 0], expected: 4 },
    { args: [[1, 2, -1, 3, -2, 2], 3], expected: 5 },
    { args: [[1, 2, 3, -3, 0, 2], 2], expected: 4 },
    { args: [[10, 2, -2, -20, 10], -10], expected: 4 },
  ],
};
