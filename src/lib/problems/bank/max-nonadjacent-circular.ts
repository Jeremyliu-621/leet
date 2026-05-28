import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-nonadjacent-circular',
  title: 'Maximum Sum of Non-Adjacent Elements in Circular Array',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a **circular** integer array \`nums\` (the first and last elements are considered adjacent), return the maximum sum of a subset of elements such that **no two chosen elements are adjacent** in the circular arrangement.

You may choose any number of elements (including zero). The circular adjacency means \`nums[0]\` and \`nums[n-1]\` are neighbors, tightening the classic House Robber constraint.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^4',
    'The answer fits in a 32-bit signed integer',
  ],
  examples: [
    {
      input: 'nums = [3,7,4,6,5]',
      output: '13',
      explanation: 'Choose indices 1 and 3 (values 7 and 6). They are not adjacent in the circular layout, giving sum 13.',
    },
    {
      input: 'nums = [1,2,3,1]',
      output: '4',
      explanation: 'Choosing indices 0 and 2 (values 1 and 3) gives sum 4. Indices 0 and 3 are circular neighbours so (1,1)=2 is ruled out.',
    },
  ],
  hints: [
    'If the array were linear (not circular), this is the classic House Robber problem solvable with O(n) DP: at each position, either skip it or take it plus the best from two steps back.',
    'The circular constraint means you cannot take both `nums[0]` and `nums[n-1]`. Break it into two independent linear problems: one on `nums[0..n-2]` (exclude last) and one on `nums[1..n-1]` (exclude first).',
    'Run the linear House Robber DP on both subarrays and return the maximum of the two results. Total time: O(n), extra space: O(1) with the two-variable DP.',
  ],
  functionName: 'maxNonAdjacentCircular',
  params: ['nums'],
  starterCode: {
    javascript: `function maxNonAdjacentCircular(nums) {

}`,
    typescript: `function maxNonAdjacentCircular(nums: number[]): number {

}`,
    python: `def maxNonAdjacentCircular(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 7, 4, 6, 5]], expected: 13 },
    { args: [[1, 2, 3, 1]], expected: 4 },
    { args: [[5, 1, 1, 5]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[2, 1, 2, 7, 3]], expected: 9 },
    { args: [[2, 7, 9, 3, 1]], expected: 11 },
    { args: [[10, 5, 10]], expected: 10 },
    { args: [[1, 2]], expected: 2 },
    { args: [[4, 1, 2, 4]], expected: 6 },
    { args: [[3, 2, 7, 10]], expected: 12 },
    { args: [[3, 2, 3, 12, 3, 2]], expected: 16 },
    { args: [[6, 3, 6, 3]], expected: 12 },
  ],
};
