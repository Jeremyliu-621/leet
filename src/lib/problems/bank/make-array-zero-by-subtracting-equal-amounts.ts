import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-array-zero-by-subtracting-equal-amounts',
  title: 'Make Array Zero by Subtracting Equal Amounts',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a non-negative integer array \`nums\`. In one operation, you must:

- Choose a positive integer \`x\` such that \`x\` is less than or equal to the **smallest non-zero** element in \`nums\`.
- Subtract \`x\` from every **positive** element in \`nums\`.

Return the **minimum number of operations** to make every element in \`nums\` equal to \`0\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`0 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [1,5,0,3,5]',
      output: '3',
      explanation: 'Operation 1: choose x=1, nums becomes [0,4,0,2,4]. Operation 2: choose x=2, nums becomes [0,2,0,0,2]. Operation 3: choose x=2, nums becomes [0,0,0,0,0]. Equivalently, the answer equals the number of distinct positive values.',
    },
    {
      input: 'nums = [0]',
      output: '0',
      explanation: 'All elements are already 0.',
    },
    {
      input: 'nums = [5,5,5,5]',
      output: '1',
      explanation: 'All elements are equal, so one operation suffices.',
    },
  ],
  hints: [
    'Each operation reduces the smallest positive value to 0 (by choosing x equal to that smallest value), eliminating one distinct positive value. So the answer equals the number of distinct positive values in nums.',
    'Use a Set to count distinct positive values and return the size.',
    '```js\nfunction minimumOperations(nums) {\n  return new Set(nums.filter(x => x > 0)).size;\n}\n```',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {
  return new Set(nums.filter(x => x > 0)).size;
}`,
    typescript: `function minimumOperations(nums: number[]): number {
  return new Set(nums.filter(x => x > 0)).size;
}`,
    python: `def minimumOperations(nums: list[int]) -> int:
    return len(set(x for x in nums if x > 0))`,
  },
  visibleTests: [
    { args: [[1, 5, 0, 3, 5]], expected: 3 },
    { args: [[0]], expected: 0 },
    { args: [[5, 5, 5, 5]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1, 1, 2, 2, 3]], expected: 3 },
    { args: [[10, 7, 7, 3, 2, 1]], expected: 5 },
  ],
};
