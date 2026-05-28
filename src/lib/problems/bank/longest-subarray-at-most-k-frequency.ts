import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-at-most-k-frequency',
  title: 'Longest Subarray With at Most K Frequency',
  difficulty: 'medium',
  tags: ['sliding-window', 'hash-map'],
  description: `You are given an integer array \`nums\` and a positive integer \`k\`.

Return the length of the **longest** subarray of \`nums\` where the **frequency** of each element is **at most** \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1,2,3,1,2], k = 2',
      output: '6',
      explanation: 'The subarray [1,2,3,1,2,3] (indices 0-5) has each element at most twice. Any longer subarray would exceed k=2 for some element.',
    },
    {
      input: 'nums = [1,2,1,2,1,2,1,2], k = 1',
      output: '2',
      explanation: 'Any window of length > 2 has some element appearing more than once.',
    },
    {
      input: 'nums = [5,5,5,5,5], k = 3',
      output: '3',
      explanation: '5 can appear at most 3 times: longest subarray is any 3 consecutive elements.',
    },
  ],
  hints: [
    'Use a sliding window with two pointers: `left` and `right`. Maintain a frequency map for the current window.',
    'When any element\'s frequency exceeds k, shrink the window from the left until all frequencies are ≤ k.',
    '`const freq=new Map(); let l=0,ans=0; for(let r=0;r<nums.length;r++){freq.set(nums[r],(freq.get(nums[r])??0)+1); while(freq.get(nums[r])>k){freq.set(nums[l],freq.get(nums[l])-1);l++;} ans=Math.max(ans,r-l+1);} return ans;`',
  ],
  functionName: 'maxSubarrayLength',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSubarrayLength(nums, k) {\n  \n}\n',
    python: 'def maxSubarrayLength(nums: list[int], k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 1, 2, 3, 1, 2], 2], expected: 6 },
    { args: [[1, 2, 1, 2, 1, 2, 1, 2], 1], expected: 2 },
    { args: [[5, 5, 5, 5, 5], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4], 1], expected: 4 },
    { args: [[1, 1, 1, 1], 4], expected: 4 },
    { args: [[1, 2, 1, 3, 1, 4], 2], expected: 5 },
    { args: [[1, 2, 2, 1, 1], 2], expected: 4 },
    { args: [[1, 1, 2, 2, 3, 3], 2], expected: 6 },
    { args: [[1, 1, 1, 2, 2, 3], 1], expected: 2 },
  ],
};
