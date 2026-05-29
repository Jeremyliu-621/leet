import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-1s-are-at-least-length-k-places-apart',
  title: 'Check If All 1\'s Are at Least Length K Places Apart',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a binary array \`nums\` and an integer \`k\`, return \`true\` if all \`1\`'s are at least \`k\` places apart, otherwise return \`false\`.

Two positions \`i\` and \`j\` of \`1\`'s are \`k\` places apart if there are at least \`k\` zeros between them, i.e. \`|i - j| >= k + 1\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= k <= nums.length',
    'nums[i] is 0 or 1',
  ],
  examples: [
    {
      input: 'nums = [1,0,0,0,1,0,0,1], k = 2',
      output: 'true',
      explanation: '1s at indices 0, 4, 7. Gaps: 4-0=4>=3 ✓, 7-4=3>=3 ✓.',
    },
    {
      input: 'nums = [1,0,0,1,0,1], k = 2',
      output: 'false',
      explanation: '1s at indices 0, 3, 5. Gap 5-3=2 but need >=3, so false.',
    },
  ],
  hints: [
    'Track the index of the previous 1 encountered.',
    'When you find a 1 at index i with previous 1 at prev, check if i - prev >= k + 1.',
    'Initialize prev to -k-1 (or a very negative value) so the first 1 always passes.',
  ],
  functionName: 'kLengthApart',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function kLengthApart(nums, k) {\n  \n}`,
    typescript: `function kLengthApart(nums: number[], k: number): boolean {\n  \n}`,
    python: `def kLengthApart(nums, k):\n    `,
  },
  visibleTests: [
    { args: [[1, 0, 0, 0, 1, 0, 0, 1], 2], expected: true },
    { args: [[1, 0, 0, 1, 0, 1], 2], expected: false },
    { args: [[1, 1, 1, 1, 1], 0], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 0, 0, 0, 1, 0, 0, 1], 2], expected: true },
    { args: [[1, 0, 0, 1, 0, 1], 2], expected: false },
    { args: [[1, 1, 1, 1, 1], 0], expected: true },
    { args: [[0, 1, 0, 1], 2], expected: false },
    { args: [[0, 0, 0], 1], expected: true },
    { args: [[1, 0, 1], 1], expected: true },
    { args: [[1, 0, 1], 2], expected: false },
    { args: [[1], 5], expected: true },
  ],
};
