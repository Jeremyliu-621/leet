import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-equal-divisible-pairs',
  title: 'Count Equal and Divisible Pairs in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`k\`, return the **number of pairs** \`(i, j)\` where:
- \`0 <= i < j < n\`
- \`nums[i] == nums[j]\`
- \`(i * j)\` is divisible by \`k\``,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,2,2,1,3], k = 2',
      output: '4',
      explanation:
        'Valid pairs: (0,6): 3==3, 0*6=0 div by 2; (2,3): 2==2, 2*3=6 div by 2; (2,4): 2==2, 8 div by 2; (3,4): 2==2, 12 div by 2.',
    },
    {
      input: 'nums = [1,2,3,4], k = 1',
      output: '0',
      explanation: 'No pair has nums[i] == nums[j].',
    },
    {
      input: 'nums = [1,1,1], k = 2',
      output: '3',
      explanation:
        'All three pairs have equal values. (0,1): 0*1=0 %2=0 ✓; (0,2): 0*2=0 %2=0 ✓; (1,2): 1*2=2 %2=0 ✓. Count=3.',
    },
  ],
  hints: [
    'Level 1: Use nested loops over all pairs (i, j) with i < j.',
    'Level 2: For each pair, check both conditions: nums[i] == nums[j] AND (i * j) % k === 0.',
    'Level 3: O(n²) brute force is fine given n ≤ 100.',
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
    python: `def countPairs(nums, k):
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
    { args: [[5, 5, 5, 5], 3], expected: 5 },
    { args: [[1, 2, 1, 2, 1], 2], expected: 3 },
    { args: [[100], 1], expected: 0 },
    { args: [[1, 1, 1, 1], 1], expected: 6 },
    { args: [[1, 2, 3, 1, 2, 3], 6], expected: 1 },
  ],
};
