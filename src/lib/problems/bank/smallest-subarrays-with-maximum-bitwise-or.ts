import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-subarrays-with-maximum-bitwise-or',
  title: 'Smallest Subarrays With Maximum Bitwise OR',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a 0-indexed array \`nums\` of length \`n\`, consisting of non-negative integers. For each index \`i\` from \`0\` to \`n - 1\`, you must find the **smallest** (shortest) subarray starting at index \`i\` such that the bitwise OR of the subarray equals the maximum possible bitwise OR starting from index \`i\`.

More formally, let \`B[i]\` be the maximum value of \`nums[i] | nums[i+1] | ... | nums[j]\` for any \`j\` in \`[i, n - 1]\`. Then the answer at index \`i\` is the **length** of the shortest subarray starting at \`i\` whose bitwise OR equals \`B[i]\`.

Return an integer array \`answer\` of length \`n\` where \`answer[i]\` is this minimum length.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,0,2,1,3]',
      output: '[3,3,2,2,1]',
      explanation:
        'Index 0: OR(nums[0..2])=1|0|2=3 equals full OR; length 3. Index 1: OR(nums[1..3])=0|2|1=3; length 3. Index 2: length 2. Index 3: length 2. Index 4: length 1.',
    },
    {
      input: 'nums = [0,1,2,3,4]',
      output: '[5,4,3,2,1]',
      explanation: 'Each subsequent start needs to reach the end to accumulate all bits.',
    },
  ],
  hints: [
    'For each bit b, precompute next[b][i] = the first position j >= i where bit b is set.',
    'answer[i] = max(next[b][i] for all bits b that appear in OR(nums[i..n-1])) - i + 1.',
    'Compute next[b] right-to-left: next[b][i] = i if nums[i] has bit b, else next[b][i+1].',
  ],
  functionName: 'smallestSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: 'function smallestSubarrays(nums) {\n  \n}\n',
    python: 'def smallestSubarrays(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 0, 2, 1, 3]], expected: [3, 3, 2, 2, 1] },
    { args: [[0, 1, 2, 3, 4]], expected: [5, 4, 3, 2, 1] },
    { args: [[2, 4, 8]], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [1] },
    { args: [[1, 1, 1]], expected: [1, 1, 1] },
    { args: [[7, 3, 1]], expected: [1, 1, 1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[3, 1, 2]], expected: [1, 2, 1] },
  ],
};
