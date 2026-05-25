import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-max-bitwise-and',
  title: 'Longest Subarray With Maximum Bitwise AND',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` of size \`n\`.

Consider a **non-empty** subarray from \`nums\` that has the **maximum** possible **bitwise AND**.

- In other words, let \`k\` be the maximum value of the bitwise AND of **any** subarray of \`nums\`. Then, only subarrays with a bitwise AND equal to \`k\` should be considered.

Return the **length** of the **longest** such subarray.

The bitwise AND of an array is the bitwise AND of all the numbers in it.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,3,2,2]',
      output: '2',
      explanation: 'The maximum AND is 3. The longest subarray with AND equal to 3 is [3,3] with length 2.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation: 'The maximum AND is 4, achieved only by the subarray [4] with length 1.',
    },
  ],
  hints: [
    'Level 1: The maximum bitwise AND of any subarray equals the maximum element of the array (since AND can only decrease or stay the same when adding elements). So you need the longest run of the maximum element.',
    'Level 2: First find the maximum value in nums. Then scan for the longest consecutive streak where every element equals this maximum.',
    'Level 3: const mx=Math.max(...nums);let ans=0,cur=0;for(const x of nums){if(x===mx){cur++;ans=Math.max(ans,cur);}else cur=0;}return ans;',
  ],
  functionName: 'longestSubarray',
  params: ['nums'],
  starterCode: {
    javascript: 'function longestSubarray(nums) {\n  // your code here\n}\n',
    python: 'def longestSubarray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 3, 2, 2]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5]], expected: 3 },
    { args: [[1]], expected: 1 },
    { args: [[3, 3, 3, 1, 3]], expected: 3 },
    { args: [[4, 4, 4, 4]], expected: 4 },
    { args: [[2, 1, 2, 1, 2]], expected: 1 },
  ],
};
