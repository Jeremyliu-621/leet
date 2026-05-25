import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-lonely-numbers',
  title: 'Find All Lonely Numbers',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. A number \`x\` is **lonely** when it appears exactly once in the array, and neither \`x - 1\` nor \`x + 1\` appear in the array.

Return **all** lonely numbers in \`nums\`. You may return the answer in **any order**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [10,6,5,8]',
      output: '[10,8]',
      explanation: '10 appears once; 9 and 11 are absent → lonely. 6 appears once but 5 is present → not lonely. 5 appears once but 6 is present. 8 appears once; 7 and 9 absent → lonely.',
    },
    {
      input: 'nums = [1,3,5,3]',
      output: '[1,5]',
      explanation: '3 appears twice, so not lonely. 1 and 5 each appear once with no adjacent neighbors.',
    },
  ],
  hints: [
    'Use a frequency map (or Set) to check counts and neighbor presence in O(1).',
    'A number is lonely iff its count is 1 AND the count of x-1 and x+1 are both 0.',
    'Iterate over unique values and apply the lonely condition.',
  ],
  functionName: 'findLonely',
  params: ['nums'],
  starterCode: {
    javascript: 'function findLonely(nums) {\n  \n}\n',
    python: 'def findLonely(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 6, 5, 8]], expected: [8, 10] },
    { args: [[1, 3, 5, 3]], expected: [1, 5] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [] },
    { args: [[7]], expected: [7] },
    { args: [[1, 1, 2, 3, 5, 5]], expected: [] },
    { args: [[0, 100]], expected: [0, 100] },
    { args: [[1, 3, 1, 3]], expected: [] },
  ],
};
