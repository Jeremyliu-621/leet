import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-perimeter-triangle',
  title: 'Largest Perimeter Triangle',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `Given an integer array \`nums\`, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return \`0\`.`,
  constraints: [
    '`3 <= nums.length <= 10^4`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [2,1,2]',
      output: '5',
    },
    {
      input: 'nums = [1,2,1,10]',
      output: '0',
    },
  ],
  hints: [
    'Sort the array in descending order. For every consecutive triple (a, b, c) where a >= b >= c, check if b + c > a. The first valid triple gives the largest perimeter.',
    "After sorting descending, the first valid consecutive triple satisfies nums[i+1]+nums[i+2]>nums[i]. Return nums[i]+nums[i+1]+nums[i+2] for that triple.",
    'const s=[...nums].sort((a,b)=>b-a);for(let i=0;i<s.length-2;i++)if(s[i+1]+s[i+2]>s[i])return s[i]+s[i+1]+s[i+2];return 0;',
  ],
  functionName: 'largestPerimeter',
  params: ['nums'],
  starterCode: {
    javascript: `function largestPerimeter(nums) {

}`,
    typescript: "function largestPerimeter(nums: number[]): number {\n\n}",

    python: `def largestPerimeter(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 2]], expected: 5 },
    { args: [[1, 2, 1, 10]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[3, 2, 3, 4]], expected: 10 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[5, 5, 5, 5]], expected: 15 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 6, 2, 3]], expected: 8 },
  ],
};
