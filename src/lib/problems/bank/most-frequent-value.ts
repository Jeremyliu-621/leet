import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-value',
  title: 'Most Frequent Value',
  difficulty: 'easy',
  tags: ['hash-map'],
  description:
    'Given a non-empty integer array nums, return the value that occurs most often.\n\nIf two or more values tie for the highest count, return the smallest of those tied values. This rule guarantees a single, well-defined answer for every input.\n\nThe input array is not modified.',
  constraints: [
    '1 <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,3,3]',
      output: '3',
      explanation: '3 appears three times, more than any other value.',
    },
    {
      input: 'nums = [4,4,5,5]',
      output: '4',
      explanation: '4 and 5 both appear twice, so the smaller value 4 wins.',
    },
    {
      input: 'nums = [7]',
      output: '7',
    },
  ],
  functionName: 'mostFrequentValue',
  params: ['nums'],
  starterCode: {
    javascript: 'function mostFrequentValue(nums) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[4, 4, 5, 5]], expected: 4 },
    { args: [[7]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[-1, -1, 0]], expected: -1 },
    { args: [[9, 8, 7, 6]], expected: 6 },
    { args: [[0, 0, 0, 0]], expected: 0 },
    { args: [[5, 3, 5, 3, 1]], expected: 3 },
    { args: [[-2, -2, -3, -3, -3]], expected: -3 },
    { args: [[100, 100, 100, 1]], expected: 100 },
  ],
};
