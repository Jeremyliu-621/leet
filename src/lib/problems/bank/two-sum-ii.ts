import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum-ii',
  title: 'Two Sum II - Input Array Is Sorted',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `Given a **1-indexed** array of integers \`numbers\` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific \`target\` number. Let these two numbers be \`numbers[index1]\` and \`numbers[index2]\` where \`1 <= index1 < index2 <= numbers.length\`.

Return the indices of the two numbers as an integer array \`[index1, index2]\` of length 2.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

Your solution must use only constant extra space.`,
  constraints: [
    '2 <= numbers.length <= 3 * 10^4',
    '-1000 <= numbers[i] <= 1000',
    'numbers is sorted in non-decreasing order.',
    '-1000 <= target <= 1000',
    'The tests are generated such that there is exactly one solution.',
  ],
  examples: [
    { input: 'numbers = [2,7,11,15], target = 9', output: '[1,2]', explanation: 'numbers[1] + numbers[2] = 2 + 7 = 9.' },
    { input: 'numbers = [2,3,4], target = 6', output: '[1,3]', explanation: '2 + 4 = 6.' },
    { input: 'numbers = [-1,0], target = -1', output: '[1,2]' },
  ],
  hints: [
    'Level 1: Use two pointers: one at the start, one at the end. Move them based on sum vs target.',
    'Level 2: If sum < target, move left pointer right. If sum > target, move right pointer left. If equal, return [l+1, r+1].',
    'Level 3: let l=0,r=numbers.length-1;while(l<r){const s=numbers[l]+numbers[r];if(s===target)return[l+1,r+1];if(s<target)l++;else r--;}return[-1,-1];',
  ],
  functionName: 'twoSumII',
  params: ['numbers', 'target'],
  starterCode: {
    javascript: 'function twoSumII(numbers, target) {\n  // your code here\n}\n',
    python: 'def twoSumII(numbers, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [1, 2] },
    { args: [[2, 3, 4], 6], expected: [1, 3] },
    { args: [[-1, 0], -1], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 9], expected: [4, 5] },
    { args: [[-3, -2, 0, 4, 5], 2], expected: [1, 5] },
    { args: [[1, 3, 4, 5, 7, 10, 11], 9], expected: [3, 4] },
    { args: [[5, 25, 75], 100], expected: [2, 3] },
  ],
};
