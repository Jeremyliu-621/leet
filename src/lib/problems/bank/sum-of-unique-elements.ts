import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-unique-elements',
  title: 'Sum of Unique Elements',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. The **unique elements** of an array are the elements that appear **exactly once** in the array.

Return the **sum** of all the unique elements of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,2]',
      output: '4',
      explanation: 'The unique elements are [1,3], and the sum is 4.',
    },
    {
      input: 'nums = [1,1,1,1,1]',
      output: '0',
      explanation: 'There are no unique elements, sum is 0.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '15',
    },
  ],
  hints: [
    'Level 1: Count the frequency of each element.',
    'Level 2: Sum elements whose frequency is exactly 1.',
    'Level 3: const f=new Map();for(const n of nums)f.set(n,(f.get(n)??0)+1);return [...f].filter(([,v])=>v===1).reduce((s,[k])=>s+k,0);',
  ],
  functionName: 'sumOfUnique',
  params: ['nums'],
  starterCode: {
    javascript: 'function sumOfUnique(nums) {\n  // your code here\n}\n',
    typescript: "function sumOfUnique(nums: number[]): number {\n  // your code here\n}",

    python: 'def sumOfUnique(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 2]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[5]], expected: 5 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 2, 2, 3, 3]], expected: 1 },
    { args: [[10, 20, 30]], expected: 60 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 0 },
  ],
};
