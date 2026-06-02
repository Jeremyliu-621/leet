import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-interesting-subarrays',
  title: 'Count the Number of Interesting Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`, an integer \`modulo\`, and an integer \`k\`.

Your task is to find the count of **interesting** subarrays.

A subarray \`nums[l..r]\` is **interesting** if the following condition holds:

Let \`cnt\` be the number of indices \`i\` in the range \`[l, r]\` such that \`nums[i] % modulo == k\`. Then \`cnt % modulo == k\`.

Return an integer denoting the count of interesting subarrays.

**Note:** A subarray is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= modulo <= 10^9',
    '0 <= k < modulo',
  ],
  examples: [
    {
      input: 'nums = [3,2,4], modulo = 2, k = 1',
      output: '3',
      explanation:
        'In this example the interesting subarrays are: [3] (cnt=1, 1%2=1=k), [3,2,4] (cnt=1, 1%2=1=k), [2,4] is not interesting (cnt=0). Actually: [3] cnt=1✓, [3,2] cnt=1✓, [3,2,4] cnt=1✓. Three subarrays.',
    },
    {
      input: 'nums = [3,1,9,6], modulo = 3, k = 0',
      output: '2',
      explanation:
        'Qualifying positions (nums[i]%3==0): indices 0(3), 2(9), 3(6). prefix counts: [0,1,1,2,3]. Interesting subarrays: [3,1,9,6] with cnt=3 (3%3=0 ✓) and [1] with cnt=0 (0%3=0 ✓). Total = 2.',
    },
  ],
  hints: [
    'Level 1: Let p[i] = number of indices in nums[0..i−1] where nums[j] % modulo == k. A subarray [l,r] has cnt = p[r+1] − p[l]. We need (p[r+1] − p[l]) % modulo == k.',
    'Level 2: Rearranging: p[r+1] % modulo == (p[l] + k) % modulo. Use a hash map counting occurrences of each prefix-count mod modulo seen so far.',
    'Level 3: Iterate right from 0 to n. Maintain prefCnt = count of qualifying elements seen. For each right, answer += freq[(prefCnt - k + modulo) % modulo]. Then record freq[prefCnt % modulo]++. O(n) time and space.',
  ],
  functionName: 'countInterestingSubarrays',
  params: ['nums', 'modulo', 'k'],
  starterCode: {
    javascript: `function countInterestingSubarrays(nums, modulo, k) {

}`,
    typescript: `function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {

}`,
    python: `def countInterestingSubarrays(nums, modulo, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 4], 2, 1], expected: 3 },
    { args: [[3, 1, 9, 6], 3, 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], 1, 0], expected: 1 },
    { args: [[1, 1], 2, 1], expected: 2 },
    { args: [[2, 4, 6], 2, 0], expected: 2 },
    { args: [[1, 2, 3], 3, 1], expected: 3 },
    { args: [[1, 1, 1, 1], 2, 1], expected: 6 },
    { args: [[5, 5, 5], 5, 0], expected: 0 },
    { args: [[1, 2, 1, 2, 1], 2, 1], expected: 9 },
  ],
};
