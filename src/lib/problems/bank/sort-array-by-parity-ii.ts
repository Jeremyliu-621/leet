import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-array-by-parity-ii',
  title: 'Sort Array By Parity II',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array \`nums\` of integers, half of the integers in \`nums\` are **odd**, and the other half are **even**.

Sort the array so that whenever \`nums[i]\` is odd, \`i\` is **odd**, and whenever \`nums[i]\` is even, \`i\` is **even**.

Return **any** answer array that satisfies this condition.`,
  constraints: [
    '`2 <= nums.length <= 2 * 10^4`',
    '`nums.length` is even.',
    'Half of the integers in `nums` are even.',
    '`0 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [4,2,5,7]',
      output: '[4,5,2,7]',
      explanation: '[4,5,2,7], [2,5,4,7], [2,7,4,5], and [4,7,2,5] are also accepted.',
    },
    {
      input: 'nums = [2,3]',
      output: '[2,3]',
    },
  ],
  hints: [
    'Collect even numbers and odd numbers separately, then interleave them.',
    'Place evens at indices 0, 2, 4, ... and odds at indices 1, 3, 5, ...',
    `\`\`\`js
function sortArrayByParityII(nums) {
  const res=new Array(nums.length);
  let e=0,o=1;
  for(const n of nums){
    if(n%2===0){res[e]=n;e+=2;}else{res[o]=n;o+=2;}
  }
  return res;
}\`\`\``,
  ],
  functionName: 'sortArrayByParityII',
  params: ['nums'],
  starterCode: {
    javascript: `function sortArrayByParityII(nums) {

}`,
    python: `def sortArrayByParityII(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 5, 7]], expected: [4, 5, 2, 7] },
    { args: [[2, 3]], expected: [2, 3] },
    { args: [[4, 1, 2, 3]], expected: [4, 1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[0, 1]], expected: [0, 1] },
    { args: [[2, 1, 4, 3]], expected: [2, 1, 4, 3] },
    { args: [[6, 3, 2, 1]], expected: [6, 3, 2, 1] },
    { args: [[0, 2, 1, 3]], expected: [0, 1, 2, 3] },
  ],
};
