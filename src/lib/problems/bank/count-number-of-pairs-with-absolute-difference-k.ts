import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-pairs-with-absolute-difference-k',
  title: 'Count Number of Pairs With Absolute Difference K',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of pairs \`(i, j)\` where \`i < j\` such that \`|nums[i] - nums[j]| == k\`.

\`|val|\` denotes the **absolute value** of \`val\`.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 100',
    '1 <= k <= 99',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1], k = 1',
      output: '4',
      explanation: 'Pairs: (0,1) |1-2|=1, (0,2) |1-2|=1, (1,3) |2-1|=1, (2,3) |2-1|=1. Total = 4.',
    },
    {
      input: 'nums = [1,3], k = 2',
      output: '1',
      explanation: '|1 - 3| = 2 ✓. Only one pair.',
    },
    {
      input: 'nums = [3,2,1,5,4], k = 2',
      output: '3',
      explanation: 'Pairs: (0,3) |3-5|=2, (1,4) |2-4|=2, (2,3) |1-5|=4✗ — wait: (0,4) |3-4|=1✗, (1,3) |2-5|=3✗. Actually: (0,2) |3-1|=2✓, (1,4) |2-4|=2✓, (2,3) |1-5|=4✗, (2,4) |1-4|=3✗, (3,4) |5-4|=1✗. Let me recount: need |diff|=2. (0,2)=2✓, (1,4)=2✓, (0,3) |3-5|=2✓. Total=3.',
    },
  ],
  hints: [
    'Brute force O(n²): for each pair (i, j) with i < j, check if |nums[i] - nums[j]| == k.',
    'Alternatively use a hash map: for each nums[j], count how many previous elements equal nums[j]+k or nums[j]-k.',
    'With n ≤ 200, the brute force is efficient enough.',
  ],
  functionName: 'countKDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countKDifference(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (Math.abs(nums[i] - nums[j]) === k) count++;
  return count;
}`,
    typescript: `function countKDifference(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (Math.abs(nums[i]! - nums[j]!) === k) count++;
  return count;
}`,
    python: `def countKDifference(nums, k):
    count = 0
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if abs(nums[i] - nums[j]) == k:
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], 1], expected: 4 },
    { args: [[1, 3], 2], expected: 1 },
    { args: [[3, 2, 1, 5, 4], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 1], expected: 0 },
    { args: [[1, 2], 1], expected: 1 },
    { args: [[5, 5, 5, 5], 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[10, 20, 30], 10], expected: 2 },
  ],
};
