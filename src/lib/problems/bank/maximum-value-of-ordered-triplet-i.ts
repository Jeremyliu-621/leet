import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-ordered-triplet-i',
  title: 'Maximum Value of an Ordered Triplet I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Return the **maximum value** over all triplets of indices \`(i, j, k)\` such that \`i < j < k\`. The value of a triplet of indices is:

\`(nums[i] - nums[j]) * nums[k]\`

If all such triplets have a negative value, return \`0\`.`,
  constraints: [
    '3 <= nums.length <= 100',
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
      explanation: 'The only triplet (0,1,2) has value (1-2)*3=-3, which is negative, so return 0.',
    },
  ],
  hints: [
    'Level 1: Since n ≤ 100, try all O(n³) triplets with three nested loops.',
    'Level 2: For each triplet (i,j,k) with i<j<k, compute (nums[i]-nums[j])*nums[k] and track the maximum.',
    'Level 3: Keep a running answer initialized to 0 (handles all-negative case automatically).',
  ],
  functionName: 'maximumTripletValue',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumTripletValue(nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++)
    for (let j = i + 1; j < n - 1; j++)
      for (let k = j + 1; k < n; k++)
        ans = Math.max(ans, (nums[i] - nums[j]) * nums[k]);
  return ans;
}`,
    typescript: `function maximumTripletValue(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++)
    for (let j = i + 1; j < n - 1; j++)
      for (let k = j + 1; k < n; k++)
        ans = Math.max(ans, (nums[i]! - nums[j]!) * nums[k]!);
  return ans;
}`,
    python: `def maximumTripletValue(nums):
    n = len(nums)
    ans = 0
    for i in range(n - 2):
        for j in range(i + 1, n - 1):
            for k in range(j + 1, n):
                ans = max(ans, (nums[i] - nums[j]) * nums[k])
    return ans`,
  },
  visibleTests: [
    { args: [[12, 6, 1, 2, 7]], expected: 77 },
    { args: [[1, 10, 3, 4, 19]], expected: 133 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5]], expected: 0 },
    { args: [[1, 1, 2]], expected: 0 },
    { args: [[1000000, 1, 1000000]], expected: 999999000000 },
    { args: [[5, 3, 6]], expected: 12 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 4 },
  ],
};
