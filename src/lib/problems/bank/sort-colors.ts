import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-colors',
  title: 'Sort Colors',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array \`nums\` containing only the values \`0\`, \`1\`, and \`2\` (representing red, white, and blue), sort it **in-place** so that all \`0\`s come first, then all \`1\`s, then all \`2\`s.

You must solve this without using the built-in sort function and in a **single pass** with constant extra space.

Return the sorted array.

This is the classic **Dutch National Flag** problem.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'nums[i] is 0, 1, or 2',
  ],
  examples: [
    {
      input: 'nums = [2,0,2,1,1,0]',
      output: '[0,0,1,1,2,2]',
      explanation: 'All 0s first, then 1s, then 2s.',
    },
    {
      input: 'nums = [2,0,1]',
      output: '[0,1,2]',
      explanation: 'Single pass rearranges the three elements.',
    },
    {
      input: 'nums = [0]',
      output: '[0]',
      explanation: 'Single element is already sorted.',
    },
  ],
  hints: [
    'Can you do it in a single pass with three pointers — one for where the next 0 goes, one scanning forward, and one for where the next 2 goes?',
    'Use three pointers: `lo = 0`, `mid = 0`, `hi = n - 1`. While `mid <= hi`: if `nums[mid] === 0` swap with `lo` and advance both; if `nums[mid] === 2` swap with `hi` and only decrement `hi`; if `nums[mid] === 1` just advance `mid`.',
    '`let lo = 0, mid = 0, hi = nums.length - 1; while (mid <= hi) { if (nums[mid] === 0) { [nums[lo], nums[mid]] = [nums[mid], nums[lo]]; lo++; mid++; } else if (nums[mid] === 2) { [nums[mid], nums[hi]] = [nums[hi], nums[mid]]; hi--; } else { mid++; } } return nums;`',
  ],
  functionName: 'sortColors',
  params: ['nums'],
  starterCode: {
    javascript: 'function sortColors(nums) {\n  // your code here\n}\n',
    python: 'def sortColors(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 0, 2, 1, 1, 0]], expected: [0, 0, 1, 1, 2, 2] },
    { args: [[2, 0, 1]], expected: [0, 1, 2] },
    { args: [[0]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[2]], expected: [2] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[2, 2, 2]], expected: [2, 2, 2] },
    { args: [[1, 1, 1]], expected: [1, 1, 1] },
    { args: [[2, 1, 0, 2, 1, 0, 1, 2]], expected: [0, 0, 1, 1, 1, 2, 2, 2] },
    { args: [[0, 2, 1]], expected: [0, 1, 2] },
  ],
};
