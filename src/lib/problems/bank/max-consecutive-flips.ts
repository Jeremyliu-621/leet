import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-consecutive-flips',
  title: 'Max Consecutive Ones with K Flips',
  difficulty: 'hard',
  tags: ['sliding-window'],
  description: `Given a binary array \`nums\` and an integer \`k\`, return the **maximum number of consecutive 1s** if you can flip at most \`k\` zeros to ones.

**Example:** \`nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2\` — flip the zeros at indices 5 and 10, giving the window \`[0..10]\` wait — actually the optimal window is indices 5–10: \`[0,1,1,1,1,0]\` with 2 zeros flipped → 6 consecutive ones.

**Algorithm:** Sliding window. Maintain a window with at most \`k\` zeros. When the count exceeds \`k\`, advance the left pointer to shrink the window.`,
  constraints: [
    '1 ≤ nums.length ≤ 10^5',
    '0 ≤ nums[i] ≤ 1',
    '0 ≤ k ≤ nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2',
      output: '6',
      explanation: 'Flip the zeros at indices 5 and 10. The window from index 5 to 10 contains [0,1,1,1,1,0] → 6 consecutive ones after flipping.',
    },
    {
      input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1], k = 3',
      output: '11',
      explanation: 'Flip 3 zeros optimally to get 11 consecutive ones (window from index 2 to 12).',
    },
    {
      input: 'nums = [0,0,0,1], k = 4',
      output: '4',
      explanation: 'k = 4 is enough to flip all zeros; the whole array becomes 4 consecutive ones.',
    },
  ],
  hints: [
    'Think of a sliding window that tracks how many zeros are inside. When zeros exceed k, move the left pointer.',
    'When `nums[left] === 0`, moving left past it "unflips" one zero, decreasing your zero count.',
    'Maintain two pointers: `left` and `right`. For each `right`, advance `left` until the window has ≤ k zeros. The window size `right - left + 1` is a candidate answer.',
  ],
  functionName: 'longestOnes',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function longestOnes(nums, k) {\n  // Sliding window with at most k zeros allowed.\n}\n',
    python: 'def longestOnes(nums, k):\n    # Sliding window with at most k zeros allowed.\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], expected: 6 },
    { args: [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3], expected: 11 },
    { args: [[0, 0, 0, 1], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], 0], expected: 4 },
    { args: [[0, 0, 0, 0], 2], expected: 2 },
    { args: [[1, 0, 1, 0, 1], 1], expected: 3 },
    { args: [[0], 0], expected: 0 },
    { args: [[1], 0], expected: 1 },
  ],
};
