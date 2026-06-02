import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-array-left',
  title: 'Rotate Array Left',
  difficulty: 'easy',
  tags: ['arrays', 'math', 'two-pointers'],
  description: `Given an integer array \`nums\` and a non-negative integer \`k\`, rotate the array to the **left** by \`k\` steps and return the resulting array.

Rotating left by 1 means the first element moves to the end. After \`k\` rotations, the first \`k\` elements wrap around to the end.

For example, rotating \`[1,2,3,4,5]\` left by 2 gives \`[3,4,5,1,2]\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    '0 <= k <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6,7], k = 3',
      output: '[4,5,6,7,1,2,3]',
      explanation: 'The first 3 elements [1,2,3] move to the end.',
    },
    {
      input: 'nums = [-1,-100,3,99], k = 2',
      output: '[3,99,-1,-100]',
      explanation: 'The first 2 elements wrap to the end.',
    },
    {
      input: 'nums = [1,2,3], k = 0',
      output: '[1,2,3]',
      explanation: 'Rotating by 0 leaves the array unchanged.',
    },
  ],
  hints: [
    'If `k >= nums.length`, only `k % nums.length` rotations actually change the array.',
    'The result is: elements from index `k` to the end, followed by the first `k` elements.',
    '`const steps = k % nums.length; return [...nums.slice(steps), ...nums.slice(0, steps)];`',
  ],
  functionName: 'rotateArrayLeft',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function rotateArrayLeft(nums, k) {
  const n = nums.length;
  const steps = k % n;
  return [...nums.slice(steps), ...nums.slice(0, steps)];
}`,
    typescript: `function rotateArrayLeft(nums: number[], k: number): number[] {
  const n = nums.length;
  const steps = k % n;
  return [...nums.slice(steps), ...nums.slice(0, steps)];
}`,
    python: `def rotateArrayLeft(nums, k):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    nums = [int(x) for x in nums]; k = int(k)
    n = len(nums); steps = k % n if n else 0
    return nums[steps:] + nums[:steps]`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [4, 5, 6, 7, 1, 2, 3] },
    { args: [[-1, -100, 3, 99], 2], expected: [3, 99, -1, -100] },
    { args: [[1, 2, 3], 0], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2], 3], expected: [2, 1] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [1, 2, 3, 4, 5] },
    { args: [[1, 2, 3, 4, 5], 2], expected: [3, 4, 5, 1, 2] },
    { args: [[10, 20, 30], 6], expected: [10, 20, 30] },
  ],
};
