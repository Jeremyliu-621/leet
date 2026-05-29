import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximal-score-after-applying-k-operations',
  title: 'Maximal Score After Applying K Operations',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`. You have a starting score of \`0\`.

In one **operation**:

1. Choose an index \`i\` such that \`0 <= i < nums.length\`.
2. Increase your score by \`nums[i]\`.
3. Replace \`nums[i]\` with \`ceil(nums[i] / 3)\`.

Return the **maximum** possible score after applying **exactly** \`k\` operations.

The ceiling function \`ceil(val)\` is the smallest integer greater than or equal to \`val\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= k <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [10,10,10,10,10], k = 5',
      output: '50',
      explanation: 'Apply the operation to each element once: 10+10+10+10+10=50. Each element becomes ceil(10/3)=4 after the operation, but we used each only once.',
    },
    {
      input: 'nums = [1,10,3,3,3], k = 3',
      output: '17',
      explanation: 'Apply operation on index 1 (score=10, nums[1]=4), then index 1 again (score=14, nums[1]=2), then index 0 or 2 (score=17). Max 3-operation score is 17.',
    },
  ],
  hints: [
    'Always pick the largest element to maximize each operation.',
    'Use a max-heap (priority queue) initialized with all elements.',
    'Each operation: extract max, add to score, insert ceil(max/3) back.',
    'Repeat k times.',
  ],
  functionName: 'maxKelements',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxKelements(nums, k) {

}`,
    typescript: `function maxKelements(nums: number[], k: number): number {

}`,
    python: `def maxKelements(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[10, 10, 10, 10, 10], 5], expected: 50 },
    { args: [[1, 10, 3, 3, 3], 3], expected: 17 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[3], 2], expected: 4 },
    { args: [[1, 2], 3], expected: 4 },
    { args: [[9, 1, 1], 3], expected: 13 },
    { args: [[10, 20, 30], 1], expected: 30 },
    { args: [[1000000000], 3], expected: 1444444446 },
  ],
};
