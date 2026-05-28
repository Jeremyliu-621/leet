import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-special-quadruplets',
  title: 'Count Special Quadruplets',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a **0-indexed** integer array \`nums\`, return the number of distinct quadruplets \`(a, b, c, d)\` such that:

- \`nums[a] + nums[b] + nums[c] == nums[d]\`, and
- \`a < b < c < d\``,
  constraints: [
    '4 <= nums.length <= 50',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,6]',
      output: '1',
      explanation: 'The only valid quadruplet is (0,1,2,3): 1 + 2 + 3 = 6.',
    },
    {
      input: 'nums = [3,3,6,4,5]',
      output: '0',
      explanation: 'There are no valid quadruplets.',
    },
    {
      input: 'nums = [1,1,1,3,5]',
      output: '4',
      explanation: '(0,1,2,3): 1+1+1=3; (0,1,3,4): 1+1+3=5; (0,2,3,4): 1+1+3=5; (1,2,3,4): 1+1+3=5.',
    },
  ],
  hints: [
    'Use four nested loops to check all index combinations where a < b < c < d.',
    'For a more efficient approach, iterate d from right to left and maintain a hash map of sums nums[a]+nums[b]+nums[c] for all a<b<c<d.',
    'For the brute-force approach: for each (a,b,c,d) with a<b<c<d check if nums[a]+nums[b]+nums[c] === nums[d].',
  ],
  functionName: 'countQuadruplets',
  params: ['nums'],
  starterCode: {
    javascript: `function countQuadruplets(nums) {

}`,
    typescript: "function countQuadruplets(nums: number[]): number {\n\n}",

    python: `def countQuadruplets(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 6]], expected: 1 },
    { args: [[3, 3, 6, 4, 5]], expected: 0 },
    { args: [[1, 1, 1, 3, 5]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[2, 3, 5, 10]], expected: 1 },
    { args: [[1, 2, 3, 6, 7]], expected: 1 },
    { args: [[1, 1, 1, 3, 5]], expected: 4 },
  ],
};
