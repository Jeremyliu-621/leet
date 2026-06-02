import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-with-absolute-difference-k',
  title: 'Count Pairs With Absolute Difference K',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of pairs** \`(i, j)\` where \`i < j\` and \`|nums[i] - nums[j]| == k\`.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 100',
    '1 <= k <= 99',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1], k = 1',
      output: '4',
      explanation: 'The pairs are (0,1), (0,2), (1,3), and (2,3): |1-2|=1, |1-2|=1, |2-1|=1, |2-1|=1.',
    },
    {
      input: 'nums = [1,3], k = 2',
      output: '1',
      explanation: 'The only pair is (0,1): |1-3|=2.',
    },
    {
      input: 'nums = [3,2,1,5,4], k = 2',
      output: '3',
      explanation: 'Pairs with |diff|=2: (0,2): |3-1|=2, (0,4): |3-5|=2, (1,3): |2-4|=2.',
    },
  ],
  hints: [
    'Use a nested loop: for each pair (i,j) with i<j, check if Math.abs(nums[i]-nums[j])===k.',
    'With a frequency map, for each element x check if x+k or x-k exists in the map (be careful with i<j ordering).',
    'The O(n²) brute-force approach is fine given the constraint nums.length <= 200.',
  ],
  functionName: 'countPairsWithAbsoluteDifferenceK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairsWithAbsoluteDifferenceK(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (Math.abs(nums[i] - nums[j]) === k) count++;
  return count;
}`,
    typescript: `function countPairsWithAbsoluteDifferenceK(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (Math.abs(nums[i]! - nums[j]!) === k) count++;
  return count;
}`,
    python: `def countPairsWithAbsoluteDifferenceK(nums: list[int], k: int) -> int:
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if abs(nums[i] - nums[j]) == k:
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], 1], expected: 4 },
    { args: [[1, 3], 2], expected: 1 },
    { args: [[3, 2, 1, 5, 4], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 0], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 2 },
    { args: [[1, 2, 3], 2], expected: 1 },
    { args: [[5, 5, 5], 0], expected: 3 },
    { args: [[1, 3, 5, 7], 2], expected: 3 },
    { args: [[10, 1, 10, 1], 9], expected: 4 },
    { args: [[2, 4, 6, 8], 5], expected: 0 },
  ],
};
