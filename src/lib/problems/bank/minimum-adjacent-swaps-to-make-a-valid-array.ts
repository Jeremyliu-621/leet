import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-adjacent-swaps-to-make-a-valid-array',
  title: 'Minimum Adjacent Swaps to Make a Valid Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Swaps of **adjacent** elements are able to perform on \`nums\`.

A **valid** array meets the following conditions:

- The largest element (any one of the largest elements if there are multiple) is at the last position.
- The smallest element (any one of the smallest elements if there are multiple) is at the first position.

Return *the **minimum** swaps required to make \`nums\` a valid array*.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,5,3,1]',
      output: '6',
      explanation: 'Move the 1 (at index 5) to index 0: 5 swaps. Move the last 5 (at index 3, after the 1 moves) to the end: 1 swap. Total = 6.',
    },
    {
      input: 'nums = [9]',
      output: '0',
    },
    {
      input: 'nums = [1,3,5]',
      output: '0',
    },
  ],
  hints: [
    'Find minIdx = index of the first (leftmost) occurrence of the minimum element. Find maxIdx = index of the last (rightmost) occurrence of the maximum element.',
    'Swaps to bring the minimum to front = minIdx (move it left by minIdx positions). Swaps to bring the maximum to end = (n - 1 - maxIdx) (move it right).',
    'If minIdx > maxIdx, swapping the minimum leftward moves it past where the maximum currently sits, which effectively shifts the maximum one step right — so subtract 1 from the total. Return minIdx + (n - 1 - maxIdx) - (minIdx > maxIdx ? 1 : 0).',
  ],
  functionName: 'minimumSwaps',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSwaps(nums) {

}`,
    typescript: `function minimumSwaps(nums: number[]): number {

}`,
    python: `def minimumSwaps(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 5, 3, 1]], expected: 6 },
    { args: [[9]], expected: 0 },
    { args: [[1, 3, 5]], expected: 0 },
    { args: [[5, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[1, 5, 1, 5]], expected: 0 },
    { args: [[5, 3, 1, 2, 5]], expected: 2 },
    { args: [[2, 4, 1, 3, 4]], expected: 2 },
  ],
};
