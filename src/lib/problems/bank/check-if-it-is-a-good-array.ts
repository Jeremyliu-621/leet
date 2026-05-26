import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-it-is-a-good-array',
  title: 'Check If It Is a Good Array',
  difficulty: 'hard',
  tags: ['math', 'arrays'],
  description: `Given an array \`nums\` of positive integers, consider the following process: choose any two elements \`nums[i]\` and \`nums[j]\` (not necessarily distinct), and replace them with \`nums[i] - nums[j]\` (even if the result is negative). Repeat this until only one element remains.

Return \`true\` if you can make the array contain only \`1\`, otherwise return \`false\`.

**Mathematical insight:** By Bézout's identity, integers reachable by repeated subtraction from a set of integers are exactly the multiples of their GCD. The target 1 is reachable if and only if \`gcd(nums) == 1\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [12,5,7,23]',
      output: 'true',
      explanation: 'gcd(12,5,7,23) = 1, so we can reach 1.',
    },
    {
      input: 'nums = [29,6,10]',
      output: 'true',
      explanation: 'gcd(29,6,10) = 1.',
    },
    {
      input: 'nums = [3,6]',
      output: 'false',
      explanation: 'gcd(3,6) = 3, so we can only make multiples of 3.',
    },
  ],
  hints: [
    'The achievable values are exactly the multiples of gcd(nums).',
    'Compute gcd(nums[0], nums[1], ..., nums[n-1]) iteratively.',
    'Return true if and only if the overall GCD equals 1.',
  ],
  functionName: 'isGoodArray',
  params: ['nums'],
  starterCode: {
    javascript: `function isGoodArray(nums) {

}`,
    python: `def isGoodArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[12, 5, 7, 23]], expected: true },
    { args: [[29, 6, 10]], expected: true },
    { args: [[3, 6]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[2]], expected: false },
    { args: [[2, 4, 6, 8]], expected: false },
    { args: [[2, 3]], expected: true },
    { args: [[1000000000, 999999999]], expected: true },
  ],
};
