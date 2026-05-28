import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-average-difference',
  title: 'Minimum Average Difference',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

The **average difference** of index \`i\` is the **absolute difference** between:
- the average of the **first** \`i + 1\` elements of \`nums\`, and
- the average of the **last** \`n - i - 1\` elements of \`nums\`.

Both averages use **integer division** (floor). If the last group is empty (i == n-1), its average is 0.

Return the index with the **minimum average difference**. If there is a tie, return the **smaller** index.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    { input: 'nums = [2,5,3,9,5,3]', output: '3', explanation: 'At i=3: avg([2,5,3,9])=4, avg([5,3])=4, diff=0.' },
    { input: 'nums = [0]', output: '0', explanation: 'Only one element; last group is empty (avg=0), diff=|0-0|=0.' },
  ],
  hints: [
    'Compute the prefix sum once. At each index, left average = prefix[i+1] / (i+1), right average = (total - prefix[i+1]) / (n-i-1).',
    'Track the minimum difference and the first index achieving it.',
    `\`\`\`js
function minimumAverageDifference(nums) {
  const n = nums.length;
  const total = nums.reduce((a,b)=>a+b,0);
  let leftSum = 0, bestIdx = 0, bestDiff = Infinity;
  for (let i = 0; i < n; i++) {
    leftSum += nums[i];
    const leftAvg = Math.floor(leftSum/(i+1));
    const rightAvg = i===n-1?0:Math.floor((total-leftSum)/(n-i-1));
    const diff = Math.abs(leftAvg-rightAvg);
    if (diff < bestDiff) { bestDiff=diff; bestIdx=i; }
  }
  return bestIdx;
}\`\`\``,
  ],
  functionName: 'minimumAverageDifference',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimumAverageDifference(nums) {\n  \n}\n',
    python: 'def minimumAverageDifference(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,5,3,9,5,3]], expected: 3 },
    { args: [[0]], expected: 0 },
    { args: [[1,2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[4,2,0]], expected: 2 },
    { args: [[1,1,1,1]], expected: 0 },
    { args: [[5,1,0,3,2]], expected: 2 },
    { args: [[1,2,3]], expected: 0 },
    { args: [[0,0,0,0,0]], expected: 0 },
  ],
};
