import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-greatness-of-an-array',
  title: 'Maximize Greatness of an Array',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a 0-indexed integer array \`nums\`. You are allowed to permute \`nums\` into a new array \`perm\` of any order.

Define the **greatness** of \`nums\` relative to \`perm\` as the number of indices \`0 <= i < nums.length\` where \`perm[i] > nums[i]\`.

Return the **maximum** possible greatness you can achieve after permuting \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2,1,3,1]',
      output: '4',
      explanation:
        'One optimal permutation is perm = [2,5,1,3,3,1,1]. Greatness: perm[0]=2>1, perm[1]=5>3, perm[3]=3>2, perm[4]=3>1 — total 4.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '3',
      explanation: 'One permutation is [2,3,4,1]: perm[0]=2>1, perm[1]=3>2, perm[2]=4>3 — total 3.',
    },
  ],
  hints: [
    'Sort nums. Use a two-pointer greedy: maintain a pointer for the "original" array and one for the "permutation" array.',
    'For each element in sorted order (as the permutation value), try to pair it with the smallest original element it strictly exceeds.',
    'This is equivalent to: sort nums, then greedily match the smallest available perm[j] > nums[i], incrementing both pointers on success.',
  ],
  functionName: 'maximizeGreatness',
  params: ['nums'],
  starterCode: {
    javascript: `function maximizeGreatness(nums) {
  nums.sort((a, b) => a - b);
  let i = 0, ans = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > nums[i]) { ans++; i++; }
  }
  return ans;
}`,
    typescript: `function maximizeGreatness(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let i = 0, ans = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j]! > nums[i]!) { ans++; i++; }
  }
  return ans;
}`,
    python: `def maximizeGreatness(nums):
    nums.sort()
    i = ans = 0
    for j in range(len(nums)):
        if nums[j] > nums[i]: ans += 1; i += 1
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 2, 1, 3, 1]], expected: 4 },
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 3, 3, 3]], expected: 0 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 4 },
  ],
};
