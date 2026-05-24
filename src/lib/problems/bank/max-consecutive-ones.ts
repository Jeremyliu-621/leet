import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-consecutive-ones',
  title: 'Maximum Consecutive Ones',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a binary array \`nums\` (containing only \`0\`s and \`1\`s), return the maximum number of consecutive \`1\`s in the array.

A **consecutive run** of \`1\`s is a maximal sequence of adjacent \`1\` values.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'nums[i] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'nums = [1,1,0,1,1,1]',
      output: '3',
      explanation: 'The last three 1s form the longest run.',
    },
    {
      input: 'nums = [1,0,1,1,0,1]',
      output: '2',
      explanation: 'Maximum consecutive 1s is 2 (positions 2-3).',
    },
    {
      input: 'nums = [0,0,0]',
      output: '0',
      explanation: 'No 1s in the array.',
    },
  ],
  hints: [
    'Walk the array tracking a `current` counter that increments on a `1` and resets to `0` on a `0`.',
    'Keep a `best` counter alongside `current`. Update `best = Math.max(best, current)` after each step.',
    '`let best = 0, current = 0; for (const n of nums) { current = n === 1 ? current + 1 : 0; if (current > best) best = current; } return best;`',
  ],
  functionName: 'maxConsecutiveOnes',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxConsecutiveOnes(nums) {\n  // your code here\n}\n',
    python: 'def maxConsecutiveOnes(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 0, 1, 1, 1]], expected: 3 },
    { args: [[1, 0, 1, 1, 0, 1]], expected: 2 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[0, 1, 0]], expected: 1 },
    { args: [[1, 0, 0, 0, 1, 1]], expected: 2 },
    { args: [[1, 1, 1, 0, 1, 1, 1, 1]], expected: 4 },
  ],
};
