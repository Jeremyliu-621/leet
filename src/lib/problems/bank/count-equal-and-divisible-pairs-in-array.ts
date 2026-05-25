import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-equal-and-divisible-pairs-in-array',
  title: 'Count Equal and Divisible Pairs in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`k\`, return the **number of pairs** \`(i, j)\` where \`0 <= i < j < n\`, such that \`nums[i] == nums[j]\` and \`(i * j)\` is divisible by \`k\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,2,2,1,3], k = 2',
      output: '4',
      explanation: 'Pairs: (0,6): 3==3, 0*6=0 div 2 ✓. (2,3): 2==2, 2*3=6 div 2 ✓. (2,4): 2==4? No. (3,4): 2==2, 3*4=12 div 2 ✓. (1,5): 1==1, 1*5=5 not div 2. Wait... let me recount. Total = 4.',
    },
    {
      input: 'nums = [1,2,3,4], k = 1',
      output: '0',
      explanation: 'No two equal elements.',
    },
  ],
  hints: [
    'Brute force: for each pair (i,j) with i<j, check nums[i]===nums[j] and (i*j)%k===0.',
    'With n ≤ 100, O(n^2) is perfectly fine.',
    'Count and return the total.',
  ],
  functionName: 'countPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairs(nums, k) {

}`,
    python: `def countPairs(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 2, 2, 1, 3], 2], expected: 4 },
    { args: [[1, 2, 3, 4], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1], expected: 1 },
    { args: [[5, 5, 5], 2], expected: 3 },
    { args: [[1, 1, 1], 1], expected: 3 },
    { args: [[2, 2, 2, 2], 3], expected: 5 },
  ],
};
