import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-array-into-equal-pairs',
  title: 'Divide Array Into Equal Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` of even length \`2 * n\`, return \`true\` if it is possible to divide \`nums\` into \`n\` pairs such that **each pair consists of equal elements**, otherwise return \`false\`.

In other words, every distinct value in \`nums\` must appear an **even** number of times.

**Example 1:**

\`\`\`
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 3 appears 2 times (one pair), 2 appears 4 times (two pairs).
\`\`\`

**Example 2:**

\`\`\`
Input: nums = [1,2,3,4]
Output: false
Explanation: 1, 2, 3, and 4 each appear exactly once — no equal pairs possible.
\`\`\``,
  constraints: [
    'nums.length == 2 * n',
    '1 <= n <= 500',
    '1 <= nums[i] <= 500',
  ],
  examples: [
    {
      input: 'nums = [3,2,3,2,2,2]',
      output: 'true',
      explanation: '3 appears 2 times, 2 appears 4 times — all even.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: 'false',
      explanation: 'Each element appears only once.',
    },
  ],
  hints: [
    'Count the frequency of each number using an object or Map.',
    'A valid pairing is only possible when every element has an even frequency — you cannot leave any element without a partner.',
    'Iterate over the frequency counts and return `false` the moment you find any count that is odd; return `true` if all counts are even.',
  ],
  functionName: 'divideArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function divideArray(nums) {\n  \n}\n',
    typescript: "function divideArray(nums: number[]): boolean {\n  \n}",

    python: 'def divideArray(nums):\n    ',
  },
  visibleTests: [
    { args: [[3, 2, 3, 2, 2, 2]], expected: true },
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[1, 1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1, 2, 2]], expected: true },
    { args: [[1, 2, 1, 2, 1, 2]], expected: false },
    { args: [[0, 0, 1, 1, 2, 2]], expected: true },
    { args: [[1, 1, 1, 1]], expected: true },
    { args: [[0, 0, 0, 0, 0, 0]], expected: true },
    { args: [[1, 2]], expected: false },
    { args: [[5, 5, 5, 5, 5, 5, 5, 5]], expected: true },
    { args: [[1, 1, 2, 2, 3, 4]], expected: false },
  ],
};
