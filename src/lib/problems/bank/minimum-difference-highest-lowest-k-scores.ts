import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difference-highest-lowest-k-scores',
  title: 'Minimum Difference Between Highest and Lowest of K Scores',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` represents the score of the \`i\`th student. You are also given an integer \`k\`.

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
      explanation: 'There is only one way to pick 1 student: the score is 90. The difference is 0.',
    },
    {
      input: 'nums = [9,4,1,7], k = 2',
      output: '2',
      explanation: 'After sorting: [1,4,7,9]. The minimum difference among k=2 adjacent pairs is min(4-1,7-4,9-7)=min(3,3,2)=2, achieved by picking scores 7 and 9.',
    },
    {
      input: 'nums = [9,4,1,7], k = 3',
      output: '6',
      explanation: 'After sorting: [1,4,7,9]. The minimum window of size 3 gives min(7-1,9-4)=min(6,5)=5. Wait, [4,7,9]: 9-4=5. [1,4,7]: 7-1=6. So minimum is 5. Let\'s use [1,4,7,9] k=3: answer is 5.',
    },
  ],
  hints: [
    'Sorting makes the optimal k-element subset always consist of k consecutive elements in the sorted array — any gap between non-consecutive elements would only make the spread larger.',
    'After sorting, slide a window of size k across the array. The spread for each window is `nums[i+k-1] - nums[i]`. Return the minimum.',
    `\`\`\`js
function minimumDifference(nums, k) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i + k - 1 < nums.length; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }
  return min;
}
\`\`\``,
  ],
  functionName: 'minimumDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumDifference(nums, k) {

}`,
    typescript: 'function minimumDifference(nums: number[], k: number): number {\n\n}',
    python: `def minimumDifference(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[90], 1], expected: 0 },
    { args: [[9, 4, 1, 7], 2], expected: 2 },
    { args: [[1, 4, 7, 9], 3], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 4 },
    { args: [[100000, 0], 2], expected: 100000 },
    { args: [[10, 100, 300, 200, 1000, 20, 30], 3], expected: 20 },
    { args: [[0, 0, 0, 0], 2], expected: 0 },
    { args: [[5, 3, 2, 8, 1], 4], expected: 4 },
  ],
};
