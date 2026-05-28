import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-numbers-disappeared',
  title: 'Find All Numbers Disappeared in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` of \`n\` integers where \`nums[i]\` is in the range \`[1, n]\`, return an array of all the integers in the range \`[1, n]\` that do not appear in \`nums\`.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^5`',
    '`1 <= nums[i] <= n`',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[5,6]',
    },
    {
      input: 'nums = [1,1]',
      output: '[2]',
    },
  ],
  hints: [
    'Create a set of all numbers in nums. Then iterate 1..n and collect those not in the set.',
    "Build a Set from nums. Then use Array.from({length:n},(_,i)=>i+1).filter(x=>!set.has(x)) to collect missing values.",
    'const s=new Set(nums);return Array.from({length:nums.length},(_,i)=>i+1).filter(x=>!s.has(x));',
  ],
  functionName: 'findDisappearedNumbers',
  params: ['nums'],
  starterCode: {
    javascript: `function findDisappearedNumbers(nums) {

}`,
    typescript: "function findDisappearedNumbers(nums: number[]): number[] {\n\n}",

    python: `def findDisappearedNumbers(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [5, 6] },
    { args: [[1, 1]], expected: [2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[2]], expected: [1] },
    { args: [[1, 2, 3, 4, 5]], expected: [] },
    { args: [[2, 2, 2, 2, 2]], expected: [1, 3, 4, 5] },
    { args: [[1, 3, 3, 3]], expected: [2, 4] },
  ],
};
