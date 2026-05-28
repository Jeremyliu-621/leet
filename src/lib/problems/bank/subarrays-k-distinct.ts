import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarrays-k-distinct',
  title: 'Subarrays with K Different Integers',
  difficulty: 'hard',
  tags: ['two-pointers', 'sliding-window'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **good subarrays** of \`nums\`.

A **good subarray** is a subarray where the number of different integers in that subarray is exactly \`k\`.

**Key insight:** Count of subarrays with exactly k distinct = (subarrays with at most k distinct) − (subarrays with at most k−1 distinct).

Use a sliding window to count subarrays with **at most k** distinct integers. The number of subarrays ending at index \`right\` with a valid window \`[left, right]\` is \`right - left + 1\`.`,
  constraints: [
    '1 <= nums.length <= 20000',
    '1 <= nums[i] <= nums.length',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,3], k = 2',
      output: '7',
      explanation: 'Good subarrays: [1,2],[2,1],[1,2],[2,3],[1,2,1],[2,1,2],[1,2,1,2].',
    },
    {
      input: 'nums = [1,2,1,3,4], k = 3',
      output: '3',
      explanation: 'Good subarrays: [1,2,1,3],[2,1,3],[1,3,4].',
    },
  ],
  hints: [
    'Directly counting subarrays with exactly k distinct is hard. Instead use: exactly(k) = atMost(k) - atMost(k-1). Write a helper `atMost(nums, k)` that counts subarrays with at most k distinct integers.',
    'For `atMost(nums, k)`: use a sliding window with a frequency map. Shrink the left side when the map has more than k distinct values. The count of valid subarrays ending at `right` is `right - left + 1`.',
    '`function atMost(nums,k){const freq=new Map();let lo=0,cnt=0;for(let hi=0;hi<nums.length;hi++){freq.set(nums[hi],(freq.get(nums[hi])??0)+1);while(freq.size>k){if(freq.get(nums[lo])==1)freq.delete(nums[lo]);else freq.set(nums[lo],freq.get(nums[lo])-1);lo++;}cnt+=hi-lo+1;}return cnt;} return atMost(nums,k)-atMost(nums,k-1);`',
  ],
  functionName: 'subarraysWithKDistinct',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function subarraysWithKDistinct(nums, k) {\n  // your code here\n}\n',
    python: 'def subarraysWithKDistinct(nums: list, k: int) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 3], 2], expected: 7 },
    { args: [[1, 2, 1, 3, 4], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 1 },
    { args: [[1, 1, 1, 1, 1], 1], expected: 15 },
    { args: [[2, 1, 1, 1, 2], 2], expected: 7 },
  ],
};
