import type { Problem } from '../types';

export const problem: Problem = {
  id: 'four-sum',
  title: 'Four Sum',
  difficulty: 'hard',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`nums\` and an integer \`target\`, return all unique quadruplets \`[a, b, c, d]\` such that \`a + b + c + d === target\`.

The solution set must not contain duplicate quadruplets. Each quadruplet should be in non-decreasing order.

**Example:** \`nums = [1,0,-1,0,-2,2], target = 0\` → \`[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]\`.`,
  constraints: [
    '1 <= nums.length <= 200',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,0,-1,0,-2,2], target = 0',
      output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
      explanation: 'All unique quadruplets that sum to 0.',
    },
    {
      input: 'nums = [2,2,2,2,2], target = 8',
      output: '[[2,2,2,2]]',
      explanation: 'Only one unique quadruplet exists.',
    },
    {
      input: 'nums = [1,2,3,4], target = 100',
      output: '[]',
      explanation: 'No quadruplet sums to 100.',
    },
  ],
  hints: [
    'This extends three-sum by adding one more outer loop. Sort the array first so you can use two pointers to handle the innermost pair.',
    'Fix indices i and j (i < j). Then use two pointers l=j+1, r=n-1 to find the remaining two numbers. Skip duplicates after each pointer advance.',
    'Sort. Outer loop i from 0 to n-4. Skip if nums[i]===nums[i-1]. Inner loop j from i+1 to n-3. Skip if nums[j]===nums[j-1]. Two pointers l,r for the rest. On match, push and skip duplicates.',
  ],
  functionName: 'fourSum',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function fourSum(nums, target) {\n  \n}',
    typescript: "function fourSum(nums: number[], target: number): number[][] {\n  \n}",

    python: 'def fourSum(nums: list[int], target: int) -> list[list[int]]:\n    pass',
  },
  visibleTests: [
    { args: [[1, 0, -1, 0, -2, 2], 0], expected: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] },
    { args: [[2, 2, 2, 2, 2], 8], expected: [[2, 2, 2, 2]] },
    { args: [[1, 2, 3, 4], 100], expected: [] },
  ],
  hiddenTests: [
    { args: [[], 0], expected: [] },
    { args: [[0, 0, 0, 0], 0], expected: [[0, 0, 0, 0]] },
    { args: [[-3, -2, -1, 0, 0, 1, 2, 3], 0], expected: [[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] },
  ],
};
