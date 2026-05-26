import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-sub-arrays-size-k-average-threshold',
  title: 'Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `Given an array of integers \`arr\` and two integers \`k\` and \`threshold\`, return the number of sub-arrays of size \`k\` and average greater than or equal to \`threshold\`.`,
  constraints: [
    '1 <= arr.length <= 10^5',
    '1 <= arr[i] <= 10^4',
    '1 <= k <= arr.length',
    '0 <= threshold <= 10^4',
  ],
  examples: [
    {
      input: 'arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4',
      output: '3',
      explanation: 'Subarrays [2,5,5],[5,5,5],[5,5,8] have averages 4,5,6 ≥ 4.',
    },
    {
      input: 'arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5',
      output: '6',
    },
  ],
  hints: [
    'Use a sliding window of size k.',
    'Check if window sum >= k * threshold (avoids floating point).',
    `\`\`\`js
function numOfSubarrays(arr, k, threshold) {
  const target = k*threshold;
  let sum=arr.slice(0,k).reduce((a,b)=>a+b,0), count=sum>=target?1:0;
  for(let i=k;i<arr.length;i++){sum+=arr[i]-arr[i-k];if(sum>=target)count++;}
  return count;
}\`\`\``,
  ],
  functionName: 'numOfSubarrays',
  params: ['arr', 'k', 'threshold'],
  starterCode: {
    javascript: 'function numOfSubarrays(arr, k, threshold) {\n\n}\n',
    python: 'def numOfSubarrays(arr, k, threshold):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,2,2,2,5,5,5,8], 3, 4], expected: 3 },
    { args: [[11,13,17,23,29,31,7,5,2,3], 3, 5], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1,1,1], 1, 1], expected: 3 },
    { args: [[1,2,3,4,5], 2, 3], expected: 2 },
    { args: [[1,1,1,1], 3, 2], expected: 0 },
    { args: [[5,5,5,5], 2, 5], expected: 3 },
  ],
};
