import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-function',
  title: 'Rotate Function',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\`.

Define \`F(k)\` as the sum of \`i * nums[(i + k) % n]\` for all \`0 <= i < n\`.

Return the **maximum** value of \`F(0), F(1), ..., F(n - 1)\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,6]',
      output: '26',
      explanation: 'F(0) = 0*4+1*3+2*2+3*6 = 25, F(1) = 0*6+1*4+2*3+3*2 = 16, F(2) = 0*2+1*6+2*4+3*3 = 23, F(3) = 0*3+1*2+2*6+3*4 = 26. Maximum is 26.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '20',
      explanation: 'F(0) = 0*1+1*2+2*3+3*4 = 20. This is the maximum.',
    },
  ],
  hints: [
    'Note that F(k) - F(k-1) = sum(nums) - n * nums[n-k]. Use this recurrence instead of recomputing from scratch.',
    'Compute F(0) first, then use the relation F(k) = F(k-1) + sum(nums) - n * nums[n-k] to compute each subsequent value in O(1).',
    `\`\`\`js
function maxRotateFunction(nums) {
  const n=nums.length;
  const total=nums.reduce((a,b)=>a+b,0);
  let f0=nums.reduce((s,v,i)=>s+i*v,0);
  let best=f0;
  for(let k=1;k<n;k++){f0=f0+total-n*nums[n-k];best=Math.max(best,f0);}
  return best;
}\`\`\``,
  ],
  functionName: 'maxRotateFunction',
  params: ['nums'],
  starterCode: {
    javascript: `function maxRotateFunction(nums) {

}`,
    python: `def maxRotateFunction(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 6]], expected: 26 },
    { args: [[1, 2, 3, 4]], expected: 20 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 1, 2]], expected: 8 },
  ],
};
