import type { Problem } from '../types';

export const problem: Problem = {
  id: 'jump-game-vi',
  title: 'Jump Game VI',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`.

You are initially standing at index \`0\`. In one move, you can jump at most \`k\` steps forward without going out-of-bounds. That is, you can jump from index \`i\` to any index in the range \`[i + 1, min(n - 1, i + k)]\`.

You want to reach the last index of the array (index \`n - 1\`). Your **score** is the **sum** of all \`nums[j]\` for each index \`j\` you visited in the array.

Return the **maximum score** you can get.`,
  constraints: [
    '1 <= nums.length, k <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,-1,-2,4,-7,3], k = 2',
      output: '7',
      explanation: 'Jump from index 0 → 1 → 3 → 5 scoring 1 + (-1) + 4 + 3 = 7.',
    },
    {
      input: 'nums = [10,-5,-2,4,0,3], k = 3',
      output: '17',
      explanation: 'Jump from 0 → 3 → 5 scoring 10 + 4 + 3 = 17.',
    },
  ],
  hints: [
    'Level 1: Let dp[i] = maximum score to reach index i. dp[i] = nums[i] + max(dp[i-k..i-1]). Use a sliding window maximum over a window of size k.',
    'Level 2: Maintain a monotone decreasing deque of indices. The front of the deque always holds the index with the maximum dp value in the current window. Remove the front when it falls out of the window.',
    'Level 3: const dp=[nums[0]];const dq=[0];for(let i=1;i<nums.length;i++){while(dq.length&&dq[0]<i-k)dq.shift();dp[i]=nums[i]+dp[dq[0]];while(dq.length&&dp[dq[dq.length-1]]<=dp[i])dq.pop();dq.push(i);}return dp[nums.length-1];',
  ],
  functionName: 'maxResult',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxResult(nums, k) {\n  // your code here\n}\n',
    typescript: "function maxResult(nums: number[], k: number): number {\n  // your code here\n}",

    python: 'def maxResult(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, -1, -2, 4, -7, 3], 2], expected: 7 },
    { args: [[10, -5, -2, 4, 0, 3], 3], expected: 17 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 15 },
    { args: [[-1, -2, -3], 1], expected: -6 },
    { args: [[5, -4, 3, -2, 4], 2], expected: 12 },
    { args: [[1, -1, 1, -1, 1], 2], expected: 3 },
  ],
};
