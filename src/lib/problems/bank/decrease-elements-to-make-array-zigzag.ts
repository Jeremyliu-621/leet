import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decrease-elements-to-make-array-zigzag',
  title: 'Decrease Elements To Make Array Zigzag',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array \`nums\` of integers, a **zigzag array** is one where \`nums[0] > nums[1] < nums[2] > nums[3] < nums[4] > ...\` or \`nums[0] < nums[1] > nums[2] < nums[3] > nums[4] < ...\`

In one operation, choose any element and **decrease** it by 1.

Return the **minimum number of operations** to make \`nums\` a zigzag array.

**Example 1:**
\`\`\`
Input: nums = [1,2,3]
Output: 2
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [9,6,1,6,2]
Output: 4
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 1000\`
- \`1 <= nums[i] <= 1000\``,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    { input: 'nums = [1,2,3]', output: '2' },
    { input: 'nums = [9,6,1,6,2]', output: '4' },
  ],
  hints: [
    'Try two strategies: decrease even-indexed elements, or decrease odd-indexed elements.',
    'For each strategy, the cost to decrease element at index i is: max(0, nums[i] - min(neighbors) + 1).',
    'Return the minimum of the two strategy costs.',
  ],
  functionName: 'movesToMakeZigzag',
  params: ['nums'],
  starterCode: {
    javascript: `function movesToMakeZigzag(nums) {
  const res = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    let minNeighbor = Infinity;
    if (i > 0) minNeighbor = Math.min(minNeighbor, nums[i - 1]);
    if (i < nums.length - 1) minNeighbor = Math.min(minNeighbor, nums[i + 1]);
    res[i % 2] += Math.max(0, nums[i] - minNeighbor + 1);
  }
  return Math.min(res[0], res[1]);
}`,
    typescript: `function movesToMakeZigzag(nums: number[]): number {
  const res = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    let minNeighbor = Infinity;
    if (i > 0) minNeighbor = Math.min(minNeighbor, nums[i - 1]!);
    if (i < nums.length - 1) minNeighbor = Math.min(minNeighbor, nums[i + 1]!);
    res[i % 2]! += Math.max(0, nums[i]! - minNeighbor + 1);
  }
  return Math.min(res[0]!, res[1]!);
}`,
    python: `def movesToMakeZigzag(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    res = [0, 0]
    n = len(nums)
    for i in range(n):
        neighbors = []
        if i > 0: neighbors.append(nums[i - 1])
        if i < n - 1: neighbors.append(nums[i + 1])
        min_nb = min(neighbors) if neighbors else float('inf')
        res[i % 2] += max(0, nums[i] - min_nb + 1)
    return min(res)`,
  },
  visibleTests: [
    { args: [[1,2,3]], expected: 2 },
    { args: [[9,6,1,6,2]], expected: 4 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[4,1,3,2]], expected: 0 },
    { args: [[5,5,5,5]], expected: 2 },
    { args: [[1,1,1]], expected: 1 },
    { args: [[10,4,3,2,8]], expected: 2 },
  ],
};
