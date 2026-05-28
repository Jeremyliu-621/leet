import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-score-of-array-after-marking',
  title: 'Find Score of an Array After Marking All Elements',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given an array \`nums\` consisting of positive integers.

Starting with \`score = 0\`, apply the following algorithm:

1. Choose the smallest integer of the array that is not marked. If there is a tie, choose the one with the smallest index.
2. Add the value of the chosen integer to \`score\`.
3. Mark the chosen element and its two adjacent elements if they exist.
4. Repeat until all the array elements are marked.

Return the **score** you get after applying the above algorithm.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4,5,2]',
      output: '7',
      explanation: 'Pick 1 (index 1), mark indices 0,1,2. Score=1. Pick 2 (index 5), mark indices 4,5. Score=3. Pick 4 (index 3), mark index 3. Score=7.',
    },
    {
      input: 'nums = [2,3,5,1,3,2]',
      output: '5',
      explanation: 'Pick 1 (index 3), mark indices 2,3,4. Score=1. Pick 2 (index 0), mark 0,1. Score=3. Pick 2 (index 5), mark 5. Score=5.',
    },
  ],
  hints: [
    'Use a min-heap sorted by (value, index) to always pick the minimum unmarked element.',
    'Track a "marked" boolean array. Skip elements already marked.',
    'When you pick an element, mark it and its left and right neighbors.',
  ],
  functionName: 'findScore',
  params: ['nums'],
  starterCode: {
    javascript: `function findScore(nums) {

}`,
    python: `def findScore(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 4, 5, 2]], expected: 7 },
    { args: [[2, 3, 5, 1, 3, 2]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
  ],
};
