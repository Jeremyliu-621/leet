import type { Problem } from '../types';

export const problem: Problem = {
  id: 'patching-array',
  title: 'Patching Array',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `Given a sorted integer array \`nums\` and an integer \`n\`, add/patch elements to the array such that any number in the range \`[1, n]\` inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^4',
    'nums is sorted in ascending order.',
    '1 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [1,3], n = 6',
      output: '1',
      explanation: 'Combinations of nums are [1],[3],[1,3], which form possible sums of: 1, 3, 4. Now if we add/patch 2 to nums, the combinations are: [1],[2],[3],[1,2],[1,3],[2,3],[1,2,3], which form possible sums of: 1, 2, 3, 4, 5, 6. So we only need 1 patch.',
    },
    {
      input: 'nums = [1,5,10], n = 20',
      output: '2',
      explanation: 'The two patches can be [2, 4].',
    },
    {
      input: 'nums = [1,2,2], n = 5',
      output: '0',
      explanation: 'The array already covers [1,5].',
    },
  ],
  hints: [
    'Maintain a variable `miss` representing the smallest integer not yet covered by the current sums. Initially miss = 1.',
    'For each nums[i] ≤ miss: the element extends coverage to miss + nums[i]. Update miss += nums[i] and advance i.',
    'If nums[i] > miss (or no elements left): we must patch. Add miss itself (greedily doubles coverage). Increment patches; miss += miss.',
  ],
  functionName: 'minPatches',
  params: ['nums', 'n'],
  starterCode: {
    javascript: `function minPatches(nums, n) {
  let patches = 0;
  let miss = 1; // smallest integer not yet coverable
  let i = 0;
  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i++];
    } else {
      // patch: add miss itself to double coverage
      miss += miss;
      patches++;
    }
  }
  return patches;
}`,
    typescript: `function minPatches(nums: number[], n: number): number {
  let patches = 0;
  let miss = 1;
  let i = 0;
  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i++];
    } else {
      miss += miss;
      patches++;
    }
  }
  return patches;
}`,
    python: `def minPatches(nums, n):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    n = int(n)
    patches = 0
    miss = 1  # smallest integer not yet coverable
    i = 0
    while miss <= n:
        if i < len(nums) and nums[i] <= miss:
            miss += nums[i]
            i += 1
        else:
            miss += miss
            patches += 1
    return patches`,
  },
  visibleTests: [
    { args: [[1, 3], 6], expected: 1 },
    { args: [[1, 5, 10], 20], expected: 2 },
    { args: [[1, 2, 2], 5], expected: 0 },
  ],
  hiddenTests: [
    { args: [[], 1], expected: 1 },
    { args: [[1], 1], expected: 0 },
    { args: [[2, 4, 6, 8], 10], expected: 1 },
    { args: [[1, 2, 31, 33], 2147483647], expected: 28 },
    { args: [[1, 2, 3, 4], 20], expected: 1 },
    { args: [[1, 2, 4, 13, 43], 100], expected: 2 },
    { args: [[1, 2, 3, 9], 15], expected: 1 },
  ],
};
