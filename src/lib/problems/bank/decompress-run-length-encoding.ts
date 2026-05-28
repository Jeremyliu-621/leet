import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decompress-run-length-encoding',
  title: 'Decompress Run-Length Encoded List',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `We are given a list \`nums\` of integers representing a list compressed with **run-length encoding**.

Consider each adjacent pair of elements \`[freq, val] = [nums[2*i], nums[2*i+1]]\` (with \`i >= 0\`). For each such pair, there are \`freq\` elements with value \`val\` concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.`,
  constraints: [
    '2 <= nums.length <= 100',
    'nums.length % 2 == 0',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[2,4,4,4]',
      explanation: 'Pair (1,2): one 2. Pair (3,4): three 4s. Output: [2,4,4,4].',
    },
    {
      input: 'nums = [1,1,2,3]',
      output: '[1,3,3]',
    },
  ],
  hints: [
    'Level 1: Process pairs (nums[0],nums[1]), (nums[2],nums[3]), ...',
    'Level 2: For each pair (freq, val), append val to the result freq times.',
    'Level 3: const res=[];for(let i=0;i<nums.length;i+=2)for(let j=0;j<nums[i];j++)res.push(nums[i+1]);return res;',
  ],
  functionName: 'decompressRLElist',
  params: ['nums'],
  starterCode: {
    javascript: 'function decompressRLElist(nums) {\n  // your code here\n}\n',
    typescript: "function decompressRLElist(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def decompressRLElist(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [2, 4, 4, 4] },
    { args: [[1, 1, 2, 3]], expected: [1, 3, 3] },
  ],
  hiddenTests: [
    { args: [[2, 5]], expected: [5, 5] },
    { args: [[1, 10, 1, 20]], expected: [10, 20] },
    { args: [[3, 1, 2, 2]], expected: [1, 1, 1, 2, 2] },
    { args: [[2, 3, 3, 2, 1, 1]], expected: [3, 3, 2, 2, 2, 1] },
  ],
};
