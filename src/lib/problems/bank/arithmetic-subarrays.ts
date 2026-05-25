import type { Problem } from '../types';

export const problem: Problem = {
  id: 'arithmetic-subarrays',
  title: 'Arithmetic Subarrays',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `A sequence of numbers is called **arithmetic** if it consists of at least two elements, and the difference between every two consecutive elements is the same. For example, \`[1,3,5,7,9]\`, \`[7,7,7,7]\`, and \`[3,-1,-5,-9]\` are arithmetic.

You are given an array of \`n\` integers, \`nums\`, and two arrays of \`m\` integers each, \`l\` and \`r\`, representing the \`m\` range queries, where the \`i-th\` query asks if the subarray \`nums[l[i]], nums[l[i]+1], ..., nums[r[i]]\` can be rearranged to form an **arithmetic sequence**.

Return a list of boolean answers to each query.`,
  constraints: [
    'n == nums.length',
    'm == l.length == r.length',
    '2 <= n <= 500',
    '1 <= m <= 500',
    '0 <= l[i] < r[i] < n',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]',
      output: '[true,false,true]',
      explanation: '[4,6,5] can be rearranged to [4,5,6]; [4,6,5,9] cannot; [5,9,3,7] → [3,5,7,9].',
    },
    {
      input: 'nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]',
      output: '[false,true,false,false,true,true]',
    },
  ],
  hints: [
    'For each query [l,r], extract the subarray, sort it, and check if consecutive differences are all equal.',
    'A subarray of length k is arithmetic iff (max - min) % (k-1) == 0 AND each element in [min, min+d, min+2d,...,max] appears exactly once.',
    'The sort-and-check approach is O((r-l)*log(r-l)) per query.',
  ],
  functionName: 'checkArithmeticSubarrays',
  params: ['nums', 'l', 'r'],
  starterCode: {
    javascript: 'function checkArithmeticSubarrays(nums, l, r) {\n\n}\n',
    python: 'def checkArithmeticSubarrays(nums, l, r):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]], expected: [true, false, true] },
    { args: [[-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], [0, 1, 6, 4, 8, 7], [4, 4, 9, 7, 9, 10]], expected: [false, true, false, false, true, true] },
  ],
  hiddenTests: [
    { args: [[1, 3, 5], [0], [2]], expected: [true] },
    { args: [[1, 2, 4], [0], [2]], expected: [false] },
    { args: [[7, 7, 7], [0], [2]], expected: [true] },
  ],
};
