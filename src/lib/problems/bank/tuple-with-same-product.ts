import type { Problem } from '../types';

export const problem: Problem = {
  id: 'tuple-with-same-product',
  title: 'Tuple with Same Product',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` of **distinct** positive integers, return the number of tuples \`(a, b, c, d)\` such that \`a * b = c * d\` where \`a\`, \`b\`, \`c\`, and \`d\` are elements of \`nums\` and \`a != b != c != d\`.

**Key insight:** For each pair \`(i, j)\` with \`i < j\`, compute the product \`nums[i] * nums[j]\`. Count how many pairs share the same product. For each product appearing \`f\` times, the contribution is \`C(f, 2) * 8 = f*(f-1)/2 * 8\` (choosing 2 pairs and arranging them as an ordered quadruple in 8 ways).`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^4',
    'All elements in nums are distinct',
  ],
  examples: [
    {
      input: 'nums = [2,3,4,6]',
      output: '8',
      explanation: 'Product 12: pairs (2,6) and (3,4). Two pairs → C(2,2)*8 = 8 tuples.',
    },
    {
      input: 'nums = [1,2,4,5,10]',
      output: '16',
      explanation: 'Product 10: {(1,10),(2,5)} → 8 tuples. Product 20: {(2,10),(4,5)} → 8 tuples. Total = 16.',
    },
  ],
  hints: [
    'Group all pairs (i,j) by their product.',
    'For each product with f pairs, choose any 2 pairs → C(f,2) combinations.',
    'Each pair of pairs gives 8 ordered tuples (swap within each pair, and swap the two pairs).',
    'Sum f*(f-1)/2*8 across all products.',
  ],
  functionName: 'tupleSameProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function tupleSameProduct(nums) {
  // Count pairs by product, then for each freq f add f*(f-1)/2*8.
}`,
    typescript: `function tupleSameProduct(nums: number[]): number {
  // Count pairs by product, then for each freq f add f*(f-1)/2*8.
}`,
    python: `def tupleSameProduct(nums):
    # Count pairs by product, then for each freq f add f*(f-1)//2*8.
    pass
`,
  },
  visibleTests: [
    { args: [[2, 3, 4, 6]], expected: 8 },
    { args: [[1, 2, 4, 5, 10]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 0 },
    { args: [[2, 3, 4, 6, 12]], expected: 16 },
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[1, 5, 6, 30]], expected: 8 },
    { args: [[1, 2, 4, 8, 16]], expected: 24 },
    { args: [[2, 3, 4, 6, 8, 12]], expected: 40 },
  ],
};
