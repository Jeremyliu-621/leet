import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-an-array',
  title: 'Apply Operations to an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a 0-indexed array \`nums\` of size \`n\` consisting of non-negative integers.

You need to apply \`n - 1\` operations to this array where, in the \`i\`th operation (0-indexed), you will apply the following on the \`i\`th element of \`nums\`:

- If \`nums[i] == nums[i + 1]\`, then multiply \`nums[i]\` by \`2\` and set \`nums[i + 1]\` to \`0\`. Otherwise, you skip this operation.

After performing all the operations, shift all the \`0\`'s to the end of the array.

Return the resulting array.

**Note** that the operations are applied sequentially, not all at once.`,
  constraints: [
    '2 <= nums.length <= 2000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1,1,0]',
      output: '[1,4,2,0,0,0]',
      explanation: 'i=0: nums[0]!=nums[1], skip. i=1: nums[1]==nums[2]=2, multiply → [1,4,0,1,1,0]. i=2: nums[2]!=nums[3], skip. i=3: nums[3]==nums[4]=1, multiply → [1,4,0,2,0,0]. i=4: skip. Shift zeros to end → [1,4,2,0,0,0].',
    },
    {
      input: 'nums = [0,1]',
      output: '[1,0]',
      explanation: 'i=0: skip (0≠1). Shift zeros → [1,0].',
    },
  ],
  hints: [
    'Apply the operations left to right first, then move zeros to the end.',
    'Use two passes: one to do the merges, one to collect non-zeros then append zeros.',
    'Be careful that each operation reads the current (mutated) value of nums[i].',
  ],
  functionName: 'applyOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function applyOperations(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i+1]) { nums[i] *= 2; nums[i+1] = 0; }
  }
  const nz = nums.filter(x => x !== 0);
  return [...nz, ...new Array(nums.length - nz.length).fill(0)];
}`,
    typescript: `function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i+1]) { nums[i]! *= 2; nums[i+1] = 0; }
  }
  const nz = nums.filter(x => x !== 0);
  return [...nz, ...new Array<number>(nums.length - nz.length).fill(0)];
}`,
    python: `def applyOperations(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    for i in range(len(nums) - 1):
        if nums[i] == nums[i+1]:
            nums[i] *= 2
            nums[i+1] = 0
    return [x for x in nums if x != 0] + [0] * nums.count(0)
`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1, 1, 0]], expected: [1, 4, 2, 0, 0, 0] },
    { args: [[0, 1]], expected: [1, 0] },
    { args: [[1, 1, 2, 2, 3, 3]], expected: [2, 4, 6, 0, 0, 0] },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: [2, 2, 0, 0] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[5, 5, 5, 5]], expected: [10, 10, 0, 0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
};
