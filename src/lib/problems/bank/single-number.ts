import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-number',
  title: 'Single Number',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a **non-empty** array of integers \`nums\`, every element appears **twice** except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.`,
  examples: [
    { input: 'nums = [2,2,1]', output: '1' },
    { input: 'nums = [4,1,2,1,2]', output: '4' },
    { input: 'nums = [1]', output: '1' },
  ],
  constraints: [
    '1 <= nums.length <= 3 * 10^4',
    '-3 * 10^4 <= nums[i] <= 3 * 10^4',
    'Each element in the array appears twice except for one element which appears only once.',
  ],
  functionName: 'singleNumber',
  params: ['nums'],
  starterCode: {
    javascript: 'function singleNumber(nums) {\n  // your code here\n}\n',
    python: 'def singleNumber(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'XOR of a number with itself is 0, and XOR with 0 is the number itself.',
    'XOR all elements together. Pairs cancel out, leaving only the unique number.',
    'This is O(n) time and O(1) space — better than using a hash map or sorting. In JS: use `nums.reduce((acc, n) => acc ^ n, 0)` for a concise one-liner.',
  ],
  visibleTests: [
    { args: [[2, 2, 1]], expected: 1 },
    { args: [[4, 1, 2, 1, 2]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[-1, -1, 5]], expected: 5 },
    { args: [[0, 1, 0]], expected: 1 },
    { args: [[3, 6, 3, 4, 6]], expected: 4 },
  ],
};
