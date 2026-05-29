import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-hills-and-valleys-in-an-array',
  title: 'Count Hills and Valleys in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** integer array \`nums\`. An index \`i\` is part of a **hill** in \`nums\` if the closest non-equal neighbors of \`i\` are smaller than \`nums[i]\`. Similarly, an index \`i\` is part of a **valley** in \`nums\` if the closest non-equal neighbors of \`i\` are larger than \`nums[i]\`.

Return the number of **hills and valleys** in \`nums\`.`,
  constraints: [
    '3 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [2,4,1,1,6,5]',
      output: '3',
      explanation: '4 is a hill. 1 is a valley (both 1s count as one). 6 is a hill.',
    },
    {
      input: 'nums = [6,6,5,5,4,1]',
      output: '0',
      explanation: 'Strictly decreasing sequence — no hills or valleys.',
    },
  ],
  hints: [
    'Remove consecutive duplicates from the array first (they form a single hill or valley element).',
    'After deduplication, index i is a hill if dedup[i-1] < dedup[i] > dedup[i+1], and a valley if dedup[i-1] > dedup[i] < dedup[i+1].',
    'Count all such positions i (1 ≤ i < dedup.length - 1).',
  ],
  functionName: 'countHillValley',
  params: ['nums'],
  starterCode: {
    javascript: `function countHillValley(nums) {

}`,
    typescript: `function countHillValley(nums: number[]): number {

}`,
    python: `def countHillValley(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 1, 1, 6, 5]], expected: 3 },
    { args: [[6, 6, 5, 5, 4, 1]], expected: 0 },
    { args: [[1, 2, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 0 },
    { args: [[1, 2, 1, 2, 1]], expected: 3 },
    { args: [[1, 1, 2, 1, 1]], expected: 1 },
    { args: [[1, 2, 2, 1]], expected: 1 },
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[1, 2, 3, 2, 1, 2, 3]], expected: 2 },
    { args: [[2, 1, 2, 1, 2]], expected: 3 },
  ],
};
