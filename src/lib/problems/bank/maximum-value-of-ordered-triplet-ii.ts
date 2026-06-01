import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-ordered-triplet-ii',
  title: 'Maximum Value of an Ordered Triplet II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Return the **maximum value** over all triplets of indices \`(i, j, k)\` such that \`i < j < k\`. The value of a triplet of indices is:

\`(nums[i] - nums[j]) * nums[k]\`

If all such triplets have a negative value, return \`0\`.

**Note:** This is the same problem as "Maximum Value of an Ordered Triplet I" but with \`nums.length\` up to \`10^5\`, requiring an O(n) solution.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [12,6,1,2,7]',
      output: '77',
      explanation: 'The triplet (0,2,4): (12-1)*7 = 77.',
    },
    {
      input: 'nums = [1,10,3,4,19]',
      output: '133',
      explanation: 'The triplet (1,2,4): (10-3)*19 = 133.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'The only triplet has value (1-2)*3=-3 → return 0.',
    },
  ],
  hints: [
    'Level 1: Simulate left to right: maintain maxI (best nums[i] so far) and maxDiff (best nums[i]-nums[j] so far).',
    'Level 2: At each position k: ans = max(ans, maxDiff * nums[k]). Then update maxDiff = max(maxDiff, maxI - nums[k]). Then update maxI = max(maxI, nums[k]).',
    'Level 3: The order of updates matters: answer must be updated before maxDiff, and maxDiff before maxI, so earlier values are used correctly.',
  ],
  functionName: 'maximumTripletValue',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumTripletValue(nums) {
  let ans = 0, maxDiff = 0, maxI = 0;
  for (let k = 0; k < nums.length; k++) {
    ans = Math.max(ans, maxDiff * nums[k]);
    maxDiff = Math.max(maxDiff, maxI - nums[k]);
    maxI = Math.max(maxI, nums[k]);
  }
  return ans;
}`,
    typescript: `function maximumTripletValue(nums: number[]): number {
  let ans = 0, maxDiff = 0, maxI = 0;
  for (let k = 0; k < nums.length; k++) {
    ans = Math.max(ans, maxDiff * nums[k]!);
    maxDiff = Math.max(maxDiff, maxI - nums[k]!);
    maxI = Math.max(maxI, nums[k]!);
  }
  return ans;
}`,
    python: `def maximumTripletValue(nums):
    ans = maxDiff = maxI = 0
    for k in range(len(nums)):
        ans = max(ans, maxDiff * nums[k])
        maxDiff = max(maxDiff, maxI - nums[k])
        maxI = max(maxI, nums[k])
    return ans`,
  },
  visibleTests: [
    { args: [[12, 6, 1, 2, 7]], expected: 77 },
    { args: [[1, 10, 3, 4, 19]], expected: 133 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[1000000, 1, 1000000]], expected: 999999000000 },
    { args: [[5, 4, 3, 2, 1]], expected: 4 },
    { args: [[1, 2, 1, 2, 1]], expected: 2 },
    { args: [[3, 1, 3, 1, 3]], expected: 6 },
    { args: [[1, 1, 1, 1, 1]], expected: 0 },
  ],
};
