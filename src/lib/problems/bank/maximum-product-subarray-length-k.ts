import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-subarray-length-k',
  title: 'Maximum Product of a Subarray of Length K',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays', 'math'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **maximum product** of any contiguous subarray of **exactly** \`k\` elements.

**Example:**
- \`nums = [1, -2, 3, -4, 5]\`, \`k = 2\`
- Subarrays of length 2: [1,-2]=-2, [-2,3]=-6, [3,-4]=-12, [-4,5]=-20
- Maximum product = **-2**

- \`nums = [3, -1, 4, 2, -5]\`, \`k = 3\`
- Subarrays: [3,-1,4]=-12, [-1,4,2]=-8, [4,2,-5]=-40
- Maximum product = **-8**

Note: Numbers can be negative and zero.`,
  constraints: [
    'k <= nums.length <= 10^4',
    '-10 <= nums[i] <= 10',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1, -2, 3, -4, 5], k = 2',
      output: '-2',
      explanation: 'Products of length-2 subarrays: -2, -6, -12, -20. Max is -2.',
    },
    {
      input: 'nums = [2, 3, -2, 4], k = 2',
      output: '6',
      explanation: 'Products: 6, -6, -8. Max is 6.',
    },
    {
      input: 'nums = [-2, 0, -1], k = 1',
      output: '0',
      explanation: 'Max single element is 0.',
    },
  ],
  hints: [
    'A naive approach computes the product of each window of length k in O(n×k). That is O(n²) in the worst case.',
    'To slide the window efficiently: maintain a current product. When advancing, multiply by the new element and divide by the element leaving the window. Handle zeros carefully — if a 0 is in the window, track how many zeros and recompute the product from scratch.',
    'Alternatively, just compute the product of each window from scratch in O(k) per window — with n ≤ 10^4 and k ≤ n, this is O(n×k) = O(10^8) worst case. Instead, use prefix products with care for zeros, or simply track the product and handle zero windows.',
  ],
  functionName: 'maxProductSubarrayK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxProductSubarrayK(nums, k) {
  // Return the maximum product of any contiguous subarray of exactly k elements
}`,
    typescript: "function maxProductSubarrayK(nums: number[], k: number): number {\n  // Return the maximum product of any contiguous subarray of exactly k elements\n}",

    python: `def maxProductSubarrayK(nums: list[int], k: int) -> int:
    # Return the maximum product of any contiguous subarray of exactly k elements
    pass`,
  },
  visibleTests: [
    { args: [[1, -2, 3, -4, 5], 2], expected: -2 },
    { args: [[2, 3, -2, 4], 2], expected: 6 },
    { args: [[-2, 0, -1], 1], expected: 0 },
    { args: [[3, -1, 4, 2, -5], 3], expected: -8 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 20 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 120 },
    { args: [[-1, -2, -3, -4], 2], expected: 12 },
    { args: [[0, 0, 0], 2], expected: 0 },
    { args: [[2, -3, 4], 2], expected: -6 },
    { args: [[-2, -3, 4, -1], 3], expected: 24 },
  ],
};
