import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-array-largest-sum',
  title: 'Split Array Largest Sum',
  difficulty: 'hard',
  tags: ['binary-search'],
  description: `Given an integer array \`nums\` and an integer \`k\`, split \`nums\` into \`k\` non-empty contiguous subarrays to **minimize the maximum subarray sum**. Return that minimum possible maximum.

**Example:** \`nums = [7,2,5,10,8], k = 2\` — the optimal split is \`[7,2,5]\` and \`[10,8]\`, giving maximum subarray sum \`18\`.

**Key insight:** Binary search on the answer in the range \`[max(nums), sum(nums)]\`. For each candidate answer \`mid\`, greedily check whether you can split the array into at most \`k\` parts each with sum ≤ \`mid\`.`,
  constraints: [
    '1 ≤ nums.length ≤ 1000',
    '0 ≤ nums[i] ≤ 10^6',
    '1 ≤ k ≤ nums.length',
  ],
  examples: [
    {
      input: 'nums = [7,2,5,10,8], k = 2',
      output: '18',
      explanation: 'Split as [7,2,5] and [10,8]. Maximum subarray sums are 14 and 18; the minimum possible maximum is 18.',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 2',
      output: '9',
      explanation: 'Split as [1,2,3] and [4,5]. Sums are 6 and 9; minimum possible maximum is 9.',
    },
    {
      input: 'nums = [1,4,4], k = 3',
      output: '4',
      explanation: 'Each number goes into its own subarray. Maximum is 4.',
    },
  ],
  hints: [
    'The answer lies in the range [max(nums), sum(nums)]. Think about what value you\'re binary searching on.',
    'For a given candidate answer `mid`, greedily check whether you can partition nums into at most k groups each with sum ≤ mid.',
    'If the greedy check passes for `mid`, try smaller. If it fails, you need a larger maximum sum. Standard binary search on the answer pattern.',
  ],
  functionName: 'splitArrayLargest',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function splitArrayLargest(nums, k) {\n  // Binary search on the answer.\n  // Return the minimum possible maximum subarray sum.\n}\n',
    python: 'def splitArrayLargest(nums, k):\n    # Binary search on the answer.\n    # Return the minimum possible maximum subarray sum.\n    pass\n',
  },
  visibleTests: [
    { args: [[7, 2, 5, 10, 8], 2], expected: 18 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 9 },
    { args: [[1, 4, 4], 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1, 1], 5], expected: 1 },
    { args: [[10], 1], expected: 10 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 15 },
    { args: [[2, 3, 1, 2, 4, 3], 5], expected: 4 },
  ],
};
