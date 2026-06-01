import type { Problem } from '../types';

export const problem: Problem = {
  id: 'product-of-array-except-self',
  title: 'Product of Array Except Self',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.

The product of any prefix or suffix of \`nums\` is **guaranteed** to fit in a **32-bit integer**.

You must write an algorithm that runs in \`O(n)\` time and **without using the division operation**.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`-30 <= nums[i] <= 30`',
    'The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'answer[0] = 2*3*4 = 24, answer[1] = 1*3*4 = 12, answer[2] = 1*2*4 = 8, answer[3] = 1*2*3 = 6.',
    },
    {
      input: 'nums = [-1,1,0,-3,3]',
      output: '[0,0,9,0,0]',
      explanation: 'The product of all elements except nums[2] (which is 0) is (-1)*1*(-3)*3 = 9. All other positions include the 0, so their products are 0.',
    },
  ],
  hints: [
    'Build a prefix product array where prefix[i] = product of nums[0..i-1] (prefix[0] = 1).',
    'Build a suffix product array where suffix[i] = product of nums[i+1..n-1] (suffix[n-1] = 1). Then result[i] = prefix[i] * suffix[i].',
    'Optimize to O(1) extra space: compute prefix products directly into the output array in a forward pass, then multiply by a running suffix product in a backward pass.',
  ],
  functionName: 'productExceptSelf',
  params: ['nums'],
  starterCode: {
    javascript: `function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  // Forward pass: result[i] holds product of all elements before i
  let prefix = 1;
  for (let i = 0; i < n; i++) { result[i] = prefix; prefix *= nums[i]; }
  // Backward pass: multiply by product of all elements after i
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) { result[i] *= suffix; suffix *= nums[i]; }
  return result;
}`,
    typescript: `function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array<number>(n).fill(1);
  // Forward pass: result[i] holds product of all elements before i
  let prefix = 1;
  for (let i = 0; i < n; i++) { result[i] = prefix; prefix *= nums[i]!; }
  // Backward pass: multiply by product of all elements after i
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) { result[i]! *= suffix; suffix *= nums[i]!; }
  return result;
}`,

    python: `def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    # Forward pass: result[i] holds product of all elements before i
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    # Backward pass: multiply by product of all elements after i
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
    { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
    { args: [[2, 3, 4]], expected: [12, 8, 6] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [1, 1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[-1, -1, -1, -1]], expected: [-1, -1, -1, -1] },
  ],
};
