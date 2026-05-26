import type { Problem } from '../types';

export const problem: Problem = {
  id: 'destroy-sequential-targets',
  title: 'Destroy Sequential Targets',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` consisting of positive integers and a positive integer \`space\`.

For each index \`i\`, if you choose seed \`nums[i]\`, it destroys all targets that are of the form \`nums[i] + c * space\` for non-negative integers \`c\`. In other words, it destroys all targets in the set \`{nums[i], nums[i]+space, nums[i]+2*space, ...}\`.

Return the **minimum value** of \`nums[i]\` such that choosing seed \`nums[i]\` destroys the **maximum** number of targets.

Note: you can only choose **one** seed.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= space <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [3,7,8,1,1,5], space = 2',
      output: '1',
      explanation: 'Seed 1 destroys {1,3,5,7,...}: targets 1,1,3,5,7 → 5 destroyed. Seed 3 destroys {3,5,7,...}: 3,7,5 → 3 destroyed. So seed 1 wins. Both 1s are seeds that destroy 5 targets; minimum is 1.',
    },
    {
      input: 'nums = [1,3,5,2,4,6], space = 2',
      output: '1',
      explanation: 'Seed 1 destroys {1,3,5,...}: 1,3,5 → 3 targets. Seed 2 destroys {2,4,6,...}: 2,4,6 → 3 targets. Both destroy 3; minimum seed value is 1.',
    },
  ],
  hints: [
    'Two numbers a and b are in the same group if and only if a % space == b % space.',
    'Group all numbers by their remainder mod space. The seed with the largest group wins.',
    'Among seeds with the maximum group size, return the minimum seed value.',
    'Use a Map from remainder to [count, minValue].',
  ],
  functionName: 'destroyTargets',
  params: ['nums', 'space'],
  starterCode: {
    javascript: `function destroyTargets(nums, space) {

}`,
    python: `def destroyTargets(nums, space):
    pass`,
  },
  visibleTests: [
    { args: [[3, 7, 8, 1, 1, 5], 2], expected: 1 },
    { args: [[1, 3, 5, 2, 4, 6], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[6, 2, 5], 100], expected: 2 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 1 },
    { args: [[10, 20, 30], 10], expected: 10 },
    { args: [[5, 5, 5], 3], expected: 5 },
    { args: [[4, 3, 1, 2], 2], expected: 1 },
  ],
};
