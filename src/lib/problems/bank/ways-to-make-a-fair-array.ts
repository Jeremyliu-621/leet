import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-make-a-fair-array',
  title: 'Ways to Make a Fair Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\`. You can choose **exactly one** index (0-indexed) and remove the element. Notice that the index of the elements may change after the removal.

For example, if \`nums = [6,1,7,4,1]\`:
- Choosing to remove index \`1\` results in \`nums = [6,7,4,1]\`.
- Choosing to remove index \`2\` results in \`nums = [6,1,4,1]\`.

An array is **fair** if the sum of the odd-indexed values equals the sum of the even-indexed values.

Return the **number of indices** that you could choose such that after the removal, \`nums\` is **fair**.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [2,1,6,4]',
      output: '1',
      explanation: 'Remove index 1: [2,6,4] → even=2+4=6, odd=6. Fair! Remove others: not fair.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: 'Removing any index gives a 2-element array where both elements are 1.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No removal makes the array fair.',
    },
  ],
  hints: [
    'For each removal index i, the elements after i shift parity. The new even-sum = prefix_even + suffix_odd, new odd-sum = prefix_odd + suffix_even (excluding nums[i] from its original bucket).',
    'Track prefix even/odd sums as you iterate, and compute suffix sums using the total.',
    '```js\nfunction waysToMakeFair(nums) {\n  let evenSum = 0, oddSum = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i % 2 === 0) evenSum += nums[i]; else oddSum += nums[i];\n  }\n  let prevEven = 0, prevOdd = 0, count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    const newEven = prevEven + oddSum - prevOdd - (i % 2 === 1 ? nums[i] : 0);\n    const newOdd = prevOdd + evenSum - prevEven - (i % 2 === 0 ? nums[i] : 0);\n    if (newEven === newOdd) count++;\n    if (i % 2 === 0) prevEven += nums[i]; else prevOdd += nums[i];\n  }\n  return count;\n}\n```',
  ],
  functionName: 'waysToMakeFair',
  params: ['nums'],
  starterCode: {
    javascript: `function waysToMakeFair(nums) {

}`,
    typescript: `function waysToMakeFair(nums: number[]): number {

}`,
    python: `def waysToMakeFair(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 6, 4]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 2]], expected: 0 },
    { args: [[1, 2, 1, 2]], expected: 1 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
    { args: [[4, 3, 2, 1]], expected: 0 },
  ],
};
