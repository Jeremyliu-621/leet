import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-average-subarray',
  title: 'Maximum Average Subarray I',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` consisting of \`n\` elements, and an integer \`k\`.

Find a contiguous subarray whose **length is equal to** \`k\` that has the maximum average value and return *this value*. Any answer with a calculation error less than \`10^-5\` will be accepted.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= k <= n <= 10^5`',
    '`-10^4 <= nums[i] <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [1,12,-5,-6,50,3], k = 4',
      output: '12.75000',
      explanation: 'Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75.',
    },
    {
      input: 'nums = [5], k = 1',
      output: '5.00000',
    },
  ],
  hints: [
    'Use a sliding window of size k. Compute the sum of the first window, then slide by adding the next element and removing the first.',
    'Compute the sum of the first `k` elements as the initial window. Slide the window right, adding `nums[i]` and subtracting `nums[i-k]`. Track the maximum sum.',
    `\`\`\`js
let sum = nums.slice(0, k).reduce((a,b)=>a+b, 0), max = sum;
for (let i = k; i < nums.length; i++) {
  sum += nums[i] - nums[i-k];
  max = Math.max(max, sum);
}
return max / k;\`\`\``
  ],
  functionName: 'findMaxAverage',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function findMaxAverage(nums, k) {

}`,
    python: `def findMaxAverage(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
    { args: [[5], 1], expected: 5.0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 4.5 },
    { args: [[0, 1, 1, 3, 3], 4], expected: 2.0 },
    { args: [[-1, -2, -3, -4], 2], expected: -1.5 },
    { args: [[3, 3, 3, 3, 3], 3], expected: 3.0 },
  ],
};
