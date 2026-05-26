import type { Problem } from '../types';

export const problem: Problem = {
  id: 'move-zeroes',
  title: 'Move Zeroes',
  difficulty: 'easy',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`nums\`, move all \`0\`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Return the modified array.`,
  examples: [
    { input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]' },
    { input: 'nums = [0]', output: '[0]' },
  ],
  constraints: [
    '1 <= nums.length <= 10^4',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  functionName: 'moveZeroes',
  params: ['nums'],
  starterCode: {
    javascript: 'function moveZeroes(nums) {\n  // Modify nums in-place and return it.\n  return nums;\n}\n',
    python: 'def moveZeroes(nums):\n    # Modify nums in-place and return it.\n    return nums\n',
  },
  hints: [
    'Use a slow pointer (write position) that only advances when a non-zero is written.',
    'Scan with a fast pointer, copying non-zero values to the write position.',
    'After the scan, fill the remaining positions from write..end with zeros.',
  ],
  visibleTests: [
    { args: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
    { args: [[0]], expected: [0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[0, 0, 1]], expected: [1, 0, 0] },
    { args: [[4, 2, 0, 1, 0]], expected: [4, 2, 1, 0, 0] },
  ],
};
