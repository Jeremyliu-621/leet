import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-with-sum-divisible-by-k',
  title: 'Count Pairs with Sum Divisible by K',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the number of pairs \`(i, j)\` with \`0 <= i < j < n\` such that \`(nums[i] + nums[j]) % k == 0\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6], k = 2',
      output: '6',
      explanation: 'Pairs with even sum (both odd or both even): (1,3),(1,5),(3,5) and (2,4),(2,6),(4,6) — 6 pairs total.',
    },
    {
      input: 'nums = [2,3,4,2,5], k = 3',
      output: '3',
      explanation: 'Valid pairs: (0,2): 2+4=6, (2,3): 4+2=6, and (1,4) is not valid. Checking carefully: (0,2)→6✓, (2,3)→6✓, (0,3)→4✗. Yes, 3 pairs.',
    },
    {
      input: 'nums = [1,3,4,5], k = 7',
      output: '1',
      explanation: 'Only the pair (3,4) gives sum 7. Answer = 1.',
    },
  ],
  hints: [
    'For a pair to have sum divisible by k, if nums[i] % k = r, then nums[j] % k must equal (k - r) % k.',
    'Iterate through nums, maintaining a frequency array of remainders seen so far. For each new element with remainder r, add freq[(k-r) % k] to the count.',
    'This runs in O(n + k) time and counts each valid pair exactly once.',
  ],
  functionName: 'countPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairs(nums, k) {\n\n}`,
    python: `def countPairs(nums: list[int], k: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: 6 },
    { args: [[2, 3, 4, 2, 5], 3], expected: 3 },
    { args: [[1, 3, 4, 5], 7], expected: 1 },
  ],
  hiddenTests: [
    // k=1 — every pair sums to a multiple of 1
    { args: [[0, 0, 0], 1], expected: 3 },
    // all same odd — all pairs valid (sum=even=mult of 2)
    { args: [[1, 1, 1, 1], 2], expected: 6 },
    // all same, r=0 — all pairs valid
    { args: [[6, 6, 6, 6], 3], expected: 6 },
    // no two sum to 6
    { args: [[1, 2, 3], 6], expected: 0 },
    // all multiples of k — all pairs valid
    { args: [[3, 9, 12, 6], 3], expected: 6 },
    // two groups interleave: r=2 pairs with r=4
    { args: [[2, 4, 6, 8, 10], 6], expected: 4 },
    // all zeros mod k — C(5,2)=10
    { args: [[0, 0, 0, 0, 0], 5], expected: 10 },
    // two pairs: (1,4) and (2,3)
    { args: [[1, 2, 3, 4], 5], expected: 2 },
    // all multiples of k
    { args: [[5, 10, 15, 20], 5], expected: 6 },
    // large k, only one pair
    { args: [[100, 400, 700, 300], 1000], expected: 1 },
  ],
};
