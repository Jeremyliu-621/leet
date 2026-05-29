import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-divisions-with-the-highest-score-of-a-binary-array',
  title: 'All Divisions With the Highest Score of a Binary Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** binary array \`nums\` of length \`n\`. \`nums\` can be divided at index \`i\` (where \`0 <= i <= n\`) into two arrays (possibly empty) \`nums_left\` and \`nums_right\`:

- \`nums_left\` has all the elements of \`nums\` between index \`0\` and \`i - 1\` **(inclusive)**, and \`nums_right\` has all the elements of \`nums\` between index \`i\` and \`n - 1\` **(inclusive)**.
- If \`i == 0\`, \`nums_left\` is **empty**, while \`nums_right\` has all the elements of \`nums\`.
- If \`i == n\`, \`nums_left\` has all the elements of \`nums\`, while \`nums_right\` is **empty**.

The **division score** of an index \`i\` is the **sum** of the number of \`0\`'s in \`nums_left\` and the number of \`1\`'s in \`nums_right\`.

Return *an array of the indices that have the **highest** division score*, in **increasing** order.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    'nums[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'nums = [0,0,1,0]',
      output: '[2,4]',
      explanation: 'Division at index 2: nums_left=[0,0], nums_right=[1,0]. Score = 2+1 = 3.\nDivision at index 4: nums_left=[0,0,1,0], nums_right=[]. Score = 3+0 = 3.\nBoth score 3 (maximum).',
    },
    {
      input: 'nums = [0,0,0,1,1,1,1,1]',
      output: '[3]',
      explanation: 'Division at index 3 gives the maximum score.',
    },
    {
      input: 'nums = [1,1]',
      output: '[0]',
    },
  ],
  hints: [
    'Precompute prefix zero counts and suffix one counts for efficient score calculation.',
    'Score at index i = prefix_zeros[i] + suffix_ones[i]. Use a linear sweep.',
    'Track the maximum score and collect all indices with that score.',
  ],
  functionName: 'maxScoreIndices',
  params: ['nums'],
  starterCode: {
    javascript: `function maxScoreIndices(nums) {\n\n}`,
    python: `def maxScoreIndices(nums) -> list:\n    pass`,
    typescript: `function maxScoreIndices(nums: number[]): number[] {\n\n}`,
  },
  visibleTests: [
    { args: [[0, 0, 1, 0]], expected: [2, 4] },
    { args: [[0, 0, 0, 1, 1, 1, 1, 1]], expected: [3] },
    { args: [[1, 1]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [1] },
    { args: [[1]], expected: [0] },
    { args: [[0, 0]], expected: [2] },
    { args: [[1, 0]], expected: [0, 2] },
    { args: [[0, 1]], expected: [1] },
    { args: [[1, 1, 1]], expected: [0] },
    { args: [[0, 0, 0]], expected: [3] },
    { args: [[0, 1, 0, 1]], expected: [1, 3] },
  ],
};
