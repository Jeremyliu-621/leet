import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-array',
  title: 'Rotate Array Right',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and a non-negative integer \`k\`, rotate the array to the **right** by \`k\` steps and return the result.

Rotating right by 1 means the last element moves to the front. After k rotations, the last k elements wrap around to the beginning.

For example, rotating \`[1,2,3,4,5]\` by 2 gives \`[4,5,1,2,3]\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    '0 <= k <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6,7], k = 3',
      output: '[5,6,7,1,2,3,4]',
      explanation: 'The last 3 elements [5,6,7] move to the front.',
    },
    {
      input: 'nums = [-1,-100,3,99], k = 2',
      output: '[3,99,-1,-100]',
      explanation: 'The last 2 elements wrap to the front.',
    },
    {
      input: 'nums = [1,2,3], k = 0',
      output: '[1,2,3]',
      explanation: 'Rotating by 0 leaves the array unchanged.',
    },
  ],
  hints: [
    'If `k >= nums.length`, only `k % nums.length` rotations actually change the array. Account for that first.',
    'The result is: the last `k` elements, followed by the first `n - k` elements. You can slice the array at the pivot point.',
    '`const n = nums.length; const steps = k % n; return [...nums.slice(n - steps), ...nums.slice(0, n - steps)];`',
  ],
  functionName: 'rotateArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function rotateArray(nums, k) {
  const n = nums.length;
  const steps = k % n;
  return [...nums.slice(n - steps), ...nums.slice(0, n - steps)];
}`,
    typescript: `function rotateArray(nums: number[], k: number): number[] {
  const n = nums.length;
  const steps = k % n;
  return [...nums.slice(n - steps), ...nums.slice(0, n - steps)];
}`,
    python: `def rotateArray(nums, k):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    nums = [int(x) for x in nums]; k = int(k)
    n = len(nums); steps = k % n if n else 0
    return nums[n-steps:] + nums[:n-steps]`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [5, 6, 7, 1, 2, 3, 4] },
    { args: [[-1, -100, 3, 99], 2], expected: [3, 99, -1, -100] },
    { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: [1] },
    { args: [[1], 5], expected: [1] },
    { args: [[1, 2], 1], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [1, 2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 7], expected: [4, 5, 1, 2, 3] },
    { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
  ],
};
