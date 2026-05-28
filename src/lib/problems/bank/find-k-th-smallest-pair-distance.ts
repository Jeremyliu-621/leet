import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-k-th-smallest-pair-distance',
  title: 'Find K-th Smallest Pair Distance',
  difficulty: 'hard',
  tags: ['binary-search', 'sliding-window'],
  description: `The **distance** of a pair of integers \`a\` and \`b\` is defined as the absolute difference between \`a\` and \`b\`.

Given an integer array \`nums\` and an integer \`k\`, return the **k-th smallest distance** among all the pairs \`nums[i]\` and \`nums[j]\` where \`0 <= i < j < nums.length\`.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 10^4',
    '0 <= nums[i] <= 10^6',
    '1 <= k <= n*(n-1)/2',
  ],
  examples: [
    {
      input: 'nums = [1,3,1], k = 1',
      output: '0',
      explanation: 'Pair distances: |1-3|=2, |1-1|=0, |3-1|=2. The 1st smallest is 0.',
    },
    {
      input: 'nums = [1,1,1], k = 2',
      output: '0',
    },
    {
      input: 'nums = [1,6,1], k = 3',
      output: '5',
    },
  ],
  hints: [
    'Level 1: Binary search on the answer (the distance). For a given distance D, count how many pairs have distance ≤ D using a sliding window on the sorted array. Binary search for the smallest D where count ≥ k.',
    'Level 2: Sort nums. Binary search lo=0, hi=nums[n-1]-nums[0]. For mid D, use sliding window: for each right pointer j, advance left pointer l until nums[j]-nums[l] ≤ D. Count += j-l pairs.',
    'Level 3: nums.sort((a,b)=>a-b);const n=nums.length;let lo=0,hi=nums[n-1]-nums[0];while(lo<hi){const mid=(lo+hi)>>1;let cnt=0,l=0;for(let r=0;r<n;r++){while(nums[r]-nums[l]>mid)l++;cnt+=r-l;}if(cnt>=k)hi=mid;else lo=mid+1;}return lo;',
  ],
  functionName: 'smallestDistancePair',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function smallestDistancePair(nums, k) {\n  // your code here\n}\n',
    python: 'def smallestDistancePair(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 1], 1], expected: 0 },
    { args: [[1, 1, 1], 2], expected: 0 },
    { args: [[1, 6, 1], 3], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 1 },
    { args: [[0, 100], 1], expected: 100 },
    { args: [[1, 3, 1], 2], expected: 2 },
    { args: [[1, 3, 1], 3], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 2 },
  ],
};
