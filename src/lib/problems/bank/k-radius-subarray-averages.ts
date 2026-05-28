import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-radius-subarray-averages',
  title: 'K Radius Subarray Averages',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** array \`nums\` of \`n\` integers, and an integer \`k\`.

The **k-radius average** for a subarray of \`nums\` centered at some index \`i\` with the radius \`k\` is the average of all elements in \`nums\` between the indices \`i - k\` and \`i + k\` (**inclusive**). If there are fewer than \`k\` elements before or after the index \`i\`, then the **k-radius average** is \`-1\`.

Build and return an array \`avgs\` of length \`n\` where \`avgs[i]\` is the **k-radius average** for the subarray centered at index \`i\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '0 <= nums[i], k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [7,4,3,9,1,8,5,2], k = 3',
      output: '[-1,-1,-1,5,4,-1,-1,-1]',
      explanation: 'Indices 3 and 4 have enough neighbors on both sides.',
    },
    {
      input: 'nums = [100000], k = 0',
      output: '[100000]',
      explanation: 'With k=0, each element is its own window.',
    },
  ],
  hints: [
    'Level 1: Use a sliding window of size 2*k+1. Only indices i where i >= k AND i+k < n have valid averages.',
    'Level 2: Compute the initial window sum for indices [0..2k]. Then slide: add nums[i+k] and remove nums[i-k-1] as you advance. Store Math.floor(sum / (2*k+1)).',
    'Level 3: const w=2*k+1,avgs=new Array(n).fill(-1);if(w>n)return avgs;let sum=nums.slice(0,w).reduce((a,b)=>a+b,0);avgs[k]=Math.floor(sum/w);for(let i=k+1;i<n-k;i++){sum+=nums[i+k]-nums[i-k-1];avgs[i]=Math.floor(sum/w);}return avgs;',
  ],
  functionName: 'getAverages',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function getAverages(nums, k) {\n  // your code here\n}\n',
    typescript: "function getAverages(nums: number[], k: number): number[] {\n  // your code here\n}",

    python: 'def getAverages(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[7, 4, 3, 9, 1, 8, 5, 2], 3], expected: [-1, -1, -1, 5, 4, -1, -1, -1] },
    { args: [[100000], 0], expected: [100000] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: [-1, 2, 3, 4, -1] },
    { args: [[0, 1, 2, 3, 4], 2], expected: [-1, -1, 2, -1, -1] },
    { args: [[1, 1, 1, 1, 1], 2], expected: [-1, -1, 1, -1, -1] },
    { args: [[1, 2, 3], 5], expected: [-1, -1, -1] },
    { args: [[3, 3, 3], 0], expected: [3, 3, 3] },
  ],
};
