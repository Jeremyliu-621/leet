import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-index-of-a-valid-split',
  title: 'Minimum Index of a Valid Split',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `An element \`x\` of an integer array \`arr\` of length \`m\` is **dominant** if \`freq(x) * 2 > m\`, where \`freq(x)\` is the number of occurrences of \`x\` in \`arr\`.

You are guaranteed that there is exactly one dominant element in \`arr\`.

You can split \`arr\` at an index \`i\` into two arrays \`arr[0, ..., i]\` and \`arr[i + 1, ..., arr.length - 1]\`, but the split is only **valid** if both subarrays have the **same** dominant element.

Return the **minimum** index of a valid split. If no valid split exists, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    'nums has exactly one dominant element.',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,2]',
      output: '2',
      explanation: 'Split at index 2: left=[1,2,2] has dominant 2 (2/3 > 0.5), right=[2] has dominant 2 (1/1 > 0.5). First valid split.',
    },
    {
      input: 'nums = [2,1,3,1,1,1,7,1,2,1]',
      output: '4',
      explanation: 'Dominant element is 1. Split at index 4 is the minimum valid split.',
    },
  ],
  hints: [
    'Find the dominant element by majority vote (Boyer-Moore algorithm) and count its total frequency.',
    'Iterate through indices tracking prefix frequency of the dominant element.',
    'A split at i is valid if leftFreq * 2 > (i+1) and (totalFreq - leftFreq) * 2 > (n - i - 1).',
  ],
  functionName: 'minimumIndex',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumIndex(nums) {

}`,
    python: `def minimumIndex(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 2]], expected: 2 },
    { args: [[2, 1, 3, 1, 1, 1, 7, 1, 2, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[2, 3, 3, 3, 3]], expected: 2 },
    { args: [[1, 2, 3, 2, 2, 2, 2]], expected: 4 },
  ],
};
