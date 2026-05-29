import type { Problem } from '../types';

export const problem: Problem = {
  id: 'house-robber-iv',
  title: 'House Robber IV',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `There are several consecutive houses along a street, each of which has some money inside. There is also a robber, who wants to steal money from the homes, but he **refuses to steal from adjacent homes**.

The **capability** of the robber is the maximum amount of money he steals from one house of all the houses he robberies.

You are given an integer array \`nums\` representing how much money is in each house. The robber is not going to steal from more than \`k\` houses.

Return the **minimum** capability of the robber to steal money from at least \`k\` houses.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= k <= (nums.length + 1) / 2`',
  ],
  examples: [
    {
      input: 'nums = [2,3,5,9], k = 2',
      output: '5',
      explanation: 'If the robber steals from houses 0 and 2 (values 2 and 5), capability = max(2,5) = 5. No way to steal from 2 non-adjacent houses with capability < 5.',
    },
    {
      input: 'nums = [2,7,9,3,1], k = 2',
      output: '2',
      explanation: 'Steal from houses 0 and 4 (values 2 and 1): max = 2. Can steal 2 non-adjacent houses with capability 2.',
    },
  ],
  hints: [
    'Binary search on the capability value.',
    'For a given capability cap, greedily count how many non-adjacent houses can be robbed (only steal from houses with value ≤ cap).',
    'If the count ≥ k, the capability cap is sufficient; try a smaller cap.',
    'Binary search range: lo = min(nums), hi = max(nums).',
  ],
  functionName: 'minCapability',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minCapability(nums, k) {

}`,
    typescript: `function minCapability(nums: number[], k: number): number {

}`,
    python: `def minCapability(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 5, 9], 2], expected: 5 },
    { args: [[2, 7, 9, 3, 1], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 5 },
    { args: [[10, 10, 10], 2], expected: 10 },
    { args: [[5, 3, 8, 2, 7], 3], expected: 8 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1000000000], 1], expected: 1 },
    { args: [[3, 1, 3, 1, 3], 3], expected: 3 },
  ],
};
