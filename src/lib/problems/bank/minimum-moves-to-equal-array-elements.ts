import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-equal-array-elements',
  title: 'Minimum Moves to Equal Array Elements',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` of size \`n\`, return the **minimum number of moves** required to make all array elements equal.

In one move, you can increment \`n - 1\` elements of the array by \`1\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '3',
      explanation: 'Move 1: increment [1,2] → [2,3,3]. Move 2: increment [2,3] → [3,4,3]. Move 3: increment [3,3] → [4,4,4]. Total: 3 moves.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
      explanation: 'All elements are already equal.',
    },
  ],
  hints: [
    'Incrementing n-1 elements by 1 is equivalent to decrementing the one remaining element by 1.',
    'So the minimum moves equals sum(nums) - n * min(nums).',
    'Each move brings one element one step closer to the minimum; the total distance is sum(nums) - n * min(nums).',
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
    { args: [[1, 1, 5]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 3, 3]], expected: 0 },
    { args: [[1, 10000]], expected: 9999 },
  ],
};
