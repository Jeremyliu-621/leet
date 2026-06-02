import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-permutation',
  title: 'Next Permutation',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `Given an array of integers \`nums\`, rearrange it **in-place** to the next lexicographically greater permutation. If no greater permutation exists (the array is sorted in descending order), rearrange to the smallest permutation (sorted ascending).

**Algorithm:**
1. Find the largest index \`i\` such that \`nums[i] < nums[i + 1]\`. If no such index exists, reverse the whole array.
2. Find the largest index \`j > i\` such that \`nums[j] > nums[i]\`.
3. Swap \`nums[i]\` and \`nums[j]\`.
4. Reverse the suffix starting at \`nums[i + 1]\`.

Return the modified array.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[1,3,2]',
      explanation: 'The next permutation of [1,2,3] is [1,3,2].',
    },
    {
      input: 'nums = [3,2,1]',
      output: '[1,2,3]',
      explanation: 'No greater permutation exists, so wrap around to smallest: [1,2,3].',
    },
    {
      input: 'nums = [1,1,5]',
      output: '[1,5,1]',
      explanation: 'The next permutation of [1,1,5] is [1,5,1].',
    },
  ],
  hints: [
    'Scan from right to left to find the first element that is smaller than its right neighbour — this is the "pivot". Everything to its right is in descending order (no greater permutation possible for that suffix).',
    'Once you find the pivot at index i, scan right-to-left again to find the smallest element greater than nums[i] and swap them. Then reverse the suffix after i to get the next permutation.',
    '`let i = nums.length - 2; while (i >= 0 && nums[i] >= nums[i+1]) i--; if (i >= 0) { let j = nums.length - 1; while (nums[j] <= nums[i]) j--; [nums[i], nums[j]] = [nums[j], nums[i]]; } let l = i + 1, r = nums.length - 1; while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; } return nums;`',
  ],
  functionName: 'nextPermutation',
  params: ['nums'] as readonly string[],
  starterCode: {
    javascript: 'function nextPermutation(nums) {\n  let i = nums.length - 2;\n  while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n  if (i >= 0) {\n    let j = nums.length - 1;\n    while (nums[j] <= nums[i]) j--;\n    [nums[i], nums[j]] = [nums[j], nums[i]];\n  }\n  let l = i + 1, r = nums.length - 1;\n  while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }\n  return nums;\n}\n',
    typescript: "function nextPermutation(nums: number[]): number[] {\n  let i = nums.length - 2;\n  while (i >= 0 && nums[i]! >= nums[i + 1]!) i--;\n  if (i >= 0) {\n    let j = nums.length - 1;\n    while (nums[j]! <= nums[i]!) j--;\n    [nums[i], nums[j]] = [nums[j]!, nums[i]!];\n  }\n  let l = i + 1, r = nums.length - 1;\n  while (l < r) { [nums[l], nums[r]] = [nums[r]!, nums[l]!]; l++; r--; }\n  return nums;\n}",

    python: 'def nextPermutation(nums):\n    if hasattr(nums, \'to_py\'): nums = list(nums.to_py())\n    else: nums = list(nums)\n    nums = [int(x) for x in nums]\n    i = len(nums) - 2\n    while i >= 0 and nums[i] >= nums[i+1]: i -= 1\n    if i >= 0:\n        j = len(nums) - 1\n        while nums[j] <= nums[i]: j -= 1\n        nums[i], nums[j] = nums[j], nums[i]\n    l, r = i+1, len(nums)-1\n    while l < r: nums[l], nums[r] = nums[r], nums[l]; l += 1; r -= 1\n    return nums\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [1, 3, 2] },
    { args: [[3, 2, 1]], expected: [1, 2, 3] },
    { args: [[1, 1, 5]], expected: [1, 5, 1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 3, 2]], expected: [2, 1, 3] },
    { args: [[2, 3, 1]], expected: [3, 1, 2] },
    { args: [[1, 2, 3, 4]], expected: [1, 2, 4, 3] },
    { args: [[4, 3, 2, 1]], expected: [1, 2, 3, 4] },
    { args: [[1, 5, 1]], expected: [5, 1, 1] },
  ],
};
