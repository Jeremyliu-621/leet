import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-array-such-that-maximum-difference-is-k',
  title: 'Partition Array Such That Maximum Difference Is K',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. You may partition \`nums\` into one or more **subsequences** such that each element in \`nums\` appears in **exactly one** of the subsequences.

Return the **minimum** number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is **at most** \`k\`.

Note that a **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
    '0 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,6,1,2,5], k = 2',
      output: '2',
      explanation: 'Sort: [1,2,3,5,6]. Group 1: [1,2,3] (max-min=2≤k). Group 2: [5,6] (max-min=1≤k). 2 subsequences needed.',
    },
    {
      input: 'nums = [1,2,3], k = 1',
      output: '2',
      explanation: 'Sort: [1,2,3]. Group 1: [1,2] (2-1=1≤k). Group 2: [3] (new group, 3-2=1≤k... wait: 3>1+1). 2 groups.',
    },
    {
      input: 'nums = [2,2,4,5], k = 0',
      output: '3',
      explanation: 'Sort: [2,2,4,5]. With k=0, only identical elements can share a group: [2,2],[4],[5] → 3 groups.',
    },
  ],
  hints: [
    'Sort the array first.',
    'Greedy: start a new subsequence at each element that cannot fit in the current one.',
    'A new group starts when the current element exceeds the start of the current group by more than k.',
  ],
  functionName: 'partitionArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function partitionArray(nums, k) {\n  \n}`,
    typescript: `function partitionArray(nums: number[], k: number): number {\n  \n}`,
    python: `def partitionArray(nums, k):\n    `,
  },
  visibleTests: [
    { args: [[3, 6, 1, 2, 5], 2], expected: 2 },
    { args: [[1, 2, 3], 1], expected: 2 },
    { args: [[2, 2, 4, 5], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[3, 6, 1, 2, 5], 2], expected: 2 },
    { args: [[1, 2, 3], 1], expected: 2 },
    { args: [[2, 2, 4, 5], 0], expected: 3 },
    { args: [[1], 0], expected: 1 },
    { args: [[1, 1, 1], 0], expected: 1 },
    { args: [[10, 1, 5, 3], 4], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 0], expected: 5 },
    { args: [[0, 100000], 100000], expected: 1 },
  ],
};
