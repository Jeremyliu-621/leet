import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-consecutive-sequence',
  title: 'Longest Consecutive Sequence',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays'],
  description: `Given an unsorted integer array \`nums\`, find the length of the longest consecutive elements sequence.

For example, in \`[100, 4, 200, 1, 3, 2]\` the longest consecutive sequence is \`[1, 2, 3, 4]\`, which has length 4.

Your solution must run in **O(n)** time.`,
  constraints: [
    '0 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '4',
      explanation: 'The longest consecutive sequence is [1, 2, 3, 4] with length 4.',
    },
    {
      input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
      output: '9',
      explanation: 'The sequence 0,1,2,3,4,5,6,7,8 has length 9.',
    },
    {
      input: 'nums = []',
      output: '0',
      explanation: 'Empty array has no consecutive sequence.',
    },
  ],
  hints: [
    'Level 1: Put all numbers into a Set for O(1) lookup. The key insight is: only start counting a chain when you are at the beginning of one.',
    'Level 2: A number `n` is the start of a chain only if `n-1` is NOT in the set. From each start, keep incrementing and checking until the chain breaks. Track the maximum chain length seen.',
    'Level 3: `const s = new Set(nums); let best = 0; for (const n of s) { if (!s.has(n - 1)) { let len = 1; while (s.has(n + len)) len++; best = Math.max(best, len); } } return best;`',
  ],
  functionName: 'longestConsecutive',
  params: ['nums'],
  starterCode: {
    javascript: 'function longestConsecutive(nums) {\n  // your code here\n}\n',
    python: 'def longestConsecutive(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[100, 4, 200, 1, 3, 2]], expected: 4 },
    { args: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
    { args: [[]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[1, 3, 5, 7]], expected: 1 },
    { args: [[-3, -2, -1, 0, 1]], expected: 5 },
    { args: [[10, 5, 6, 3, 7, 4, 8]], expected: 6 },
  ],
};
