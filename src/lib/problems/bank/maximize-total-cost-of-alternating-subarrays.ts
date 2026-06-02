import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-total-cost-of-alternating-subarrays',
  title: 'Maximize Total Cost of Alternating Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` with length \`n\`.

The **cost** of a subarray \`nums[l..r]\` is defined as:

\`cost(l, r) = nums[l] - nums[l + 1] + ... + nums[r] * pow(-1, r - l)\`

That is, starting with a positive sign and alternating signs within the subarray.

Your task is to **split** \`nums\` into subarrays such that the **total cost** is maximized, and return the maximum total cost.

Note: Splitting \`nums\` means every element of \`nums\` must be in exactly one subarray.

**Key insight:** Use DP where \`pos\` = max cost when the last element was added with a **positive** sign, and \`neg\` = max cost when the last element was added with a **negative** sign.

- To assign \`nums[i]\` a **positive** sign: either start a new subarray OR continue from a negative-sign position → \`pos = max(prev_pos, prev_neg) + nums[i]\`
- To assign \`nums[i]\` a **negative** sign: must follow a positive sign → \`neg = prev_pos - nums[i]\``,
  constraints: [
    '`1 <= n <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,-2,3,4,-1,-2]',
      output: '11',
      explanation:
        'Split as [1, -2, 3], [4], [-1, -2]. Costs: 1-(-2)+3=6, 4, -1-(-2)=1. Total = 11.',
    },
    {
      input: 'nums = [1,-1,1,-1]',
      output: '4',
      explanation: 'Take the whole array as one subarray: 1-(-1)+1-(-1) = 4.',
    },
  ],
  hints: [
    'Think about the sign each element gets in the final sum. An element can be positive (starts a new subarray or follows a negative-sign element) or negative (immediately follows a positive-sign element in the same subarray).',
    'DP: let `pos` = max total cost where the last element got a "+" sign, `neg` = max total where the last element got a "-" sign.',
    'Transitions: new `pos = max(old_pos, old_neg) + nums[i]` (either continue or restart); new `neg = old_pos - nums[i]` (must follow a "+" element).',
    'The answer is max(final_pos, final_neg).',
  ],
  functionName: 'maximizeTotalCost',
  params: ['nums'],
  starterCode: {
    javascript: `function maximizeTotalCost(nums) {
  let pos = nums[0], neg = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    const newPos = Math.max(pos, neg) + nums[i];
    const newNeg = pos - nums[i];
    pos = newPos; neg = newNeg;
  }
  return Math.max(pos, neg);
}`,
    typescript: `function maximizeTotalCost(nums: number[]): number {
  let pos = nums[0]!, neg = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    const newPos = Math.max(pos, neg) + nums[i]!;
    const newNeg = pos - nums[i]!;
    pos = newPos; neg = newNeg;
  }
  return Math.max(pos, neg);
}`,
    python: `def maximizeTotalCost(nums):
    pos, neg = nums[0], float('-inf')
    for i in range(1, len(nums)):
        pos, neg = max(pos, neg) + nums[i], pos - nums[i]
    return max(pos, neg)`,
  },
  visibleTests: [
    { args: [[1, -2, 3, 4, -1, -2]], expected: 11 },
    { args: [[1, -1, 1, -1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: -1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[-1, -2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-3, -1, -2]], expected: -2 },
    { args: [[5, -3, 5]], expected: 13 },
    { args: [[1000000000, -1000000000]], expected: 2000000000 },
    { args: [[-1000000000, 1000000000]], expected: 0 },
  ],
};
