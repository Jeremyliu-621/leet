import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difference-k-scores',
  title: 'Minimum Difference Between Highest and Lowest of K Scores',
  difficulty: 'easy',
  tags: ['sliding-window', 'arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` represents the score of the \`i\`th student. You are also given an integer \`k\`.

Pick any \`k\` students from the array. Return the **minimum** possible difference between the highest and lowest scores among the chosen students.`,
  constraints: [
    '`1 <= k <= nums.length <= 1000`',
    '`0 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [90,0,20,10], k = 3',
      output: '20',
      explanation: 'Sorted: [0,10,20,90]. Choose [0,10,20]: difference = 20.',
    },
    {
      input: 'nums = [9,4,1,7], k = 2',
      output: '2',
      explanation: 'Sorted: [1,4,7,9]. Best pair is [7,9]: difference = 2.',
    },
  ],
  hints: [
    'Sort the array. The optimal k elements must be consecutive in the sorted order.',
    'Slide a window of size k and track min(arr[i+k-1] - arr[i]).',
  ],
  functionName: 'minimumDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumDifference(nums, k) {

}`,
    python: `def minimumDifference(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[90, 0, 20, 10], 3], expected: 20 },
    { args: [[9, 4, 1, 7], 2], expected: 2 },
    { args: [[1], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[5, 5, 5], 2], expected: 0 },
    { args: [[100, 1, 50, 25], 2], expected: 24 },
    { args: [[0, 100000], 1], expected: 0 },
  ],
};
