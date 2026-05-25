import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations',
  title: 'Apply Operations to an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`nums\` of size \`n\` consisting of **non-negative** integers.

Apply the following operations:
- For each index \`i\` from \`0\` to \`n - 2\`: if \`nums[i] == nums[i + 1]\`, multiply \`nums[i]\` by \`2\` and set \`nums[i + 1]\` to \`0\`.

After all operations, **shift** all the \`0\`s to the end of the array.

Return the resulting array.`,
  constraints: [
    '2 <= nums.length <= 2000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,1,1,0]',
      output: '[1,4,2,0,0,0]',
      explanation: 'i=0: 1!=2. i=1: 2==2→nums=[1,4,0,1,1,0]. i=2: 0!=1. i=3: 1==1→nums=[1,4,0,2,0,0]. i=4: 0!=0 (skip). Shift zeros: [1,4,2,0,0,0].',
    },
    {
      input: 'nums = [0,1]',
      output: '[1,0]',
    },
  ],
  hints: [
    'Level 1: First pass: scan left to right, when nums[i]==nums[i+1], double nums[i] and zero nums[i+1]. Second pass: move all zeros to the end.',
    'Level 2: Build the result by first collecting all non-zero elements, then appending zeros.',
    'Level 3: for(let i=0;i<n-1;i++)if(nums[i]&&nums[i]===nums[i+1]){nums[i]*=2;nums[i+1]=0;}return [...nums.filter(x=>x!==0),...nums.filter(x=>x===0)];',
  ],
  functionName: 'applyOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function applyOperations(nums) {\n  // your code here\n}\n',
    python: 'def applyOperations(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 2, 1, 1, 0]], expected: [1, 4, 2, 0, 0, 0] },
    { args: [[0, 1]], expected: [1, 0] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [2, 0] },
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[2, 2, 4, 4]], expected: [4, 8, 0, 0] },
    { args: [[1, 1, 1, 1]], expected: [2, 2, 0, 0] },
  ],
};
