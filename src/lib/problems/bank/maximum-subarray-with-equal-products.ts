import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-subarray-with-equal-products',
  title: 'Maximum Subarray With Equal Products',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an array of **positive** integers \`nums\`.

A subarray \`nums[i..j]\` is called **product-equivalent** if \`product(nums[i..j]) == lcm(nums[i..j]) * gcd(nums[i..j])\`.

Return the **length of the longest product-equivalent subarray** of \`nums\`.

**Note:** \`product\` means the product of all elements, \`lcm\` means least common multiple, and \`gcd\` means greatest common divisor.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i] <= 10',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,1,1,1]',
      output: '5',
      explanation: 'The subarray [1,2,1,1,1] (indices 2-6) is product-equivalent: product=2, lcm=2, gcd=1, lcm*gcd=2 ✓. All elements are pairwise coprime (at most one 2).',
    },
    {
      input: 'nums = [2,3,4]',
      output: '2',
      explanation: '[2,3] or [3,4]: product=6, lcm=6, gcd=1, 6*1=6 ✓. [2,3,4]: product=24, lcm=12, gcd=1, 12≠24.',
    },
    {
      input: 'nums = [1,2,3,1,4,5,1]',
      output: '5',
    },
  ],
  hints: [
    'A subarray is product-equivalent when all elements are coprime to each other (no two share a common factor > 1). In that case product = lcm and gcd = 1, so product = lcm * gcd.',
    'For small arrays with nums[i] ≤ 10, just check all O(n²) subarrays.',
    'Track running product, lcm, and gcd as you extend the right endpoint. Stop extending when product ≠ lcm * gcd.',
  ],
  functionName: 'maxLength',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxLength(nums) {\n  \n}\n',
    typescript: 'function maxLength(nums: number[]): number {\n  \n}\n',
    python: 'def maxLength(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 1, 1, 1]], expected: 5 },
    { args: [[2, 3, 4]], expected: 2 },
    { args: [[1, 2, 3, 1, 4, 5, 1]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 2 },
    { args: [[2, 2]], expected: 2 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[4, 6]], expected: 2 },
    { args: [[1, 2, 1, 2, 1, 1, 1]], expected: 5 },
    { args: [[2, 3, 5, 7]], expected: 4 },
  ],
};
