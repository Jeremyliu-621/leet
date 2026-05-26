import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flip-k-zeros',
  title: 'Max Consecutive Ones After Flipping K Zeros',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given a binary array \`nums\` and an integer \`k\`, return the maximum number of consecutive \`1\`s in the array if you can flip at most \`k\` \`0\`s.`,
  examples: [
    {
      input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2',
      output: '6',
      explanation: 'Flip the 0s at indices 9 and 10. Longest run is indices 6-10 = 6 ones.',
    },
    {
      input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3',
      output: '10',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1',
    '0 <= k <= nums.length',
  ],
  functionName: 'longestOnes',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function longestOnes(nums, k) {\n  // your code here\n}\n',
    python: 'def longestOnes(nums, k):\n    # your code here\n    pass\n',
  },
  hints: [
    'Sliding window: maintain a window containing at most k zeros.',
    'When the count of zeros in the window exceeds k, shrink from the left until you have k or fewer zeros.',
    'The answer is the maximum window size seen.',
  ],
  visibleTests: [
    { args: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], expected: 6 },
    { args: [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3], expected: 10 },
    { args: [[1, 1, 1], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0], 0], expected: 0 },
    { args: [[0, 0, 0], 3], expected: 3 },
    { args: [[1, 0, 1, 0, 1], 1], expected: 3 },
    { args: [[1], 0], expected: 1 },
  ],
};
