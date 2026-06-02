import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-two-elements-in-an-array',
  title: 'Maximum Product of Two Elements in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given the array of integers \`nums\`, you will choose two **different** indices \`i\` and \`j\` of that array. Return the **maximum value** of \`(nums[i]-1) * (nums[j]-1)\`.`,
  constraints: [
    '2 <= nums.length <= 500',
    '1 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '12',
      explanation: 'If you choose the indices i=1 and i=2 (0-indexed), you get (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 12.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '16',
      explanation: 'Choose the two 5s: (5-1)*(5-1) = 16.',
    },
    {
      input: 'nums = [3,7]',
      output: '12',
      explanation: '(7-1)*(3-1) = 6*2 = 12.',
    },
  ],
  hints: [
    'The answer is maximized by using the two largest numbers in the array.',
    'Find the first and second maximum values. The answer is (max1 - 1) * (max2 - 1).',
    'You can sort the array descending and use the first two elements, or find the two maximums in a single pass.',
  ],
  functionName: 'maxProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function maxProduct(nums) {
  let m1 = 0, m2 = 0;
  for (const n of nums) {
    if (n > m1) { m2 = m1; m1 = n; }
    else if (n > m2) m2 = n;
  }
  return (m1 - 1) * (m2 - 1);
}`,
    typescript: `function maxProduct(nums: number[]): number {
  let m1 = 0, m2 = 0;
  for (const n of nums) {
    if (n > m1) { m2 = m1; m1 = n; }
    else if (n > m2) m2 = n;
  }
  return (m1 - 1) * (m2 - 1);
}`,
    python: `def maxProduct(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    m1 = m2 = 0
    for n in nums:
        if n > m1: m2, m1 = m1, n
        elif n > m2: m2 = n
    return (m1 - 1) * (m2 - 1)`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 2]], expected: 12 },
    { args: [[1, 5, 4, 5]], expected: 16 },
    { args: [[3, 7]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[10, 2, 5, 2]], expected: 36 },
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[2, 3, 4, 5, 6]], expected: 20 },
    { args: [[100, 100]], expected: 9801 },
  ],
};
