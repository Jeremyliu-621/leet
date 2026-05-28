import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-subarrays-with-sum',
  title: 'Binary Subarrays With Sum',
  difficulty: 'medium',
  tags: ['hash-map', 'sliding-window'],
  description: `Given a binary array \`nums\` and an integer \`goal\`, return the number of non-empty subarrays with a sum equal to \`goal\`.`,
  constraints: [
    '`1 <= nums.length <= 3 * 10^4`',
    '`nums[i] is either 0 or 1`',
    '`0 <= goal <= nums.length`',
  ],
  examples: [
    {
      input: 'nums = [1,0,1,0,1], goal = 2',
      output: '4',
      explanation: 'The 4 subarrays with sum 2 are: [1,0,1], [1,0,1,0], [0,1,0,1], [1,0,1].',
    },
    {
      input: 'nums = [0,0,0,0,0], goal = 0',
      output: '15',
      explanation: 'Every subarray has sum 0. There are n*(n+1)/2 = 15 subarrays total.',
    },
  ],
  hints: [
    'Use prefix sums with a hash map: count[prefix_sum] = number of times this prefix sum has appeared.',
    'For each index, add count[current_prefix - goal] to the answer.',
    'Alternatively, use atMost(goal) - atMost(goal-1) with a sliding window approach.',
  ],
  functionName: 'numSubarraysWithSum',
  params: ['nums', 'goal'],
  starterCode: {
    javascript: `function numSubarraysWithSum(nums, goal) {

}`,
    python: `def numSubarraysWithSum(nums, goal):
    pass`,
  },
  visibleTests: [
    { args: [[1, 0, 1, 0, 1], 2], expected: 4 },
    { args: [[0, 0, 0, 0, 0], 0], expected: 15 },
    { args: [[1, 1, 1, 1], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 0, 1], 1], expected: 4 },
    { args: [[0], 0], expected: 1 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 0, 1, 1], 3], expected: 2 },
  ],
};
