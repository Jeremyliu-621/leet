import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-kth-largest-integer-in-array',
  title: 'Find the Kth Largest Integer in the Array',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given an array of strings \`nums\` and an integer \`k\`. Each string in \`nums\` represents an integer without leading zeros.

Return the string that represents the **k<sup>th</sup> largest integer** in \`nums\`.

**Note:** Duplicate numbers should be counted distinctly. For example, if \`nums\` is \`["1","2","2"]\`, \`"2"\` is the first largest integer, \`"2"\` is the second-largest integer, and \`"1"\` is the third-largest integer.`,
  constraints: [
    '1 <= k <= nums.length <= 10^4',
    '1 <= nums[i].length <= 100',
    'nums[i] consists of only digits.',
    'nums[i] will not have any leading zeros.',
  ],
  examples: [
    {
      input: 'nums = ["3","6","7","10"], k = 4',
      output: '"3"',
      explanation: 'The numbers are 3, 6, 7, 10 sorted in descending order: 10, 7, 6, 3. The 4th largest is "3".',
    },
    {
      input: 'nums = ["2","21","12","1"], k = 3',
      output: '"2"',
      explanation: 'Sorted descending: 21, 12, 2, 1. The 3rd largest is "2".',
    },
    {
      input: 'nums = ["0","0"], k = 2',
      output: '"0"',
      explanation: 'Both elements are "0". The 2nd largest is "0".',
    },
  ],
  hints: [
    'Sort the array of strings numerically: first by length (longer = larger), then lexicographically for same-length strings.',
    'Return the element at index k-1 after sorting in descending order.',
    '```js\nfunction kthLargestNumber(nums, k) {\n  nums.sort((a, b) =>\n    a.length !== b.length ? b.length - a.length : b.localeCompare(a));\n  return nums[k - 1];\n}\n```',
  ],
  functionName: 'kthLargestNumber',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function kthLargestNumber(nums, k) {
  nums.sort((a, b) => a.length !== b.length ? b.length - a.length : b.localeCompare(a));
  return nums[k - 1];
}`,
    typescript: `function kthLargestNumber(nums: string[], k: number): string {
  nums.sort((a, b) => a.length !== b.length ? b.length - a.length : b.localeCompare(a));
  return nums[k - 1]!;
}`,
    python: `def kthLargestNumber(nums, k):
    nums.sort(key=lambda x: (len(x), x), reverse=True)
    return nums[k - 1]`,
  },
  visibleTests: [
    { args: [['3', '6', '7', '10'], 4], expected: '3' },
    { args: [['2', '21', '12', '1'], 3], expected: '2' },
    { args: [['0', '0'], 2], expected: '0' },
  ],
  hiddenTests: [
    { args: [['1'], 1], expected: '1' },
    { args: [['5', '3', '8', '1', '9'], 1], expected: '9' },
    { args: [['5', '3', '8', '1', '9'], 5], expected: '1' },
    { args: [['100', '99', '10', '9'], 2], expected: '99' },
    { args: [['1', '2', '2'], 2], expected: '2' },
    { args: [['999999999999999999', '1'], 1], expected: '999999999999999999' },
    { args: [['10', '9', '11'], 2], expected: '10' },
  ],
};
