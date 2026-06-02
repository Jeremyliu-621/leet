import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-indices-with-index-and-value-difference-i',
  title: 'Find Indices With Index and Value Difference I',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given a 0-indexed integer array \`nums\` and two integers \`indexDifference\` and \`valueDifference\`, find any two indices \`i\` and \`j\` (both 0-indexed) such that:

- \`|i - j| >= indexDifference\`, and
- \`|nums[i] - nums[j]| >= valueDifference\`

Return an integer array \`[i, j]\` if such a pair exists, or \`[-1, -1]\` otherwise. Since the answer may not be unique, return **any** valid pair.`,
  constraints: [
    '`2 <= nums.length <= 100`',
    '`0 <= nums[i] <= 50`',
    '`0 <= indexDifference <= 100`',
    '`0 <= valueDifference <= 50`',
  ],
  examples: [
    {
      input: 'nums = [5,1,4,1], indexDifference = 2, valueDifference = 4',
      output: '[0,3]',
      explanation: '|0 - 3| = 3 >= 2 and |nums[0] - nums[3]| = |5 - 1| = 4 >= 4.',
    },
    {
      input: 'nums = [2,1], indexDifference = 0, valueDifference = 0',
      output: '[0,0]',
      explanation: '|0 - 0| = 0 >= 0 and |nums[0] - nums[0]| = 0 >= 0.',
    },
    {
      input: 'nums = [1,2,3], indexDifference = 2, valueDifference = 4',
      output: '[-1,-1]',
      explanation: 'No pair of indices satisfies both conditions.',
    },
  ],
  hints: [
    'Since `nums.length <= 100`, an O(n²) brute-force double loop checking every pair `(i, j)` is perfectly efficient enough.',
    'For each pair of indices `i` and `j`, check both conditions: `Math.abs(i - j) >= indexDifference` and `Math.abs(nums[i] - nums[j]) >= valueDifference`.',
    'Return as soon as you find any valid pair. If the outer loop finishes without a match, return `[-1, -1]`.',
  ],
  functionName: 'findIndices',
  params: ['nums', 'indexDifference', 'valueDifference'],
  starterCode: {
    javascript: `function findIndices(nums, indexDifference, valueDifference) {
  const n = nums.length;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference)
        return [i, j];
  return [-1, -1];
}`,
    typescript: `function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i]! - nums[j]!) >= valueDifference)
        return [i, j];
  return [-1, -1];
}`,
    python: `def findIndices(nums, indexDifference, valueDifference):
    n = len(nums)
    for i in range(n):
        for j in range(n):
            if abs(i - j) >= indexDifference and abs(nums[i] - nums[j]) >= valueDifference:
                return [i, j]
    return [-1, -1]`,
  },
  visibleTests: [
    { args: [[5, 1, 4, 1], 2, 4], expected: [0, 3] },
    { args: [[2, 1], 0, 0], expected: [0, 0] },
    { args: [[1, 2, 3], 2, 4], expected: [-1, -1] },
  ],
  hiddenTests: [
    { args: [[5, 1, 4, 1], 2, 4], expected: [0, 3] },
    { args: [[2, 1], 0, 0], expected: [0, 0] },
    { args: [[1, 2, 3], 2, 4], expected: [-1, -1] },
    { args: [[0, 5, 10, 15, 20], 2, 15], expected: [0, 3] },
    { args: [[1, 1, 1, 1], 1, 1], expected: [-1, -1] },
    { args: [[1, 50], 1, 49], expected: [0, 1] },
    { args: [[5, 1, 4, 1], 1, 2], expected: [0, 1] },
    { args: [[0, 10, 20, 30], 2, 15], expected: [0, 2] },
  ],
};
