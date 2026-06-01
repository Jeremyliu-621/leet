import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strong-pairs-in-an-array-i',
  title: 'Maximum Strong Pairs in an Array I',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of non-negative integers \`(x, y)\` is called **strong** if it satisfies: \`|x - y| <= min(x, y)\`.

Return the **maximum** number of **strong pairs** that can be formed by selecting some elements from \`nums\` such that no two pairs share a common element.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '2',
      explanation: 'Sorted: [1,2,3,4,5]. Strong pairs: (1,2), (2,3), (3,4), (4,5) etc. Non-overlapping: (1,2) and (3,4) or (2,3) and (4,5) = 2 pairs.',
    },
    {
      input: 'nums = [4,5,1,1,1]',
      output: '2',
      explanation: 'Sorted: [1,1,1,4,5]. (1,1) is strong (|0|<=1). (4,5) is strong. 2 pairs.',
    },
  ],
  hints: [
    'Sort the array. A pair (x, y) with x ≤ y is strong if y ≤ 2x (i.e., y - x ≤ x).',
    'Greedily match adjacent elements: scan from left, if nums[i] and nums[i+1] form a strong pair, count it and skip both.',
    'This greedy approach maximizes the number of non-overlapping strong pairs.',
  ],
  functionName: 'maximumStrongPairCount',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumStrongPairCount(nums) {\n  \n}\n',
    typescript: 'function maximumStrongPairCount(nums: number[]): number {\n  \n}',
    python: 'def maximumStrongPairCount(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 2 },
    { args: [[4, 5, 1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 3]], expected: 0 },
    { args: [[5, 5, 5, 5]], expected: 2 },
    { args: [[1, 2, 4, 8]], expected: 2 },
    { args: [[1]], expected: 0 },
  ],
};
