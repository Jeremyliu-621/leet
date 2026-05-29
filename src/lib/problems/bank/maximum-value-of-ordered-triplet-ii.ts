import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-ordered-triplet-ii',
  title: 'Maximum Value of an Ordered Triplet II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Return the **maximum** value over all triplets of indices \`(i, j, k)\` such that \`i < j < k\`. The value of a triplet of indices \`(i, j, k)\` is equal to \`(nums[i] - nums[j]) * nums[k]\`.

If all such triplets have a negative value, return \`0\`.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [12,6,1,2,7]',
      output: '77',
      explanation:
        'The triplet (0,2,4) has value (nums[0]-nums[2])*nums[4] = (12-1)*7 = 77. This is the maximum.',
    },
    {
      input: 'nums = [1,10,3,4,19]',
      output: '133',
      explanation:
        'The triplet (1,2,4) has value (nums[1]-nums[2])*nums[4] = (10-3)*19 = 133.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'The only triplet (0,1,2) gives (1-2)*3 = -3 which is negative, so return 0.',
    },
  ],
  hints: [
    'For each j, we want the largest nums[i] to its left and the largest nums[k] to its right.',
    'Precompute prefixMax[j] = max(nums[0..j-1]) and suffixMax[j] = max(nums[j+1..n-1]).',
    'Iterate over j and compute (prefixMax[j] - nums[j]) * suffixMax[j]. Track the global maximum.',
  ],
  functionName: 'maximumTripletValue',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumTripletValue(nums) {

}`,
    typescript: `function maximumTripletValue(nums: number[]): number {

}`,
    python: `def maximumTripletValue(nums):
    pass`,
  },
  visibleTests: [
    { args: [[12, 6, 1, 2, 7]], expected: 77 },
    { args: [[1, 10, 3, 4, 19]], expected: 133 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    // j=2: prefixMax=7, nums[2]=1, suffixMax=6 → (7-1)*6=36
    { args: [[5, 7, 1, 6, 3]], expected: 36 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[1000000, 1, 1000000]], expected: 999999000000 },
    { args: [[3, 1, 2]], expected: 4 },
    // (0,2,3): (5-3)*2=4
    { args: [[5, 4, 3, 2, 1]], expected: 4 },
    { args: [[1, 5, 1, 5, 1]], expected: 20 },
  ],
};
