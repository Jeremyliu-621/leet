import type { Problem } from '../types';

export const problem: Problem = {
  id: 'final-array-state-after-k-multiplication-operations-i',
  title: 'Final Array State After K Multiplication Operations I',
  difficulty: 'easy',
  tags: ['arrays', 'simulation', 'heap'],
  description: `You are given an integer array \`nums\`, an integer \`k\`, and an integer \`multiplier\`.

You need to perform \`k\` operations on \`nums\`. In each operation:

- Find the **minimum** value in \`nums\`. If there are multiple occurrences of the minimum value, select the one that appears **first**.
- Replace the selected minimum value with \`minimum_value × multiplier\`.

Return an integer array denoting the **final state** of \`nums\` after performing all \`k\` operations.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= k <= 10`',
    '`1 <= multiplier <= 12`',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,5,6], k = 5, multiplier = 2',
      output: '[8,4,6,5,6]',
      explanation: 'Op1: min=1→2, nums=[2,2,3,5,6]. Op2: min=2(idx0)→4, nums=[4,2,3,5,6]. Op3: min=2→4, nums=[4,4,3,5,6]. Op4: min=3→6, nums=[4,4,6,5,6]. Op5: min=4(idx0)→8, nums=[8,4,6,5,6].',
    },
    {
      input: 'nums = [1,2], k = 3, multiplier = 4',
      output: '[16,8]',
      explanation: 'Op1: min=1→4, nums=[4,2]. Op2: min=2→8, nums=[4,8]. Op3: min=4→16, nums=[16,8].',
    },
  ],
  hints: [
    'Simulate each operation: scan for the leftmost minimum element, multiply it.',
    'With n ≤ 100 and k ≤ 10, an O(k×n) simulation is well within limits.',
    'Use `Math.min(...nums)` (or a linear scan) to find the minimum, then `indexOf` to get the first occurrence.',
  ],
  functionName: 'getFinalState',
  params: ['nums', 'k', 'multiplier'],
  starterCode: {
    javascript: `function getFinalState(nums, k, multiplier) {
  for (let op = 0; op < k; op++) {
    let minIdx = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[minIdx]) minIdx = i;
    }
    nums[minIdx] *= multiplier;
  }
  return nums;
}`,
    typescript: `function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  for (let op = 0; op < k; op++) {
    let minIdx = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]! < nums[minIdx]!) minIdx = i;
    }
    nums[minIdx]! *= multiplier;
  }
  return nums;
}`,
    python: `def getFinalState(nums, k, multiplier):
    for _ in range(k):
        min_idx = nums.index(min(nums))
        nums[min_idx] *= multiplier
    return nums`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 5, 6], 5, 2], expected: [8, 4, 6, 5, 6] },
    { args: [[1, 2], 3, 4], expected: [16, 8] },
  ],
  hiddenTests: [
    { args: [[100], 2, 3], expected: [900] },
    { args: [[3, 1, 2], 2, 3], expected: [3, 3, 6] },
    { args: [[1], 1, 12], expected: [12] },
    { args: [[5, 5, 5, 5], 4, 2], expected: [10, 10, 10, 10] },
    { args: [[2, 2, 2], 1, 3], expected: [6, 2, 2] },
    { args: [[1, 3, 2, 1], 3, 2], expected: [4, 3, 2, 2] },
  ],
};
