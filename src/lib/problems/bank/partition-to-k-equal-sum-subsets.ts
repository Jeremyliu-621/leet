import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-to-k-equal-sum-subsets',
  title: 'Partition to K Equal Sum Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking', 'dynamic-programming'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return \`true\` if it is possible to divide this array into \`k\` non-empty subsets whose sums are all equal.`,
  constraints: [
    '`1 <= k <= nums.length <= 16`',
    '`1 <= nums[i] <= 10^4`',
    'The frequency of each element is in the range `[1, 4]`.',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,3,5,2,1], k = 4',
      output: 'true',
      explanation: 'It is possible to divide it into 4 subsets (5), (1,4), (2,3), (2,3) with equal sums.',
    },
    {
      input: 'nums = [1,2,3,4], k = 3',
      output: 'false',
      explanation: 'The total sum is 10 which is not divisible by 3.',
    },
    {
      input: 'nums = [2,2,2,2], k = 4',
      output: 'true',
      explanation: 'Each subset contains exactly one element: (2), (2), (2), (2).',
    },
  ],
  hints: [
    'First check if the total sum is divisible by k. If not, return false immediately. The target sum per subset is total/k.',
    'Sort the array in descending order for better pruning. Use backtracking with k buckets: try placing each number into a bucket and recurse. Skip duplicate bucket values to avoid redundant search paths.',
    '```js\nfunction canPartitionKSubsets(nums, k) {\n  const total = nums.reduce((a, b) => a + b, 0);\n  if (total % k !== 0) return false;\n  const target = total / k;\n  nums.sort((a, b) => b - a);\n  if (nums[0] > target) return false;\n  const buckets = new Array(k).fill(0);\n  function bt(i) {\n    if (i === nums.length) return true;\n    const seen = new Set();\n    for (let j = 0; j < k; j++) {\n      if (seen.has(buckets[j])) continue;\n      if (buckets[j] + nums[i] <= target) {\n        seen.add(buckets[j]);\n        buckets[j] += nums[i];\n        if (bt(i + 1)) return true;\n        buckets[j] -= nums[i];\n      }\n    }\n    return false;\n  }\n  return bt(0);\n}\n```',
  ],
  functionName: 'canPartitionKSubsets',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function canPartitionKSubsets(nums, k) {

}`,
    typescript: `function canPartitionKSubsets(nums: number[], k: number): boolean {

}`,
    python: `def canPartitionKSubsets(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 3, 5, 2, 1], 4], expected: true },
    { args: [[1, 2, 3, 4], 3], expected: false },
    { args: [[2, 2, 2, 2], 4], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1], 2], expected: true },
    { args: [[1, 2, 3, 4], 2], expected: true },
    { args: [[3, 3, 3, 3], 2], expected: true },
    { args: [[1, 2, 3, 5], 2], expected: false },
    { args: [[2, 2, 2, 2, 3, 4, 5], 4], expected: false },
  ],
};
