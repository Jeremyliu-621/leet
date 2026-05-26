import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-two-elements-in-array',
  title: 'Maximum Product of Two Elements in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given the array of integers \`nums\`, you will choose two different indices \`i\` and \`j\` of that array. Return the **maximum value** of \`(nums[i]-1)*(nums[j]-1)\`.`,
  constraints: [
    '2 <= nums.length <= 500',
    '1 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '12',
      explanation: 'Choose indices i=1 and j=2 (0-indexed). (4-1)*(5-1) = 3*4 = 12.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '16',
      explanation: 'Choose indices i=1 and j=3. (5-1)*(5-1) = 4*4 = 16.',
    },
    {
      input: 'nums = [3,7]',
      output: '12',
      explanation: '(3-1)*(7-1) = 2*6 = 12.',
    },
  ],
  hints: [
    'Level 1: Sort the array and use the two largest elements.',
    'Level 2: The two largest values produce the maximum (a-1)*(b-1).',
    'Level 3: nums.sort((a,b)=>b-a); return (nums[0]-1)*(nums[1]-1);',
  ],
  functionName: 'maxProduct',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxProduct(nums) {\n  // your code here\n}\n',
    python: 'def maxProduct(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 2]], expected: 12 },
    { args: [[1, 5, 4, 5]], expected: 16 },
    { args: [[3, 7]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[10, 2, 5, 2]], expected: 36 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 1000]], expected: 0 },
    { args: [[999, 1000]], expected: 998 * 999 },
    { args: [[5, 6, 7, 8]], expected: 42 },
    { args: [[2, 2, 2]], expected: 1 },
  ],
};
