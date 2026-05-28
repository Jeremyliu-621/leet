import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-product-pivot',
  title: 'Find Product Pivot',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`nums\`, find the **product pivot index**.

The product pivot index is the index \`i\` where the product of all elements **strictly to the left** of \`i\` equals the product of all elements **strictly to the right** of \`i\`.

- If \`i\` is at the left edge, the left product is \`1\` (empty product).
- If \`i\` is at the right edge, the right product is \`1\` (empty product).

Return the **leftmost** such index, or \`-1\` if none exists.

**Note:** This is the product analogue of the classic pivot-sum problem.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [2, 1, 4, 2, 1]',
      output: '2',
      explanation:
        'At index 2: left product = 2 × 1 = 2, right product = 2 × 1 = 2. They are equal.',
    },
    {
      input: 'nums = [3, 1, 3]',
      output: '1',
      explanation:
        'At index 1: left product = 3, right product = 3. They are equal.',
    },
    {
      input: 'nums = [1, 2, 3]',
      output: '-1',
      explanation: 'No index satisfies the condition.',
    },
  ],
  hints: [
    'Build a prefix-product array and a suffix-product array. `prefix[i]` is the product of all elements before index `i`, and `suffix[i]` is the product of all elements after index `i`.',
    'Set `prefix[0] = 1` and `suffix[n-1] = 1` (the empty-product identity). Fill left-to-right for prefix, right-to-left for suffix.',
    'Scan from left to right and return the first index where `prefix[i] === suffix[i]`. If none found, return `-1`.',
  ],
  functionName: 'findProductPivot',
  params: ['nums'],
  starterCode: {
    javascript: `function findProductPivot(nums) {

}`,
    python: `def findProductPivot(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 4, 2, 1]], expected: 2 },
    { args: [[3, 1, 3]], expected: 1 },
    { args: [[1, 2, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 2]], expected: -1 },
    { args: [[1, 2, 4, 2, 1]], expected: 2 },
    { args: [[6, 2, 3]], expected: -1 },
    { args: [[1, 1]], expected: 0 },
    { args: [[5, 1, 1, 1, 5]], expected: 1 },
    { args: [[-1, 1, -1]], expected: 1 },
    { args: [[4, 2, 2, 4]], expected: -1 },
    { args: [[2, 3, 1, 6]], expected: 2 },
    { args: [[1, 2, 1, 2, 1]], expected: 2 },
  ],
};
