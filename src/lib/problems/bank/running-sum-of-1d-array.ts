import type { Problem } from '../types';

export const problem: Problem = {
  id: 'running-sum-of-1d-array',
  title: 'Running Sum of 1d Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\`, return the **running sum** of \`nums\`.

The running sum of an array is defined as: \`runningSum[i] = sum(nums[0]…nums[i])\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10^6 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[1,3,6,10]',
      explanation: 'Running sum: [1, 1+2, 1+2+3, 1+2+3+4] = [1, 3, 6, 10].',
    },
    {
      input: 'nums = [1,1,1,1,1]',
      output: '[1,2,3,4,5]',
    },
    {
      input: 'nums = [3,1,2,10,1]',
      output: '[3,4,6,16,17]',
    },
  ],
  hints: [
    'Level 1: Accumulate a running total as you iterate.',
    'Level 2: Build a new array where each element is the prefix sum up to that index.',
    'Level 3: let s=0;return nums.map(n=>(s+=n,s));',
  ],
  functionName: 'runningSum',
  params: ['nums'],
  starterCode: {
    javascript: `function runningSum(nums) {
  let s = 0;
  return nums.map(n => (s += n, s));
}`,
    typescript: `function runningSum(nums: number[]): number[] {
  let s = 0;
  return nums.map(n => (s += n, s));
}`,
    python: `def runningSum(nums):
    s = 0
    result = []
    for n in nums:
        s += n
        result.append(s)
    return result`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] },
    { args: [[1, 1, 1, 1, 1]], expected: [1, 2, 3, 4, 5] },
    { args: [[3, 1, 2, 10, 1]], expected: [3, 4, 6, 16, 17] },
  ],
  hiddenTests: [
    { args: [[5]], expected: [5] },
    { args: [[-1, -2, -3]], expected: [-1, -3, -6] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1, -1, 1, -1]], expected: [1, 0, 1, 0] },
    { args: [[100, 200, 300]], expected: [100, 300, 600] },
  ],
};
