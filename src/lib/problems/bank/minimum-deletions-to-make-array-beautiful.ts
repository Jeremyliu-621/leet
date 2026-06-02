import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-array-beautiful',
  title: 'Minimum Deletions to Make Array Beautiful',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\`. The array \`nums\` is **beautiful** if:

- \`nums.length\` is even.
- \`nums[2i] != nums[2i + 1]\` for every index \`i\` where \`0 <= i < nums.length / 2\`.

Note that an empty array is considered beautiful.

You can delete any number of elements from \`nums\`. When you delete an element, all remaining elements shift left by one position.

Return the **minimum** number of elements to delete to make \`nums\` beautiful.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,3,5]',
      output: '1',
      explanation: 'Delete the first 1: remaining [1,2,3,5] — pairs (1,2) and (3,5) differ.',
    },
    {
      input: 'nums = [1,1,2,2,3,3]',
      output: '2',
      explanation: 'Delete one 1 and one 3 (or equivalently one 1 and one 2): e.g. [1,2,2,3] → pairs differ.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'Already beautiful: pairs (1,2) and (3,4) are distinct.',
    },
  ],
  hints: [
    'Track how many elements have been deleted so far (del). The "logical" position of index i is i - del.',
    'If logical position is even (starting a new pair) and nums[i] == nums[i+1], delete nums[i] (del++).',
    'After scanning, if (n - del) is odd, one more deletion is needed to make the length even.',
  ],
  functionName: 'minDeletion',
  params: ['nums'],
  starterCode: {
    javascript: `function minDeletion(nums) {
  let del = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if ((i - del) % 2 === 0 && nums[i] === nums[i + 1]) del++;
  }
  if ((nums.length - del) % 2 === 1) del++;
  return del;
}`,
    typescript: `function minDeletion(nums: number[]): number {
  let del = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if ((i - del) % 2 === 0 && nums[i]! === nums[i + 1]!) del++;
  }
  if ((nums.length - del) % 2 === 1) del++;
  return del;
}`,
    python: `def minDeletion(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    d = 0
    for i in range(len(nums) - 1):
        if (i - d) % 2 == 0 and nums[i] == nums[i + 1]: d += 1
    if (len(nums) - d) % 2 == 1: d += 1
    return d`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 3, 5]], expected: 1 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 2, 1, 2]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1, 2, 2, 2]], expected: 2 },
    { args: [[2, 2, 2, 2, 2]], expected: 5 },
  ],
};
