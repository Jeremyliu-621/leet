import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-absolute-difference-k',
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
      explanation: 'Pairs with |diff|=1: (0,1),(0,2),(1,3),(2,3) → 4 pairs.',
    },
    {
      input: 'nums = [1,3], k = 3',
      output: '0',
      explanation: '|1-3|=2 ≠ 3.',
    },
    {
      input: 'nums = [3,2,1,5,4], k = 2',
      output: '3',
      explanation: 'Pairs: (0,2)→|3-1|=2, (0,3)→|3-5|=2, (1,4)→|2-4|=2.',
    },
  ],
  hints: [
    'For each element x, check how many times x+k and x-k have appeared before. Use a frequency map.',
    'Alternatively, a nested loop O(n²) is fine for n ≤ 200.',
    `\`\`\`js
function countKDifference(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i+1; j < nums.length; j++)
      if (Math.abs(nums[i]-nums[j]) === k) count++;
  return count;
}
// O(n) with freq map: for each num, check num+k in map\`\`\``,
  ],
  functionName: 'countKDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function countKDifference(nums, k) {\n  \n}\n',
    typescript: "function countKDifference(nums: number[], k: number): number {\n  \n}",

    python: 'def countKDifference(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1], 1], expected: 4 },
    { args: [[1, 3], 3], expected: 0 },
    { args: [[3, 2, 1, 5, 4], 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[2, 4, 6, 8], 2], expected: 3 },
    { args: [[10, 9, 7, 5, 3, 1], 2], expected: 4 },
    { args: [[1, 2, 1, 2], 1], expected: 4 },
    { args: [[1], 1], expected: 0 },
  ],
};
