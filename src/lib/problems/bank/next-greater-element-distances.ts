import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-element-distances',
  title: 'Next Greater Element — Distances',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `Given an integer array \`nums\`, for each element find the **distance** (in indices) to the nearest element to its right that is strictly greater. If no such element exists, the distance is \`-1\`.

Return an array \`result\` of the same length where \`result[i]\` is the distance from index \`i\` to the next greater element, or \`-1\`.

**Example:**
- \`nums = [2, 1, 5, 6, 2, 3]\`
- At index 0 (value 2): next greater is 5 at index 2 → distance 2
- At index 1 (value 1): next greater is 5 at index 2 → distance 1
- At index 2 (value 5): next greater is 6 at index 3 → distance 1
- At index 3 (value 6): no greater element → \`-1\`
- At index 4 (value 2): next greater is 3 at index 5 → distance 1
- At index 5 (value 3): no greater element → \`-1\`
- Result: \`[2, 1, 1, -1, 1, -1]\``,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2, 1, 5, 6, 2, 3]',
      output: '[2, 1, 1, -1, 1, -1]',
      explanation: 'For index 0 (val 2), the next greater is 5 at index 2, distance = 2.',
    },
    {
      input: 'nums = [4, 3, 2, 1]',
      output: '[-1, -1, -1, -1]',
      explanation: 'Strictly decreasing — no element has a greater element to its right.',
    },
    {
      input: 'nums = [1, 2, 3, 4]',
      output: '[1, 1, 1, -1]',
      explanation: 'Strictly increasing — each element is immediately followed by a greater one.',
    },
  ],
  hints: [
    'Use a monotonic decreasing stack that stores indices. Iterate left to right. For each new element, pop indices from the stack while the current value is greater than the element at those indices.',
    'When you pop an index `j` from the stack because `nums[i] > nums[j]`, the answer for `j` is `i - j`. Push the current index after processing.',
    'After iteration, any indices remaining in the stack have no next greater element — their answer is -1. Initialize the result array to -1 upfront.',
  ],
  functionName: 'nextGreaterDistances',
  params: ['nums'],
  starterCode: {
    javascript: `function nextGreaterDistances(nums) {
  // Return array where result[i] = distance to next greater element, or -1
}`,
    python: `def nextGreaterDistances(nums: list[int]) -> list[int]:
    # Return array where result[i] = distance to next greater element, or -1
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 5, 6, 2, 3]], expected: [2, 1, 1, -1, 1, -1] },
    { args: [[4, 3, 2, 1]], expected: [-1, -1, -1, -1] },
    { args: [[1, 2, 3, 4]], expected: [1, 1, 1, -1] },
    { args: [[5]], expected: [-1] },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: [-1, -1, -1, -1] },
    { args: [[2, 2, 3]], expected: [2, 1, -1] },
    { args: [[10, 1, 2, 3, 4, 5]], expected: [-1, 1, 1, 1, 1, -1] },
    { args: [[1, 3, 2, 4]], expected: [1, 2, 1, -1] },
    { args: [[3, 8, 4, 10, 6, 2]], expected: [1, 2, 1, -1, -1, -1] },
    { args: [[7, 7, 7]], expected: [-1, -1, -1] },
    { args: [[1, 9, 2, 3]], expected: [1, -1, 1, -1] },
  ],
};
