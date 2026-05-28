import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difference-between-highest-and-lowest-of-k-scores',
  title: 'Minimum Difference Between Highest and Lowest of K Scores',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` represents the score of the \`ith\` student. You are also given an integer \`k\`.

Pick the scores of any \`k\` students from the array so that the **difference** between the **highest** and the **lowest** of the \`k\` scores is **minimized**.

Return the **minimum** possible difference.`,
  constraints: [
    '1 <= k <= nums.length <= 1000',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [90], k = 1',
      output: '0',
      explanation: 'Pick the only student. Difference = 90-90 = 0.',
    },
    {
      input: 'nums = [9,4,1,7], k = 2',
      output: '2',
      explanation: 'Best: pick 4 and 7 (or 7 and 9). Min diff = 7-4 = 3? No: sort → [1,4,7,9]. Windows: [1,4]→3, [4,7]→3, [7,9]→2. Answer = 2.',
    },
  ],
  hints: [
    'Sort nums. The optimal k students to minimize max-min must be consecutive in sorted order.',
    'Slide a window of size k: for each window [i, i+k-1], compute nums[i+k-1] - nums[i]. Track the minimum.',
    'This is O(n log n) due to sorting.',
  ],
  functionName: 'minimumDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumDifference(nums, k) {

}`,
    typescript: "function minimumDifference(nums: number[], k: number): number {\n\n}",

    python: `def minimumDifference(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[90], 1], expected: 0 },
    { args: [[9, 4, 1, 7], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 2 },
    { args: [[10, 10, 10], 3], expected: 0 },
    { args: [[0, 100], 2], expected: 100 },
    { args: [[1, 3, 6, 10, 15], 2], expected: 2 },
  ],
};
