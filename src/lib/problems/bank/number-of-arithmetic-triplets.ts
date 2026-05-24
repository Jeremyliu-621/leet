import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-arithmetic-triplets',
  title: 'Number of Arithmetic Triplets',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed**, **strictly increasing** integer array \`nums\` and a positive integer \`diff\`. A triplet \`(i, j, k)\` is an **arithmetic triplet** if the following conditions are met:

- \`i < j < k\`
- \`nums[j] - nums[i] == diff\`
- \`nums[k] - nums[j] == diff\`

Return the number of unique **arithmetic triplets**.`,
  constraints: [
    '`3 <= nums.length <= 200`',
    '`0 <= nums[i] <= 200`',
    '`1 <= diff <= 50`',
    '`nums` is strictly increasing.',
  ],
  examples: [
    {
      input: 'nums = [0,1,4,6,7,10], diff = 3',
      output: '2',
      explanation: 'Triplets: (1,4,7) and (4,7,10).',
    },
    {
      input: 'nums = [4,5,6,7,8,9], diff = 2',
      output: '2',
      explanation: 'Triplets: (4,6,8) and (5,7,9).',
    },
  ],
  hints: [
    'Put all values in a Set. For each number n, check if n+diff and n+2*diff are also in the set.',
    'Since nums is strictly increasing, each found triplet is unique.',
  ],
  functionName: 'arithmeticTriplets',
  params: ['nums', 'diff'],
  starterCode: {
    javascript: `function arithmeticTriplets(nums, diff) {

}`,
    python: `def arithmeticTriplets(nums, diff):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 4, 6, 7, 10], 3], expected: 2 },
    { args: [[4, 5, 6, 7, 8, 9], 2], expected: 2 },
    { args: [[1, 2, 3], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 5, 9], 4], expected: 1 },
    { args: [[1, 2, 4, 5], 3], expected: 0 },
    { args: [[0, 2, 4, 6, 8, 10], 2], expected: 4 },
    { args: [[1, 3], 2], expected: 0 },
  ],
};
