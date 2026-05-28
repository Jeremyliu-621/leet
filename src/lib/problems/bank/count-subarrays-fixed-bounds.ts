import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-fixed-bounds',
  title: 'Count Subarrays With Fixed Bounds',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` and two integers \`minK\` and \`maxK\`.

A **fixed-bound subarray** of \`nums\` is a subarray that satisfies the following conditions:

- The **minimum** value in the subarray is equal to \`minK\`.
- The **maximum** value in the subarray is equal to \`maxK\`.

Return the **number of fixed-bound subarrays**.

A **subarray** is a **contiguous** part of an array.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i], minK, maxK <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2,7,5], minK = 1, maxK = 5',
      output: '2',
      explanation: 'The fixed-bound subarrays are [1,3,5] and [1,3,5,2].',
    },
    {
      input: 'nums = [1,1,1,1], minK = 1, maxK = 1',
      output: '10',
      explanation: 'Every subarray of nums is a fixed-bound subarray.',
    },
  ],
  hints: [
    'Level 1: Track the last position where minK appeared (minPos), the last position where maxK appeared (maxPos), and the last position where an out-of-bound value appeared (badPos).',
    'Level 2: For each right endpoint i, valid subarrays end at i and start after badPos. The start must be ≤ min(minPos, maxPos). So the count of valid subarrays ending at i = max(0, min(minPos, maxPos) - badPos).',
    'Level 3: let minPos=-1,maxPos=-1,badPos=-1,ans=0;for(let i=0;i<nums.length;i++){if(nums[i]<minK||nums[i]>maxK)badPos=i;if(nums[i]===minK)minPos=i;if(nums[i]===maxK)maxPos=i;ans+=Math.max(0,Math.min(minPos,maxPos)-badPos);}return ans;',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'minK', 'maxK'],
  starterCode: {
    javascript: 'function countSubarrays(nums, minK, maxK) {\n  // your code here\n}\n',
    typescript: "function countSubarrays(nums: number[], minK: number, maxK: number): number {\n  // your code here\n}",

    python: 'def countSubarrays(nums, minK, maxK):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 5, 2, 7, 5], 1, 5], expected: 2 },
    { args: [[1, 1, 1, 1], 1, 1], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[1, 2, 3], 1, 3], expected: 1 },
    { args: [[1, 3, 5], 1, 5], expected: 1 },
    { args: [[2, 1, 2, 1, 2], 1, 2], expected: 10 },
    { args: [[5, 5, 5], 1, 5], expected: 0 },
  ],
};
