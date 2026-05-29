import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-between-adjacent-elements',
  title: 'Maximum Difference Between Adjacent Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` of length at least 2, return the **maximum absolute difference** between any two adjacent elements.

More formally, return \`max(|nums[i] - nums[i+1]|)\` for all valid \`i\`.`,
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,5,2,8,3]',
      output: '6',
      explanation: 'Adjacent differences: |1-5|=4, |5-2|=3, |2-8|=6, |8-3|=5. Maximum is 6.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
      explanation: 'All adjacent differences are 0.',
    },
    {
      input: 'nums = [3,1]',
      output: '2',
      explanation: 'Only one adjacent pair: |3-1|=2.',
    },
  ],
  hints: [
    'Iterate through the array from index 0 to n-2.',
    'For each i, compute Math.abs(nums[i] - nums[i+1]) and track the running maximum.',
    'Return the maximum after the loop completes.',
  ],
  functionName: 'maximumDifferenceBetweenAdjacentElements',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumDifferenceBetweenAdjacentElements(nums) {

}`,
    typescript: `function maximumDifferenceBetweenAdjacentElements(nums: number[]): number {

}`,
    python: `def maximumDifferenceBetweenAdjacentElements(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 5, 2, 8, 3]], expected: 6 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[3, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[-5, 5]], expected: 10 },
    { args: [[10, 1, 10, 1, 10]], expected: 9 },
    { args: [[1000000000, -1000000000]], expected: 2000000000 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[1, 100, 1, 100]], expected: 99 },
  ],
};
