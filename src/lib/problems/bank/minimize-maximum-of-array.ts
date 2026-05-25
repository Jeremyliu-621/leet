import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-maximum-of-array',
  title: 'Minimize Maximum of Array',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** array \`nums\` comprising of \`n\` non-negative integers.

In one operation, you must:
- Choose an integer \`i\` such that \`1 <= i < n\` and \`nums[i] > 0\`.
- Decrease \`nums[i]\` by 1.
- Increase \`nums[i - 1]\` by 1.

Return the **minimum** possible value of the **maximum** integer of \`nums\` after performing **any** number of operations.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,7,1,6]',
      output: '5',
      explanation:
        'One optimal sequence: decrease nums[1] twice: [3,5,1,6], decrease nums[3] three times: [3,5,4,3], decrease nums[3] and move to nums[2]: [3,5,5,2]. Not quite. Optimally: [3,7,1,6] → max ceiling over prefix averages. ceil((3+7)/2)=5, ceil((3+7+1)/3)=4, ceil((3+7+1+6)/4)=5. Answer is 5.',
    },
    {
      input: 'nums = [10,1]',
      output: '10',
      explanation: 'Only operation allowed moves value from index 1 to index 0. nums[1]=1 is already 0... or we can decrease nums[1] by 1 → [11,0]. That makes max worse. So best is to not operate: max is 10.',
    },
  ],
  hints: [
    'Binary search on the answer `m`: can all elements be made ≤ m?',
    'To check: scan left to right. Any excess (nums[i] > m) must be pushed to the left. If nums[0] > m, it is impossible.',
    'Equivalently, the minimum possible maximum equals ceil(prefix_avg[i]) for all i. Return max over all prefix averages.',
  ],
  functionName: 'minimizeArrayValue',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimizeArrayValue(nums) {\n  \n}\n',
    python: 'def minimizeArrayValue(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 7, 1, 6]], expected: 5 },
    { args: [[10, 1]], expected: 10 },
    { args: [[6, 9, 3, 8, 14]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 2, 3, 4]], expected: 3 },
    { args: [[13, 13, 11, 8, 2]], expected: 13 },
    { args: [[1, 5]], expected: 3 },
  ],
};
