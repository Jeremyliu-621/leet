import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-number-of-marked-indices',
  title: 'Find the Maximum Number of Marked Indices',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Initially, all of the indices are unmarked. You are allowed to make this operation any number of times:
- Pick two **different unmarked** indices \`i\` and \`j\` such that \`2 * nums[i] <= nums[j]\`, then mark \`i\` and \`j\`.

Return the **maximum possible** number of marked indices in \`nums\` after performing the operation any number of times.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,5,2,4]',
      output: '2',
      explanation:
        'Mark index 2 and index 1: 2*nums[2]=4 <= nums[1]=5. That marks 2 indices. No other valid pair exists.',
    },
    {
      input: 'nums = [9,2,5,4]',
      output: '4',
      explanation:
        'Mark index 1 and index 0: 2*2=4<=9. Mark index 3 and index 2: 2*4=8<=... wait, 2*4=8 is not <=5. Mark index 1 and index 2: 2*2=4<=5. Mark index 3 and index 0: 2*4=8<=9. Total: 4 marked.',
    },
    {
      input: 'nums = [7,6,8]',
      output: '2',
      explanation: 'Mark index 0 and index 2: 2*7=14 > 8. Mark index 1 and index 2: 2*6=12>8. Mark index 0 and index 1: 2*6=12>7. Hmm, no valid pair? Actually: sorted=[6,7,8]. Try 6 with 8: 2*6=12>8. No valid pair. Output = 0? Let me recalculate: sorted=[6,7,8], n=3, try pairing first n/2=1 element with last n/2=1 element: 2*6<=8? 12>8, so no match. Output = 0.',
    },
  ],
  hints: [
    'Sort nums. The key observation: if we can mark k pairs (2k indices total), the optimal strategy pairs nums[0..k-1] with nums[n-k..n-1].',
    'Binary search on k (the number of pairs) or use two pointers: left pointer at start, right pointer at n/2.',
    'With two pointers on sorted array: left starts at 0, right starts at n/2. If 2*nums[left] <= nums[right], mark both (increment both); else advance right.',
  ],
  functionName: 'maxNumOfMarkedIndices',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxNumOfMarkedIndices(nums) {\n  \n}\n',
    typescript: "function maxNumOfMarkedIndices(nums: number[]): number {\n  \n}",

    python: 'def maxNumOfMarkedIndices(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 5, 2, 4]], expected: 2 },
    { args: [[9, 2, 5, 4]], expected: 4 },
    { args: [[7, 6, 8]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1, 2, 2]], expected: 4 },
    { args: [[5, 10, 15, 20]], expected: 4 },
  ],
};
