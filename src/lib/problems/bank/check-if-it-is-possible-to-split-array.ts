import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-it-is-possible-to-split-array',
  title: 'Check if it is Possible to Split Array',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`nums\` of length \`n\` and a positive integer \`m\`.

You can perform the following operation on the array **any number of times**: choose any element of the array with length greater than \`1\`, and split it into two sub-arrays **only if** the sum of the sub-array that remains (before splitting) is **at least** \`m\`.

Wait — more precisely: split a contiguous subarray of current length \`> 1\` into two contiguous subarrays. This split is valid **only if** the sum of the entire subarray being split is \`>= m\`.

Return \`true\` *if you can reduce* \`nums\` *to* \`n\` *individual elements (each of length 1) using valid splits*, or \`false\` *otherwise*.`,
  constraints: [
    '1 <= n == nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= m <= 200',
  ],
  examples: [
    {
      input: 'nums = [2,2,1], m = 4',
      output: 'true',
      explanation:
        'Split [2,2] (sum 4 >= 4) → [2] and [2]. Then [1] is already length 1. All length-1 sub-arrays achieved.',
    },
    {
      input: 'nums = [2,1,3], m = 5',
      output: 'false',
      explanation:
        'No adjacent pair sums to >= 5. No subarray can be validly split down to individual elements.',
    },
    {
      input: 'nums = [2,3,3,2,3], m = 6',
      output: 'true',
      explanation: 'Adjacent pair 3+3=6 >= 6, so the array can be fully split.',
    },
  ],
  hints: [
    'For n == 1: trivially true (already a single element).',
    'For n == 2: valid iff nums[0] + nums[1] >= m.',
    'For n >= 3: valid iff there exists any adjacent pair (nums[i], nums[i+1]) with nums[i] + nums[i+1] >= m. If such a pair exists, you can always recursively split everything.',
  ],
  functionName: 'canSplitArray',
  params: ['nums', 'm'],
  starterCode: {
    javascript: 'function canSplitArray(nums, m) {\n\n}\n',
    typescript: 'function canSplitArray(nums: number[], m: number): boolean {\n\n}\n',
    python: 'def canSplitArray(nums, m):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,2,1], 4], expected: true },
    { args: [[2,1,3], 5], expected: false },
    { args: [[2,3,3,2,3], 6], expected: true },
  ],
  hiddenTests: [
    { args: [[1], 5], expected: true },
    { args: [[3,5], 7], expected: true },
    { args: [[3,5], 9], expected: false },
    { args: [[1,1,1], 3], expected: false },
    { args: [[1,2,1], 2], expected: true },
    { args: [[5,1,5], 10], expected: false },
    { args: [[5,5,1,5], 10], expected: true },
  ],
};
