import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-equal-and-divisible-pairs-in-an-array',
  title: 'Count Equal and Divisible Pairs in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`k\`, return the number of pairs \`(i, j)\` where \`0 <= i < j < n\`, such that \`nums[i] == nums[j]\` and \`(i * j)\` is divisible by \`k\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,2,2,1,3], k = 2',
      output: '4',
      explanation: 'Valid pairs: (0,6) 0*6=0 ✓, (2,3) 2*3=6 ✓, (2,4) 2*4=8 ✓, (3,4) 3*4=12 ✓. Pair (1,5) fails since 1*5=5 is not divisible by 2.',
    },
    {
      input: 'nums = [1,2,3,4], k = 1',
      output: '0',
      explanation: 'No two elements are equal.',
    },
  ],
  hints: [
    'With n ≤ 100, an O(n²) brute-force checking all pairs is efficient enough.',
    'For each pair (i, j) with i < j: check if nums[i] == nums[j] AND (i * j) % k == 0.',
    'Note that i * 0 = 0, so any pair (0, j) where nums[0] == nums[j] always satisfies the divisibility condition.',
  ],
  functionName: 'countPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairs(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) count++;
    }
  }
  return count;
}`,
    typescript: `function countPairs(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) count++;
    }
  }
  return count;
}`,
    python: `def countPairs(nums: list[int], k: int) -> int:
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j] and (i * j) % k == 0:
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 2, 2, 1, 3], 2], expected: 4 },
    { args: [[1, 2, 3, 4], 1], expected: 0 },
    { args: [[1, 1, 1], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1], expected: 1 },
    { args: [[2, 2, 2, 2], 3], expected: 5 },
    { args: [[3, 3], 2], expected: 1 },
    { args: [[1, 2, 3, 1, 2, 3], 3], expected: 1 },
    { args: [[1, 1, 1, 1, 1], 5], expected: 4 },
    { args: [[5, 5, 5], 3], expected: 2 },
    { args: [[4, 4, 4, 4], 4], expected: 3 },
    { args: [[1, 1, 1, 1, 1, 1], 2], expected: 12 },
  ],
};
