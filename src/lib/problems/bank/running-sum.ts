import type { Problem } from '../types';

export const problem: Problem = {
  id: 'running-sum',
  title: 'Running Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\`. Build a new array where each position holds the sum of every element from the start of \`nums\` up to and including that position.

The element at index \`i\` of the result is \`nums[0] + nums[1] + ... + nums[i]\`. This is sometimes called a **prefix sum**.

Return the resulting array. The input array is left unchanged.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'All values in nums are integers.',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[1,3,6,10]',
      explanation: 'Running totals are 1, 1+2, 1+2+3, 1+2+3+4.',
    },
    {
      input: 'nums = [5]',
      output: '[5]',
      explanation: 'A single element is its own running sum.',
    },
    {
      input: 'nums = [3,-1,-1]',
      output: '[3,2,1]',
    },
  ],
  functionName: 'runningSum',
  params: ['nums'],
  starterCode: {
    javascript: 'function runningSum(nums) {\n  // your code here\n}\n',
    python: 'def runningSum(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] },
    { args: [[5]], expected: [5] },
    { args: [[3, -1, -1]], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[-2, -3, -4]], expected: [-2, -5, -9] },
    { args: [[1000, 1000, 1000]], expected: [1000, 2000, 3000] },
    { args: [[10, -10, 10, -10]], expected: [10, 0, 10, 0] },
    { args: [[7, 0, 7, 0, 7]], expected: [7, 7, 14, 14, 21] },
    { args: [[-1]], expected: [-1] },
  ],
  hints: [
    'Each output element is one addition away from the previous output element.',
    'Track a running variable `sum`. For each `i`, do `sum += nums[i]` and push `sum` into the result. One pass, no nested loops.',
    '`let sum = 0; const out = []; for (const n of nums) { sum += n; out.push(sum); } return out;`',
  ],
};
