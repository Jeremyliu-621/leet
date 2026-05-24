import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-rotated',
  title: 'Find Minimum in Rotated Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Given a sorted array of **unique** integers that has been **rotated** at an unknown pivot, find the minimum element.

The array was originally sorted in ascending order before being rotated. You must solve this in **O(log n)** time.

**Example:** \`[3,4,5,1,2]\` is a rotation of \`[1,2,3,4,5]\`; the minimum is \`1\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
    'All values in nums are unique.',
    'nums is an ascending array rotated at some pivot (possibly not rotated at all).',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: '1',
      explanation: 'The original array was [1,2,3,4,5] rotated 3 times.',
    },
    {
      input: 'nums = [4,5,6,7,0,1,2]',
      output: '0',
      explanation: 'The minimum element is 0.',
    },
    {
      input: 'nums = [11,13,15,17]',
      output: '11',
      explanation: 'No rotation occurred; minimum is the first element.',
    },
  ],
  hints: [
    'The minimum element is the only one that is smaller than its predecessor. In a rotated sorted array, the right half contains the minimum. Compare the midpoint to the rightmost element.',
    'If `nums[mid] > nums[right]`, the minimum must be in the right portion `[mid+1, right]`. Otherwise it is in the left portion `[left, mid]` (mid could itself be the minimum).',
    '```js\nlet left = 0, right = nums.length - 1;\nwhile (left < right) {\n  const mid = (left + right) >> 1;\n  if (nums[mid] > nums[right]) left = mid + 1;\n  else right = mid;\n}\nreturn nums[left];\n```',
  ],
  functionName: 'findMinRotated',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMinRotated(nums) {\n  // your code here\n}\n',
    python: 'def findMinRotated(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: 1 },
    { args: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
    { args: [[11, 13, 15, 17]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 1, 2]], expected: 1 },
    { args: [[5, 6, 7, 8, 1, 2, 3, 4]], expected: 1 },
    { args: [[10, 1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: 1 },
    { args: [[-5, -3, -1, -10, -8]], expected: -10 },
  ],
};
