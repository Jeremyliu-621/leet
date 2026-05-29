import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-good-partitions',
  title: 'Count the Number of Good Partitions',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` consisting of **positive** integers.

A partition of an array into one or more **contiguous** subarrays is called **good** if no two subarrays contain the same number.

Return the **total number of good partitions** of \`nums\`.

Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '8',
      explanation: 'All elements are distinct. There are 3 potential split points (after each element except last), each independently split or not → 2^3 = 8 partitions.',
    },
    {
      input: 'nums = [1,2,1,3]',
      output: '2',
      explanation: 'Element 1 appears at indices 0 and 2. Indices 0 and 2 must be in the same partition. Two possible good partitions: [[1,2,1,3]] or [[1,2,1],[3]].',
    },
    {
      input: 'nums = [1,2,3,1,4]',
      output: '2',
      explanation: 'Element 1 at indices 0 and 3 forces them in the same partition. Can split after index 3. Two good partitions: [[1,2,3,1,4]] or [[1,2,3,1],[4]].',
    },
  ],
  hints: [
    'Record the last occurrence index of each number.',
    'Greedily scan: track the furthest last-occurrence seen so far (maxRight).',
    'A partition boundary exists at index i only if i == maxRight (no element spanning this boundary).',
    'Each valid boundary doubles the count. Answer = 2^(boundaries) mod 10^9+7.',
  ],
  functionName: 'numberOfGoodPartitions',
  params: ['nums'],
  starterCode: {
    javascript: `function numberOfGoodPartitions(nums) {\n  \n}`,
    typescript: `function numberOfGoodPartitions(nums: number[]): number {\n  \n}`,
    python: `def numberOfGoodPartitions(nums):\n    `,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 8 },
    { args: [[1, 2, 1, 3]], expected: 2 },
    { args: [[1, 2, 3, 1, 4]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: 8 },
    { args: [[1, 2, 1, 3]], expected: 2 },
    { args: [[1, 2, 3, 1, 4]], expected: 2 },
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 1 },
    { args: [[5, 4, 3, 2, 1]], expected: 16 },
  ],
};
