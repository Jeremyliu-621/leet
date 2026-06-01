import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-in-rotated-sorted-array',
  title: 'Find Minimum in Rotated Sorted Array',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `Suppose an array of length \`n\` sorted in ascending order is **rotated** between \`1\` and \`n\` times. For example, the array \`nums = [0,1,2,4,5,6,7]\` might become:

- \`[4,5,6,7,0,1,2]\` if it was rotated \`4\` times.
- \`[0,1,2,4,5,6,7]\` if it was rotated \`7\` times (or 0 times).

Notice that **rotating** an array \`[a[0], a[1], ..., a[n-1]]\` 1 time results in \`[a[n-1], a[0], a[1], ..., a[n-2]]\`.

Given the sorted rotated array \`nums\` of **unique** elements, return the minimum element of this array.

You must write an algorithm that runs in \`O(log n)\` time.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 5000',
    '-5000 <= nums[i] <= 5000',
    'All the integers of nums are unique.',
    'nums is sorted and rotated between 1 and n times.',
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
    },
    {
      input: 'nums = [11,13,15,17]',
      output: '11',
      explanation: 'Array was not rotated.',
    },
  ],
  hints: [
    'If nums[mid] > nums[right], the minimum is in the right half.',
    'Otherwise the minimum is in the left half (including mid).',
    `\`\`\`js
let lo = 0, hi = nums.length-1;
while (lo < hi) {
  const mid = (lo+hi)>>1;
  if (nums[mid] > nums[hi]) lo = mid+1;
  else hi = mid;
}
return nums[lo];\`\`\``
  ],
  functionName: 'findMin',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMin(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid] > nums[hi]) lo = mid + 1;\n    else hi = mid;\n  }\n  return nums[lo];\n}\n',
    typescript: "function findMin(nums: number[]): number {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (nums[mid]! > nums[hi]!) lo = mid + 1;\n    else hi = mid;\n  }\n  return nums[lo]!;\n}",

    python: 'def findMin(nums):\n    lo, hi = 0, len(nums) - 1\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if nums[mid] > nums[hi]:\n            lo = mid + 1\n        else:\n            hi = mid\n    return nums[lo]\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: 1 },
    { args: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
    { args: [[11, 13, 15, 17]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 1]], expected: 1 },
    { args: [[3, 1, 2]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
  ],
};
