import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-missing-positive',
  title: 'First Missing Positive',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `Given an unsorted integer array \`nums\`, return the smallest missing positive integer.

You must implement an algorithm that runs in \`O(n)\` time and uses \`O(1)\` auxiliary space.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [1,2,0]',
      output: '3',
      explanation: 'The integers in the range [1,2] are all present. The smallest missing positive is 3.',
    },
    {
      input: 'nums = [3,4,-1,1]',
      output: '2',
      explanation: '1 is present, 2 is missing.',
    },
    {
      input: 'nums = [7,8,9,11,12]',
      output: '1',
      explanation: 'The smallest positive integer 1 is missing.',
    },
  ],
  hints: [
    'The answer must be in the range [1, n+1] where n is the length of the array. Any answer outside this range can be ignored.',
    'Use the array itself as a hash map: for each number x in [1, n], put it at index x-1. Swap nums[i] into its correct position nums[nums[i]-1] until nums[i] is out of range or already in place.',
    'After the rearrangement, scan for the first index i where nums[i] != i+1. Return i+1. If all positions are correct, return n+1.',
  ],
  functionName: 'firstMissingPositive',
  params: ['nums'],
  starterCode: {
    javascript: `function firstMissingPositive(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const j = nums[i] - 1;
      [nums[j], nums[i]] = [nums[i], nums[j]];
    }
  }
  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1;
  return n + 1;
}`,
    typescript: `function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i]! >= 1 && nums[i]! <= n && nums[nums[i]! - 1] !== nums[i]) {
      const j = nums[i]! - 1;
      [nums[j], nums[i]] = [nums[i]!, nums[j]!];
    }
  }
  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1;
  return n + 1;
}`,
    python: `def firstMissingPositive(nums):
    n = len(nums)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i]:
            j = nums[i] - 1
            nums[i], nums[j] = nums[j], nums[i]
    for i in range(n):
        if nums[i] != i + 1: return i + 1
    return n + 1`,
  },
  visibleTests: [
    { args: [[1, 2, 0]], expected: 3 },
    { args: [[3, 4, -1, 1]], expected: 2 },
    { args: [[7, 8, 9, 11, 12]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[2, 3, 4, 5]], expected: 1 },
    { args: [[-1, -2, -3]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[0, 2, 2, 1, 1]], expected: 3 },
  ],
};
