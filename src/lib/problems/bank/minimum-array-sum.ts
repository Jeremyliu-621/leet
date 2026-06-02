import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-array-sum',
  title: 'Minimum Array Sum',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` and three integers \`k\`, \`op1\`, and \`op2\`.

You can perform the following operations on \`nums\`:

- **Operation 1**: Choose an index \`i\` and divide \`nums[i]\` by 2 (rounded up). Apply at most \`op1\` times in total. Each \`(index, operation)\ pair may be used at most once.
- **Operation 2**: Choose an index \`i\` and subtract \`k\` from \`nums[i]\`, but only if \`nums[i] >= k\`. Apply at most \`op2\` times in total. Each \`(index, operation)\` pair may be used at most once.

Return the **minimum** possible sum of the elements of \`nums\` after performing any number of operations.`,
  constraints: [
    '1 <= nums.length <= 100',
    '0 <= nums[i] <= 10^5',
    '0 <= k <= 10^5',
    '0 <= op1, op2 <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [2,8,3,19,3], k = 3, op1 = 1, op2 = 1',
      output: '23',
      explanation: 'Apply op1 to nums[3] (19→10) and op2 to nums[1] (8→5). Sum = 2+5+3+10+3 = 23.',
    },
    {
      input: 'nums = [2,4,3], k = 2, op1 = 1, op2 = 2',
      output: '3',
      explanation: 'Apply op2 to nums[0] (2→0), op2 to nums[2] (3→1), op1 to nums[1] (4→2). Sum = 0+2+1 = 3.',
    },
    {
      input: 'nums = [10,10,10], k = 3, op1 = 2, op2 = 1',
      output: '17',
      explanation: 'Apply op1 to nums[0] (10→5), op1 to nums[1] (10→5), op2 to nums[2] (10→7). Sum = 5+5+7 = 17.',
    },
  ],
  hints: [
    'Level 1: For each element, you can apply no operations, only op1, only op2 (if ≥ k), or both (in either order). The order matters: op2-then-op1 gives ⌈(x−k)/2⌉ while op1-then-op2 gives ⌈x/2⌉−k (if applicable).',
    'Level 2: Use 2D DP where dp[i][j] = minimum sum after processing elements so far, having used i op1 applications and j op2 applications. Transition: for each element x, update all (i, j) states by trying all 4 choices.',
    'Level 3: The DP is O(n × op1 × op2). For each element x and state (i, j), generate states (i, j) + x (no ops), (i+1, j) + ⌈x/2⌉, (i, j+1) + (x−k) if x≥k, and (i+1, j+1) + min(⌈(x−k)/2⌉ if x≥k, ⌈x/2⌉−k if ⌈x/2⌉≥k). Take min over all valid final states.',
  ],
  functionName: 'minimumArraySum',
  params: ['nums', 'k', 'op1', 'op2'],
  starterCode: {
    javascript: `function minimumArraySum(nums, k, op1, op2) {

}`,
    typescript: `function minimumArraySum(nums: number[], k: number, op1: number, op2: number): number {

}`,
    python: `def minimumArraySum(nums, k, op1, op2):
    pass`,
  },
  visibleTests: [
    { args: [[2, 8, 3, 19, 3], 3, 1, 1], expected: 23 },
    { args: [[2, 4, 3], 2, 1, 2], expected: 3 },
    { args: [[10, 10, 10], 3, 2, 1], expected: 17 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1, 1], expected: 0 },
    { args: [[5, 5, 5], 3, 0, 0], expected: 15 },
    { args: [[100], 50, 1, 1], expected: 0 },
    { args: [[7, 3, 5], 4, 2, 1], expected: 6 },
    { args: [[20, 10, 6], 5, 1, 2], expected: 16 },
  ],
};
