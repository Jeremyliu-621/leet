import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-all-subset-xor-totals',
  title: 'Sum of All Subset XOR Totals',
  difficulty: 'easy',
  tags: ['math', 'backtracking'],
  description: `The **XOR total** of an array is defined as the bitwise XOR of **all its elements**, or \`0\` if the array is empty.

- For example, the XOR total of the array \`[2,5,6]\` is \`2 XOR 5 XOR 6 = 1\`.

Given an array \`nums\`, return the **sum of all XOR totals** for every **subset** of \`nums\`.

**Note:** Subsets with the same elements should be counted multiple times.

An array \`a\` is a **subset** of an array \`b\` if \`a\` can be obtained from \`b\` by deleting some (possibly zero) elements of \`b\`.`,
  constraints: [
    '1 <= nums.length <= 12',
    '1 <= nums[i] <= 20',
  ],
  examples: [
    {
      input: 'nums = [1,3]',
      output: '6',
      explanation: 'Subsets: [] XOR=0, [1] XOR=1, [3] XOR=3, [1,3] XOR=2. Sum=6.',
    },
    {
      input: 'nums = [5,1,6]',
      output: '28',
      explanation: 'All 8 subsets XOR totals sum to 28.',
    },
  ],
  hints: [
    'Level 1: Key insight: each element appears in exactly 2^(n-1) subsets. A bit position contributes to the sum if at least one number has that bit set — then it contributes 2^(n-1) times. So answer = (OR of all nums) * 2^(n-1).',
    'Level 2: Compute OR of all elements. Multiply by 2^(n-1) = (1 << (nums.length - 1)).',
    'Level 3: const or=nums.reduce((a,b)=>a|b,0);return or*(1<<(nums.length-1));',
  ],
  functionName: 'subsetXORSum',
  params: ['nums'],
  starterCode: {
    javascript: 'function subsetXORSum(nums) {\n  // your code here\n}\n',
    python: 'def subsetXORSum(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3]], expected: 6 },
    { args: [[5, 1, 6]], expected: 28 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 3]], expected: 6 },
    { args: [[3, 4, 5, 6, 7, 8]], expected: 480 },
    { args: [[1, 2, 3]], expected: 12 },
    { args: [[1, 5, 6]], expected: 28 },
  ],
};
