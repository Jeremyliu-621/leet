import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-equal-ends',
  title: 'Count Subarrays with Equal Ends',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given a **0-indexed** integer array \`nums\`, return the number of **subarrays** of length **at least 2** where the first and last elements are **equal**.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [1,2,1]',
      output: '1',
      explanation: 'Only [1,2,1] starts and ends with the same value (1).',
    },
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: '[1,1], [1,1], [1,1,1] — three subarrays with equal first and last elements.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'All elements are distinct, so no subarray qualifies.',
    },
  ],
  hints: [
    'For each index j, count how many i < j have nums[i] == nums[j].',
    'Maintain a frequency map: as you scan left to right, freq[nums[j]] tells you the count of valid left endpoints for position j.',
    'Add freq[nums[j]] to the answer before incrementing freq[nums[j]] by 1.',
  ],
  functionName: 'countSubarraysWithEqualEnds',
  params: ['nums'],
  starterCode: {
    javascript: `function countSubarraysWithEqualEnds(nums) {
  const freq = new Map();
  let count = 0;
  for (const n of nums) {
    count += freq.get(n) || 0;
    freq.set(n, (freq.get(n) || 0) + 1);
  }
  return count;
}`,
    typescript: `function countSubarraysWithEqualEnds(nums: number[]): number {
  const freq = new Map<number, number>();
  let count = 0;
  for (const n of nums) {
    count += freq.get(n) ?? 0;
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }
  return count;
}`,
    python: `def countSubarraysWithEqualEnds(nums):
    freq = {}
    count = 0
    for n in nums:
        count += freq.get(n, 0)
        freq[n] = freq.get(n, 0) + 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 1, 2, 1, 2]], expected: 4 },
    { args: [[1, 1, 1, 1]], expected: 6 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
    { args: [[1, 2, 1, 2, 3]], expected: 2 },
    { args: [[1, 1, 2, 2]], expected: 2 },
  ],
};
