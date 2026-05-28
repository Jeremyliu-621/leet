import type { Problem } from '../types';

export const problem: Problem = {
  id: 'left-and-right-sum-differences',
  title: 'Left and Right Sum Differences',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\`, find a 0-indexed integer array \`answer\` where:

- \`answer.length == nums.length\`
- \`answer[i] = |leftSum[i] - rightSum[i]|\`

Where:
- \`leftSum[i]\` is the sum of elements to the **left** of index \`i\` (i.e. \`nums[0] + ... + nums[i-1]\`). If there is no such element, \`leftSum[i] = 0\`.
- \`rightSum[i]\` is the sum of elements to the **right** of index \`i\` (i.e. \`nums[i+1] + ... + nums[n-1]\`). If there is no such element, \`rightSum[i] = 0\`.

Return the array \`answer\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [10,4,8,3]',
      output: '[15,1,11,22]',
      explanation:
        'leftSum=[0,10,14,22], rightSum=[15,11,3,0]. answer=[|0-15|,|10-11|,|14-3|,|22-0|]=[15,1,11,22].',
    },
    {
      input: 'nums = [1]',
      output: '[0]',
      explanation: 'No elements to the left or right, so answer[0] = |0 - 0| = 0.',
    },
  ],
  hints: [
    'Level 1: Compute the total sum. As you scan left to right, maintain a running left prefix. The right sum at each position is totalSum - leftSum - nums[i].',
    'Level 2: Let left=0, total=sum(nums). For each i: rightSum = total - left - nums[i]. answer[i] = Math.abs(left - rightSum). Then left += nums[i].',
    'Level 3: const total=nums.reduce((a,b)=>a+b,0);const ans=[];let left=0;for(const n of nums){const right=total-left-n;ans.push(Math.abs(left-right));left+=n;}return ans;',
  ],
  functionName: 'leftRigthDifference',
  params: ['nums'],
  starterCode: {
    javascript:
      'function leftRigthDifference(nums) {\n  // your code here\n}\n',
    python:
      'def leftRigthDifference(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 4, 8, 3]], expected: [15, 1, 11, 22] },
    { args: [[1]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [5, 2, 3] },
    { args: [[1, 1, 1]], expected: [2, 0, 2] },
    { args: [[2, 5, 1, 3]], expected: [9, 2, 4, 8] },
    { args: [[5, 1]], expected: [1, 5] },
    { args: [[3, 3, 3, 3]], expected: [9, 3, 3, 9] },
  ],
};
