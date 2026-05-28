import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-positive-sum-subarray',
  title: 'Minimum Positive Sum Subarray',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` and two integers \`l\` and \`r\`. Your task is to find the **minimum length** of a subarray of \`nums\` such that:

- Its **length** is at least \`l\` and at most \`r\`.
- The **sum** of the elements in the subarray is greater than 0.

Return the **minimum length** of such a subarray. If no such subarray exists, return \`-1\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= l <= r <= nums.length',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [3,-2,1,4], l = 2, r = 3',
      output: '2',
      explanation: 'The subarray [3,-2] has length 2 and sum 1 > 0. No valid length-2 subarray has a shorter length, so the answer is 2.',
    },
    {
      input: 'nums = [-2,2,-3,1], l = 2, r = 3',
      output: '-1',
      explanation: 'Length-2 windows: [-2,2]=0, [2,-3]=-1, [-3,1]=-2 (all ≤ 0). Length-3 windows: [-2,2,-3]=-3, [2,-3,1]=0 (all ≤ 0). No valid subarray exists.',
    },
    {
      input: 'nums = [1,2,3,4], l = 2, r = 4',
      output: '2',
      explanation: '[1,2] has length 2 and sum 3 > 0.',
    },
  ],
  hints: [
    'Since the array length is at most 100, a brute-force O(n²) approach checking every valid-length window is fast enough.',
    'Iterate over lengths from l to r (smallest first). For each length, slide a fixed-size window across nums. Return the first length where any window has sum > 0.',
    'Compute the initial window sum, then update it in O(1) per slide: `sum += nums[i] - nums[i - len]`. Return the length as soon as you find sum > 0, since you are iterating smallest length first.',
  ],
  functionName: 'minimumSumSubarray',
  params: ['nums', 'l', 'r'],
  starterCode: {
    javascript: `function minimumSumSubarray(nums, l, r) {

}`,
    python: `def minimumSumSubarray(nums, l, r):
    pass`,
  },
  visibleTests: [
    { args: [[3, -2, 1, 4], 2, 3], expected: 2 },
    { args: [[-2, 2, -3, 1], 2, 3], expected: -1 },
    { args: [[1, 2, 3, 4], 2, 4], expected: 2 },
  ],
  hiddenTests: [
    { args: [[5], 1, 1], expected: 1 },
    { args: [[-5], 1, 1], expected: -1 },
    { args: [[0, 0, 0], 1, 3], expected: -1 },
    { args: [[-1, 1], 1, 2], expected: 1 },
    { args: [[-3, -1, 2, 5, -2], 2, 4], expected: 2 },
    { args: [[10, -10, 10], 1, 3], expected: 1 },
    { args: [[10, -10, 10], 2, 3], expected: 3 },
    { args: [[-10, -10, -10], 1, 3], expected: -1 },
    { args: [[1, -1, 1, -1, 1], 3, 5], expected: 3 },
    { args: [[100], 1, 1], expected: 1 },
  ],
};
