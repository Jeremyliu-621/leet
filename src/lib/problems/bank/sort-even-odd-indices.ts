import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-even-odd-indices',
  title: 'Sort Even and Odd Indices Independently',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. Rearrange the values of \`nums\` according to the following rules:

1. Sort the values at **odd** indices of \`nums\` in **non-increasing** order.
   - For example, if \`nums = [4,1,2,3]\` before this step, it becomes \`[4,3,2,1]\` after.
2. Sort the values at **even** indices of \`nums\` in **non-decreasing** order.
   - For example, if \`nums = [4,3,2,1]\` before this step, it becomes \`[2,3,4,1]\` after.

Return the array formed after rearranging the values of \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [4,1,2,3]',
      output: '[2,3,4,1]',
      explanation: 'Even indices: [4,2] → sorted ascending: [2,4]. Odd indices: [1,3] → sorted descending: [3,1]. Result: [2,3,4,1].',
    },
    {
      input: 'nums = [2,1]',
      output: '[2,1]',
      explanation: 'Even indices: [2] → [2]. Odd indices: [1] → [1]. Result: [2,1].',
    },
    {
      input: 'nums = [1,5,6,8,3,2]',
      output: '[1,8,3,5,6,2]',
      explanation: 'Even: [1,6,3]→[1,3,6]. Odd: [5,8,2]→[8,5,2]. Result: [1,8,3,5,6,2].',
    },
  ],
  hints: [
    'Extract even-indexed values, sort ascending. Extract odd-indexed values, sort descending. Interleave back.',
    'Separate values at even indices and odd indices. Sort even-index values ascending and odd-index values descending. Merge back.',
    `\`\`\`js
const even = nums.filter((_,i)=>i%2===0).sort((a,b)=>a-b);
const odd  = nums.filter((_,i)=>i%2!==0).sort((a,b)=>b-a);
return nums.map((_,i) => i%2===0 ? even.shift() : odd.shift());\`\`\``
  ],
  functionName: 'sortEvenOdd',
  params: ['nums'],
  starterCode: {
    javascript: `function sortEvenOdd(nums) {

}`,
    python: `def sortEvenOdd(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 2, 3]], expected: [2, 3, 4, 1] },
    { args: [[2, 1]], expected: [2, 1] },
    { args: [[1, 5, 6, 8, 3, 2]], expected: [1, 8, 3, 5, 6, 2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[3, 2, 1]], expected: [1, 2, 3] },
    { args: [[5, 3, 7, 1]], expected: [5, 3, 7, 1] },
    { args: [[10, 20, 30, 40]], expected: [10, 40, 30, 20] },
  ],
};
