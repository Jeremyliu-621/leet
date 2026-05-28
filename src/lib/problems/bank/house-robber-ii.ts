import type { Problem } from '../types';

export const problem: Problem = {
  id: 'house-robber-ii',
  title: 'House Robber II',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are a professional robber planning to rob houses along a street. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array \`nums\` representing the amount of money of each house, return the *maximum amount of money you can rob tonight **without alerting the police***.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,3,2]',
      output: '3',
      explanation: 'You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.',
    },
    {
      input: 'nums = [1,2,3,1]',
      output: '4',
      explanation: 'Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '3',
    },
  ],
  hints: [
    'Since the houses are circular, house 0 and house n-1 are adjacent.',
    'Key insight: either you rob house 0 (so you cannot rob house n-1), or you rob house n-1 (so you cannot rob house 0). Run the linear house robber on each range and take the maximum.',
    'Run house robber on nums[0..n-2] and nums[1..n-1], return the max of both.',
  ],
  functionName: 'rob',
  params: ['nums'],
  starterCode: {
    javascript: `function rob(nums) {
  // Return max amount you can rob (circular arrangement)
}`,
    typescript: "function rob(nums: number[]): number {\n  // Return max amount you can rob (circular arrangement)\n}",

    python: `def rob(nums):
    # Return max amount you can rob (circular arrangement)
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 2]], expected: 3 },
    { args: [[1, 2, 3, 1]], expected: 4 },
    { args: [[1, 2, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 3]], expected: 3 },
    { args: [[5, 1, 1, 5]], expected: 6 },
    { args: [[2, 7, 9, 3, 1]], expected: 11 },
  ],
};
