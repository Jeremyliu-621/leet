import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-limit-of-balls-in-a-bag',
  title: 'Minimum Limit of Balls in a Bag',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an integer array \`nums\` where the \`i\`-th bag contains \`nums[i]\` balls. You are also given an integer \`maxOperations\`.

You can perform the following operation **at most** \`maxOperations\` times:
- Take any bag of balls and divide it into two new bags with a **positive** number of balls.

Your goal is to minimize the maximum number of balls in a bag. Return the minimum possible maximum number of balls after performing the operations.`,
  examples: [
    {
      input: 'nums = [9], maxOperations = 2',
      output: '3',
      explanation: 'Divide the bag with 9 balls into bags of 3 and 6 (1 op), then divide the bag with 6 balls into two bags of 3 each (1 op). Maximum is 3.',
    },
    {
      input: 'nums = [2,4,8,2], maxOperations = 4',
      output: '2',
      explanation: 'Divide bag of 4 into 2+2 (1 op), bag of 8 into 4+4 (1 op), then each 4 into 2+2 (2 ops). Maximum is 2.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= maxOperations <= 10^9',
  ],
  functionName: 'minimumSize',
  params: ['nums', 'maxOperations'],
  starterCode: {
    javascript: 'function minimumSize(nums, maxOperations) {\n  // your code here\n}\n',
    python: 'def minimumSize(nums, maxOperations):\n    # your code here\n    pass\n',
  },
  hints: [
    'Binary search on the answer: what is the minimum possible "maximum bag size" after operations?',
    'For a candidate maximum size `mid`, compute how many operations are needed: for each bag of size `n`, you need `ceil(n/mid) - 1 = Math.floor((n-1)/mid)` splits.',
    'If total ops needed <= maxOperations, then `mid` is achievable. Search in range [1, max(nums)].',
  ],
  visibleTests: [
    { args: [[9], 2], expected: 3 },
    { args: [[2, 4, 8, 2], 4], expected: 2 },
    { args: [[7, 17], 2], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1000000000], 1], expected: 500000000 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 2 },
    { args: [[5, 5, 5, 5, 5], 5], expected: 3 },
    { args: [[10, 10], 3], expected: 5 },
  ],
};
