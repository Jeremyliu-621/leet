import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-interesting-subarrays',
  title: 'Count of Interesting Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`, and two integers \`modulo\` and \`k\`.

A subarray \`nums[l..r]\` is **interesting** if the count of indices \`i\` in \`[l, r]\` satisfying \`nums[i] % modulo == k\` is itself divisible... more precisely, if \`(count) % modulo == k\`.

Return the number of interesting subarrays.

**Key insight:** Let \`prefix[i]\` be the count of indices \`j < i\` where \`nums[j] % modulo == k\`, reduced mod \`modulo\`. A subarray \`[l, r]\` is interesting iff \`(prefix[r+1] - prefix[l]) % modulo == k\`, i.e., \`prefix[l] == (prefix[r+1] - k + modulo) % modulo\`. Use a hash map of prefix counts.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= modulo <= 10^9',
    '0 <= k < modulo',
  ],
  examples: [
    {
      input: 'nums = [3, 2, 4], modulo = 2, k = 1',
      output: '3',
      explanation: 'Interesting subarrays: [3] (count=1, 1%2=1=k), [3,2] (count=1, 1%2=1=k), [3,2,4] (count=1, 1%2=1=k). Total = 3.',
    },
    {
      input: 'nums = [3, 1, 9, 6], modulo = 3, k = 0',
      output: '2',
      explanation: 'Interesting: [3] (count=1, 1%3=1≠0), ... [3,1,9] (count=2, 2%3=2≠0), [3,1,9,6] (count=3, 3%3=0=k ✓), [9,6] (count=2, 2%3≠0), [6] (count=1, 1%3≠0). Actually [3] is not interesting. Count interesting = 2.',
    },
    {
      input: 'nums = [1, 2, 3, 4], modulo = 2, k = 0',
      output: '4',
      explanation: 'Interesting subarrays (even count of even elements, with that count ≡ 0 mod 2): [1],[3],[2,3,4],[1,2,3,4]. Total = 4.',
    },
  ],
  hints: [
    'Replace each element with 1 if nums[i] % modulo == k, else 0. You want subarrays whose sum ≡ k (mod modulo).',
    'Use a prefix sum reduced mod modulo. A subarray [l, r] is valid iff prefix[r+1] - prefix[l] ≡ k (mod modulo).',
    'Store prefix counts in a hash map. At each position, look up how many previous prefixes equal (current_prefix - k + modulo) % modulo.',
  ],
  functionName: 'countInterestingSubarrays',
  params: ['nums', 'modulo', 'k'],
  starterCode: {
    javascript: `function countInterestingSubarrays(nums, modulo, k) {
  // Return the count of interesting subarrays
}`,
    typescript: "function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {\n  // Return the count of interesting subarrays\n}",

    python: `def countInterestingSubarrays(nums: list[int], modulo: int, k: int) -> int:
    # Return the count of interesting subarrays
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 4], 2, 1], expected: 3 },
    { args: [[3, 1, 9, 6], 3, 0], expected: 2 },
    { args: [[1, 2, 3, 4], 2, 0], expected: 4 },
    { args: [[1], 1, 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 4, 6], 2, 0], expected: 2 },
    { args: [[1, 1, 1], 1, 0], expected: 6 },
    { args: [[5], 3, 2], expected: 0 },
    { args: [[5, 5], 3, 2], expected: 1 },
    { args: [[1, 2, 3], 3, 1], expected: 3 },
    { args: [[3, 3, 3], 3, 0], expected: 1 },
  ],
};
