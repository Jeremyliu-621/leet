import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-diff-pairs-in-array',
  title: 'K-diff Pairs in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'two-pointers'],
  description: `Given an array of integers \`nums\` and an integer \`k\`, return the number of **unique** k-diff pairs in the array.

A **k-diff** pair is an integer pair \`(nums[i], nums[j])\`, where the following are true:
- \`0 <= i < j < nums.length\`
- \`|nums[i] - nums[j]| == k\`

**Notice** that \`|val|\` denotes the absolute value of \`val\`.`,
  constraints: [
    '`1 <= nums.length <= 10^4`',
    '`-10^7 <= nums[i] <= 10^7`',
    '`0 <= k <= 10^7`',
  ],
  examples: [
    {
      input: 'nums = [3,1,4,1,5], k = 2',
      output: '2',
      explanation: 'There are two 2-diff pairs: (1,3) and (3,5).',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 1',
      output: '4',
      explanation: 'There are four 1-diff pairs: (1,2), (2,3), (3,4), (4,5).',
    },
    {
      input: 'nums = [1,3,1,5,4], k = 0',
      output: '1',
      explanation: 'There is one 0-diff pair: (1,1).',
    },
  ],
  hints: [
    'Use a frequency map. For k>0, a valid pair is (n, n+k) if both appear. For k=0, a valid pair is (n, n) if n appears at least twice.',
  ],
  functionName: 'findPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function findPairs(nums, k) {\n  \n}\n',
    python: 'def findPairs(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 4, 1, 5], 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[1, 3, 1, 5, 4], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 0], expected: 1 },
    { args: [[1, 1, 1, 1], 0], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 0], expected: 0 },
    { args: [[1, 100000], 99999], expected: 1 },
  ],
};
