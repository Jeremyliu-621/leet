import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-score-of-an-array-after-marking-all-elements',
  title: 'Find Score of an Array After Marking All Elements',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'simulation'],
  description: `You are given an array \`nums\` consisting of positive integers.

Starting with \`score = 0\`, apply the following algorithm:

1. Pick the smallest unmarked integer in the array. If there is a tie, pick the one with the smallest index.
2. Add the value of the picked integer to \`score\`.
3. Mark the picked integer **and its two adjacent elements** if they exist (i.e., elements at indices \`i-1\` and \`i+1\`).
4. Repeat until all the array elements are marked.

Return the score you get after applying the above algorithm.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,4,5,2]',
      output: '7',
      explanation: 'Pick index 1 (value 1), mark indices 0,1,2. Score = 1. Pick index 4 (value 5), mark 3,4,5. Score = 1+5 = 6? Wait: pick index 5 (value 2), mark 4,5. Score = 1+2 = 3. Remaining: index 3 (value 4). Score = 3+4 = 7.',
    },
    {
      input: 'nums = [2,3,5,1,3,2]',
      output: '5',
      explanation: 'Pick index 3 (value 1), mark 2,3,4. Score = 1. Pick index 0 (value 2), mark 0,1. Score = 3. Pick index 5 (value 2), mark 4,5. Score = 5.',
    },
  ],
  hints: [
    'Use a min-heap (priority queue) sorted by (value, index) to always pick the smallest unmarked element.',
    'Keep a boolean "marked" array. When you pop from the heap, skip if already marked; otherwise add to score and mark the element and its neighbors.',
    'Process until all elements are marked.',
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
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[3, 2, 1]], expected: 4 },
    { args: [[5, 1, 3, 2, 4]], expected: 3 },
    { args: [[1, 1, 1, 1, 1]], expected: 3 },
    { args: [[10, 1, 10, 1, 10]], expected: 2 },
  ],
};
