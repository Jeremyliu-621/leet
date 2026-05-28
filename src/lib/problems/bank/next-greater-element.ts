import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-element',
  title: 'Next Greater Element',
  difficulty: 'easy',
  tags: ['stack'],
  description: `Given an integer array \`nums\`, build a new array where each position holds the **next greater element** for the value at that position.

The next greater element for \`nums[i]\` is the first value to its *right* that is strictly larger than \`nums[i]\`. If no such value exists, use \`-1\`.

A *stack* of indices waiting for their next greater value solves this in a single pass. Return the resulting array.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [2,1,3]',
      output: '[3,3,-1]',
      explanation: 'After 2 the first larger value is 3; after 1 it is 3; 3 has nothing larger.',
    },
    {
      input: 'nums = [5,4,3]',
      output: '[-1,-1,-1]',
      explanation: 'Every value is followed only by smaller values.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '[2,3,-1]',
    },
  ],
  functionName: 'nextGreaterElement',
  params: ['nums'],
  starterCode: {
    javascript: 'function nextGreaterElement(nums) {\n  // your code here\n}\n',
    typescript: "function nextGreaterElement(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def nextGreaterElement(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: [3, 3, -1] },
    { args: [[5, 4, 3]], expected: [-1, -1, -1] },
    { args: [[1, 2, 3]], expected: [2, 3, -1] },
  ],
  hiddenTests: [
    { args: [[7]], expected: [-1] },
    { args: [[1, 1, 1]], expected: [-1, -1, -1] },
    { args: [[2, 7, 3, 5, 1]], expected: [7, -1, 5, -1, -1] },
    { args: [[-1, -3, -2]], expected: [-1, -2, -1] },
    { args: [[4, 5, 4, 5]], expected: [5, -1, 5, -1] },
    { args: [[10, 1, 12, 3]], expected: [12, 12, -1, -1] },
  ],
  hints: [
    'A double loop works but is `O(n²)`. The key observation: when you finally see a "big" value, it may resolve the answer for *several* earlier positions at once.',
    'Initialise the result array to `-1`. Keep a stack of **indices** whose answers have not yet been resolved.',
    'Walk left-to-right. For each `i`, while the stack is non-empty and `nums[i] > nums[stack.top()]`, pop the top index `j` and set `result[j] = nums[i]` — `nums[i]` is its next greater. Then push `i`. Any indices still on the stack at the end keep their `-1`. Total work is `O(n)` because each index is pushed and popped at most once.',
  ],
};
