import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-positive-integer-with-negative',
  title: 'Find Positive Integer with Matching Negative',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` that does not contain zero, find the **largest positive integer** \`k\` such that both \`k\` and \`-k\` exist in the array. If no such integer exists, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`-1000 <= nums[i] <= 1000`',
    '`nums[i] != 0`',
    'All elements in `nums` are distinct.',
  ],
  examples: [
    {
      input: 'nums = [-1,2,-3,3]',
      output: '3',
      explanation: 'Both 3 and -3 exist in the array. 2 has no matching -2. The largest valid k is 3.',
    },
    {
      input: 'nums = [-1,10,6,7,-7,1]',
      output: '7',
      explanation: 'Both 1/-1 and 7/-7 are matching pairs. The largest is 7.',
    },
    {
      input: 'nums = [-10,-4,-3,-2]',
      output: '-1',
      explanation: 'No positive integer k exists such that both k and -k are in the array.',
    },
  ],
  hints: [
    'Put all numbers in a Set. Then for each positive number, check if its negative exists.',
    'Build a Set of all values. For each positive number `x`, check if `-x` also exists. Return the largest such `x`, or `-1`.',
    `\`\`\`js
const s = new Set(nums);
let ans = -1;
for (const x of nums) if (x > 0 && s.has(-x)) ans = Math.max(ans, x);
return ans;\`\`\``
  ],
  functionName: 'findMaxK',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMaxK(nums) {\n  \n}\n',
    python: 'def findMaxK(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[-1, 2, -3, 3]], expected: 3 },
    { args: [[-1, 10, 6, 7, -7, 1]], expected: 7 },
    { args: [[-10, -4, -3, -2]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, -1]], expected: 1 },
    { args: [[1, 2, 3, -1, -2, -3]], expected: 3 },
    { args: [[-1, -2, 1]], expected: 1 },
    { args: [[1000, -1000]], expected: 1000 },
    { args: [[1, -2, 3]], expected: -1 },
  ],
};
