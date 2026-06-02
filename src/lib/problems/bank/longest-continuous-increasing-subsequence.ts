import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-continuous-increasing-subsequence',
  title: 'Longest Continuous Increasing Subsequence',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an unsorted array of integers \`nums\`, return the length of the longest **continuous increasing subsequence** (i.e., subarray). The subsequence must be **strictly** increasing.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,4,7]',
      output: '3',
      explanation: 'The longest continuous increasing subsequence is [1,3,5] with length 3.',
    },
    {
      input: 'nums = [2,2,2,2,2]',
      output: '1',
      explanation: 'The longest continuous increasing subsequence is any single element [2].',
    },
  ],
  hints: [
    'Track the current streak length. Reset to 1 whenever the sequence stops increasing.',
    'Single pass: maintain a current run length `cur`. Reset to 1 whenever `nums[i] <= nums[i-1]`. Track the running maximum.',
    `\`\`\`js
let max = 1, cur = 1;
for (let i = 1; i < nums.length; i++) {
  cur = nums[i] > nums[i-1] ? cur + 1 : 1;
  max = Math.max(max, cur);
}
return max;\`\`\``
  ],
  functionName: 'findLengthOfLCIS',
  params: ['nums'],
  starterCode: {
    javascript: `function findLengthOfLCIS(nums) {
  let best = 1, cur = 1;
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i] > nums[i-1] ? cur + 1 : 1;
    if (cur > best) best = cur;
  }
  return best;
}`,
    typescript: `function findLengthOfLCIS(nums: number[]): number {
  let best = 1, cur = 1;
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i] > nums[i-1] ? cur + 1 : 1;
    if (cur > best) best = cur;
  }
  return best;
}`,
    python: `def findLengthOfLCIS(nums):
    best = cur = 1
    for i in range(1, len(nums)):
        cur = cur + 1 if nums[i] > nums[i-1] else 1
        best = max(best, cur)
    return best`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 4, 7]], expected: 3 },
    { args: [[2, 2, 2, 2, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[1]], expected: 1 },
    { args: [[1, 3, 2, 4, 3, 5]], expected: 2 },
  ],
};
