import type { Problem } from '../types';

export const problem: Problem = {
  id: 'product-except-self',
  title: 'Product of Array Except Self',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return an array \`output\` where \`output[i]\` is the product of all elements in \`nums\` except \`nums[i]\`.

You must solve it **without using division** and in O(n) time.

**Example:** For \`nums = [1,2,3,4]\`, the output is \`[24,12,8,6]\` because:
- output[0] = 2×3×4 = 24
- output[1] = 1×3×4 = 12
- output[2] = 1×2×4 = 8
- output[3] = 1×2×3 = 6`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-30 <= nums[i] <= 30',
    'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'output[0]=2*3*4=24, output[1]=1*3*4=12, output[2]=1*2*4=8, output[3]=1*2*3=6.',
    },
    {
      input: 'nums = [-1,1,0,-3,3]',
      output: '[0,0,9,0,0]',
      explanation: 'Any index where 0 exists means the product of all others involving that 0 is 0, except the 0 element itself whose product is -1*1*-3*3=9.',
    },
    {
      input: 'nums = [2,3,4]',
      output: '[12,8,6]',
      explanation: 'output[0]=3*4=12, output[1]=2*4=8, output[2]=2*3=6.',
    },
  ],
  hints: [
    'Think about what information you can precompute from the left side and the right side separately — no division needed.',
    'Make two passes: first build a prefix-products array where prefix[i] is the product of all elements before index i. Then do a right-to-left pass multiplying in the suffix product on the fly.',
    '`const n = nums.length, out = new Array(n).fill(1); let p = 1; for (let i = 0; i < n; i++) { out[i] = p; p *= nums[i]; } p = 1; for (let i = n-1; i >= 0; i--) { out[i] *= p; p *= nums[i]; } return out;`',
  ],
  functionName: 'productExceptSelf',
  params: ['nums'],
  starterCode: {
    javascript: 'function productExceptSelf(nums) {\n  // your code here\n}\n',
    typescript: "function productExceptSelf(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def productExceptSelf(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
    { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
    { args: [[2, 3, 4]], expected: [12, 8, 6] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [1, 1] },
    { args: [[-1, -1]], expected: [-1, -1] },
    { args: [[5, 1, 2]], expected: [2, 10, 5] },
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[1, 2, 3, 4, 5]], expected: [120, 60, 40, 30, 24] },
    { args: [[-2, 3, -4, 5]], expected: [-60, 40, -30, 24] },
  ],
};
