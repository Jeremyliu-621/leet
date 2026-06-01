import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-alternating-subarrays',
  title: 'Count Alternating Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **binary** array \`nums\`.

We call a subarray **alternating** if **no** two **adjacent** elements in the subarray have the **same** value.

Return the number of alternating subarrays in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,1]',
      output: '5',
      explanation: 'The following subarrays are alternating: [0], [1], [1], [1], and [0,1]. There are 5 of them.',
    },
    {
      input: 'nums = [1,0,1,0]',
      output: '10',
      explanation: 'Every subarray of this array is alternating. There are 10 subarrays total.',
    },
    {
      input: 'nums = [0,0,0]',
      output: '3',
      explanation: 'Only the single-element subarrays [0], [0], [0] are alternating.',
    },
  ],
  hints: [
    'Track the current length of the longest alternating run ending at position i.',
    'If nums[i] != nums[i-1], extend the run (run++); otherwise reset to 1.',
    'Each run of length `run` contributes exactly `run` new alternating subarrays (ending at i). Sum all contributions.',
  ],
  functionName: 'countAlternatingSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countAlternatingSubarrays(nums) {

}`,
    typescript: `function countAlternatingSubarrays(nums: number[]): number {

}`,
    python: `def countAlternatingSubarrays(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 1, 1]], expected: 5 },
    { args: [[1, 0, 1, 0]], expected: 10 },
    { args: [[0, 0, 0]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[0, 1]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[0, 1, 0, 1, 0]], expected: 15 },
    { args: [[1, 0, 0, 1, 0]], expected: 9 },
    { args: [[0, 1, 0, 0, 1, 0]], expected: 12 },
  ],
};
