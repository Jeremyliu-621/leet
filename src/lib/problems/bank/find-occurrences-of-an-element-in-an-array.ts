import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-occurrences-of-an-element-in-an-array',
  title: 'Find Occurrences of an Element in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`, an integer \`target\`, and a positive integer \`k\`.

Return the \`k\`-th **occurrence** (1-indexed) of \`target\` in \`nums\`. If there are fewer than \`k\` occurrences, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= target <= 10^9`',
    '`1 <= k <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,3,1,7], target = 1, k = 1',
      output: '0',
      explanation: 'The first occurrence of 1 is at index 0.',
    },
    {
      input: 'nums = [1,3,1,7], target = 1, k = 2',
      output: '2',
      explanation: 'The second occurrence of 1 is at index 2.',
    },
    {
      input: 'nums = [1,3,1,7], target = 1, k = 3',
      output: '-1',
      explanation: '1 appears only twice, so the 3rd occurrence does not exist.',
    },
  ],
  hints: [
    'Iterate through the array, counting how many times you\'ve seen the target.',
    'When your count reaches k, return the current index.',
    'If the loop ends without reaching count k, return -1.',
  ],
  functionName: 'findOccurrences',
  params: ['nums', 'target', 'k'],
  starterCode: {
    javascript: `function findOccurrences(nums, target, k) {

}`,
    typescript: `function findOccurrences(nums: number[], target: number, k: number): number {

}`,
    python: `def findOccurrences(nums, target, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 1, 7], 1, 1], expected: 0 },
    { args: [[1, 3, 1, 7], 1, 2], expected: 2 },
    { args: [[1, 3, 1, 7], 1, 3], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 4, 1], expected: -1 },
    { args: [[5, 7, 5, 2, 5], 5, 2], expected: 2 },
    { args: [[5, 7, 5, 2, 5], 5, 3], expected: 4 },
    { args: [[1], 1, 1], expected: 0 },
    { args: [[2, 2, 2, 2], 2, 4], expected: 3 },
    { args: [[2, 2, 2, 2], 2, 5], expected: -1 },
    { args: [[1000000000], 1000000000, 1], expected: 0 },
  ],
};
