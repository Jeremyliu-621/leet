import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum-indices',
  title: 'Pair That Sums To Target',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given an integer array \`nums\` and an integer \`target\`, find **two distinct positions** whose values add up to \`target\`.

Return their indices as a two-element array \`[i, j]\` with \`i < j\`. You may assume that exactly one such pair exists for every input, so there is always a single correct answer.

A value at one index may not be paired with itself; the two indices must be different.`,
  constraints: [
    '2 <= nums.length <= 1000',
    'All values in nums are integers.',
    'Exactly one valid pair exists.',
  ],
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] = 2 + 7 = 9.',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
      explanation: 'nums[1] + nums[2] = 2 + 4 = 6.',
    },
    {
      input: 'nums = [5,5], target = 10',
      output: '[0,1]',
    },
  ],
  functionName: 'pairSumIndices',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function pairSumIndices(nums, target) {\n  // your code here\n}\n',
    python: 'def pairSumIndices(nums, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6], expected: [1, 2] },
    { args: [[5, 5], 10], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3, -4], -7], expected: [2, 3] },
    { args: [[0, 4, 3, 0], 0], expected: [0, 3] },
    { args: [[1, 2, 3, 4, 5], 9], expected: [3, 4] },
    { args: [[10, 20, 30], 50], expected: [1, 2] },
    { args: [[-5, 8, 1], 3], expected: [0, 1] },
    { args: [[100, 1, 99], 100], expected: [1, 2] },
  ],
  hints: [
    'The naive approach is two nested loops — `O(n²)`. Can you trade memory for time?',
    'For each value `v` you visit, the complement you need is `target - v`. If you remember which indices you have already seen, you can ask "have I seen the complement?" in constant time.',
    'Use a `Map` / `dict` from value → first index. For each `i`, check if `target - nums[i]` is in the map; if it is, return `[map[target - nums[i]], i]`. Otherwise record `nums[i] -> i` and move on.',
  ],
};
