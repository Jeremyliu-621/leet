import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-cost-of-alternating-subarrays',
  title: 'Maximum Total Cost of Alternating Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` with length \`n\`.

The **cost** of a subarray \`nums[l..r]\` is defined as:

\`cost(l, r) = nums[l] - nums[l+1] + nums[l+2] - ... + nums[r] * (-1)^(r-l)\`

Your task is to **split** \`nums\` into subarrays such that the **total cost** is **maximized**. Splits must cover the entire array (no element skipped, no element counted twice).

Return the **maximum total cost** achievable.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,-2,3,4]',
      output: '10',
      explanation:
        'Split into [1] (cost 1), [-2] (cost -2), [3] (cost 3), [4] (cost 4) = 6. Or split into [1,-2,3,4] with cost 1-(-2)+3-4=2. Best: [1,-2] (1+2=3) + [3,4] (3-4=-1) → 2. Or [1,-2,3] (1+2+3=6) + [4] (4) → 10. Yes 10 is achievable.',
    },
    {
      input: 'nums = [1,-1,1,-1]',
      output: '4',
      explanation:
        'Split into 4 subarrays each of length 1: 1 + (-1) + 1 + (-1) = 0. Or [1,-1] = 2, [1,-1] = 2 → total 4.',
    },
  ],
  hints: [
    'DP: let dp[i] = maximum total cost of subarrays covering nums[0..i-1]. Transition: either extend the previous subarray (adding nums[i] with sign) or start a new subarray at i.',
    'More precisely: let pos[i] = max cost when nums[i] is the POSITIVE (first) element of its subarray; neg[i] = max cost when nums[i] is the NEGATIVE (second) element of its subarray.',
    'pos[i] = max(pos[i-1], neg[i-1]) + nums[i]. neg[i] = pos[i-1] - nums[i]. Answer = max(pos[n-1], neg[n-1]).',
  ],
  functionName: 'maximumTotalCost',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumTotalCost(nums) {
  let pos = nums[0], neg = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    const newPos = Math.max(pos, neg) + nums[i];
    const newNeg = pos - nums[i];
    pos = newPos; neg = newNeg;
  }
  return Math.max(pos, neg);
}`,
    typescript: `function maximumTotalCost(nums: number[]): number {
  let pos = nums[0]!, neg = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    const newPos = Math.max(pos, neg) + nums[i]!;
    const newNeg = pos - nums[i]!;
    pos = newPos; neg = newNeg;
  }
  return Math.max(pos, neg);
}`,
    python: `def maximumTotalCost(nums: list[int]) -> int:
    pos, neg = nums[0], float('-inf')
    for i in range(1, len(nums)):
        new_pos = max(pos, neg) + nums[i]
        new_neg = pos - nums[i]
        pos, neg = new_pos, new_neg
    return max(pos, neg)`,
  },
  visibleTests: [
    { args: [[1, -2, 3, 4]], expected: 10 },
    { args: [[1, -1, 1, -1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: -1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[1, -1]], expected: 2 },
    { args: [[-1, 1]], expected: 0 },
    { args: [[3, -1, 2, -4]], expected: 10 },
    { args: [[5, 5, 5, 5]], expected: 20 },
    { args: [[-1, -2, -3]], expected: 0 },
  ],
};
