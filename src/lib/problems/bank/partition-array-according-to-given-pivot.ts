import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-array-according-to-given-pivot',
  title: 'Partition Array According to Given Pivot',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`pivot\`. Rearrange \`nums\` such that:

- Every element **less than** \`pivot\` appears **before** every element **equal to** \`pivot\`.
- Every element **greater than** \`pivot\` appears **after** every element **equal to** \`pivot\`.
- The **relative order** of the elements less than, equal to, and greater than \`pivot\` is maintained.

Return the rearranged array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^6 <= nums[i] <= 10^6',
    'pivot equals to an element of nums.',
  ],
  examples: [
    {
      input: 'nums = [9,12,5,10,14,3,10], pivot = 10',
      output: '[9,5,3,10,10,12,14]',
      explanation: 'Elements < 10: [9,5,3] (in original order). Elements = 10: [10,10]. Elements > 10: [12,14]. Concatenated: [9,5,3,10,10,12,14].',
    },
    {
      input: 'nums = [-3,4,3,2], pivot = 2',
      output: '[-3,2,4,3]',
      explanation: 'Elements < 2: [-3]. Elements = 2: [2]. Elements > 2: [4,3]. Result: [-3,2,4,3].',
    },
  ],
  hints: [
    'Collect all elements less than pivot into array "less", equal to pivot into "equal", greater into "greater".',
    'Concatenate: [...less, ...equal, ...greater]. This preserves relative order and runs in O(n).',
    `\`\`\`js
function pivotArray(nums, pivot) {
  const less=[],equal=[],greater=[];
  for(const n of nums){if(n<pivot)less.push(n);else if(n===pivot)equal.push(n);else greater.push(n);}
  return [...less,...equal,...greater];
}\`\`\``,
  ],
  functionName: 'pivotArray',
  params: ['nums', 'pivot'],
  starterCode: {
    javascript: 'function pivotArray(nums, pivot) {\n  \n}\n',
    typescript: "function pivotArray(nums: number[], pivot: number): number[] {\n  \n}",

    python: 'def pivotArray(nums, pivot):\n    pass\n',
  },
  visibleTests: [
    { args: [[9,12,5,10,14,3,10], 10], expected: [9,5,3,10,10,12,14] },
    { args: [[-3,4,3,2], 2], expected: [-3,2,4,3] },
    { args: [[1,2,3], 2], expected: [1,2,3] },
  ],
  hiddenTests: [
    { args: [[5], 5], expected: [5] },
    { args: [[3,1,2], 2], expected: [1,2,3] },
    { args: [[1,3,2,3,1], 3], expected: [1,2,1,3,3] },
    { args: [[10,5,5,10], 5], expected: [5,5,10,10] },
    { args: [[4,3,2,1], 1], expected: [1,4,3,2] },
  ],
};
