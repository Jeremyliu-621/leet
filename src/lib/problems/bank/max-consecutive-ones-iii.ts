import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-consecutive-ones-iii',
  title: 'Max Consecutive Ones III',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given a binary array \`nums\` and an integer \`k\`, return the maximum number of consecutive \`1\`'s in the array if you can flip at most \`k\` \`0\`'s.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1',
    '0 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2',
      output: '6',
      explanation: 'Flip positions 9 and 10: [1,1,1,0,0,1,1,1,1,1,1] — 6 consecutive ones ending at index 10.',
    },
    {
      input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3',
      output: '10',
    },
    {
      input: 'nums = [1,1,1], k = 0',
      output: '3',
    },
  ],
  hints: [
    'Use a sliding window. Expand right; shrink left when the number of zeros in the window exceeds k.',
    'Track the count of zeros in the current window.',
    'The window size at any point is right - left + 1; the answer is the maximum window size seen.',
  ],
  functionName: 'longestOnes',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function longestOnes(nums, k) {
  // Return max window length with at most k flipped zeros
}`,
    python: `def longestOnes(nums, k):
    # Return max window length with at most k flipped zeros
    pass`,
  },
  visibleTests: [
    { args: [[1,1,1,0,0,0,1,1,1,1,0], 2], expected: 6 },
    { args: [[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3], expected: 10 },
    { args: [[1,1,1], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0,0,0], 0], expected: 0 },
    { args: [[1,0,1,0,1], 1], expected: 3 },
    { args: [[1,1,1,0,0,1,1], 2], expected: 7 },
    { args: [[0], 1], expected: 1 },
  ],
};
