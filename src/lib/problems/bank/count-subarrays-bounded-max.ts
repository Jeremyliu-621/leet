import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-bounded-max',
  title: 'Count Subarrays with Bounded Max',
  difficulty: 'hard',
  tags: ['sliding-window'],
  description: `Given an integer array \`nums\` and two integers \`left\` and \`right\`, return the **number of contiguous subarrays** where the maximum element is **≥ left and ≤ right**.

**Example:** \`nums = [2,1,4,3], left = 2, right = 3\` — valid subarrays: \`[2]\` (max=2), \`[2,1]\` (max=2), \`[3]\` (max=3). Count = **3**.

**Algorithm:** Use the identity: count(max in [L,R]) = count(max ≤ R) − count(max ≤ L−1). Computing "count of subarrays with max ≤ X" is straightforward with a running length of the current valid suffix.`,
  constraints: [
    '1 ≤ nums.length ≤ 10^5',
    '0 ≤ nums[i] ≤ 10^9',
    '0 ≤ left ≤ right ≤ 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,1,4,3], left = 2, right = 3',
      output: '3',
      explanation: 'Valid subarrays: [2] (max=2), [2,1] (max=2), [3] (max=3). The others have max=4 which is out of range.',
    },
    {
      input: 'nums = [2,9,2,5,6], left = 2, right = 8',
      output: '7',
      explanation: '9 is a "blocker" (> right). Valid subarrays can only start at index 0 or after the blocker at index 1.',
    },
    {
      input: 'nums = [1,1,1], left = 1, right = 1',
      output: '6',
      explanation: 'All 6 subarrays have max = 1, which is in [1, 1].',
    },
  ],
  hints: [
    'Count subarrays where max ≤ right, minus subarrays where max ≤ left-1. This separates the problem into two simpler subproblems.',
    'The count of subarrays with max ≤ X ending at position `i` is: the length of the longest suffix ending at `i` where all elements are ≤ X.',
    'Maintain a running count: when `nums[i] ≤ X`, the count of valid subarrays ending here is `curr` (the length of the current valid suffix). Sum all `curr` values.',
  ],
  functionName: 'numSubarrayBoundedMax',
  params: ['nums', 'left', 'right'],
  starterCode: {
    javascript: 'function numSubarrayBoundedMax(nums, left, right) {\n  // Count subarrays where max(subarray) is in [left, right].\n}\n',
    python: 'def numSubarrayBoundedMax(nums, left, right):\n    # Count subarrays where max(subarray) is in [left, right].\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 4, 3], 2, 3], expected: 3 },
    { args: [[2, 9, 2, 5, 6], 2, 8], expected: 7 },
    { args: [[1, 1, 1], 1, 1], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1, 3], expected: 6 },
    { args: [[1, 2, 3], 2, 2], expected: 2 },
    { args: [[3, 1, 2, 4], 1, 3], expected: 6 },
    { args: [[2, 3, 4, 2, 2], 2, 3], expected: 6 },
    { args: [[1], 1, 1], expected: 1 },
  ],
};
