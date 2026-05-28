import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-pairs-in-array',
  title: 'Maximum Number of Pairs in Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation, you may do the following:

- Choose **two** integers in \`nums\` that are **equal**.
- Remove both integers from \`nums\`, forming a **pair**.

The operation is done on \`nums\` as many times as possible.

Return a **0-indexed** integer array \`answer\` of size \`2\` where \`answer[0]\` is the number of pairs that are formed and \`answer[1]\` is the number of leftover integers in \`nums\` after doing the operation as many times as possible.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,1,3,2,2]',
      output: '[3,1]',
      explanation: 'Form pairs (1,1), (3,3), (2,2). One leftover 2.',
    },
    {
      input: 'nums = [1,1]',
      output: '[1,0]',
      explanation: 'Form one pair (1,1). No leftovers.',
    },
    {
      input: 'nums = [0]',
      output: '[0,1]',
      explanation: 'No pairs can be formed. One leftover.',
    },
  ],
  hints: [
    'Count the frequency of each number.',
    'The number of pairs from a count c is Math.floor(c / 2).',
    'Leftovers = total elements - pairs * 2.',
  ],
  functionName: 'numberOfPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function numberOfPairs(nums) {

}`,
    typescript: "function numberOfPairs(nums: number[]): number[] {\n\n}",

    python: `def numberOfPairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 1, 3, 2, 2]], expected: [3, 1] },
    { args: [[1, 1]], expected: [1, 0] },
    { args: [[0]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [0, 3] },
    { args: [[1, 1, 1]], expected: [1, 1] },
    { args: [[2, 2, 2, 2]], expected: [2, 0] },
    { args: [[1, 1, 2, 2, 3, 3, 4]], expected: [3, 1] },
  ],
};
