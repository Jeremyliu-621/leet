import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-equal-array',
  title: 'Minimum Moves to Equal Array Elements',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `Given an integer array \`nums\` of size \`n\`, return *the minimum number of moves required to make all array elements equal*.

In one move, you can increment \`n - 1\` elements of the array by 1.`,
  constraints: [
    'n == nums.length',
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    'The answer is guaranteed to fit in a 32-bit integer.',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '3',
      explanation: 'Only 3 moves are needed: [1,2,3] → [2,3,3] → [3,4,3] → [4,4,4].',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
    },
  ],
  hints: [
    'Incrementing n-1 elements by 1 is equivalent to decrementing 1 element by 1.',
    'The minimum target is the minimum element in the array.',
    'Each element needs to be decremented to the minimum: total moves = sum(nums) - n * min(nums).',
  ],
  functionName: 'minMoves',
  params: ['nums'],
  starterCode: {
    javascript: `function minMoves(nums) {

}`,
    python: `def minMoves(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[5, 5, 5, 5]], expected: 0 },
    { args: [[1, 2, 3, 4]], expected: 6 },
    { args: [[-1, 0, 1]], expected: 3 },
    { args: [[0, 0, 0, 100]], expected: 100 },
  ],
};
