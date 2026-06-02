import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-distance-to-the-target-element',
  title: 'Minimum Distance to the Target Element',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` (**0-indexed**) and two integers \`target\` and \`start\`, find an index \`i\` such that \`nums[i] == target\` and \`abs(i - start)\` is **minimized**. Return \`abs(i - start)\`.

It is guaranteed that \`target\` exists in \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^4',
    '0 <= start < nums.length',
    'target is in nums',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], target = 5, start = 3',
      output: '1',
      explanation: 'nums[4] = 5 is the only 5 in the array. |4 - 3| = 1.',
    },
    {
      input: 'nums = [1], target = 1, start = 0',
      output: '0',
      explanation: 'nums[0] = target. |0 - 0| = 0.',
    },
    {
      input: 'nums = [1,1,1,1,1,1,1,1], target = 1, start = 0',
      output: '0',
      explanation: 'nums[0] = target. The closest occurrence is at index 0 itself.',
    },
  ],
  hints: [
    'Iterate through every index i. If nums[i] == target, this is a candidate.',
    'Compute the absolute distance |i - start| for each candidate index.',
    'Track and return the minimum distance found across all matching indices.',
  ],
  functionName: 'getMinDistance',
  params: ['nums', 'target', 'start'],
  starterCode: {
    javascript: `function getMinDistance(nums, target, start) {
  let ans = Infinity;
  for (let i = 0; i < nums.length; i++) if (nums[i] === target) ans = Math.min(ans, Math.abs(i - start));
  return ans;
}`,
    typescript: `function getMinDistance(nums: number[], target: number, start: number): number {
  let ans = Infinity;
  for (let i = 0; i < nums.length; i++) if (nums[i]! === target) ans = Math.min(ans, Math.abs(i - start));
  return ans;
}`,
    python: `def getMinDistance(nums: list[int], target: int, start: int) -> int:
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    return min(abs(i - start) for i, v in enumerate(nums) if v == target)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 5, 3], expected: 1 },
    { args: [[1], 1, 0], expected: 0 },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1], 1, 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 1, 3], 1, 0], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 1, 4], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 3, 2], expected: 0 },
    { args: [[1, 1, 1, 1, 1], 1, 3], expected: 0 },
    { args: [[1, 3, 3, 3, 1], 3, 0], expected: 1 },
    { args: [[1, 3, 3, 3, 1], 1, 2], expected: 2 },
    { args: [[2, 5, 1, 3, 5], 5, 3], expected: 1 },
    { args: [[5, 3, 5, 3, 5], 3, 0], expected: 1 },
  ],
};
