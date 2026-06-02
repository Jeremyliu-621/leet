import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-and-value-of-numbers-in-array',
  title: 'Maximum AND Value of Numbers in Array',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`nums\`. Choose two or more elements of \`nums\` and consider their bitwise AND. Return the maximum possible value of the AND.

**Key insight:** Build the answer greedily from the most significant bit (MSB) to the LSB. At each bit \`b\`, try to set it: count how many numbers have ALL currently set bits PLUS this new bit. If count ≥ 2, we can set this bit in the answer.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '4',
      explanation: '4 & 5 = 4. No larger AND of any subset is possible.',
    },
    {
      input: 'nums = [7,12,9,8,9,15]',
      output: '12',
      explanation: '12 & 15 = 12. No subset gives AND > 12.',
    },
    {
      input: 'nums = [3,11,7,5]',
      output: '3',
      explanation: '3 & 7 = 3. OR 3 & 11 = 3. OR 3 & 5 = 1. Best is 3.',
    },
  ],
  hints: [
    'Greedy from MSB to LSB: try to include each bit in the answer.',
    'For a candidate answer ans, count how many nums[i] have (nums[i] & ans) == ans.',
    'If count >= 2, we can achieve AND = ans with at least 2 elements.',
    'Iterate bits from high to low (bit 29 down to 0 is enough for nums ≤ 10^9).',
  ],
  functionName: 'maximumANDSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumANDSum(nums) {
  let ans = 0;
  for (let b = 29; b >= 0; b--) {
    const cand = ans | (1 << b);
    if (nums.filter(n => (n & cand) === cand).length >= 2) ans = cand;
  }
  return ans;
}`,
    typescript: `function maximumANDSum(nums: number[]): number {
  let ans = 0;
  for (let b = 29; b >= 0; b--) {
    const cand = ans | (1 << b);
    if (nums.filter(n => (n & cand) === cand).length >= 2) ans = cand;
  }
  return ans;
}`,
    python: `def maximumANDSum(nums):
    ans = 0
    for b in range(29, -1, -1):
        cand = ans | (1 << b)
        if sum(1 for n in nums if (n & cand) == cand) >= 2:
            ans = cand
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[7, 12, 9, 8, 9, 15]], expected: 12 },
    { args: [[3, 11, 7, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 2]], expected: 2 },
    { args: [[8, 4]], expected: 0 },
    { args: [[15, 15, 15]], expected: 15 },
    { args: [[1, 2, 4, 8]], expected: 0 },
    { args: [[6, 6, 6]], expected: 6 },
    { args: [[5, 7, 13, 15]], expected: 13 },
  ],
};
