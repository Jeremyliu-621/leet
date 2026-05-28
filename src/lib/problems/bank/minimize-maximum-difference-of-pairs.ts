import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-maximum-difference-of-pairs',
  title: 'Minimize the Maximum Difference of Pairs',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given a 0-indexed integer array \`nums\` and an integer \`p\`. Find \`p\` pairs of indices of \`nums\` such that the **maximum** difference among all the pairs is **minimized**. Also, ensure no index appears more than once among the \`p\` pairs.

Return the **minimum** maximum difference among all \`p\` pairs.

Note that for a pair of elements at indices \`i\` and \`j\`, the difference is \`|nums[i] - nums[j]|\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= p <= (nums.length)/2',
  ],
  examples: [
    {
      input: 'nums = [10,1,2,7,1,3], p = 2',
      output: '1',
      explanation: 'Sort nums: [1,1,2,3,7,10]. Pair (1,1) with diff 0 and (2,3) with diff 1. Max = 1.',
    },
    {
      input: 'nums = [4,2,1,2], p = 1',
      output: '0',
      explanation: 'Sort nums: [1,2,2,4]. Pair (2,2) with diff 0.',
    },
  ],
  hints: [
    'Binary search on the answer (maximum allowed difference d). For a given d, greedily check if we can form p non-overlapping pairs with difference ≤ d.',
    'After sorting, the greedy is: scan left to right. If |nums[i+1] - nums[i]| ≤ d, form a pair and skip both elements (i += 2). Otherwise skip one element (i += 1). Count total pairs formed.',
    '`nums.sort((a,b)=>a-b); const n=nums.length; function ok(d){let c=0,i=0;while(i<n-1){if(nums[i+1]-nums[i]<=d){c++;i+=2;}else i++;}return c>=p;} let lo=0,hi=nums[n-1]-nums[0]; while(lo<hi){const m=(lo+hi)>>1;ok(m)?hi=m:lo=m+1;} return lo;`',
  ],
  functionName: 'minimizeMax',
  params: ['nums', 'p'],
  starterCode: {
    javascript: 'function minimizeMax(nums, p) {\n  \n}\n',
    typescript: "function minimizeMax(nums: number[], p: number): number {\n  \n}",

    python: 'def minimizeMax(nums: list[int], p: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 1, 2, 7, 1, 3], 2], expected: 1 },
    { args: [[4, 2, 1, 2], 1], expected: 0 },
    { args: [[1, 2, 3, 4], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1], expected: 0 },
    { args: [[1, 10], 1], expected: 9 },
    { args: [[1, 3, 5, 7], 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6], 3], expected: 1 },
    { args: [[0, 5, 3, 4], 2], expected: 3 },
    { args: [[1, 100, 2, 99, 3, 98], 3], expected: 95 },
  ],
};
