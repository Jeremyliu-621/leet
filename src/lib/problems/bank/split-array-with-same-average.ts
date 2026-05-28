import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-array-with-same-average',
  title: 'Split Array With Same Average',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'backtracking'],
  description: `You are given an integer array \`nums\`.

You should move each element of \`nums\` into one of the two arrays \`A\` and \`B\` such that \`A\` and \`B\` are non-empty, and \`average(A) == average(B)\`.

Return \`true\` if it is possible to achieve that and \`false\` otherwise.

**Note** that for \`average(A) == average(B)\`, the averages must be exactly equal, not approximately.`,
  constraints: [
    '1 <= nums.length <= 30',
    '0 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6,7,8]',
      output: 'true',
      explanation: 'We can split the array into [1,4,5] and [2,3,6,7,8], both with average 3.33...',
    },
    {
      input: 'nums = [3,1]',
      output: 'false',
    },
  ],
  hints: [
    'For a subset of size k to have the same average as the whole array, its sum must equal total*k/n. This must be an integer, so first check divisibility.',
    'Use meet-in-the-middle: split nums into two halves. For each half, enumerate all subsets grouped by (count, sum).',
    'For each valid (k, target) pair, iterate over all ways to pick kL elements from the left half summing to some value, and check if the right half can contribute the remaining kR elements summing to the complement.',
    'Make sure the chosen subset is non-empty and not the full array.',
  ],
  functionName: 'splitArraySameAverage',
  params: ['nums'],
  starterCode: {
    javascript: `function splitArraySameAverage(nums) {

}`,
    python: `def splitArraySameAverage(nums):
    `,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: true },
    { args: [[3, 1]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: true },
    { args: [[5, 3, 11, 19, 2]], expected: true },
    { args: [[1, 3]], expected: false },
    { args: [[18, 20, 11, 17, 7, 16, 1, 8, 11, 6, 12, 15, 14]], expected: true },
    { args: [[6, 8, 18, 3, 1]], expected: false },
    { args: [[0, 0, 0, 0]], expected: true },
  ],
};
