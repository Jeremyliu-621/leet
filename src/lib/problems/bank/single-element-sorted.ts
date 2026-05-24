import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-element-sorted',
  title: 'Single Non-Duplicate in Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Given a sorted integer array \`nums\` where every element appears **exactly twice** except for one element that appears only once, find and return that single element.

You must solve this in **O(log n)** time and **O(1)** space.

**Observation:** Before the single element, pairs start at even indices. After it, they start at odd indices. Use this parity shift to binary-search.`,
  constraints: [
    '1 <= nums.length <= 1001',
    'nums.length is odd.',
    '-10000 <= nums[i] <= 10000',
    'nums is sorted in non-decreasing order.',
    'Every element appears exactly twice except for one.',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,3,3,4,4,8,8]',
      output: '2',
      explanation: '2 is the only element that does not have a duplicate.',
    },
    {
      input: 'nums = [3,3,7,7,10,11,11]',
      output: '10',
      explanation: '10 appears only once; all others appear twice.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'Single-element array — that element is the answer.',
    },
  ],
  hints: [
    'In a sorted array of pairs, before the lonely element every pair occupies positions (even, odd). After the lonely element, pairs shift to (odd, even). Binary search on this parity invariant.',
    'Round `mid` down to the nearest even index. If `nums[mid] === nums[mid + 1]`, the single element is to the right of `mid + 1`. Otherwise it is at `mid` or to the left.',
    '```js\nlet left = 0, right = nums.length - 1;\nwhile (left < right) {\n  let mid = (left + right) >> 1;\n  if (mid % 2 === 1) mid--; // align to even\n  if (nums[mid] === nums[mid + 1]) left = mid + 2;\n  else right = mid;\n}\nreturn nums[left];\n```',
  ],
  functionName: 'singleNonDuplicate',
  params: ['nums'],
  starterCode: {
    javascript: 'function singleNonDuplicate(nums) {\n  // your code here\n}\n',
    python: 'def singleNonDuplicate(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 2, 3, 3, 4, 4, 8, 8]], expected: 2 },
    { args: [[3, 3, 7, 7, 10, 11, 11]], expected: 10 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 1, 1]], expected: 0 },
    { args: [[1, 1, 2]], expected: 2 },
    { args: [[1, 1, 2, 2, 3, 3, 5]], expected: 5 },
    { args: [[5, 5, 7, 7, 9, 10, 10]], expected: 9 },
    { args: [[1, 2, 2, 3, 3, 4, 4]], expected: 1 },
    { args: [[1, 1, 3, 3, 5, 6, 6, 8, 8]], expected: 5 },
    { args: [[-3, -3, -1, -1, 0]], expected: 0 },
  ],
};
