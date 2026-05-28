import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-nice-subarrays',
  title: 'Count Number of Nice Subarrays',
  difficulty: 'medium',
  tags: ['sliding-window', 'hash-map'],
  description: `Given an array of integers \`nums\` and an integer \`k\`, return the **number of "nice" subarrays**.

A subarray is **nice** if it contains exactly \`k\` **odd** numbers.`,
  constraints: [
    '1 <= nums.length <= 50000',
    '1 <= nums[i] <= 10^5',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,1,1], k = 3',
      output: '2',
      explanation: '[1,1,2,1] and [1,2,1,1] each have exactly 3 odd numbers.',
    },
    {
      input: 'nums = [2,4,6], k = 1',
      output: '0',
      explanation: 'There are no odd numbers in the array.',
    },
    {
      input: 'nums = [2,2,2,1,2,2,1,2,2,2], k = 2',
      output: '16',
    },
  ],
  hints: [
    'Level 1: Use the prefix-sum trick: count(exactly k odds) = count(at most k odds) - count(at most k-1 odds). A sliding window can count subarrays with at most k odds.',
    'Level 2: Helper atMost(k): maintain a window [l, r]. Expand r, increment odd count if nums[r] is odd. While odd count > k, shrink from left. Add r-l+1 to result (number of subarrays ending at r). Return atMost(k) - atMost(k-1).',
    'Level 3: function atMost(k){let l=0,odds=0,res=0;for(let r=0;r<nums.length;r++){odds+=nums[r]%2;while(odds>k)odds-=nums[l++]%2;res+=r-l+1;}return res;}return atMost(k)-atMost(k-1);',
  ],
  functionName: 'numberOfSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function numberOfSubarrays(nums, k) {\n  // your code here\n}\n',
    typescript: "function numberOfSubarrays(nums: number[], k: number): number {\n  // your code here\n}",

    python: 'def numberOfSubarrays(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 1, 2, 1, 1], 3], expected: 2 },
    { args: [[2, 4, 6], 1], expected: 0 },
    { args: [[2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1], 2], expected: 0 },
    { args: [[1, 2, 1, 2, 1], 1], expected: 8 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
  ],
};
