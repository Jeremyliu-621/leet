import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difference-between-largest-and-smallest-value-in-three-moves',
  title: 'Minimum Difference Between Largest and Smallest Value in Three Moves',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\`.

In one move, you can choose one element of \`nums\` and change it to **any value**.

Return the **minimum difference** between the largest and smallest value of \`nums\` **after performing at most three moves**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,3,2,4]',
      output: '0',
      explanation: 'We can make at most 3 moves. Since there are only 4 elements, we change all but one to equal it.',
    },
    {
      input: 'nums = [1,5,6,14,15]',
      output: '1',
      explanation: 'Change 1 and 5 to 6, change 14 to 6 (or any value between 6 and 15). Resulting range [6,15] has diff 9, but there are better choices. Best: keep 6 and 15 → diff 15-6=9? Actually change 1,5,14 → keep 6 and 15 → diff 9. Or keep 1 and 6 → diff 5. Best is to minimize over 4 windows of size n-3.',
    },
  ],
  hints: [
    'Sort the array. With 3 moves, we can eliminate 3 elements from the extremes.',
    'Try all 4 combinations: remove 0 from left and 3 from right, 1+2, 2+1, 3+0.',
    'For each split i (0..3), candidate diff = nums[n-1-(3-i)] - nums[i].',
  ],
  functionName: 'minDifference',
  params: ['nums'],
  starterCode: {
    javascript: 'function minDifference(nums) {\n\n}\n',
    typescript: "function minDifference(nums: number[]): number {\n\n}",

    python: 'def minDifference(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 3, 2, 4]], expected: 0 },
    { args: [[1, 5, 6, 14, 15]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[9, 4, 1, 7]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 2 },
  ],
};
