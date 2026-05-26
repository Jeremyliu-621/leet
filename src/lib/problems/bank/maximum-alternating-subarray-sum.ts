import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-alternating-subarray-sum',
  title: 'Maximum Alternating Subarray Sum',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `The **alternating sum** of a subarray starting at index \`i\` with length \`l\` is defined as:

\`nums[i] - nums[i+1] + nums[i+2] - nums[i+3] + ...\`

(signs alternate starting with \`+\`).

Given an integer array \`nums\`, return the **maximum alternating sum** over all non-empty subarrays.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,-1,1,2]',
      output: '5',
      explanation: 'The subarray [3,-1,1] has alternating sum 3-(-1)+1 = 5.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'Only one element; its alternating sum is 1.',
    },
    {
      input: 'nums = [1,-2,3,-4,5]',
      output: '15',
      explanation: 'The full array has alternating sum 1-(-2)+3-(-4)+5 = 1+2+3+4+5 = 15.',
    },
  ],
  hints: [
    'Use two DP variables: `pos` = best alternating sum ending here with a positive sign on the last element; `neg` = best alternating sum ending here with a negative sign.',
    'Transitions: `newPos = Math.max(nums[i], neg + nums[i])`, `newNeg = pos - nums[i]`. Track the running maximum of `pos`.',
    'Initialise both to `-Infinity` before the loop to handle subarrays that do not start at index 0.',
  ],
  functionName: 'alternatingSubarraySum',
  params: ['nums'],
  starterCode: {
    javascript: `function alternatingSubarraySum(nums) {
  // your code here
}`,
    python: `def alternatingSubarraySum(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[3, -1, 1, 2]], expected: 5 },
    { args: [[1]], expected: 1 },
    { args: [[1, -2, 3, -4, 5]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[5, 5, 5]], expected: 5 },
    { args: [[-1, 1, -1]], expected: 1 },
  ],
};
