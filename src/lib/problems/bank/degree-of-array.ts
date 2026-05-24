import type { Problem } from '../types';

export const problem: Problem = {
  id: 'degree-of-array',
  title: 'Degree of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a non-empty array of non-negative integers \`nums\`, the **degree** of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of \`nums\` that has the same degree as \`nums\`.`,
  constraints: [
    '`nums.length` will be between 1 and 50,000.',
    '`nums[i]` will be an integer between 0 and 49,999.',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,1]',
      output: '2',
      explanation: 'The degree of the array is 2, achieved by elements 1 and 2. The shortest subarray with degree 2 is [2,2] (length 2), covering element 2 from index 1 to index 2.',
    },
    {
      input: 'nums = [1,3,2,1,2,3,1,2]',
      output: '6',
      explanation: 'The degree is 3 (element 1 and element 2 each appear 3 times). For element 1: indices 0–6, length 7. For element 2: indices 2–7, length 6. Answer is 6.',
    },
  ],
  hints: [
    'In one pass, record the count, first occurrence index, and last occurrence index for each element.',
    'The length of the shortest subarray containing all occurrences of element `x` is `last[x] - first[x] + 1`.',
    'Among all elements that achieve the maximum frequency, return the minimum of those lengths.',
  ],
  functionName: 'findShortestSubArray',
  params: ['nums'],
  starterCode: {
    javascript: `function findShortestSubArray(nums) {

}`,
    python: `def findShortestSubArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 1]], expected: 2 },
    { args: [[1, 3, 2, 1, 2, 3, 1, 2]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2]], expected: 7 },
  ],
};
