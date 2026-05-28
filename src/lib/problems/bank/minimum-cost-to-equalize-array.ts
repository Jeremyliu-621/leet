import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-equalize-array',
  title: 'Minimum Cost to Equalize Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` and two integers \`cost1\` and \`cost2\`. You can perform the following operations any number of times:

- **Operation 1:** Choose an index \`i\` and increase \`nums[i]\` by 1 at cost \`cost1\`.
- **Operation 2:** Choose two distinct indices \`i\` and \`j\` and increase both \`nums[i]\` and \`nums[j]\` by 1 at cost \`cost2\`.

Return the **minimum cost** required to make all elements of \`nums\` equal.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
    '1 <= cost1 <= 10^6',
    '1 <= cost2 <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [4,1], cost1 = 5, cost2 = 1',
      output: '15',
      explanation: 'Target = 4. Increase nums[1] by 3. Best: use op2 twice (cost 2) + op1 once (cost 5) = 7... Actually use op1 three times = 15.',
    },
    {
      input: 'nums = [2,3,3,3,5], cost1 = 2, cost2 = 1',
      output: '6',
      explanation: 'Make all equal to 5. Increase nums[0] by 3, total increases needed = 3+0+0+0+0 = 3 from min=2. Use op2 wisely.',
    },
    {
      input: 'nums = [3,5,3], cost1 = 1, cost2 = 3',
      output: '4',
      explanation: 'Make all equal to 5. Increase nums[0] and nums[2] each by 2. Cost: 4 * cost1 = 4.',
    },
  ],
  hints: [
    'All elements must be raised to the same target value; the target is at least max(nums).',
    'Let diff[i] = target - nums[i]. If 2*cost1 <= cost2, always use op1; otherwise, use op2 as much as possible.',
    'With op2, you can fill two deficits at once. Pair up the largest deficits together; any remainder uses op1.',
    'Try targets from max(nums) to max(nums) + n to find the optimum when pairing helps.',
  ],
  functionName: 'minCostToEqualizeArray',
  params: ['nums', 'cost1', 'cost2'],
  starterCode: {
    javascript: 'function minCostToEqualizeArray(nums, cost1, cost2) {\n\n}',
    typescript: "function minCostToEqualizeArray(nums: number[], cost1: number, cost2: number): number {\n\n}",

    python: 'def minCostToEqualizeArray(nums, cost1, cost2):\n    pass',
  },
  visibleTests: [
    { args: [[4, 1], 5, 1], expected: 15 },
    { args: [[2, 3, 3, 3, 5], 2, 1], expected: 6 },
    { args: [[3, 5, 3], 1, 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1, 1], expected: 0 },
    { args: [[5], 3, 2], expected: 0 },
    { args: [[1, 2], 1, 1], expected: 1 },
    { args: [[10, 1, 1], 1, 1], expected: 9 },
    { args: [[1, 1, 1, 1, 5], 4, 2], expected: 16 },
    { args: [[3, 3, 3], 2, 1], expected: 0 },
  ],
};
