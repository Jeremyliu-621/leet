import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-max-bitwise-or-subsets',
  title: 'Count Number of Maximum Bitwise-OR Subsets',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'backtracking'],
  description: `Given an integer array \`nums\`, find the **maximum** possible **bitwise OR** of a subset of \`nums\` and return *the number of **different non-empty subsets** with the maximum bitwise OR*.

An array \`a\` is a **subset** of an array \`b\` if \`a\` can be obtained from \`b\` by deleting some (possibly zero) elements of \`b\`. Two subsets are considered **different** if the indices of the elements chosen are different.

The bitwise OR of an array \`a\` is equal to \`a[0] OR a[1] OR ... OR a[a.length - 1]\` (**0-indexed**).`,
  constraints: [
    '`1 <= nums.length <= 16`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [3,1]',
      output: '2',
      explanation: 'The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3: {3} and {3,1}.',
    },
    {
      input: 'nums = [2,2,2]',
      output: '7',
      explanation: 'All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 2^3-1 = 7 total non-empty subsets.',
    },
    {
      input: 'nums = [3,2,1,5]',
      output: '6',
      explanation: 'The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7.',
    },
  ],
  hints: [
    'The maximum possible OR is always achieved by taking the OR of all elements. Any element that doesn\'t introduce a new bit can be freely included or excluded.',
    'Use backtracking or iterate over all 2^n non-empty subsets. For each subset (represented as a bitmask), compute its OR and count those equal to the maximum.',
    '```js\nfunction countMaxOrSubsets(nums) {\n  const maxOr = nums.reduce((a, b) => a | b, 0);\n  let count = 0;\n  for (let mask = 1; mask < (1 << nums.length); mask++) {\n    let or = 0;\n    for (let i = 0; i < nums.length; i++)\n      if (mask >> i & 1) or |= nums[i];\n    if (or === maxOr) count++;\n  }\n  return count;\n}\n```',
  ],
  functionName: 'countMaxOrSubsets',
  params: ['nums'],
  starterCode: {
    javascript: `function countMaxOrSubsets(nums) {

}`,
    typescript: `function countMaxOrSubsets(nums: number[]): number {

}`,
    python: `def countMaxOrSubsets(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1]], expected: 2 },
    { args: [[2, 2, 2]], expected: 7 },
    { args: [[3, 2, 1, 5]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 4]], expected: 1 },
    { args: [[0, 0, 0]], expected: 7 },
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[1, 1]], expected: 3 },
  ],
};
