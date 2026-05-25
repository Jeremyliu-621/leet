import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-subarray-to-be-removed-to-make-array-sorted',
  title: 'Shortest Subarray to be Removed to Make Array Sorted',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`arr\`, remove a **subarray** (can be empty) from \`arr\` such that the remaining elements in \`arr\` are **non-decreasing**.

Return the length of the **shortest** subarray to remove.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '0 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,10,4,2,3,5]',
      output: '3',
      explanation: 'Remove subarray [10,4,2] (indices 3..5). Remaining array [1,2,3,3,5] is sorted.',
    },
    {
      input: 'arr = [5,4,3,2,1]',
      output: '4',
      explanation: 'Remove any 4 elements, leaving a single-element array.',
    },
  ],
  hints: [
    'Find the longest non-decreasing prefix [0..left] and longest non-decreasing suffix [right..n-1].',
    'The answer is at most right (remove prefix), or n-1-left (remove suffix).',
    'Use two pointers: for each valid prefix endpoint i, find the smallest j in the suffix where arr[j] >= arr[i]. Candidate: j-i-1.',
  ],
  functionName: 'findLengthOfShortestSubarray',
  params: ['arr'],
  starterCode: {
    javascript: 'function findLengthOfShortestSubarray(arr) {\n\n}\n',
    python: 'def findLengthOfShortestSubarray(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 10, 4, 2, 3, 5]], expected: 3 },
    { args: [[5, 4, 3, 2, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[5, 1, 2, 3, 4]], expected: 1 },
    { args: [[2, 2, 2, 1, 1]], expected: 2 },
    { args: [[1, 2, 3, 4, 3]], expected: 1 },
  ],
};
