import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-value',
  title: 'Most Frequent Value',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given a non-empty integer array \`nums\`, return the value that occurs **most often**.

If two or more values tie for the highest count, return the *smallest* of those tied values. This tie-breaking rule guarantees a single, well-defined answer for every input.

The input array is not modified.`,
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
    python: 'def mostFrequentValue(nums):\n    # your code here\n    pass\n',
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
  hints: [
    'You need to know how many times each value appears before you can pick a winner — counting is the first step.',
    'Walk `nums` once and accumulate counts in a `Map<number, number>` (or plain object). One pass, `O(n)` time.',
    'Iterate the counts and track the best value seen so far. Replace the current best when the new count is **strictly larger**, or when the count ties **and** the candidate value is smaller — that single comparison enforces the tie-breaking rule.',
  ],
};
