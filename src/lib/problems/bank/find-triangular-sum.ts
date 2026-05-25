import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-triangular-sum',
  title: 'Find Triangular Sum of an Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` is a digit between \`0\` and \`9\` (inclusive).

The **triangular sum** of \`nums\` is the value of the only element present in \`nums\` after the following process terminates:

1. Let \`nums\` comprise of \`n\` elements. If \`n == 1\`, **end** the process. Otherwise, **create** a new **0-indexed** integer array \`newNums\` of length \`n - 1\`.
2. For each index \`i\`, where \`0 <= i < n - 1\`, **assign** the value of \`newNums[i]\` as \`(nums[i] + nums[i+1]) % 10\`.
3. **Replace** the array \`nums\` with \`newNums\`.
4. **Repeat** the entire process starting from step 1.

Return the triangular sum of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '8',
      explanation: 'Step 1: [3,5,7,9]. Step 2: [8,2,6]. Step 3: [0,8]. Step 4: [8].',
    },
    {
      input: 'nums = [5]',
      output: '5',
    },
  ],
  hints: [
    'Level 1: Simulate the process: repeatedly reduce the array by summing adjacent pairs mod 10.',
    'Level 2: Each iteration creates an array one shorter. Repeat until length 1.',
    'Level 3: while(nums.length>1)nums=nums.slice(0,-1).map((_,i)=>(nums[i]+nums[i+1])%10);return nums[0];',
  ],
  functionName: 'triangularSum',
  params: ['nums'],
  starterCode: {
    javascript: 'function triangularSum(nums) {\n  // your code here\n}\n',
    python: 'def triangularSum(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 8 },
    { args: [[5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 3 },
    { args: [[9, 9]], expected: 8 },
    { args: [[0, 1, 2]], expected: 4 },
    { args: [[1, 0, 0, 1]], expected: 2 },
    { args: [[9, 8, 7, 6, 5]], expected: 2 },
  ],
};
