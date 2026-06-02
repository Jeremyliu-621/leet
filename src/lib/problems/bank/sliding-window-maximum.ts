import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sliding-window-maximum',
  title: 'Sliding Window Maximum',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\` and an integer \`k\`, there is a sliding window of size \`k\` moving from the left to the right of the array. You can only see the \`k\` numbers in the window. At each step, the window slides one position to the right.

Return an array of the **maximum value in each window position**.

**Example:** \`nums = [1,3,-1,-3,5,3,6,7]\`, \`k = 3\` → \`[3,3,5,5,6,7]\`

The brute-force O(nk) approach is too slow. Use a **monotonic deque** to achieve O(n).`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[3,3,5,5,6,7]',
      explanation: 'Windows: [1,3,-1]→3, [3,-1,-3]→3, [-1,-3,5]→5, [-3,5,3]→5, [5,3,6]→6, [3,6,7]→7.',
    },
    {
      input: 'nums = [1], k = 1',
      output: '[1]',
      explanation: 'Single element, single window.',
    },
    {
      input: 'nums = [4,3,2,1], k = 2',
      output: '[4,3,2]',
      explanation: 'Windows: [4,3]→4, [3,2]→3, [2,1]→2.',
    },
  ],
  hints: [
    'A monotonic deque (double-ended queue) stores indices of useful candidates for the maximum. "Useful" means not yet outside the window and not blocked by a larger element to their right.',
    'For each new element at index i: (1) remove from the front of the deque any indices that are outside the window (index <= i - k). (2) Remove from the back any indices whose values are less than nums[i] — they can never be the maximum. (3) Push i to the back. The front of the deque is always the index of the current window maximum.',
    '`const deque = [], result = [];\nfor (let i = 0; i < nums.length; i++) {\n  // remove out-of-window indices from front\n  while (deque.length && deque[0] <= i - k) deque.shift();\n  // remove smaller elements from back\n  while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();\n  deque.push(i);\n  // record result once first full window is formed\n  if (i >= k - 1) result.push(nums[deque[0]]);\n}\nreturn result;`',
  ],
  functionName: 'maxSlidingWindow',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxSlidingWindow(nums, k) {
  const deque = [], result = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] <= i - k) deque.shift();
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}`,
    typescript: `function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = [], result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0]! <= i - k) deque.shift();
    while (deque.length && nums[deque[deque.length - 1]!]! < nums[i]!) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]!]!);
  }
  return result;
}`,
    python: `def maxSlidingWindow(nums, k):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    nums = [int(x) for x in nums]; k = int(k)
    from collections import deque
    dq = deque(); result = []
    for i, v in enumerate(nums):
        while dq and dq[0] <= i - k: dq.popleft()
        while dq and nums[dq[-1]] < v: dq.pop()
        dq.append(i)
        if i >= k-1: result.append(nums[dq[0]])
    return result`,
  },
  visibleTests: [
    { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    { args: [[1], 1], expected: [1] },
    { args: [[4, 3, 2, 1], 2], expected: [4, 3, 2] },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], 2], expected: [1, 1, 1] },
    { args: [[9, 7, 5, 3, 1], 3], expected: [9, 7, 5] },
    { args: [[-4, -2, -5, -1, -3], 2], expected: [-2, -2, -1, -1] },
    { args: [[2, 1, 5, 3, 6, 4, 8, 7], 4], expected: [5, 6, 6, 8, 8] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5] },
  ],
};
