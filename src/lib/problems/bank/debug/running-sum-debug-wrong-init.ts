import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'running-sum-debug-wrong-init',
  title: 'Fix the Bug: Running Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  kind: 'debug',
  description: `The following implementation of **Running Sum of 1D Array** has a bug. Given an array \`nums\`, return the running sum where \`runningSum[i] = sum(nums[0]…nums[i])\`.

Find and fix the bug so all tests pass.

**Hint:** The bug involves the initial value of the accumulator.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10^6 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[1,3,6,10]',
      explanation: 'Running sum: [1, 1+2, 1+2+3, 1+2+3+4].',
    },
    {
      input: 'nums = [3,1,2,10,1]',
      output: '[3,4,6,16,17]',
    },
  ],
  hints: [
    'What is the running sum of the first element? Is the initial `sum` correct?',
    'The accumulator starts at `1` instead of `0`, causing every output to be off by 1.',
    'Change `let sum = 1` to `let sum = 0`.',
  ],
  functionName: 'runningSum',
  params: ['nums'],
  buggyCode: {
    javascript: `function runningSum(nums) {
  const out = [];
  let sum = 1;
  for (const n of nums) {
    sum += n;
    out.push(sum);
  }
  return out;
}`,
    python: `def runningSum(nums):
    out = []
    total = 1
    for n in nums:
        total += n
        out.append(total)
    return out`,
  },
  starterCode: {
    javascript: `function runningSum(nums) {
  const out = [];
  let sum = 1;
  for (const n of nums) {
    sum += n;
    out.push(sum);
  }
  return out;
}`,
    python: `def runningSum(nums):
    out = []
    total = 1
    for n in nums:
        total += n
        out.append(total)
    return out`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] },
    { args: [[3, 1, 2, 10, 1]], expected: [3, 4, 6, 16, 17] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[-1, 2, -3, 4]], expected: [-1, 1, -2, 2] },
    { args: [[5]], expected: [5] },
  ],
};
