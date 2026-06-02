import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-topmost-element-after-k-moves',
  title: 'Maximize the Topmost Element After K Moves',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` representing a **pile** where \`nums[0]\` is the top.

In one operation, you can do **one** of the following:

- If the pile is **not** empty, **remove** the topmost element of the pile.
- If there is a removed element, **add** it back on top of the pile.

You are required to apply **exactly** \`k\` operations. Return the **maximum** element you can have at the top of the pile after exactly \`k\` operations. If it is **not possible** to have any element at the top, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i], k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,2,2,4,0,6], k = 4',
      output: '5',
      explanation:
        'Keep nums[0]=5 on top: remove nums[0] (1), push it back (2), remove it (3), push back (4). 5 is on top.',
    },
    {
      input: 'nums = [5,2,2,4,0,6], k = 1',
      output: '2',
      explanation: 'Only one operation: remove nums[0]=5. Now nums[1]=2 is on top.',
    },
  ],
  hints: [
    'Element at original index i can be on top if you pop i elements (i ops) then use remaining k-i ops. If n >= 2, you can waste even numbers of ops by pushing/popping the current top.',
    'Element i is achievable if i <= k and (k - i) is even.',
    'Special case: if n == 1, the only element stays on top iff k is even, otherwise return -1.',
  ],
  functionName: 'maximumTop',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumTop(nums, k) {
  const n = nums.length;
  if (n === 1) return k % 2 === 0 ? nums[0] : -1;
  let best = -1;
  for (let i = 0; i <= Math.min(k, n - 1); i++) {
    if (i === k || (k - i) % 2 === 0) best = Math.max(best, nums[i]);
  }
  if (k >= n && (k - n) % 2 === 1) {
    for (let i = 0; i < n; i++) best = Math.max(best, nums[i]);
  }
  return best;
}`,
    typescript: `function maximumTop(nums: number[], k: number): number {
  const n = nums.length;
  if (n === 1) return k % 2 === 0 ? nums[0]! : -1;
  let best = -1;
  for (let i = 0; i <= Math.min(k, n - 1); i++) {
    if (i === k || (k - i) % 2 === 0) best = Math.max(best, nums[i]!);
  }
  if (k >= n && (k - n) % 2 === 1) {
    for (let i = 0; i < n; i++) best = Math.max(best, nums[i]!);
  }
  return best;
}`,
    python: `def maximumTop(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    if n == 1: return nums[0] if k % 2 == 0 else -1
    best = -1
    for i in range(min(k, n - 1) + 1):
        if i == k or (k - i) % 2 == 0: best = max(best, nums[i])
    if k >= n and (k - n) % 2 == 1: best = max(nums)
    return best`,
  },
  visibleTests: [
    { args: [[5, 2, 2, 4, 0, 6], 4], expected: 5 },
    { args: [[5, 2, 2, 4, 0, 6], 1], expected: 2 },
    { args: [[1], 1], expected: -1 },
    { args: [[1], 2], expected: 1 },
    { args: [[2, 10, 3, 8, 5], 3], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1, 100], 1], expected: 100 },
    { args: [[3, 1, 2], 2], expected: 3 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 4 },
    { args: [[5, 1, 2, 3, 4], 10], expected: 5 },
    { args: [[7, 3, 1], 4], expected: 7 },
  ],
};
