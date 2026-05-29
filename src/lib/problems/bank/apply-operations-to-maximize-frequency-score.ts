import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-maximize-frequency-score',
  title: 'Apply Operations to Maximize Frequency Score',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

In one operation, you can choose an index \`i\` and **increment** \`nums[i]\` by \`1\`.

The **frequency score** of an array is the **product** of the frequency of the most frequent element with its value. For example, in \`[1, 2, 2, 3]\` the most frequent element is \`2\` with frequency \`2\`, giving a score of \`2 × 2 = 4\`.

Return the **maximum** possible frequency score after performing at most \`k\` operations.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
    '`1 <= k <= 10^10`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 1',
      output: '8',
      explanation: 'Increment nums[2] (value 3) to 4: [1,2,4,4]. Two 4s, score = 2 × 4 = 8.',
    },
    {
      input: 'nums = [1,1,1,1], k = 10',
      output: '12',
      explanation: 'All elements start at 1. Cost to make all 4 equal to 3 is 4×2=8 ops. With 10 ops available, d = floor(10/4) = 2, so target = 1+2 = 3. Score = 4 × 3 = 12.',
    },
  ],
  hints: [
    'Sort the array. The optimal group of elements to make identical is always a contiguous window in the sorted array.',
    'For window [l, r], the cost to make all elements equal to nums[r] (the window maximum) is nums[r]*(r-l+1) - sum(nums[l..r]).',
    'Use prefix sums to compute the window sum in O(1) and slide the left pointer so cost ≤ k.',
    'With leftover = k − cost₀ remaining ops, we can further raise the target by d = floor(leftover / size). Score = size × (nums[r] + d).',
    'Iterate r from 0 to n−1 with a two-pointer for l, tracking the maximum score.',
  ],
  functionName: 'maxFrequencyScore',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxFrequencyScore(nums, k) {

}`,
    typescript: `function maxFrequencyScore(nums: number[], k: number): number {

}`,
    python: `def maxFrequencyScore(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 1], expected: 8 },
    { args: [[1, 1, 1, 1], 10], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1], 5], expected: 6 },
    { args: [[1, 2], 3], expected: 6 },
    { args: [[1, 2, 3], 0], expected: 3 },
    { args: [[3, 3, 3], 3], expected: 12 },
    { args: [[1, 2, 4], 5], expected: 12 },
    { args: [[5, 5, 5, 5], 0], expected: 20 },
    { args: [[1, 10], 9], expected: 20 },
  ],
};
