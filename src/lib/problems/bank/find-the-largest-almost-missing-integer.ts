import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-largest-almost-missing-integer',
  title: 'Find the Largest Almost Missing Integer',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`.

An integer \`x\` is **almost missing** from \`nums\` if \`x\` appears in **exactly one** subarray of length 1 (i.e., \`x\` appears exactly once in \`nums\`).

Return the **largest** almost-missing integer from \`nums\`. If no such integer exists, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 50`',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,4,3]',
      output: '4',
      explanation: '4 appears exactly once in nums, so it is almost missing. 1 and 2 also appear once but 4 is largest.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '-1',
      explanation: '1 appears three times, so no integer appears exactly once. Return -1.',
    },
    {
      input: 'nums = [7]',
      output: '7',
      explanation: '7 is the only element and appears exactly once.',
    },
  ],
  hints: [
    'An integer is almost missing if and only if its frequency in `nums` is exactly 1.',
    'Build a frequency map, then find the maximum key whose value equals 1.',
    'If no key has frequency 1, return -1.',
  ],
  functionName: 'largestAlmostMissingInteger',
  params: ['nums'],
  starterCode: {
    javascript: `function largestAlmostMissingInteger(nums) {

}`,
    typescript: `function largestAlmostMissingInteger(nums: number[]): number {

}`,
    python: `def largestAlmostMissingInteger(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 4, 3]], expected: 4 },
    { args: [[1, 1, 1]], expected: -1 },
    { args: [[7]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[5, 3, 5, 2]], expected: 3 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: -1 },
    { args: [[10]], expected: 10 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 5, 4, 4, 3]], expected: 3 },
    { args: [[1, 1, 2, 2, 3, 3, 4]], expected: 4 },
    { args: [[50, 1, 50]], expected: 1 },
  ],
};
