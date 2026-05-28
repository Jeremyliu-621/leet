import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-absolute-diff-k',
  title: 'Count Number of Pairs With Absolute Difference K',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of pairs \`(i, j)\` where \`i < j\` such that \`|nums[i] - nums[j]| == k\`.

\`|x|\` is the absolute value of \`x\`.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 100',
    '1 <= k <= 99',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1], k = 1',
      output: '4',
      explanation: 'Pairs with |diff|=1: (0,1),(0,2),(1,3),(2,3).',
    },
    {
      input: 'nums = [1,3], k = 3',
      output: '0',
      explanation: '|1-3|=2 ≠ 3.',
    },
    {
      input: 'nums = [3,2,1,5,4], k = 2',
      output: '3',
    },
  ],
  hints: [
    'Level 1: Use two nested loops to check all pairs (i, j) with i < j.',
    'Level 2: Count pairs where |nums[i] - nums[j]| === k.',
    'Level 3: let cnt=0;for(let i=0;i<nums.length;i++)for(let j=i+1;j<nums.length;j++)if(Math.abs(nums[i]-nums[j])===k)cnt++;return cnt;',
  ],
  functionName: 'countKDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function countKDifference(nums, k) {\n  // your code here\n}\n',
    typescript: "function countKDifference(nums: number[], k: number): number {\n  // your code here\n}",

    python: 'def countKDifference(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], 1], expected: 4 },
    { args: [[1, 3], 3], expected: 0 },
    { args: [[3, 2, 1, 5, 4], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1], expected: 0 },
    { args: [[2, 2], 1], expected: 0 },
    { args: [[1, 2], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[1, 5, 3, 4, 2], 2], expected: 3 },
  ],
};
