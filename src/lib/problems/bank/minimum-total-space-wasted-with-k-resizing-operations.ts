import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-total-space-wasted-with-k-resizing-operations',
  title: 'Minimum Total Space Wasted With K Resizing Operations',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are currently designing a dynamic array. You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` is the number of elements that will be in the array at time \`i\`. In addition, you are allowed to resize the array at most \`k\` times.

The size of the array at any time \`t\` must be at least \`nums[t]\` because there need to be enough space in the array to hold all the elements. The **space wasted** at time \`t\` is defined as \`size(t) - nums[t]\`, and the **total space wasted** is the sum of the space wasted at every time step.

Return the **minimum total space wasted** if you can resize the array at most \`k\` times.

**Note:** The array can have any size at the start and is not counted as a resize operation.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 10^6',
    '0 <= k <= nums.length - 1',
  ],
  examples: [
    {
      input: 'nums = [10,20], k = 0',
      output: '10',
      explanation:
        'With no resizes, the array size must cover the entire sequence. max([10,20])=20 for both steps. Wasted = (20-10)+(20-20) = 10.',
    },
    {
      input: 'nums = [10,20,30], k = 1',
      output: '10',
      explanation:
        'Resize once: either [10][20,30] wastes 0+(30*2-50)=10, or [10,20][30] wastes (20*2-30)+0=10. Both yield 10.',
    },
  ],
  hints: [
    'Split the array into k+1 contiguous segments. For each segment the allocated size equals the maximum element in that segment; waste is max*len - sum.',
    'Define dp[i][j] = minimum total waste for nums[0..i] split into j+1 segments (j resizes). Transition: dp[i][j] = min over l in [0..i] of dp[l-1][j-1] + waste(l, i).',
    'Precompute waste[i][j] = max(nums[i..j]) * (j-i+1) - sum(nums[i..j]) in O(n^2). Then fill the DP table in O(n^2 * k).',
  ],
  functionName: 'minSpaceWastedKResizing',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minSpaceWastedKResizing(nums, k) {\n  \n}\n',
    typescript: "function minSpaceWastedKResizing(nums: number[], k: number): number {\n  \n}",

    python: 'def minSpaceWastedKResizing(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[10,20], 0], expected: 10 },
    { args: [[10,20,30], 1], expected: 10 },
  ],
  hiddenTests: [
    // single element, k=0: no waste
    { args: [[1], 0], expected: 0 },
    // all equal: any segmentation yields 0 waste
    { args: [[5,5,5], 2], expected: 0 },
    // nums=[10,20,15,30,20], k=2 → best is [10,20,15][30][20] (waste 15+0+0=15)
    //   or [10][20,15][30,20] (0+5+10=15). Verified: 15
    { args: [[10,20,15,30,20], 2], expected: 15 },
    // nums=[1,2,3,4,5], k=1 → [1,2][3,4,5] wastes 1+3=4 or [1,2,3][4,5] wastes 3+1=4. Min=4.
    { args: [[1,2,3,4,5], 1], expected: 4 },
    // k >= n-1 means n segments each of size 1: 0 total waste
    { args: [[3,1,4,1,5], 4], expected: 0 },
    // nums=[4,2,4,3], k=1
    // [4][2,4,3]: 0+(4*3-9)=3
    // [4,2][4,3]: (4*2-6)+(4*2-7)=2+1=3
    // [4,2,4][3]: (4*3-10)+0=2
    // Min = 2
    { args: [[4,2,4,3], 1], expected: 2 },
  ],
};
