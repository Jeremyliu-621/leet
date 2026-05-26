import type { Problem } from '../types';

export const problem: Problem = {
  id: 'special-array-ii',
  title: 'Special Array II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `An array is called **special** if every pair of its adjacent elements has different parity (one is even and the other is odd).

You are given an array \`nums\` and a 2D integer array \`queries\` where \`queries[i] = [from_i, to_i]\`.

For each query, return \`true\` if the subarray \`nums[from_i..to_i]\` is special, and \`false\` otherwise.

Return a boolean array \`answer\` where \`answer[i]\` is the answer to the \`i\`th query.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
    '1 <= queries.length <= 10^5',
    '0 <= queries[i][0] <= queries[i][1] <= nums.length - 1',
  ],
  examples: [
    {
      input: 'nums = [3,4,1,2,6], queries = [[0,4]]',
      output: '[false]',
      explanation: 'nums[0..4] = [3,4,1,2,6]. 1 and 2 are both odd/even-odd-even-even. Adjacent pair (1,2): 1 is odd, 2 is even — ok. Pair (2,6): both even — NOT special.',
    },
    {
      input: 'nums = [4,3,1,6], queries = [[0,2],[2,3]]',
      output: '[false,true]',
      explanation: 'nums[0..2]=[4,3,1]: 3 and 1 are both odd, not special. nums[2..3]=[1,6]: 1 odd, 6 even — special.',
    },
  ],
  hints: [
    'Precompute a prefix array where prefix[i] = number of "bad" adjacent pairs (same parity) in nums[0..i].',
    'A subarray [l, r] is special if there are no bad adjacent pairs inside it, i.e., prefix[r] - prefix[l] == 0.',
    'A pair (nums[i], nums[i+1]) is bad if they have the same parity.',
  ],
  functionName: 'isArraySpecial',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: 'function isArraySpecial(nums, queries) {\n\n}',
    python: 'def isArraySpecial(nums, queries):\n    pass',
  },
  visibleTests: [
    { args: [[3, 4, 1, 2, 6], [[0, 4]]], expected: [false] },
    { args: [[4, 3, 1, 6], [[0, 2], [2, 3]]], expected: [false, true] },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0]]], expected: [true] },
    { args: [[2, 1], [[0, 1]]], expected: [true] },
    { args: [[2, 2], [[0, 1]]], expected: [false] },
    { args: [[1, 2, 3], [[0, 2], [0, 1], [1, 2]]], expected: [true, true, true] },
    { args: [[1, 1, 1], [[0, 2]]], expected: [false] },
    { args: [[1, 2, 1, 2], [[0, 3], [1, 3]]], expected: [true, true] },
  ],
};
