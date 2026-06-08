import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'two-sum-debug-off-by-one',
  title: 'Fix the Bug: Two Sum',
  difficulty: 'easy',
  tags: ['hash-map', 'arrays'],
  kind: 'debug',
  description: `The following implementation of **Two Sum** has a bug. Given an array of integers \`nums\` and an integer \`target\`, it should return the indices of the two numbers that add up to \`target\`.

Find and fix the bug so all tests pass.

**Hint:** The bug is a subtle off-by-one error in what gets stored in the map.`,
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    'Only one valid answer exists.',
  ],
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] = 2 + 7 = 9.',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
    },
  ],
  hints: [
    'Run the code against the failing test. What indices does it return?',
    'Look at what value is being stored in the map. Is the index correct?',
    'The bug is `map.set(nums[i], i + 1)` — the index should be `i`, not `i + 1`.',
  ],
  functionName: 'twoSum',
  params: ['nums', 'target'],
  buggyCode: {
    javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i + 1);
  }
  return [];
}`,
    python: `def twoSum(nums, target):
    seen = {}
    for i, v in enumerate(nums):
        if target - v in seen:
            return [seen[target - v], i]
        seen[v] = i + 1
    return []`,
  },
  starterCode: {
    javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i + 1);
  }
  return [];
}`,
    python: `def twoSum(nums, target):
    seen = {}
    for i, v in enumerate(nums):
        if target - v in seen:
            return [seen[target - v], i]
        seen[v] = i + 1
    return []`,
  },
  visibleTests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6], expected: [1, 2] },
    { args: [[3, 3], 6], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[1, 5, 3, 2], 4], expected: [0, 2] },
    { args: [[0, 4, 3, 0], 0], expected: [0, 3] },
    { args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
    { args: [[1, 2, 3, 4, 5], 9], expected: [3, 4] },
  ],
};
