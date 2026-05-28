import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-to-equal-array-elements-ii',
  title: 'Minimum Moves to Equal Array Elements II',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` of size \`n\`, return the **minimum number of moves** required to make all array elements equal.

In one move, you can increment or decrement an element of the array by \`1\`.

The test cases are designed so that the answer will fit in a **32-bit** integer.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '2',
      explanation: 'Move to median 2: |1-2| + |3-2| = 2.',
    },
    {
      input: 'nums = [1,10,2,9]',
      output: '16',
      explanation: 'Move to any value between 2 and 9 (e.g. 5): |1-5|+|10-5|+|2-5|+|9-5| = 16.',
    },
  ],
  hints: [
    'The optimal meeting point minimises total absolute deviation — this is minimised at the **median**.',
    'Sort the array and take the middle element as the target.',
    'Sum |nums[i] - median| for all i.',
    'For even-length arrays any value between the two middle elements gives the same total; picking either works.',
  ],
  functionName: 'minMoves2',
  params: ['nums'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves2(nums) {

}`,
    python: `def minMoves2(nums: list[int]) -> int:
    `,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 10, 2, 9]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 1000000000]], expected: 999999999 },
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[-1, 0, 0, 1]], expected: 2 },
  ],
};
