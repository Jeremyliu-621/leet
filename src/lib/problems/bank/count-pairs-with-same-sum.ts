import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-with-same-sum',
  title: 'Count Pairs With Same Sum',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of pairs** \`(i, j)\` where \`i < j\` and \`nums[i] + nums[j] == k\`.`,
  constraints: [
    '1 <= nums.length <= 200',
    '0 <= nums[i] <= 100',
    '0 <= k <= 200',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,3], k = 6',
      output: '2',
      explanation: 'Pairs: (1,5): 2+4=6, (2,4): 3+3=6. (using 0-indexed positions). Count = 2.',
    },
    {
      input: 'nums = [1,1,1], k = 2',
      output: '3',
      explanation: 'All 3 pairs: (0,1), (0,2), (1,2) each sum to 2.',
    },
    {
      input: 'nums = [1,2,3], k = 7',
      output: '0',
      explanation: 'No pair sums to 7.',
    },
  ],
  hints: [
    'Use a nested loop: for each i < j, check if nums[i] + nums[j] === k.',
    'With a frequency map, for each element v check how many prior elements equal k - v.',
    'The O(n²) brute-force is fine given the constraint nums.length <= 200.',
  ],
  functionName: 'countPairsWithSameSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairsWithSameSum(nums, k) {

}`,
    typescript: `function countPairsWithSameSum(nums: number[], k: number): number {

}`,
    python: `def countPairsWithSameSum(nums: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 3], 6], expected: 2 },
    { args: [[1, 1, 1], 2], expected: 3 },
    { args: [[1, 2, 3], 7], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 2], expected: 1 },
    { args: [[0, 0, 0], 0], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 6], expected: 2 },
    { args: [[3, 3, 3, 3], 6], expected: 6 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 1 },
    { args: [[5, 5, 5, 5, 5], 10], expected: 10 },
    { args: [[0, 1, 2, 3, 4], 4], expected: 2 },
  ],
};
