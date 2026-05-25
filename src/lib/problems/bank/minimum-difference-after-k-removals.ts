import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-difference-after-k-removals',
  title: 'Minimum Difference Between Highest and Lowest of K Scores',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` represents the score of the \`i\`th student. You are also given an integer \`k\`.

Pick the scores of any \`k\` students from the array so that the **difference** between the **highest** and the **lowest** of the \`k\` scores is **minimized**.

Return the **minimum** possible difference.`,
  constraints: [
    '1 <= k <= nums.length <= 1000',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [90,9,3,5,7,70], k = 2',
      output: '2',
      explanation: 'Pick scores 3 and 5; difference = 5-3 = 2.',
    },
    {
      input: 'nums = [9,4,1,7], k = 2',
      output: '2',
      explanation: 'Pick scores 7 and 9, or 1 and 3... best is |9-7|=2 or |4-1|... wait. Sorted: [1,4,7,9]. Windows: [1,4]→3, [4,7]→3, [7,9]→2. Minimum is 2.',
    },
  ],
  hints: [
    'Level 1: Sort the array. Any optimal set of k students will form a contiguous window in the sorted array.',
    'Level 2: After sorting, slide a window of size k and track min(nums[i+k-1] - nums[i]).',
    'Level 3: nums.sort((a,b)=>a-b);let min=Infinity;for(let i=0;i+k-1<nums.length;i++)min=Math.min(min,nums[i+k-1]-nums[i]);return min;',
  ],
  functionName: 'minimumDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minimumDifference(nums, k) {\n  // your code here\n}\n',
    python: 'def minimumDifference(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[90, 9, 3, 5, 7, 70], 2], expected: 2 },
    { args: [[9, 4, 1, 7], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1, 2, 3], 3], expected: 2 },
    { args: [[1, 2, 3], 1], expected: 0 },
    { args: [[5, 3, 2, 4], 2], expected: 1 },
    { args: [[1, 5, 10, 15], 3], expected: 9 },
  ],
};
