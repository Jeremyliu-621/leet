import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-at-given-index-in-bounded-array',
  title: 'Maximum Value at a Given Index in a Bounded Array',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `You are given three positive integers: \`n\`, \`index\`, and \`maxSum\`. You want to construct an array \`nums\` (\`0-indexed\`) that satisfies the following conditions:

- \`nums.length == n\`
- \`nums[i]\` is a **positive** integer where \`0 <= i < n\`.
- \`abs(nums[i] - nums[i+1]) <= 1\` where \`0 <= i < n-1\`.
- The sum of all elements does not exceed \`maxSum\`.
- \`nums[index]\` is **maximized**.

Return \`nums[index]\` of the constructed array.`,
  constraints: [
    '1 <= n <= maxSum <= 10^9',
    '0 <= index < n',
  ],
  examples: [
    {
      input: 'n = 4, index = 2, maxSum = 6',
      output: '2',
      explanation: 'Array [1,2,2,1] has sum 6 with nums[2]=2 maximized.',
    },
    {
      input: 'n = 6, index = 1, maxSum = 10',
      output: '3',
    },
  ],
  hints: [
    'Binary search on the answer (peak value at index).',
    'For a peak value v at position index, the minimum sum uses arithmetic descent on both sides.',
    'Sum of a descending sequence from v: if len >= v, sum = v*(v+1)/2 + (len-v); else sum = v*len - len*(len-1)/2.',
  ],
  functionName: 'maxValue',
  params: ['n', 'index', 'maxSum'],
  starterCode: {
    javascript: 'function maxValue(n, index, maxSum) {\n\n}\n',
    python: 'def maxValue(n, index, maxSum):\n    pass\n',
  },
  visibleTests: [
    { args: [4, 2, 6], expected: 2 },
    { args: [6, 1, 10], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, 0, 1], expected: 1 },
    { args: [3, 1, 10], expected: 4 },
    { args: [2, 0, 1000000000], expected: 500000000 },
    { args: [1000000000, 0, 1000000000], expected: 1 },
  ],
};
