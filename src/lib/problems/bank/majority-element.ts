import type { Problem } from '../types';

export const problem: Problem = {
  id: 'majority-element',
  title: 'Majority Element',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` of size \`n\`, return the majority element.

The majority element is the element that appears more than \`⌊n / 2⌋\` times. You may assume that the majority element always exists in the array.`,
  examples: [
    { input: 'nums = [3,2,3]', output: '3' },
    { input: 'nums = [2,2,1,1,1,2,2]', output: '2' },
  ],
  constraints: [
    'n == nums.length',
    '1 <= n <= 5 * 10^4',
    '-10^9 <= nums[i] <= 10^9',
    'The majority element always exists.',
  ],
  functionName: 'majorityElement',
  params: ['nums'],
  starterCode: {
    javascript: 'function majorityElement(nums) {\n  // your code here\n}\n',
    python: 'def majorityElement(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'The Boyer-Moore Voting Algorithm: maintain a candidate and a count. Increment count when you see the candidate, decrement otherwise. When count hits 0, update the candidate.',
    'The final candidate is the majority element (guaranteed to exist).',
  ],
  visibleTests: [
    { args: [[3, 2, 3]], expected: 3 },
    { args: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[6, 5, 5]], expected: 5 },
    { args: [[3, 3, 4]], expected: 3 },
    { args: [[-1, -1, 2]], expected: -1 },
  ],
};
