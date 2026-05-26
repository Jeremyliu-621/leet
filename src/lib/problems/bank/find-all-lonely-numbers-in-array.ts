import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-lonely-numbers-in-array',
  title: 'Find All Lonely Numbers in the Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. A number \`x\` is **lonely** when it appears only once, and no **adjacent** values (i.e., \`x - 1\` and \`x + 1\`) appear in the array.

Return **all** lonely numbers in \`nums\`. You may return the answer in **any order**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [10,6,5,8]',
      output: '[8,10]',
      explanation: '10 appears once; 9 and 11 are absent — lonely. 6 appears once but 5 is present — not lonely. 5 appears once but 6 is present — not lonely. 8 appears once; 7 and 9 are absent — lonely.',
    },
    {
      input: 'nums = [1,3,5,3]',
      output: '[1,5]',
      explanation: '3 appears twice — not lonely. 1 appears once; 0 and 2 absent — lonely. 5 appears once; 4 and 6 absent — lonely.',
    },
    {
      input: 'nums = [0]',
      output: '[0]',
      explanation: '0 appears once and has no adjacent values in the array.',
    },
  ],
  hints: [
    'Level 1: First count the frequency of every number using a hash map.',
    'Level 2: A number is lonely if its frequency is exactly 1 AND neither x-1 nor x+1 exists in the map.',
    'Level 3: Build a frequency Map, then iterate through the unique keys: if freq.get(x) === 1 && !freq.has(x-1) && !freq.has(x+1), add x to the result.',
  ],
  functionName: 'findLonely',
  params: ['nums'],
  starterCode: {
    javascript: 'function findLonely(nums) {\n  // your code here\n}\n',
    python: 'def findLonely(nums: list[int]) -> list[int]:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 6, 5, 8]], expected: [8, 10] },
    { args: [[1, 3, 5, 3]], expected: [1, 5] },
    { args: [[5, 7, 2, 7]], expected: [2, 5] },
    { args: [[0]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [] },
    { args: [[1, 3]], expected: [1, 3] },
    { args: [[1, 1, 2, 3]], expected: [] },
    { args: [[10]], expected: [10] },
    { args: [[5, 4, 3]], expected: [] },
    { args: [[5, 6, 9]], expected: [9] },
    { args: [[100, 200, 300]], expected: [100, 200, 300] },
  ],
};
