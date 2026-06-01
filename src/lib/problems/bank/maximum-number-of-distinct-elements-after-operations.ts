import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-distinct-elements-after-operations',
  title: 'Maximum Number of Distinct Elements After Operations',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` and a **non-negative** integer \`k\`.

In one operation, you can increase or decrease any element of \`nums\` by **at most** \`k\`.

Return the **maximum** number of **distinct** values in \`nums\` after performing the operation on each element **at most once**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,3,4], k = 2',
      output: '6',
      explanation: 'By changing the duplicates: one 2→0, one 3→5, one 3→6. The distinct values are [0,1,2,4,5,6]. Actually assign: 2→0, 2→2, 3→3, 3→4(use 4→4 already), etc. Greedily assign each sorted element to the smallest available distinct value.',
    },
    {
      input: 'nums = [4,4,4,4], k = 1',
      output: '3',
      explanation: 'We can change the four 4s to: [3,4,5] (one remains at 4, one becomes 3, one becomes 5, one can go to 6 but that would be >4+1=5 for the 4th). Wait: 3,4,5,6? But k=1 means each can change by at most 1. So we can get 3,4,5 from three copies (one +1→5, one stays 4, one -1→3). The 4th needs to be distinct from 3,4,5 but 4±1={3,4,5} only. So max=3.',
    },
    {
      input: 'nums = [1,1,1], k = 0',
      output: '1',
      explanation: 'With k=0, no changes. All stay 1. Only 1 distinct.',
    },
  ],
  hints: [
    'Sort nums. Then greedily assign each element to the smallest value it can take (prev_assigned + 1) that fits within its [nums[i] - k, nums[i] + k] range.',
    'For each sorted element, try to assign it to max(prev + 1, nums[i] - k). If that value is <= nums[i] + k, it\'s valid.',
    'Each valid assignment increases the distinct count by 1.',
  ],
  functionName: 'maxDistinctElements',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxDistinctElements(nums, k) {

}`,
    typescript: `function maxDistinctElements(nums: number[], k: number): number {

}`,
    python: `def maxDistinctElements(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 3, 4], 2], expected: 6 },
    { args: [[4, 4, 4, 4], 1], expected: 3 },
    { args: [[1, 1, 1], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1, 2, 3], 0], expected: 3 },
    { args: [[1, 1], 1], expected: 2 },
    { args: [[5, 5, 5], 5], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 5 },
    { args: [[10, 10, 10, 10], 2], expected: 4 },
  ],
};
