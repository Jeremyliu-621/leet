import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-good-pairs',
  title: 'Number of Good Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`nums\`, return the number of **good pairs**.

A pair \`(i, j)\` is called **good** if \`nums[i] == nums[j]\` and \`i < j\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1,1,3]',
      output: '4',
      explanation: 'Good pairs: (0,3), (0,4), (3,4), (2,5).',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '6',
      explanation: 'All 6 pairs are good.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
    },
  ],
  hints: [
    'For each number, count how many times it has appeared before the current position. Each previous occurrence forms a good pair with the current index.',
    'Use a frequency map. When you encounter nums[i], the number of new good pairs formed is count[nums[i]], then increment count[nums[i]].',
    `\`\`\`js
function numIdenticalPairs(nums) {
  const freq={};
  for(const n of nums) freq[n]=(freq[n]||0)+1;
  return Object.values(freq).reduce((s,c)=>s+c*(c-1)/2,0);
}\`\`\``,
  ],
  functionName: 'numIdenticalPairs',
  params: ['nums'],
  starterCode: {
    javascript: 'function numIdenticalPairs(nums) {\n  \n}\n',
    typescript: "function numIdenticalPairs(nums: number[]): number {\n  \n}",

    python: 'def numIdenticalPairs(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 1, 1, 3]], expected: 4 },
    { args: [[1, 1, 1, 1]], expected: 6 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 4 },
    { args: [[100, 100, 100, 100, 100]], expected: 10 },
  ],
};
