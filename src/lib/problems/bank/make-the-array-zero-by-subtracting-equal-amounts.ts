import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-the-array-zero-by-subtracting-equal-amounts',
  title: 'Make Array Zero by Subtracting Equal Amounts',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a non-negative integer array \`nums\`. In one operation, you must:

- Choose a **positive** integer \`x\` such that \`x\` is less than or equal to the **smallest non-zero** element in \`nums\`.
- Subtract \`x\` from every **positive** element in \`nums\`.

Return *the **minimum** number of operations to make every element in* \`nums\` *equal to* \`0\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,5,0,3,5]',
      output: '3',
      explanation:
        'Step 1: Choose x=1. nums=[0,4,0,2,4]. Step 2: Choose x=2. nums=[0,2,0,0,2]. Step 3: Choose x=2. nums=[0,0,0,0,0]. 3 operations.',
    },
    {
      input: 'nums = [0]',
      output: '0',
      explanation: 'Already all zeros.',
    },
  ],
  hints: [
    'Level 1: Each operation reduces some distinct value to zero. Zeros are unaffected.',
    'Level 2: The number of operations equals the number of distinct non-zero values in the array.',
    'Level 3: Use a Set to count distinct non-zero values. O(n) time.',
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
    python: `def minimumOperations(nums):
    return len(set(x for x in nums if x > 0))`,
  },
  visibleTests: [
    { args: [[1, 5, 0, 3, 5]], expected: 3 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[5, 5, 5]], expected: 1 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 3 },
    { args: [[0, 1, 0, 2, 0, 3]], expected: 3 },
    { args: [[100]], expected: 1 },
    { args: [[4, 4, 4, 4]], expected: 1 },
  ],
};
