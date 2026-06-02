import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-elements-in-array-distinct',
  title: 'Minimum Number of Operations to Make Elements in Array Distinct',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. You need to ensure that the elements in the array are **distinct**. To achieve this, you can perform the following operation any number of times:

- Remove **3** elements from the **beginning** of the array. If the array has fewer than 3 elements, remove **all** remaining elements.

Note that an empty array is considered to have distinct elements.

Return the **minimum** number of operations needed to make the elements of the array distinct.`,
  constraints: ['1 <= nums.length <= 100', '1 <= nums[i] <= 100'],
  examples: [
    {
      input: 'nums = [1,2,3,4,2,3,3,5,7]',
      output: '2',
      explanation:
        'After 1 operation: remove [1,2,3], leaving [4,2,3,3,5,7] — still has duplicates. After 2 operations: remove [4,2,3], leaving [3,5,7] — all distinct.',
    },
    {
      input: 'nums = [4,5,6,4,4]',
      output: '2',
      explanation:
        'After 1 operation: remove [4,5,6], leaving [4,4] — still has duplicate. After 2 operations: remove [4,4] (fewer than 3), leaving [] — distinct.',
    },
    {
      input: 'nums = [6,7,8,9]',
      output: '0',
      explanation: 'All elements are already distinct. No operations needed.',
    },
  ],
  hints: [
    'Find the rightmost index where a duplicate first appears when scanning from right to left. Everything from the start up to and including that index must be removed.',
    'Scan from the end of the array, tracking seen elements. The first time you encounter a repeated element at index i, return ⌈(i+1)/3⌉.',
    'If no duplicate is found during the scan, the array is already distinct and the answer is 0.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {
  const seen = new Set();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i])) return Math.ceil((i + 1) / 3);
    seen.add(nums[i]);
  }
  return 0;
}`,
    typescript: `function minimumOperations(nums: number[]): number {
  const seen = new Set<number>();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i]!)) return Math.ceil((i + 1) / 3);
    seen.add(nums[i]!);
  }
  return 0;
}`,
    python: `def minimumOperations(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    import math
    seen = set()
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] in seen: return math.ceil((i + 1) / 3)
        seen.add(nums[i])
    return 0`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 2, 3, 3, 5, 7]], expected: 2 },
    { args: [[4, 5, 6, 4, 4]], expected: 2 },
    { args: [[6, 7, 8, 9]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 0 },
    { args: [[1, 1, 1, 2, 2, 2, 3]], expected: 2 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 2 },
    { args: [[1, 2, 3, 1]], expected: 1 },
  ],
};
