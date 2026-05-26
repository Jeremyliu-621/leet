import type { Problem } from '../types';

export const problem: Problem = {
  id: '4sum',
  title: '4Sum',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`nums\` and an integer \`target\`, return all **unique** quadruplets \`[nums[a], nums[b], nums[c], nums[d]]\` such that:

- \`0 <= a, b, c, d < nums.length\`
- \`a\`, \`b\`, \`c\`, and \`d\` are **distinct**
- \`nums[a] + nums[b] + nums[c] + nums[d] == target\`

You may return the answer in **any order**. Each quadruplet must be in non-decreasing order, and no two quadruplets should be identical.`,
  constraints: [
    '`1 <= nums.length <= 200`',
    '`-10⁹ <= nums[i] <= 10⁹`',
    '`-10⁹ <= target <= 10⁹`',
  ],
  examples: [
    {
      input: 'nums = [1,0,-1,0,-2,2], target = 0',
      output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
      explanation: 'Three unique quadruplets sum to 0.',
    },
    {
      input: 'nums = [2,2,2,2,2], target = 8',
      output: '[[2,2,2,2]]',
      explanation: 'Only one unique quadruplet sums to 8.',
    },
    {
      input: 'nums = [], target = 0',
      output: '[]',
      explanation: 'Empty input yields no quadruplets.',
    },
  ],
  hints: [
    'Sort the array first. Then fix two outer indices `i` and `j`, and use two pointers `l` and `r` to find the remaining pair.',
    'After sorting, skip duplicate values at each level to avoid duplicate quadruplets: `if (i > 0 && nums[i] === nums[i-1]) continue;`',
    'The total time complexity is O(n³). For each quadruplet found, skip over all identical values on both pointers before continuing.',
  ],
  functionName: 'fourSum',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function fourSum(nums, target) {
  // Return all unique quadruplets that sum to target
}`,
    python: `def fourSum(nums: list[int], target: int) -> list[list[int]]:
    # Return all unique quadruplets that sum to target
    pass`,
  },
  visibleTests: [
    { args: [[1, 0, -1, 0, -2, 2], 0], expected: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]] },
    { args: [[2, 2, 2, 2, 2], 8], expected: [[2, 2, 2, 2]] },
    { args: [[], 0], expected: [] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0, 0], 0], expected: [[0, 0, 0, 0]] },
    { args: [[1, 2, 3, 4], 10], expected: [[1, 2, 3, 4]] },
    { args: [[-1, 0, 1, 2, -1, -4], -1], expected: [[-4, 0, 1, 2], [-1, -1, 0, 1]] },
    { args: [[1, 1, 1, 1, 1], 4], expected: [[1, 1, 1, 1]] },
  ],
};
