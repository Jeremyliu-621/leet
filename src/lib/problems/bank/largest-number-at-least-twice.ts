import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-number-at-least-twice',
  title: 'Largest Number At Least Twice of Others',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` where the largest integer is **unique**.

Determine whether the largest element in the array is **at least twice** as much as every other number in the array. If it is, return the **index** of the largest element, or return \`-1\` otherwise.`,
  constraints: [
    '`2 <= nums.length <= 50`',
    '`0 <= nums[i] <= 100`',
    'The largest element in `nums` is unique.',
  ],
  examples: [
    {
      input: 'nums = [3,6,1,0]',
      output: '1',
      explanation: '6 is the largest. 6 >= 2*3=6, 6 >= 2*1=2, 6 >= 2*0=0. Returns index 1.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '-1',
      explanation: '4 is not at least twice 3.',
    },
  ],
  hints: [
    'Find the maximum and its index. Check that max >= 2 * every other element.',
    "Find the max value and its index. Then check every other element: if any element*2 > max, return -1. Otherwise return the max index.",
    'const m=Math.max(...nums),i=nums.indexOf(m);return nums.every(x=>x===m||m>=2*x)?i:-1;',
  ],
  functionName: 'dominantIndex',
  params: ['nums'],
  starterCode: {
    javascript: `function dominantIndex(nums) {

}`,
    typescript: "function dominantIndex(nums: number[]): number {\n\n}",

    python: `def dominantIndex(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 6, 1, 0]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: 0 },
    { args: [[0, 0, 3, 2]], expected: -1 },
    { args: [[1]], expected: 0 },
    { args: [[0, 1]], expected: 1 },
    { args: [[2, 3, 1, 1]], expected: -1 },
    { args: [[10, 2, 3, 4]], expected: 0 },
  ],
};
