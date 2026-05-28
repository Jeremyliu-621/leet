import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-array-inplace',
  title: 'Reverse The Array',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description:
    'Given an integer array nums, return a new array with the same values in reverse order.\n\nA natural approach uses two pointers: one starting at the front and one at the back, swapping values as they move toward the middle.\n\nThe original array must not be modified. An array with zero or one element is its own reverse.',
  constraints: [
    '0 <= nums.length <= 1000',
    'All values in nums are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[4,3,2,1]',
      explanation: 'Every value moves to the mirrored position.',
    },
    {
      input: 'nums = [9]',
      output: '[9]',
      explanation: 'A single element stays put.',
    },
    {
      input: 'nums = [5,5,6]',
      output: '[6,5,5]',
    },
  ],
  hints: [
    'The problem says "must not modify the original array," so start by making a copy. Once you have a copy, how do you reverse it in place?',
    'Two-pointer: set `lo = 0` and `hi = copy.length - 1`. While `lo < hi`, swap `copy[lo]` and `copy[hi]`, then advance both pointers toward the middle.',
    '`const out = [...nums]; let lo = 0, hi = out.length - 1; while (lo < hi) { [out[lo], out[hi]] = [out[hi], out[lo]]; lo++; hi--; } return out;` — or simply `return [...nums].reverse();`',
  ],
  functionName: 'reverseArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function reverseArray(nums) {\n  // your code here\n}\n',
    typescript: "function reverseArray(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def reverseArray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [4, 3, 2, 1] },
    { args: [[9]], expected: [9] },
    { args: [[5, 5, 6]], expected: [6, 5, 5] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[-1, -2, -3]], expected: [-3, -2, -1] },
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[10, 20, 30, 40, 50]], expected: [50, 40, 30, 20, 10] },
    { args: [[7, 7, 7, 7]], expected: [7, 7, 7, 7] },
    { args: [[1, 2]], expected: [2, 1] },
  ],
};
