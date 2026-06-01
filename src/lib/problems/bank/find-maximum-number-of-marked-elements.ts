import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-maximum-number-of-marked-elements',
  title: 'Find the Maximum Number of Marked Elements',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Initially, all of the elements are **unmarked**. You will apply the following operation any number of times while there are at least two unmarked elements:

- Pick two **unmarked** integers with indices \`i\` and \`j\` where \`i != j\`.
- If \`2 * nums[i] <= nums[j]\`, mark both indices \`i\` and \`j\`.

Return the **maximum** possible number of marked elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [9,2,5,4]',
      output: '4',
      explanation:
        'Sort: [2,4,5,9]. Pair 2 with 5 (2×2=4 ≤ 5 ✓) and 4 with 9 (2×4=8 ≤ 9 ✓). All 4 elements are marked.',
    },
    {
      input: 'nums = [7,2,5,4]',
      output: '2',
      explanation:
        'Sort: [2,4,5,7]. The best single pair is 2 with 7 (2×2=4 ≤ 7 ✓). Pairing 4 with 5 fails (2×4=8 > 5), so only 2 elements can be marked.',
    },
    {
      input: 'nums = [1,2,4,8]',
      output: '4',
      explanation:
        'Pair 1 with 4 (2×1=2 ≤ 4 ✓) and 2 with 8 (2×2=4 ≤ 8 ✓). All 4 marked.',
    },
  ],
  hints: [
    'Level 1: Sort the array. To maximise pairs, try binary searching on k — the number of pairs. The answer is 2k.',
    'Level 2: For a given k, greedily pair the k smallest elements with k elements from the upper half of the sorted array. Specifically, check whether sorted[i] × 2 ≤ sorted[n − k + i] for every i in [0, k).',
    'Level 3: Binary-search k in [0, floor(n/2)]. For candidate k, verify sorted[i]*2 ≤ sorted[n-k+i] for i = 0…k-1. The feasibility check is monotone, so the maximum valid k gives the answer 2k.',
  ],
  functionName: 'maxNumOfMarkedElements',
  params: ['nums'],
  starterCode: {
    javascript: `function maxNumOfMarkedElements(nums) {

}`,
    typescript: `function maxNumOfMarkedElements(nums: number[]): number {

}`,
    python: `def maxNumOfMarkedElements(nums):
    pass`,
  },
  visibleTests: [
    { args: [[9, 2, 5, 4]], expected: 4 },
    { args: [[7, 2, 5, 4]], expected: 2 },
    { args: [[1, 2, 4, 8]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1]], expected: 0 },
    { args: [[2, 4, 1, 3]], expected: 4 },
    { args: [[3, 5, 2, 4]], expected: 2 },
    { args: [[10, 3, 5, 1]], expected: 4 },
    { args: [[1, 2, 4, 8, 16, 32]], expected: 6 },
    { args: [[5, 5, 5, 5]], expected: 0 },
    { args: [[1, 3, 5, 9, 10, 20]], expected: 6 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: 8 },
  ],
};
